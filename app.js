const SUPABASE_URL = "https://djfrnrecdpcuuyvleygs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_G0RYA8eg_3uhJK0NBqKTaA_doy0r-cM";

const DEFAULT_OVERTIME_RATE = 5;
const DEFAULT_SHIFT_START = '08:00';
const DEFAULT_SHIFT_END = '17:00';
const AFTERNOON_SHIFT = { start: '11:00', end: '19:00', label: 'Masdite' };
const MORNING_SHIFT = { start: '08:00', end: '17:00', label: 'Paradite' };
const LANGUAGES = {
  sq: { code: 'sq-AL', name: 'Shqip', strings: {
    appName: 'WorkFlow EMS Pro', loginWelcome: 'Mirësevini', loginSubtitle: 'Hyni në sistemin e menaxhimit të punonjësve',
    loginIdentifierLabel: 'Email ose username', loginIdentifierPlaceholder: 'Shkruaj email-in ose username-in', password: 'Fjalëkalimi',
    loginHelp: 'Ndihmë për qasje', rememberMe: 'Më mbaj mend në këtë pajisje', login: 'Hyni', dashboard: 'Dashboard', employees: 'Punonjësit',
    requests: 'Kërkesat', payroll: 'Pagat', attendance: 'Pjesëmarrja', logout: 'Dilni', panelProfessional: 'Panel profesional', panel: 'Panel',
    quickInfo: 'Informacion i shpejtë', todayStatusTitle: 'Statusi i sotëm', activeMonthTitle: 'Muaji aktiv', accountTypeTitle: 'Lloji i llogarisë',
    overtimeTodayTitle: 'Orë shtesë sot', overtimePayTodayTitle: 'Pagesë shtesë sot', newRequest: 'Kërkesë e Re', standardCheckIn: 'Check In',
    standardCheckOut: 'Check Out', overtimeCheckIn: 'OT Check In', overtimeCheckOut: 'OT Check Out', completedToday: 'Përfunduar sot',
    totalEmployees: 'Total punonjësish', hoursThisMonth: 'Orë këtë muaj', salaryThisMonth: 'Paga këtë muaj', pendingRequests: 'Kërkesa në pritje',
    recentActivity: 'Aktiviteti i fundit', noRecentActivity: 'Nuk ka aktivitet të fundit.', noRequests: 'Nuk ka kërkesa për t’u shfaqur.',
    employeesTitle: 'Menaxhimi i Punonjësve', employeesSubtitle: 'Shtoni, editoni, fshini dhe filtroni punonjësit', addEmployee: 'Shto Punonjës',
    searchEmployeePlaceholder: 'Kërko sipas emrit, username ose email-it', allDepartments: 'Të gjitha departamentet', employeeCol: 'Punonjësi',
    departmentCol: 'Departamenti', salaryHourCol: 'Paga / orë', statusCol: 'Statusi', actionsCol: 'Veprime', requestsTitle: 'Kërkesat dhe Ankesat',
    requestsSubtitle: 'Punonjësi dërgon kërkesa, admini i aprovon ose i refuzon', payrollTitle: 'Pagat',
    payrollSubtitle: 'Llogaritje automatike sipas orëve, bankës, cash dhe mungesave', summary: 'Përmbledhje', totalPayroll: 'Total pagash',
    totalHours: 'Orë totale', averageSalary: 'Paga mesatare', payrollDetails: 'Detaje pagash', grossSalary: 'Paga bruto',
    attendanceTitle: 'Pjesëmarrja', attendanceSubtitle: 'Check in/out të shumta, eksport CSV dhe llogaritje mujore', export: 'Eksporto',
    date: 'Data', checkIn: 'Check In', checkOut: 'Check Out', totalHoursCol: 'Orë totale', overtimeHoursCol: 'Orë shtesë', overtimePayCol: 'Pagesë OT',
    menu: 'Menu', requestNewTitle: 'Kërkesë e Re', requestNewSubtitle: 'Dërgo një kërkesë ose ankesë për adminin', requestType: 'Lloji i kërkesës',
    requestDescription: 'Përshkrimi', requestDescriptionPlaceholder: 'Shkruaj arsyen e kërkesës', cancel: 'Anulo', send: 'Dërgo',
    employeeModalAdd: 'Shto Punonjës', employeeModalEdit: 'Edito Punonjësin', employeeModalSubtitle: 'Krijo ose përditëso një punonjës',
    fullName: 'Emri i plotë', username: 'Username', email: 'Email', salaryPerHour: 'Paga për orë (€)', role: 'Roli', newPassword: 'Fjalëkalimi i ri',
    save: 'Ruaj', standardSchedule: 'Orari standard: 08:00 - 17:00', overtimeRule: 'Orët shtesë llogariten sipas normës së punonjësit.', demoInfo: 'Mund të hyni me email ose username.',
    adminRole: 'Administrator', employeeRole: 'Punonjës', noAttendanceMonth: 'Nuk ka regjistrime për këtë muaj.', noEmployees: 'Nuk u gjet asnjë punonjës.',
    noPayrollEmployees: 'Nuk ka punonjës.', active: 'Aktiv', inactive: 'Jo aktiv', pending: 'Në pritje', approved: 'Aprovuar', rejected: 'Refuzuar',
    complete: 'Kompletuar', atWork: 'Në punë', absent: 'Mungon', overtimeOpen: 'OT aktive', payrollReady: 'Për llogaritje', noHours: 'Pa orë',
    requestLeaveEarly: 'Lëshim herët nga puna', requestDayOff: 'Ditë pushimi', requestComplaint: 'Ankesë', requestOther: 'Tjetër', requestWeekendWork: 'Punë në vikend',
    requestShiftChange: 'Ndryshim orari', fillLoginFields: 'Plotëso email/username dhe fjalëkalimin.', loginError: 'Email/username ose fjalëkalim i pasaktë.',
    loginUnexpectedError: 'Ndodhi një gabim gjatë hyrjes.', welcomeUser: 'Mirësevini', loginLoading: 'Duke hyrë...',
    loginHelpToast: 'Për demo: admin / admin@company.com dhe employee / employee@company.com.', accessDenied: 'Nuk keni qasje në këtë faqe.', loggedOut: 'U çkyçët me sukses.',
    todayNoCheckin: 'Nuk keni bërë check in sot.', todayWorkingSince: 'Në punë që nga', todayFinished: 'Përfunduar', activeEmployeesLabel: 'Punonjës aktivë',
    standardCheckinSuccess: 'Check in u regjistrua me sukses.', standardCheckoutSuccess: 'Check out u regjistrua me sukses.', attendanceSaveError: 'Nuk u ruajt pjesëmarrja.',
    overtimeStartSuccess: 'Orët shtesë filluan me sukses.', overtimeEndSuccess: 'Orët shtesë u mbyllën me sukses.', noDataExport: 'Nuk ka të dhëna për eksport.',
    employeeNameEmailRequired: 'Emri, username dhe email-i janë të detyrueshëm.', duplicateEmail: 'Ky email ekziston tashmë.', duplicateUsername: 'Ky username ekziston tashmë.',
    employeeUpdated: 'Punonjësi u përditësua me sukses.', employeeAdded: 'Punonjësi u shtua me sukses.', employeeSaveError: 'Nuk u ruajt punonjësi.',
    employeeDeleteSelf: 'Nuk mund ta fshini vetveten.', confirmDelete: 'A je i sigurt që dëshiron ta fshish', employeeDeleted: 'Punonjësi u fshi me sukses.',
    employeeDeleteError: 'Nuk u fshi punonjësi.', requestDescriptionRequired: 'Përshkrimi është i detyrueshëm.', requestSent: 'Kërkesa u dërgua me sukses.',
    requestSendError: 'Nuk u dërgua kërkesa.', requestApproved: 'Kërkesa u aprovua.', requestRejected: 'Kërkesa u refuzua.', requestUpdateError: 'Nuk u përditësua kërkesa.',
    approvalPrompt: 'Shkruaj mesazh aprovimi (opsionale):', rejectionPrompt: 'Shkruaj arsyen e refuzimit (opsionale):', adminResponse: 'Përgjigjja e adminit',
    savedLanguage: 'Gjuha u ndryshua.', paid: 'E paguar', unpaid: 'Pa paguar', markPaid: 'Konfirmo pagën', salaryPaidSuccess: 'Paga u konfirmua me sukses.',
    salaryPaidError: 'Nuk u konfirmua paga.', paidAt: 'Paguar më', analyticsTitle: 'Analitika', analyticsAdminCaption: 'Shumat mujore sipas punonjësit', analyticsEmployeeCaption: '7 ditët e fundit',
    salaryDue: 'Paga për t’u dhënë', bankSalary: 'Paga në bankë', cashSalary: 'Paga cash', fullSalary: 'Rroga e plotë', deduction: 'Mungesë / zbritje', overtimeRate: 'Norma OT €/orë',
    shiftStart: 'Fillimi i orarit', shiftEnd: 'Mbarimi i orarit', bankSalaryField: 'Paga në bankë (€)', paymentMethod: 'Mënyra e pagesës', paymentCash: 'Cash', paymentBank: 'Bankë',
    paymentMixed: 'Përzier', requestedDate: 'Data e kërkesës', requestedShift: 'Orari i kërkuar', shiftMorning: 'Paradite (08:00-17:00)', shiftAfternoon: 'Masdite (11:00-19:00)',
    chartMode: 'Grafiku', chartTotal: 'Totale', chartBank: 'Bankë', chartCash: 'Cash', sessions: 'Hyrje/Dalje', schedule: 'Orari', unknownUser: 'Përdorues i panjohur',
    exportFilename: 'attendance-report', requestDateRequired: 'Zgjedhe datën për këtë kërkesë.', bankPart: 'Bankë', cashPart: 'Cash'
  }},
  en: { code: 'en-US', name: 'English', strings: {} },
  bs: { code: 'bs-BA', name: 'Bosanski', strings: {} },
};
LANGUAGES.en.strings = LANGUAGES.sq.strings;
LANGUAGES.bs.strings = LANGUAGES.sq.strings;

