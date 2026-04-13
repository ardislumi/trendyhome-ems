// ================= CONFIG =================
const SUPABASE_URL = "https://nwhtnuuwijwsuraintux.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_XyOE8tSdywP1F8K3x7STnA_Bavtz8gD";

const state = {
  supabase: null,
  currentUser: null,
  employees: [],
  sessions: [],
  requests: []
};

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
});

// ================= HELPERS =================
function showToast(msg) {
  alert(msg);
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// ================= FETCH =================
async function refreshAllData() {
  try {
    await fetchEmployees();
    await fetchSessions();
    await fetchRequests();
    renderDashboard();
  } catch (err) {
    console.error(err);
  }
}

async function fetchEmployees() {
  const { data } = await state.supabase.from("employees").select("*");
  state.employees = data || [];
}

async function fetchSessions() {
  const { data } = await state.supabase.from("attendance_sessions").select("*");
  state.sessions = data || [];
}

async function fetchRequests() {
  const { data } = await state.supabase.from("requests").select("*");
  state.requests = data || [];
}

// ================= DASHBOARD =================
function renderDashboard() {
  if (!state.currentUser) return;

  const userSessions = state.sessions.filter(
    s => s.user_id === state.currentUser.id
  );

  const totalHours = userSessions.reduce((sum, s) => {
    return sum + Number(s.hours_worked || 0);
  }, 0);

  const overtimeHours = userSessions
    .filter(s => s.session_type === "overtime")
    .reduce((sum, s) => sum + Number(s.hours_worked || 0), 0);

  const salary = calculateSalary(state.currentUser, totalHours, overtimeHours);

  console.log("TOTAL HOURS:", totalHours);
  console.log("OVERTIME:", overtimeHours);
  console.log("SALARY:", salary);
}

// ================= SALARY =================
function calculateSalary(user, totalHours, overtimeHours) {
  const fixed = Number(user.monthly_salary || 0);
  const bank = Number(user.bank_salary || 0);
  const overtimeRate = Number(user.overtime_rate || 0);

  const overtimePay = overtimeHours * overtimeRate;

  return {
    total: fixed + bank + overtimePay,
    overtimePay
  };
}

// ================= CHECK IN / OUT =================
async function checkStandard() {
  const userId = state.currentUser.id;
  const today = new Date().toISOString().split("T")[0];

  const open = state.sessions.find(
    s =>
      s.user_id === userId &&
      s.work_date === today &&
      s.session_type === "standard" &&
      !s.check_out
  );

  try {
    if (open) {
      const now = new Date();
      const hours = ((now - new Date(open.check_in)) / 36e5).toFixed(2);

      await state.supabase
        .from("attendance_sessions")
        .update({
          check_out: now.toISOString(),
          hours_worked: Number(hours)
        })
        .eq("id", open.id);

      showToast("Check OUT");
    } else {
      await state.supabase.from("attendance_sessions").insert([
        {
          user_id: userId,
          work_date: today,
          session_type: "standard",
          check_in: new Date().toISOString()
        }
      ]);

      showToast("Check IN");
    }

    await refreshAllData();
  } catch (err) {
    console.error(err);
    showToast(err.message);
  }
}

// ================= OVERTIME =================
async function checkOvertime() {
  const userId = state.currentUser.id;
  const today = new Date().toISOString().split("T")[0];

  const open = state.sessions.find(
    s =>
      s.user_id === userId &&
      s.work_date === today &&
      s.session_type === "overtime" &&
      !s.check_out
  );

  try {
    if (open) {
      const now = new Date();
      const hours = ((now - new Date(open.check_in)) / 36e5).toFixed(2);

      await state.supabase
        .from("attendance_sessions")
        .update({
          check_out: now.toISOString(),
          hours_worked: Number(hours)
        })
        .eq("id", open.id);

      showToast("Overtime OUT");
    } else {
      await state.supabase.from("attendance_sessions").insert([
        {
          user_id: userId,
          work_date: today,
          session_type: "overtime",
          check_in: new Date().toISOString()
        }
      ]);

      showToast("Overtime IN");
    }

    await refreshAllData();
  } catch (err) {
    console.error(err);
    showToast(err.message);
  }
}

// ================= REQUEST =================
async function sendRequest(data) {
  try {
    await state.supabase.from("requests").insert([
      {
        user_id: state.currentUser.id,
        type: data.type,
        request_date: data.date,
        hours_requested: data.hours,
        description: data.description,
        status: "pending"
      }
    ]);

    showToast("Request OK");
    await refreshAllData();
  } catch (err) {
    console.error(err);
  }
}

// ================= EMPLOYEE =================
async function saveEmployee(data) {
  try {
    const payload = {
      full_name: data.name,
      username: data.username,
      email: data.email,
      department: data.department,
      monthly_salary: Number(data.salary),
      bank_salary: Number(data.bank),
      overtime_rate: Number(data.overtime),
      role: data.role
    };

    if (data.id) {
      await state.supabase.from("employees").update(payload).eq("id", data.id);
    } else {
      payload.password_hash = await hashPassword(data.password);
      await state.supabase.from("employees").insert([payload]);
    }

    showToast("Saved");
    await refreshAllData();
  } catch (err) {
    console.error(err);
  }
}