const state = {
  supabase: null,
  currentUser: null,
  employees: [],
  requests: [],
  attendance: [],
  sessions: [],
  currentPage: 'dashboard',
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  language: localStorage.getItem('ems_language') || 'sq',
  syncTimer: null,
  chart: null,
  chartMode: 'total',
};

const els = {};
document.addEventListener('DOMContentLoaded', initApp);

async function initApp() {
  cacheElements();
  enhanceUi();
  bindEvents();
  applyLanguage(false);
  setMonthLabel();
  showLogin();

  if (!isSupabaseConfigured()) {
    showConfigBanner('Shto SUPABASE_URL dhe SUPABASE_ANON_KEY në app.js dhe ekzekuto SQL schema e re.');
    lucide.createIcons();
    return;
  }

  state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  lucide.createIcons();

  const rememberedIdentifier = localStorage.getItem('ems_remembered_identifier');
  if (rememberedIdentifier && els.loginIdentifier) els.loginIdentifier.value = rememberedIdentifier;

  const rememberedUserId = localStorage.getItem('ems_current_user_id');
  if (rememberedUserId) {
    try {
      const user = await fetchUserById(rememberedUserId);
      if (user) {
        state.currentUser = user;
        await afterLogin();
        return;
      }
    } catch (error) { console.error(error); }
  }
  showLogin();
}

function cacheElements() {
  [
    'configBanner','loginScreen','mainApp','loginForm','loginIdentifier','loginPassword','rememberMe','loginSubmitBtn','forgotPasswordBtn',
    'dashboardTitle','dashboardSubtitle','userName','userRole','userAvatar','menuEmployees','menuPayroll','mobileMenuEmployees','mobileMenuPayroll',
    'requestBadge','recentActivity','requestsList','employeesTable','searchEmployee','filterDepartment','employeeForm','employeeModal','employeeModalTitle',
    'employeeId','employeeName','employeeUsername','employeeEmail','employeeDepartment','employeeSalary','employeePassword','employeeRole',
    'requestForm','requestModal','requestType','requestDescription','statTotalEmployees','statHoursThisMonth','statSalaryThisMonth','statPendingRequests',
    'payrollTable','totalPayroll','totalHoursAll','avgSalary','attendanceTable','currentMonthDisplay','todayStatus','activeMonthLabel','accountTypeLabel',
    'standardBtn','standardBtnText','standardBtnIcon','overtimeBtn','overtimeBtnText','overtimeBtnIcon','toast','mobileMenu',
    'overtimeTodayHours','overtimeTodayPay','languageSwitcher','mobileLanguageSwitcher','dashboardChart','chartCaption',
    'statSalaryDue','statBankSalary','chartMode','requestDate','requestShift','employeeFullSalary','employeeBankSalary','employeeOvertimeRate',
    'employeeShiftStart','employeeShiftEnd','employeePaymentMethod'
  ].forEach(id => { els[id] = document.getElementById(id); });
}

function enhanceUi() {
  const statsGrid = document.querySelector('#dashboard .grid.grid-cols-1.sm\\:grid-cols-2.xl\\:grid-cols-4');
  if (statsGrid && !document.getElementById('statSalaryDue')) {
    statsGrid.className = 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-5 mb-8';
    statsGrid.insertAdjacentHTML('beforeend', `
      <div class="bg-white rounded-3xl p-6 card-shadow card-hover"><div class="flex items-center justify-between mb-5"><div class="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center"><i data-lucide="hand-coins" class="w-7 h-7 text-cyan-600"></i></div></div><p id="statSalaryDue" class="text-3xl font-extrabold">€0</p><p class="text-slate-500 mt-1" data-i18n="salaryDue">Paga për t’u dhënë</p></div>
      <div class="bg-white rounded-3xl p-6 card-shadow card-hover"><div class="flex items-center justify-between mb-5"><div class="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center"><i data-lucide="building-2" class="w-7 h-7 text-emerald-600"></i></div></div><p id="statBankSalary" class="text-3xl font-extrabold">€0</p><p class="text-slate-500 mt-1" data-i18n="bankSalary">Paga në bankë</p></div>
    `);
  }

  const chartHeader = document.querySelector('#dashboardChart')?.closest('.bg-white')?.querySelector('.flex.items-center.justify-between');
  if (chartHeader && !document.getElementById('chartMode')) {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-center gap-2';
    wrapper.innerHTML = `
      <label class="text-sm text-slate-500" data-i18n="chartMode">Grafiku</label>
      <select id="chartMode" class="rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none">
        <option value="total" data-i18n="chartTotal">Totale</option>
        <option value="bank" data-i18n="chartBank">Bankë</option>
        <option value="cash" data-i18n="chartCash">Cash</option>
      </select>`;
    chartHeader.appendChild(wrapper);
  }

  const requestForm = document.getElementById('requestForm');
  if (requestForm && !document.getElementById('requestDate')) {
    const descriptionBlock = document.getElementById('requestDescription')?.closest('div');
    descriptionBlock?.insertAdjacentHTML('beforebegin', `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="requestDate" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="requestedDate">Data e kërkesës</label>
          <input id="requestDate" type="date" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" />
        </div>
        <div>
          <label for="requestShift" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="requestedShift">Orari i kërkuar</label>
          <select id="requestShift" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500">
            <option value="">-</option>
            <option value="morning" data-i18n="shiftMorning">Paradite (08:00-17:00)</option>
            <option value="afternoon" data-i18n="shiftAfternoon">Masdite (11:00-19:00)</option>
          </select>
        </div>
      </div>`);
  }

  const requestType = document.getElementById('requestType');
  if (requestType && !requestType.querySelector('option[value="shift_change"]')) {
    requestType.insertAdjacentHTML('beforeend', `<option value="shift_change" data-i18n="requestShiftChange">Ndryshim orari</option>`);
  }

  const employeeGrid = document.querySelector('#employeeForm .grid.grid-cols-1.md\\:grid-cols-2.gap-4');
  if (employeeGrid && !document.getElementById('employeeOvertimeRate')) {
    employeeGrid.insertAdjacentHTML('beforeend', `
      <div>
        <label for="employeeFullSalary" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="fullSalary">Rroga e plotë</label>
        <input id="employeeFullSalary" type="number" min="0" step="0.01" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" />
      </div>
      <div>
        <label for="employeeBankSalary" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="bankSalaryField">Paga në bankë (€)</label>
        <input id="employeeBankSalary" type="number" min="0" step="0.01" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" />
      </div>
      <div>
        <label for="employeeOvertimeRate" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="overtimeRate">Norma OT €/orë</label>
        <input id="employeeOvertimeRate" type="number" min="0" step="0.01" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" />
      </div>
      <div>
        <label for="employeePaymentMethod" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="paymentMethod">Mënyra e pagesës</label>
        <select id="employeePaymentMethod" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500">
          <option value="cash" data-i18n="paymentCash">Cash</option>
          <option value="bank" data-i18n="paymentBank">Bankë</option>
          <option value="mixed" data-i18n="paymentMixed">Përzier</option>
        </select>
      </div>
      <div>
        <label for="employeeShiftStart" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="shiftStart">Fillimi i orarit</label>
        <input id="employeeShiftStart" type="time" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" />
      </div>
      <div>
        <label for="employeeShiftEnd" class="block text-sm font-semibold text-slate-700 mb-2" data-i18n="shiftEnd">Mbarimi i orarit</label>
        <input id="employeeShiftEnd" type="time" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" />
      </div>
    `);
  }
  cacheElements();
}

function showMainApp() {
  els.loginScreen.classList.add('hidden');
  els.mainApp.classList.remove('hidden');
}
function bindEvents() {
  els.loginForm?.addEventListener('submit', handleLogin);
  els.employeeForm?.addEventListener('submit', handleEmployeeSubmit);
  els.requestForm?.addEventListener('submit', handleRequestSubmit);
  document.getElementById('logoutBtn')?.addEventListener('click', logout);
  document.getElementById('mobileLogoutBtn')?.addEventListener('click', logout);
  document.getElementById('newRequestBtn')?.addEventListener('click', () => openModal('requestModal'));
  document.getElementById('openEmployeeModalBtn')?.addEventListener('click', () => openEmployeeModal());
  document.getElementById('standardBtn')?.addEventListener('click', handleStandardAttendance);
  document.getElementById('overtimeBtn')?.addEventListener('click', handleOvertimeAttendance);
  document.getElementById('prevMonthBtn')?.addEventListener('click', () => changeMonth(-1));
  document.getElementById('nextMonthBtn')?.addEventListener('click', () => changeMonth(1));
  document.getElementById('exportAttendanceBtn')?.addEventListener('click', exportAttendance);
  document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleMobileMenu);
  document.getElementById('mobileMenuClose')?.addEventListener('click', toggleMobileMenu);
  document.getElementById('forgotPasswordBtn')?.addEventListener('click', () => showToast(t('loginHelpToast'), 'info'));
  document.getElementById('toggleLoginPassword')?.addEventListener('click', () => togglePassword('loginPassword', 'toggleLoginPassword'));
  document.getElementById('toggleEmployeePassword')?.addEventListener('click', () => togglePassword('employeePassword', 'toggleEmployeePassword'));
  els.searchEmployee?.addEventListener('input', renderEmployees);
  els.filterDepartment?.addEventListener('change', renderEmployees);
  els.chartMode?.addEventListener('change', e => { state.chartMode = e.target.value; renderDashboardChart(); });
  els.requestType?.addEventListener('change', updateRequestFieldVisibility);

  [els.languageSwitcher, els.mobileLanguageSwitcher].forEach(select => {
    select?.addEventListener('change', event => {
      state.language = event.target.value;
      localStorage.setItem('ems_language', state.language);
      applyLanguage(true);
    });
  });

  document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.page)));
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.addEventListener('click', () => { navigateTo(btn.dataset.mobilePage); toggleMobileMenu(); }));
  document.querySelectorAll('.close-modal-btn').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.close)));

  window.addEventListener('click', event => {
    if (event.target?.id === 'requestModal') closeModal('requestModal');
    if (event.target?.id === 'employeeModal') closeModal('employeeModal');
  });
}

function t(key) { return LANGUAGES[state.language]?.strings?.[key] || LANGUAGES.sq.strings[key] || key; }
function getLocale() { return LANGUAGES[state.language]?.code || 'sq-AL'; }
function isSupabaseConfigured() { return SUPABASE_URL && SUPABASE_ANON_KEY; }
function showConfigBanner(message) { els.configBanner.textContent = message; els.configBanner.classList.remove('hidden'); }
function hideConfigBanner() { els.configBanner.classList.add('hidden'); }

function applyLanguage(showMessage = false) {
  document.documentElement.lang = state.language;
  [els.languageSwitcher, els.mobileLanguageSwitcher].forEach(select => { if (select) select.value = state.language; });
  if (els.chartMode) els.chartMode.value = state.chartMode;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.title = t('appName');
  updateRequestFieldVisibility();
  if (state.currentUser) { applyRoleUi(); renderEverything(); }
  else setMonthLabel();
  lucide.createIcons();
  if (showMessage) showToast(t('savedLanguage'), 'info');
}

async function handleLogin(event) {
  event.preventDefault();
  const identifier = els.loginIdentifier.value.trim().toLowerCase();
  const password = els.loginPassword.value;
  if (!identifier || !password) return showToast(t('fillLoginFields'), 'error');
  setButtonLoading(els.loginSubmitBtn, true, t('loginLoading'));
  try {
    const passwordHash = await hashPassword(password);
    const { data, error } = await state.supabase.from('employees').select('*').eq('password_hash', passwordHash).eq('active', true);
    if (error) throw error;
    const user = (data || []).map(normalizeEmployee).find(item => [item.email, item.username].map(v => String(v || '').toLowerCase()).includes(identifier));
    if (!user) return showToast(t('loginError'), 'error');
    state.currentUser = user;
    localStorage.setItem('ems_current_user_id', user.id);
    if (els.rememberMe.checked) localStorage.setItem('ems_remembered_identifier', identifier);
    else localStorage.removeItem('ems_remembered_identifier');
    await afterLogin();
    showToast(`${t('welcomeUser')}, ${user.full_name}!`);
  } catch (error) {
    console.error(error);
    showToast(t('loginUnexpectedError'), 'error');
  } finally {
    setButtonLoading(els.loginSubmitBtn, false, t('login'));
  }
}

async function afterLogin() {
  hideConfigBanner();
  applyRoleUi();
  showMainApp();
  await refreshAllData();
  startSyncTimer();
  navigateTo('dashboard');
}

function applyRoleUi() {
  const isAdmin = state.currentUser?.role === 'admin';
  els.userName.textContent = state.currentUser.full_name;
  els.userRole.textContent = isAdmin ? t('adminRole') : t('employeeRole');
  els.userAvatar.textContent = getAvatarText(state.currentUser.full_name);
  els.dashboardTitle.textContent = isAdmin ? `${t('dashboard')} - ${t('adminRole')}` : t('dashboard');
  els.dashboardSubtitle.textContent = isAdmin ? t('payrollSubtitle') : `${t('standardSchedule')} · ${t('overtimeRule')}`;
  els.accountTypeLabel.textContent = isAdmin ? t('adminRole') : t('employeeRole');
  [els.menuEmployees, els.menuPayroll, els.mobileMenuEmployees, els.mobileMenuPayroll].forEach(el => el?.classList.toggle('hidden', !isAdmin));
}

async function refreshAllData() {
  await Promise.all([fetchEmployees(), fetchRequests(), fetchAttendance(), fetchSessions()]);
  await syncAttendanceRules();
  renderEverything();
}

async function fetchEmployees() {
  const { data, error } = await state.supabase.from('employees').select('*').order('created_at', { ascending: true });
  if (error) throw error;
  state.employees = (data || []).map(normalizeEmployee);
  if (state.currentUser) {
    const current = state.employees.find(item => item.id === state.currentUser.id);
    if (current) state.currentUser = current;
  }
}
async function fetchRequests() {
  const { data, error } = await state.supabase.from('requests').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  state.requests = data || [];
}
async function fetchAttendance() {
  const { data, error } = await state.supabase.from('attendance').select('*').order('work_date', { ascending: false });
  if (error) throw error;
  state.attendance = (data || []).map(normalizeAttendance);
}
async function fetchSessions() {
  const { data, error } = await state.supabase.from('attendance_sessions').select('*').order('check_in', { ascending: false });
  if (error) throw error;
  state.sessions = (data || []).map(normalizeSession);
}

async function syncAttendanceRules() {
  const now = new Date();
  const updates = [];
  for (const session of state.sessions.filter(item => !item.check_out)) {
    if (session.session_type !== 'standard') continue;
    const schedule = getEffectiveSchedule(session.user_id, session.work_date);
    const shiftEnd = combineDateTime(session.work_date, schedule.end);
    if (now >= shiftEnd) {
      updates.push(closeSession(session.id, shiftEnd.toISOString(), true));
    }
  }
  if (updates.length) {
    await Promise.all(updates);
    await fetchSessions();
    await fetchAttendance();
  }
}

function renderEverything() {
  updateDashboardStats();
  renderRecentActivity();
  renderEmployees();
  renderRequests();
  renderPayroll();
  renderAttendance();
  renderDashboardChart();
  updateStandardButton();
  updateOvertimeButton();
  lucide.createIcons();
}

function showLogin() { els.loginScreen.classList.remove('hidden'); els.mainApp.classList.add('hidden'); }
function showMainApp() { els.loginScreen.classList.add('hidden'); els.mainApp.classList.remove('hidden'); }
function logout() {
  state.currentUser = null;
  if (state.syncTimer) clearInterval(state.syncTimer);
  localStorage.removeItem('ems_current_user_id');
  showLogin();
  showToast(t('loggedOut'));
}

function startSyncTimer() {
  if (state.syncTimer) clearInterval(state.syncTimer);
  state.syncTimer = setInterval(async () => {
    try {
      await refreshAllData();
    } catch (error) { console.error(error); }
  }, 60000);
}

function navigateTo(page) {
  if ((page === 'employees' || page === 'payroll') && state.currentUser.role !== 'admin') return showToast(t('accessDenied'), 'error');
  state.currentPage = page;
  document.querySelectorAll('.page-view').forEach(view => view.classList.toggle('active', view.id === page));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('nav-active', btn.dataset.page === page));
  renderEverything();
}
function toggleMobileMenu() { els.mobileMenu.classList.toggle('hidden'); }

function updateDashboardStats() {
  const employees = getEmployeeUsers();
  const visibleEmployees = state.currentUser.role === 'admin' ? employees : [state.currentUser];
  const pendingRequests = getVisibleRequests().filter(item => item.status === 'pending').length;
  const payrolls = visibleEmployees.map(employee => getPayrollForEmployee(employee, state.currentMonth, state.currentYear));
  const totalHours = payrolls.reduce((sum, item) => sum + item.totalHours, 0);
  const totalEarned = payrolls.reduce((sum, item) => sum + item.salaryDue, 0);
  const totalBank = payrolls.reduce((sum, item) => sum + item.bankDue, 0);
  const totalSalaryDue = payrolls.reduce((sum, item) => sum + item.salaryDue, 0);

  els.statTotalEmployees.textContent = String(employees.length);
  els.statHoursThisMonth.textContent = `${totalHours.toFixed(2)}h`;
  els.statSalaryThisMonth.textContent = `€${totalEarned.toFixed(2)}`;
  if (els.statSalaryDue) els.statSalaryDue.textContent = `€${totalSalaryDue.toFixed(2)}`;
  if (els.statBankSalary) els.statBankSalary.textContent = `€${totalBank.toFixed(2)}`;
  els.statPendingRequests.textContent = String(pendingRequests);
  els.activeMonthLabel.textContent = formatMonthYear(state.currentYear, state.currentMonth);

  if (pendingRequests > 0) {
    els.requestBadge.textContent = String(pendingRequests);
    els.requestBadge.classList.remove('hidden');
  } else {
    els.requestBadge.classList.add('hidden');
  }

  const todaySummary = getTodaySummaryForCurrentUser();
  if (state.currentUser.role === 'admin') {
    const activeNow = getEmployeeUsers().filter(employee => getOpenSession(employee.id)).length;
    els.todayStatus.textContent = `${t('activeEmployeesLabel')}: ${activeNow}`;
  } else if (!todaySummary) {
    els.todayStatus.textContent = t('todayNoCheckin');
  } else if (todaySummary.status === 'overtime_open') {
    els.todayStatus.textContent = `${t('overtimeOpen')} · ${formatTime(todaySummary.last_check_out || todaySummary.first_check_in)}`;
  } else if (todaySummary.status === 'at_work') {
    const open = getOpenSession(state.currentUser.id, 'standard');
    els.todayStatus.textContent = `${t('todayWorkingSince')} ${open ? formatTime(open.check_in) : ''}`.trim();
  } else {
    els.todayStatus.textContent = `${t('todayFinished')}: ${Number(todaySummary.total_hours || 0).toFixed(2)}h`;
  }
  els.overtimeTodayHours.textContent = `${Number(todaySummary?.overtime_hours || 0).toFixed(2)}h`;
  els.overtimeTodayPay.textContent = `€${Number(todaySummary?.overtime_pay || 0).toFixed(2)}`;
}

function renderRecentActivity() {
  const items = [...getVisibleRequests().slice(0, 4), ...getVisibleAttendanceForCurrentView().slice(0, 3).map(item => ({ __attendance: true, ...item }))]
    .sort((a, b) => new Date(b.created_at || b.work_date) - new Date(a.created_at || a.work_date))
    .slice(0, 6);
  if (!items.length) return els.recentActivity.innerHTML = emptyState(t('noRecentActivity'));

  els.recentActivity.innerHTML = items.map(item => {
    if (item.__attendance) {
      const user = getUserById(item.user_id);
      return `<div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4"><div class="w-12 h-12 rounded-full bg-violet-50 text-violet-700 flex items-center justify-center font-bold">${getAvatarText(user?.full_name || '')}</div><div class="flex-1"><div class="font-bold text-slate-900">${escapeHtml(user?.full_name || t('unknownUser'))}</div><p class="text-sm text-slate-500">${formatDate(item.work_date)} · ${Number(item.total_hours || 0).toFixed(2)}h · ${item.total_sessions || 0} ${t('sessions')}</p></div><span class="text-xs px-2.5 py-1 rounded-full ${getAttendanceStatusClass(item.status)}">${getAttendanceStatusLabel(item.status)}</span></div>`;
    }
    const user = getUserById(item.user_id);
    const status = getStatusMeta(item.status);
    const extra = item.requested_date ? ` · ${formatDate(item.requested_date)}${item.requested_shift ? ` · ${getRequestedShiftLabel(item.requested_shift)}` : ''}` : '';
    return `<div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4"><div class="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">${getAvatarText(user?.full_name || '')}</div><div class="flex-1 min-w-0"><div class="flex flex-wrap items-center gap-2 mb-1"><p class="font-bold text-slate-900 truncate">${escapeHtml(user?.full_name || t('unknownUser'))}</p><span class="text-xs px-2.5 py-1 rounded-full ${status.className}">${status.label}</span></div><p class="text-sm text-slate-500">${getRequestTypeLabel(item.type)}${extra} · ${escapeHtml(item.description || '')}</p></div><div class="text-right text-xs text-slate-400 whitespace-nowrap">${formatDateTime(item.created_at)}</div></div>`;
  }).join('');
}

function renderEmployees() {
  if (state.currentUser.role !== 'admin') return;
  const search = els.searchEmployee.value.trim().toLowerCase();
  const department = els.filterDepartment.value;
  let employees = [...state.employees];
  if (search) employees = employees.filter(employee => [employee.full_name, employee.email, employee.username].some(v => String(v || '').toLowerCase().includes(search)));
  if (department) employees = employees.filter(employee => employee.department === department);
  if (!employees.length) return els.employeesTable.innerHTML = `<tr><td colspan="8" class="px-6 py-10 text-center text-slate-400">${t('noEmployees')}</td></tr>`;

  els.employeesTable.innerHTML = employees.map(employee => {
    const payroll = getPayrollForEmployee(employee, state.currentMonth, state.currentYear);
    const activeClass = employee.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600';
    return `<tr class="hover:bg-slate-50 align-top">
      <td class="px-6 py-4"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">${getAvatarText(employee.full_name)}</div><div><p class="font-semibold text-slate-900">${escapeHtml(employee.full_name)}</p><p class="text-sm text-slate-500">${escapeHtml(employee.email)}</p></div></div></td>
      <td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.department || '-')}</td>
      <td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.username || '-')}</td>
      <td class="px-6 py-4 text-sm text-slate-600">€${employee.salary_per_hour.toFixed(2)}<div class="text-xs text-slate-400">OT €${employee.overtime_rate.toFixed(2)}</div></td>
      <td class="px-6 py-4 text-sm text-slate-600">${employee.shift_start} - ${employee.shift_end}<div class="text-xs text-slate-400">${t('fullSalary')}: €${employee.full_month_salary.toFixed(2)}</div></td>
      <td class="px-6 py-4 text-sm text-slate-600">${t(employee.payment_method === 'bank' ? 'paymentBank' : employee.payment_method === 'mixed' ? 'paymentMixed' : 'paymentCash')}<div class="text-xs text-slate-400">${t('bankSalary')}: €${employee.bank_salary.toFixed(2)}</div></td>
      <td class="px-6 py-4"><span class="inline-flex px-2.5 py-1 rounded-full ${activeClass}">${employee.active ? t('active') : t('inactive')}</span><div class="text-xs text-slate-400 mt-2">${t('salaryDue')}: €${payroll.salaryDue.toFixed(2)}</div></td>
      <td class="px-6 py-4 text-right"><div class="flex justify-end gap-2"><button onclick="openEmployeeModal('${employee.id}')" class="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50">Edito</button><button onclick="deleteEmployee('${employee.id}')" class="rounded-xl bg-rose-50 text-rose-600 px-3 py-2 text-sm font-semibold hover:bg-rose-100">Fshij</button></div></td>
    </tr>`;
  }).join('');
}

function renderRequests() {
  const requests = getVisibleRequests();
  if (!requests.length) return els.requestsList.innerHTML = emptyState(t('noRequests'));
  els.requestsList.innerHTML = requests.map(item => {
    const user = getUserById(item.user_id);
    const status = getStatusMeta(item.status);
    const requestMeta = [item.requested_date ? formatDate(item.requested_date) : '', item.requested_shift ? getRequestedShiftLabel(item.requested_shift) : ''].filter(Boolean).join(' · ');
    return `<div class="bg-white rounded-3xl card-shadow p-6"><div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">${getAvatarText(user?.full_name || '')}</div><div><div class="flex flex-wrap items-center gap-2"><h3 class="text-lg font-bold text-slate-900">${escapeHtml(user?.full_name || t('unknownUser'))}</h3><span class="px-2.5 py-1 rounded-full text-xs ${status.className}">${status.label}</span></div><p class="text-sm text-slate-500 mt-1">${getRequestTypeLabel(item.type)}${requestMeta ? ` · ${requestMeta}` : ''}</p><p class="text-slate-700 mt-3 whitespace-pre-wrap">${escapeHtml(item.description || '')}</p>${item.admin_response ? `<div class="mt-3 text-sm rounded-2xl bg-slate-50 border border-slate-200 p-3"><span class="font-semibold">${t('adminResponse')}:</span> ${escapeHtml(item.admin_response)}</div>` : ''}</div></div><div class="text-sm text-slate-400 whitespace-nowrap">${formatDateTime(item.created_at)}</div></div>${state.currentUser.role === 'admin' && item.status === 'pending' ? `<div class="mt-5 flex flex-wrap gap-3"><button onclick="updateRequestStatus(${item.id}, 'approved')" class="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 font-semibold">Aprovo</button><button onclick="updateRequestStatus(${item.id}, 'rejected')" class="rounded-2xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 font-semibold">Refuzo</button></div>` : ''}</div>`;
  }).join('');
}

function renderPayroll() {
  if (state.currentUser.role !== 'admin') return;
  const employees = getEmployeeUsers();
  if (!employees.length) return els.payrollTable.innerHTML = `<tr><td colspan="11" class="px-6 py-10 text-center text-slate-400">${t('noPayrollEmployees')}</td></tr>`;
  const payrollRows = employees.map(employee => getPayrollForEmployee(employee, state.currentMonth, state.currentYear));
  const totalPayroll = payrollRows.reduce((sum, item) => sum + item.salaryDue, 0);
  const totalHours = payrollRows.reduce((sum, item) => sum + item.totalHours, 0);
  els.totalPayroll.textContent = `€${totalPayroll.toFixed(2)}`;
  els.totalHoursAll.textContent = `${totalHours.toFixed(2)}h`;
  els.avgSalary.textContent = `€${(payrollRows.length ? totalPayroll / payrollRows.length : 0).toFixed(2)}`;

  els.payrollTable.innerHTML = payrollRows.map(row => {
    const paid = isSalaryPaidForMonth(row.employee, state.currentMonth, state.currentYear);
    const paidLabel = paid ? `${t('paid')}${row.employee.salary_paid_at ? ` · ${formatDate(row.employee.salary_paid_at)}` : ''}` : t('unpaid');
    const paidClass = paid ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700';
    return `<tr class="hover:bg-slate-50 align-top">
      <td class="px-6 py-4"><div class="font-semibold text-slate-900">${escapeHtml(row.employee.full_name)}</div><div class="text-sm text-slate-500">${escapeHtml(row.employee.department || '-')}</div></td>
      <td class="px-6 py-4 text-sm text-slate-600">${row.employee.shift_start} - ${row.employee.shift_end}</td>
      <td class="px-6 py-4 text-sm text-slate-600">${row.regularHours.toFixed(2)}h<div class="text-xs text-slate-400">€${row.regularPay.toFixed(2)}</div></td>
      <td class="px-6 py-4 text-sm text-slate-600">${row.overtimeHours.toFixed(2)}h<div class="text-xs text-slate-400">€${row.overtimePay.toFixed(2)}</div></td>
      <td class="px-6 py-4 text-sm font-semibold text-slate-900">€${row.salaryDue.toFixed(2)}</td>
      <td class="px-6 py-4 text-sm text-slate-600">€${row.bankDue.toFixed(2)}</td>
      <td class="px-6 py-4 text-sm text-slate-600">€${row.cashDue.toFixed(2)}</td>
      <td class="px-6 py-4 text-sm text-slate-600">€${row.fullSalary.toFixed(2)}</td>
      <td class="px-6 py-4 text-sm ${row.deduction > 0 ? 'text-rose-600 font-semibold' : 'text-emerald-600'}">€${row.deduction.toFixed(2)}</td>
      <td class="px-6 py-4"><span class="inline-flex px-2.5 py-1 rounded-full text-xs ${paidClass}">${paidLabel}</span></td>
      <td class="px-6 py-4 text-right">${paid ? '' : `<button onclick="confirmSalaryPaid('${row.employee.id}')" class="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm font-semibold">${t('markPaid')}</button>`}</td>
    </tr>`;
  }).join('');
}

function renderAttendance() {
  const summaries = getVisibleAttendanceForCurrentView();
  if (!summaries.length) return els.attendanceTable.innerHTML = `<tr><td colspan="8" class="px-6 py-10 text-center text-slate-400">${t('noAttendanceMonth')}</td></tr>`;
  els.attendanceTable.innerHTML = summaries.map(item => {
    const user = getUserById(item.user_id);
    const sessions = getSessionsForDay(item.user_id, item.work_date)
      .map(session => `${session.session_type === 'overtime' ? 'OT ' : ''}${formatTime(session.check_in)}${session.check_out ? ` - ${formatTime(session.check_out)}` : ' - ...'}`)
      .join('<br>');
    const payroll = getPayrollForEmployee(user, new Date(`${item.work_date}T00:00:00`).getMonth(), new Date(`${item.work_date}T00:00:00`).getFullYear());
    const dailyPay = Number(item.regular_hours || 0) * Number(user?.salary_per_hour || 0) + Number(item.overtime_pay || 0);
    return `<tr class="hover:bg-slate-50 align-top">
      <td class="px-6 py-4"><div class="font-semibold text-slate-900">${state.currentUser.role === 'admin' ? escapeHtml(user?.full_name || '-') : formatDate(item.work_date)}</div><div class="text-sm text-slate-500">${state.currentUser.role === 'admin' ? formatDate(item.work_date) : (user?.shift_start || '-') + ' - ' + (user?.shift_end || '-')}</div></td>
      <td class="px-6 py-4 text-sm text-slate-600 leading-6">${sessions || '-'}</td>
      <td class="px-6 py-4 text-sm text-slate-600">${Number(item.regular_hours || 0).toFixed(2)}h</td>
      <td class="px-6 py-4 text-sm text-slate-600">${Number(item.overtime_hours || 0).toFixed(2)}h</td>
      <td class="px-6 py-4 text-sm text-slate-900 font-semibold">${Number(item.total_hours || 0).toFixed(2)}h</td>
      <td class="px-6 py-4 text-sm text-slate-600">€${dailyPay.toFixed(2)}</td>
      <td class="px-6 py-4 text-sm text-slate-600">${user?.shift_start || '-'} - ${user?.shift_end || '-'}</td>
      <td class="px-6 py-4"><span class="inline-flex px-2.5 py-1 rounded-full text-xs ${getAttendanceStatusClass(item.status)}">${getAttendanceStatusLabel(item.status)}</span></td>
    </tr>`;
  }).join('');
}

function renderDashboardChart() {
  const ctx = els.dashboardChart.getContext('2d');
  if (state.chart) state.chart.destroy();
  if (state.currentUser.role === 'admin') {
    const employees = getEmployeeUsers();
    const labels = employees.map(item => item.full_name);
    const data = employees.map(employee => {
      const payroll = getPayrollForEmployee(employee, state.currentMonth, state.currentYear);
      return state.chartMode === 'bank' ? payroll.bankDue : state.chartMode === 'cash' ? payroll.cashDue : payroll.salaryDue;
    });
    els.chartCaption.textContent = `${t('analyticsAdminCaption')} · ${t(state.chartMode === 'bank' ? 'chartBank' : state.chartMode === 'cash' ? 'chartCash' : 'chartTotal')}`;
    state.chart = new Chart(ctx, {
      type: 'bar',
      data: { labels, datasets: [{ label: els.chartCaption.textContent, data, borderRadius: 14 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
  } else {
    const labels = [...Array(7)].map((_, idx) => {
      const date = new Date(); date.setDate(date.getDate() - (6 - idx));
      return date.toLocaleDateString(getLocale(), { day: '2-digit', month: '2-digit' });
    });
    const data = [...Array(7)].map((_, idx) => {
      const date = new Date(); date.setDate(date.getDate() - (6 - idx));
      const key = getLocalDateString(date);
      const summary = state.attendance.find(item => item.user_id === state.currentUser.id && item.work_date === key);
      return Number(summary?.total_hours || 0);
    });
    els.chartCaption.textContent = t('analyticsEmployeeCaption');
    state.chart = new Chart(ctx, {
      type: 'line',
      data: { labels, datasets: [{ label: t('hoursThisMonth'), data, tension: 0.35, fill: false }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
  }
}

function openEmployeeModal(id = null) {
  els.employeeForm.reset();
  els.employeeId.value = '';
  els.employeeModalTitle.textContent = id ? t('employeeModalEdit') : t('employeeModalAdd');
  if (id) {
    const employee = getUserById(id);
    if (!employee) return;
    els.employeeId.value = employee.id;
    els.employeeName.value = employee.full_name || '';
    els.employeeUsername.value = employee.username || '';
    els.employeeEmail.value = employee.email || '';
    els.employeeDepartment.value = employee.department || 'Administrata';
    els.employeeSalary.value = employee.salary_per_hour || 0;
    els.employeeRole.value = employee.role || 'employee';
    if (els.employeeFullSalary) els.employeeFullSalary.value = employee.full_month_salary || 0;
    if (els.employeeBankSalary) els.employeeBankSalary.value = employee.bank_salary || 0;
    if (els.employeeOvertimeRate) els.employeeOvertimeRate.value = employee.overtime_rate || DEFAULT_OVERTIME_RATE;
    if (els.employeeShiftStart) els.employeeShiftStart.value = employee.shift_start || DEFAULT_SHIFT_START;
    if (els.employeeShiftEnd) els.employeeShiftEnd.value = employee.shift_end || DEFAULT_SHIFT_END;
    if (els.employeePaymentMethod) els.employeePaymentMethod.value = employee.payment_method || 'cash';
  } else {
    if (els.employeeOvertimeRate) els.employeeOvertimeRate.value = DEFAULT_OVERTIME_RATE;
    if (els.employeeShiftStart) els.employeeShiftStart.value = DEFAULT_SHIFT_START;
    if (els.employeeShiftEnd) els.employeeShiftEnd.value = DEFAULT_SHIFT_END;
    if (els.employeePaymentMethod) els.employeePaymentMethod.value = 'cash';
  }
  openModal('employeeModal');
}

async function handleEmployeeSubmit(event) {
  event.preventDefault();
  const id = els.employeeId.value || null;
  const full_name = els.employeeName.value.trim();
  const username = els.employeeUsername.value.trim();
  const email = els.employeeEmail.value.trim().toLowerCase();
  const password = els.employeePassword.value.trim();
  if (!full_name || !username || !email) return showToast(t('employeeNameEmailRequired'), 'error');
  const duplicateEmail = state.employees.find(employee => (employee.email || '').toLowerCase() === email && employee.id !== id);
  if (duplicateEmail) return showToast(t('duplicateEmail'), 'error');
  const duplicateUsername = state.employees.find(employee => (employee.username || '').toLowerCase() === username.toLowerCase() && employee.id !== id);
  if (duplicateUsername) return showToast(t('duplicateUsername'), 'error');
  try {
    const payload = {
      full_name, username, email,
      department: els.employeeDepartment.value,
      salary_per_hour: Number(els.employeeSalary.value || 0),
      overtime_rate: Number(els.employeeOvertimeRate?.value || DEFAULT_OVERTIME_RATE),
      full_month_salary: Number(els.employeeFullSalary?.value || 0),
      bank_salary: Number(els.employeeBankSalary?.value || 0),
      payment_method: els.employeePaymentMethod?.value || 'cash',
      shift_start: els.employeeShiftStart?.value || DEFAULT_SHIFT_START,
      shift_end: els.employeeShiftEnd?.value || DEFAULT_SHIFT_END,
      role: els.employeeRole.value,
      avatar: getAvatarText(full_name),
    };
    if (password) payload.password_hash = await hashPassword(password);

    const query = id ? state.supabase.from('employees').update(payload).eq('id', id) : state.supabase.from('employees').insert({ ...payload, password_hash: payload.password_hash || await hashPassword('123456') });
    const { error } = await query;
    if (error) throw error;
    await fetchEmployees();
    closeModal('employeeModal');
    renderEverything();
    showToast(id ? t('employeeUpdated') : t('employeeAdded'));
  } catch (error) {
    console.error(error);
    showToast(t('employeeSaveError'), 'error');
  }
}

async function deleteEmployee(id) {
  if (id === state.currentUser.id) return showToast(t('employeeDeleteSelf'), 'error');
  const employee = getUserById(id);
  if (!employee) return;
  if (!confirm(`${t('confirmDelete')} ${employee.full_name}?`)) return;
  try {
    const { error } = await state.supabase.from('employees').delete().eq('id', id);
    if (error) throw error;
    await refreshAllData();
    showToast(t('employeeDeleted'));
  } catch (error) {
    console.error(error);
    showToast(t('employeeDeleteError'), 'error');
  }
}

function updateRequestFieldVisibility() {
  const isShiftRequest = els.requestType?.value === 'shift_change';
  const dateWrap = els.requestDate?.closest('div');
  const shiftWrap = els.requestShift?.closest('div');
  if (dateWrap) dateWrap.parentElement.style.display = isShiftRequest ? '' : 'none';
  if (shiftWrap) shiftWrap.style.display = isShiftRequest ? '' : 'none';
}

async function handleRequestSubmit(event) {
  event.preventDefault();
  const description = els.requestDescription.value.trim();
  const type = els.requestType.value;
  if (!description) return showToast(t('requestDescriptionRequired'), 'error');
  if (type === 'shift_change' && !els.requestDate.value) return showToast(t('requestDateRequired'), 'error');
  try {
    const payload = {
      user_id: state.currentUser.id,
      type,
      description,
      requested_date: type === 'shift_change' ? els.requestDate.value : null,
      requested_shift: type === 'shift_change' ? (els.requestShift.value || null) : null,
    };
    const { error } = await state.supabase.from('requests').insert(payload);
    if (error) throw error;
    await fetchRequests();
    closeModal('requestModal');
    renderRequests();
    showToast(t('requestSent'));
  } catch (error) {
    console.error(error);
    showToast(t('requestSendError'), 'error');
  }
}

async function updateRequestStatus(requestId, action) {
  if (state.currentUser?.role !== 'admin') return;
  const request = state.requests.find(item => String(item.id) === String(requestId));
  if (!request) return;
  const admin_response = prompt(action === 'approved' ? t('approvalPrompt') : t('rejectionPrompt')) || '';
  try {
    const { error } = await state.supabase.from('requests').update({
      status: action,
      admin_response,
      decided_at: new Date().toISOString(),
      decided_by: state.currentUser.id,
    }).eq('id', requestId);
    if (error) throw error;
    await fetchRequests();
    renderEverything();
    showToast(action === 'approved' ? t('requestApproved') : t('requestRejected'));
  } catch (error) {
    console.error(error);
    showToast(t('requestUpdateError'), 'error');
  }
}

async function handleStandardAttendance() {
  try {
    const open = getOpenSession(state.currentUser.id, 'standard');
    if (open) {
      await closeSession(open.id, new Date().toISOString(), false);
      showToast(t('standardCheckoutSuccess'));
    } else {
      await startSession('standard');
      showToast(t('standardCheckinSuccess'));
    }
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('attendanceSaveError'), 'error');
  }
}

async function handleOvertimeAttendance() {
  try {
    const open = getOpenSession(state.currentUser.id, 'overtime');
    if (open) {
      await closeSession(open.id, new Date().toISOString(), false);
      showToast(t('overtimeEndSuccess'));
    } else {
      await startSession('overtime');
      showToast(t('overtimeStartSuccess'));
    }
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('attendanceSaveError'), 'error');
  }
}

function updateStandardButton() {
  const open = getOpenSession(state.currentUser?.id, 'standard');
  els.standardBtnText.textContent = open ? t('standardCheckOut') : t('standardCheckIn');
  els.standardBtnIcon.setAttribute('data-lucide', open ? 'log-out' : 'log-in');
}
function updateOvertimeButton() {
  const open = getOpenSession(state.currentUser?.id, 'overtime');
  els.overtimeBtnText.textContent = open ? t('overtimeCheckOut') : t('overtimeCheckIn');
  els.overtimeBtnIcon.setAttribute('data-lucide', open ? 'log-out' : 'timer');
}

async function startSession(sessionType) {
  const now = new Date();
  const work_date = getLocalDateString(now);
  const { error } = await state.supabase.from('attendance_sessions').insert({
    user_id: state.currentUser.id,
    work_date,
    session_type: sessionType,
    check_in: now.toISOString(),
  });
  if (error) throw error;
  await fetchSessions();
  await rebuildAttendanceSummary(state.currentUser.id, work_date);
}

async function closeSession(sessionId, checkoutIso, autoCheckedOut = false) {
  const session = state.sessions.find(item => item.id === sessionId);
  if (!session) return;
  const workedHours = calculateHours(session.check_in, checkoutIso);
  const { error } = await state.supabase.from('attendance_sessions').update({
    check_out: checkoutIso,
    worked_hours: workedHours,
    auto_checked_out: autoCheckedOut,
  }).eq('id', sessionId);
  if (error) throw error;
  await fetchSessions();
  await rebuildAttendanceSummary(session.user_id, session.work_date, autoCheckedOut);
}

async function rebuildAttendanceSummary(userId, workDate, autoCheckedOut = false) {
  const daySessions = getSessionsForDay(userId, workDate);
  if (!daySessions.length) return;
  const regularHours = sum(daySessions.filter(item => item.session_type === 'standard' && item.check_out).map(item => item.worked_hours));
  const overtimeHours = sum(daySessions.filter(item => item.session_type === 'overtime' && item.check_out).map(item => item.worked_hours));
  const employee = getUserById(userId) || await fetchUserById(userId);
  const overtimePay = Number((overtimeHours * Number(employee?.overtime_rate || DEFAULT_OVERTIME_RATE)).toFixed(2));
  const firstCheckIn = daySessions.reduce((min, session) => !min || new Date(session.check_in) < new Date(min) ? session.check_in : min, null);
  const completedSessions = daySessions.filter(item => item.check_out);
  const lastCheckOut = completedSessions.reduce((max, session) => !max || new Date(session.check_out) > new Date(max) ? session.check_out : max, null);
  const openStandard = daySessions.some(item => item.session_type === 'standard' && !item.check_out);
  const openOvertime = daySessions.some(item => item.session_type === 'overtime' && !item.check_out);
  const status = openOvertime ? 'overtime_open' : openStandard ? 'at_work' : 'complete';
  const payload = {
    user_id: userId,
    work_date: workDate,
    first_check_in: firstCheckIn,
    last_check_out: lastCheckOut,
    regular_hours: regularHours,
    overtime_hours: overtimeHours,
    total_hours: Number((regularHours + overtimeHours).toFixed(2)),
    overtime_pay: overtimePay,
    total_sessions: daySessions.length,
    auto_checked_out: autoCheckedOut || daySessions.some(item => item.auto_checked_out),
    status,
  };
  const { error } = await state.supabase.from('attendance').upsert(payload, { onConflict: 'user_id,work_date' });
  if (error) throw error;
  await fetchAttendance();
}

function changeMonth(step) {
  state.currentMonth += step;
  if (state.currentMonth < 0) { state.currentMonth = 11; state.currentYear -= 1; }
  if (state.currentMonth > 11) { state.currentMonth = 0; state.currentYear += 1; }
  setMonthLabel();
  renderEverything();
}
function setMonthLabel() { els.currentMonthDisplay.textContent = formatMonthYear(state.currentYear, state.currentMonth); }

function exportAttendance() {
  const rows = getVisibleAttendanceForCurrentView();
  if (!rows.length) return showToast(t('noDataExport'), 'info');
  const csvRows = [[
    'Punonjesi','Data','Orari','Hyrje/Dalje','Ore normale','Ore shtese','Ore totale','Paga ditore','Statusi'
  ]];
  rows.forEach(row => {
    const user = getUserById(row.user_id);
    const schedule = `${user?.shift_start || '-'} - ${user?.shift_end || '-'}`;
    const sessions = getSessionsForDay(row.user_id, row.work_date).map(session => `${session.session_type === 'overtime' ? 'OT ' : ''}${formatTime(session.check_in)}${session.check_out ? `-${formatTime(session.check_out)}` : '-...'}`).join(' | ');
    const dailyPay = Number(row.regular_hours || 0) * Number(user?.salary_per_hour || 0) + Number(row.overtime_pay || 0);
    csvRows.push([
      user?.full_name || '-',
      formatDate(row.work_date),
      schedule,
      sessions,
      Number(row.regular_hours || 0).toFixed(2),
      Number(row.overtime_hours || 0).toFixed(2),
      Number(row.total_hours || 0).toFixed(2),
      dailyPay.toFixed(2),
      getAttendanceStatusLabel(row.status)
    ]);
  });
  const csvContent = csvRows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${t('exportFilename')}-${state.currentYear}-${String(state.currentMonth + 1).padStart(2, '0')}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function openModal(id) { document.body.classList.add('modal-open'); const modal = document.getElementById(id); modal.classList.remove('hidden'); modal.classList.add('flex'); }
function closeModal(id) {
  document.body.classList.remove('modal-open');
  const modal = document.getElementById(id);
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  if (id === 'requestModal') {
    els.requestForm.reset();
    updateRequestFieldVisibility();
  }
  if (id === 'employeeModal') els.employeeForm.reset();
}

function getEmployeeUsers() { return state.employees.filter(employee => employee.role === 'employee' || employee.role === 'admin'); }
function getVisibleRequests() { return state.requests.filter(item => state.currentUser.role === 'admin' || item.user_id === state.currentUser.id); }
function getVisibleAttendanceForCurrentView() {
  return state.attendance.filter(item => {
    const date = new Date(`${item.work_date}T00:00:00`);
    const monthMatch = date.getMonth() === state.currentMonth && date.getFullYear() === state.currentYear;
    const roleMatch = state.currentUser.role === 'admin' || item.user_id === state.currentUser.id;
    return monthMatch && roleMatch;
  }).sort((a, b) => new Date(b.work_date) - new Date(a.work_date));
}
function getTodaySummaryForCurrentUser() {
  const today = getLocalDateString(new Date());
  return state.attendance.find(item => item.user_id === state.currentUser?.id && item.work_date === today) || null;
}
function getSessionsForDay(userId, workDate) {
  return state.sessions.filter(item => item.user_id === userId && item.work_date === workDate).sort((a, b) => new Date(a.check_in) - new Date(b.check_in));
}
function getOpenSession(userId, sessionType = null) {
  return state.sessions.find(item => item.user_id === userId && !item.check_out && (!sessionType || item.session_type === sessionType)) || null;
}
function getPayrollForEmployee(employee, month, year) {
  const summaries = state.attendance.filter(item => item.user_id === employee.id && getMonthMatch(item.work_date, month, year));
  const regularHours = sum(summaries.map(item => item.regular_hours));
  const overtimeHours = sum(summaries.map(item => item.overtime_hours));
  const overtimePay = sum(summaries.map(item => item.overtime_pay));
  const regularPay = Number((regularHours * Number(employee.salary_per_hour || 0)).toFixed(2));
  const salaryDue = Number((regularPay + overtimePay).toFixed(2));
  const fullSalary = Number(employee.full_month_salary || 0);
  const deduction = Number(Math.max(0, fullSalary - salaryDue).toFixed(2));
  let bankDue = 0;
  let cashDue = 0;
  if (employee.payment_method === 'bank') bankDue = salaryDue;
  else if (employee.payment_method === 'cash') cashDue = salaryDue;
  else {
    bankDue = Math.min(Number(employee.bank_salary || 0), salaryDue);
    cashDue = Number((salaryDue - bankDue).toFixed(2));
  }
  return { employee, regularHours, overtimeHours, regularPay, overtimePay, totalHours: Number((regularHours + overtimeHours).toFixed(2)), salaryDue, fullSalary, deduction, bankDue: Number(bankDue.toFixed(2)), cashDue };
}
function getMonthMatch(workDate, month, year) { const date = new Date(`${workDate}T00:00:00`); return date.getMonth() === month && date.getFullYear() === year; }
function getUserById(id) { return state.employees.find(employee => employee.id === id) || null; }
async function fetchUserById(id) {
  if (!state.supabase) return null;
  const { data, error } = await state.supabase.from('employees').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data ? normalizeEmployee(data) : null;
}
function normalizeEmployee(employee) {
  return {
    ...employee,
    salary_per_hour: Number(employee.salary_per_hour || 0),
    overtime_rate: Number(employee.overtime_rate || DEFAULT_OVERTIME_RATE),
    full_month_salary: Number(employee.full_month_salary || 0),
    bank_salary: Number(employee.bank_salary || 0),
    shift_start: employee.shift_start || DEFAULT_SHIFT_START,
    shift_end: employee.shift_end || DEFAULT_SHIFT_END,
    payment_method: employee.payment_method || 'cash',
  };
}
function normalizeAttendance(row) {
  return {
    ...row,
    regular_hours: Number(row.regular_hours || 0),
    overtime_hours: Number(row.overtime_hours || 0),
    total_hours: Number(row.total_hours || 0),
    overtime_pay: Number(row.overtime_pay || 0),
    total_sessions: Number(row.total_sessions || 0),
  };
}
function normalizeSession(row) { return { ...row, worked_hours: Number(row.worked_hours || 0) }; }
function getRequestTypeLabel(type) {
  return ({ leave_early: t('requestLeaveEarly'), day_off: t('requestDayOff'), weekend_work: t('requestWeekendWork'), complaint: t('requestComplaint'), other: t('requestOther'), shift_change: t('requestShiftChange') })[type] || type;
}
function getRequestedShiftLabel(shift) { return shift === 'afternoon' ? t('shiftAfternoon') : t('shiftMorning'); }
function getStatusMeta(status) { if (status === 'approved') return { label: t('approved'), className: 'status-approved' }; if (status === 'rejected') return { label: t('rejected'), className: 'status-rejected' }; return { label: t('pending'), className: 'status-pending' }; }
function getAttendanceStatusLabel(status) {
  return ({ complete: t('complete'), at_work: t('atWork'), overtime_open: t('overtimeOpen'), present: t('complete'), absent: t('absent') })[status] || t('absent');
}
function getAttendanceStatusClass(status) {
  if (status === 'overtime_open') return 'bg-violet-50 text-violet-700';
  if (status === 'at_work') return 'bg-amber-50 text-amber-700';
  if (status === 'complete' || status === 'present') return 'bg-emerald-50 text-emerald-700';
  return 'bg-slate-100 text-slate-600';
}
function formatDate(dateString) { return new Date(dateString).toLocaleDateString(getLocale(), { year: 'numeric', month: '2-digit', day: '2-digit' }); }
function formatTime(dateString) { return new Date(dateString).toLocaleTimeString(getLocale(), { hour: '2-digit', minute: '2-digit' }); }
function formatDateTime(dateString) { return new Date(dateString).toLocaleString(getLocale(), { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }); }
function formatMonthYear(year, month) { return new Date(year, month, 1).toLocaleDateString(getLocale(), { month: 'long', year: 'numeric' }); }
function getAvatarText(name = '') { return (name.trim().charAt(0) || 'U').toUpperCase(); }
function setButtonLoading(button, isLoading, text) { button.disabled = isLoading; button.textContent = text; }
function emptyState(message) { return `<div class="bg-white rounded-3xl card-shadow p-10 text-center text-slate-400">${escapeHtml(message)}</div>`; }
function togglePassword(inputId, buttonId) {
  const input = document.getElementById(inputId); const button = document.getElementById(buttonId); const icon = button.querySelector('i');
  const show = input.type === 'password'; input.type = show ? 'text' : 'password'; icon.setAttribute('data-lucide', show ? 'eye-off' : 'eye'); lucide.createIcons();
}
function showToast(message, type = 'success') {
  els.toast.textContent = message;
  els.toast.className = 'fixed right-4 bottom-4 z-[60] max-w-sm text-white px-5 py-4 rounded-2xl shadow-2xl';
  els.toast.classList.remove('hidden');
  if (type === 'error') els.toast.classList.add('bg-rose-600'); else if (type === 'info') els.toast.classList.add('bg-blue-600'); else els.toast.classList.add('bg-slate-900');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => els.toast.classList.add('hidden'), 3200);
}

async function confirmSalaryPaid(employeeId) {
  if (state.currentUser?.role !== 'admin') return;
  try {
    const { error } = await state.supabase.from('employees').update({
      salary_paid_month: getPayrollMonthKey(state.currentYear, state.currentMonth),
      salary_paid_at: new Date().toISOString(),
      salary_paid_by: state.currentUser.id,
    }).eq('id', employeeId);
    if (error) throw error;
    await fetchEmployees();
    renderPayroll();
    showToast(t('salaryPaidSuccess'));
  } catch (error) {
    console.error(error);
    showToast(t('salaryPaidError'), 'error');
  }
}
function getPayrollMonthKey(year, month) { return `${year}-${String(month + 1).padStart(2, '0')}`; }
function isSalaryPaidForMonth(employee, month, year) { return (employee.salary_paid_month || '') === getPayrollMonthKey(year, month); }
function getEffectiveSchedule(userId, workDate) {
  const employee = getUserById(userId);
  const approvedShift = state.requests.find(request => request.user_id === userId && request.type === 'shift_change' && request.status === 'approved' && request.requested_date === workDate);
  if (approvedShift?.requested_shift === 'afternoon') return { ...AFTERNOON_SHIFT };
  if (approvedShift?.requested_shift === 'morning') return { ...MORNING_SHIFT };
  return { start: employee?.shift_start || DEFAULT_SHIFT_START, end: employee?.shift_end || DEFAULT_SHIFT_END, label: 'Default' };
}
function combineDateTime(workDate, timeValue) { return new Date(`${workDate}T${timeValue}:00`); }
function getLocalDateString(date) { const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000); return local.toISOString().slice(0, 10); }
function calculateHours(startIso, endIso) { return Number(Math.max(0, (new Date(endIso) - new Date(startIso)) / 36e5).toFixed(2)); }
function sum(values) { return Number(values.reduce((acc, value) => acc + Number(value || 0), 0).toFixed(2)); }
async function hashPassword(value) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}
function escapeHtml(value = '') { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;'); }
