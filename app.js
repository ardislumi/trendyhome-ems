const SUPABASE_URL = "https://djfrnrecdpcuuyvleygs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_G0RYA8eg_3uhJK0NBqKTaA_doy0r-cM";

const DEFAULT_OVERTIME_RATE = 5;
const DEFAULT_SHIFT_START = '08:00';
const DEFAULT_SHIFT_END = '17:00';
const FIRST_SATURDAY_SHIFT_START = '08:00';
const FIRST_SATURDAY_SHIFT_END = '17:00';
const FIRST_SATURDAY_CHECKIN_FROM = '07:58';
const CHECKIN_EARLY_MINUTES = 5;

const LANGUAGES = {
  sq: {
    code: 'sq-AL',
    strings: {
      appName: 'TrendyHome EMS',
      loginWelcome: 'Mirësevini',
      loginSubtitle: 'Hyni në sistemin e menaxhimit të punonjësve',
      loginIdentifierLabel: 'Username',
      loginIdentifierPlaceholder: 'Shkruaj username',
      password: 'Fjalëkalimi',
      rememberMe: 'Më mbaj mend në këtë pajisje',
      loginHelp: 'Ndihmë për qasje',
      login: 'Hyni',
      loginLoading: 'Duke hyrë...',
      logout: 'Dilni',
      dashboard: 'Dashboard',
      employees: 'Punonjësit',
      requests: 'Kërkesat',
      payroll: 'Pagat',
      attendance: 'Pjesëmarrja',
      panelProfessional: 'Panel profesional',
      panel: 'Panel',
      newRequest: 'Kërkesë e Re',
      totalEmployees: 'Total punonjësish',
      hoursThisMonth: 'Orë këtë muaj',
      salaryThisMonth: 'Paga këtë muaj',
      pendingRequests: 'Kërkesa në pritje',
      recentActivity: 'Aktiviteti i fundit',
      quickInfo: 'Informacion i shpejtë',
      todayStatusTitle: 'Statusi i sotëm',
      overtimeTodayTitle: 'Orë shtesë sot',
      overtimePayTodayTitle: 'Pagesë shtesë sot',
      activeMonthTitle: 'Muaji aktiv',
      accountTypeTitle: 'Lloji i llogarisë',
      standardSchedule: 'Orari normal: 08:00 - 17:00',
      overtimeRule: 'Orët shtesë llogariten sipas shtesës së punonjësit.',
      demoInfo: 'Mund të hyni me username.',
      adminRole: 'Administrator',
      employeeRole: 'Punonjës',
      active: 'Aktiv',
      inactive: 'Jo aktiv',
      pending: 'Në pritje',
      approved: 'Aprovuar',
      rejected: 'Refuzuar',
      paid: 'E paguar',
      unpaid: 'Pa paguar',
      atWork: 'Në punë',
      complete: 'Përfunduar',
      absent: 'Mungon',
      overtimeOpen: 'OT aktive',
      holiday: 'Festë',
      dayOff: 'Pushim',
      loginError: 'Username ose fjalëkalim i pasaktë.',
      loginUnexpectedError: 'Ndodhi një gabim gjatë hyrjes.',
      fillLoginFields: 'Plotëso username dhe fjalëkalimin.',
      loginHelpToast: 'Për demo: admin / employee. Fjalëkalimet janë ato të SQL-it të futur.',
      welcomeUser: 'Mirësevini',
      accessDenied: 'Nuk keni qasje në këtë faqe.',
      loggedOut: 'U çkyçët me sukses.',
      noRecentActivity: 'Nuk ka aktivitet të fundit.',
      noEmployees: 'Nuk u gjet asnjë punonjës.',
      noRequests: 'Nuk ka kërkesa për t’u shfaqur.',
      noPayrollEmployees: 'Nuk ka punonjës.',
      noAttendanceMonth: 'Nuk ka regjistrime për këtë muaj.',
      employeeUpdated: 'Punonjësi u përditësua me sukses.',
      employeeAdded: 'Punonjësi u shtua me sukses.',
      employeeDeleted: 'Punonjësi u fshi me sukses.',
      employeeDeleteError: 'Nuk u fshi punonjësi.',
      employeeDeleteSelf: 'Nuk mund ta fshini vetveten.',
      employeeSaveError: 'Nuk u ruajt punonjësi.',
      confirmDelete: 'A je i sigurt që dëshiron ta fshish',
      requestDescriptionRequired: 'Përshkrimi është i detyrueshëm.',
      requestDateRequired: 'Duhet ta zgjedhësh datën.',
      requestSent: 'Kërkesa u dërgua me sukses.',
      requestSendError: 'Nuk u dërgua kërkesa.',
      requestApproved: 'Kërkesa u aprovua.',
      requestRejected: 'Kërkesa u refuzua.',
      requestUpdateError: 'Nuk u përditësua kërkesa.',
      standardCheckinSuccess: 'Check in u regjistrua me sukses.',
      standardCheckoutSuccess: 'Check out u regjistrua me sukses.',
      overtimeStartSuccess: 'Orët shtesë filluan me sukses.',
      overtimeEndSuccess: 'Orët shtesë u mbyllën me sukses.',
      attendanceSaveError: 'Nuk u ruajt pjesëmarrja.',
      noDataExport: 'Nuk ka të dhëna për eksport.',
      salaryPaidSuccess: 'Paga u konfirmua me sukses.',
      salaryPaidError: 'Nuk u konfirmua paga.',
      holidaySaved: 'Dita pushim / festa u ruajt me sukses.',
      holidaySaveError: 'Nuk u ruajt festa.',
      holidayDeleted: 'Festa u fshi me sukses.',
      holidayDeleteError: 'Nuk u fshi festa.',
      dayOffSaved: 'Pushimi individual u ruajt me sukses.',
      dayOffSaveError: 'Nuk u ruajt pushimi individual.',
      dayOffDeleted: 'Pushimi individual u fshi me sukses.',
      dayOffDeleteError: 'Nuk u fshi pushimi individual.',
      workdaysSaved: 'Ditët e punës u ruajtën me sukses.',
      workdaysSaveError: 'Nuk u ruajtën ditët e punës.',
      messageSent: 'Mesazhi u dërgua me sukses.',
      messageSendError: 'Nuk u dërgua mesazhi.',
      messageMarkedRead: 'Mesazhi u shënua si i lexuar.',
      notWorkingDay: 'Sot nuk është ditë pune për këtë punonjës.',
      checkinTooEarly: 'Check in hapet vetëm 5 minuta para fillimit të orarit.',
      fullDayLeaveBlocked: 'Për këtë datë është aprovuar mungesë ditore.',
      partialLeaveBlocked: 'Për këtë datë / orar nuk lejohet check in.',
      alreadyCheckedIn: 'Punonjësi tashmë është në punë.',
      noOpenSession: 'Nuk ka check in të hapur.',
      cannotStartOT: 'OT mund të fillojë vetëm pasi të përfundojë orari standard.',
      cannotOTOnBlockedDay: 'Nuk lejohet OT në këtë ditë.',
      savedLanguage: 'Gjuha u ndryshua.',
      requestLeaveEarly: 'Lëshim më herët',
      requestDayOff: 'Ditë pushimi',
      requestWeekendWork: 'Punë në vikend',
      requestComplaint: 'Ankesë',
      requestOther: 'Tjetër',
      requestShiftChange: 'Ndryshim orari',
      exportFilename: 'attendance-report'
    }
  },
  en: { code: 'en-US', strings: {} },
  bs: { code: 'bs-BA', strings: {} }
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
  holidays: [],
  dayOffs: [],
  monthlyWorkdays: [],
  messages: [],
  reviews: [],
  currentPage: 'dashboard',
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  language: localStorage.getItem('ems_language') || 'sq',
  syncTimer: null,
  chart: null,
  chartMode: 'total'
};

const els = {};
document.addEventListener('DOMContentLoaded', initApp);

async function initApp() {
  cacheElements();
  bindEvents();
  applyLanguage(false);
  setMonthLabel();
  showLogin();

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    showConfigBanner('Vendos SUPABASE_URL dhe SUPABASE_ANON_KEY te app.js.');
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
    } catch (error) {
      console.error(error);
    }
  }
}

function cacheElements() {
  const ids = [
    'configBanner',
    'loginScreen',
    'mainApp',
    'loginForm',
    'loginIdentifier',
    'loginPassword',
    'rememberMe',
    'loginSubmitBtn',
    'forgotPasswordBtn',
    'toggleLoginPassword',
    'dashboardTitle',
    'dashboardSubtitle',
    'userName',
    'userRole',
    'userAvatar',
    'menuEmployees',
    'menuPayroll',
    'menuHolidays',
    'menuMessages',
    'mobileMenuEmployees',
    'mobileMenuPayroll',
    'mobileMenuHolidays',
    'mobileMenuMessages',
    'requestBadge',
    'recentActivity',
    'requestsList',
    'employeesTable',
    'searchEmployee',
    'filterDepartment',
    'employeeForm',
    'employeeModal',
    'employeeModalTitle',
    'employeeId',
    'employeeName',
    'employeeUsername',
    'employeeDepartment',
    'employeeRole',
    'employeePassword',
    'toggleEmployeePassword',
    'employeeFullSalary',
    'employeeBankSalary',
    'employeeOvertimeRate',
    'employeeShiftStart',
    'employeeShiftEnd',
    'employeePaymentMethod',
    'requestForm',
    'requestModal',
    'requestType',
    'requestDescription',
    'requestDate',
    'requestShift',
    'requestStartTime',
    'requestEndTime',
    'requestHours',
    'requestEntireDay',
    'statTotalEmployees',
    'statHoursThisMonth',
    'statSalaryThisMonth',
    'statPendingRequests',
    'statSalaryDue',
    'statBankSalary',
    'payrollTable',
    'totalPayroll',
    'totalHoursAll',
    'avgSalary',
    'attendanceTable',
    'currentMonthDisplay',
    'todayStatus',
    'activeMonthLabel',
    'accountTypeLabel',
    'standardBtn',
    'standardBtnText',
    'standardBtnIcon',
    'overtimeBtn',
    'overtimeBtnText',
    'overtimeBtnIcon',
    'toast',
    'mobileMenu',
    'mobileMenuBtn',
    'mobileMenuClose',
    'logoutBtn',
    'mobileLogoutBtn',
    'newRequestBtn',
    'openEmployeeModalBtn',
    'openHolidayModalBtn',
    'openGlobalHolidayModalBtn',
    'openEmployeeDayOffModalBtn',
    'openWorkdayConfigModalBtn',
    'openMessageModalBtn',
    'overtimeTodayHours',
    'overtimeTodayPay',
    'languageSwitcher',
    'mobileLanguageSwitcher',
    'dashboardChart',
    'chartCaption',
    'chartMode',
    'prevMonthBtn',
    'nextMonthBtn',
    'exportAttendanceBtn',
    'globalHolidayModal',
    'globalHolidayForm',
    'holidayTitle',
    'holidayDate',
    'holidayPaid',
    'employeeDayOffModal',
    'employeeDayOffForm',
    'dayOffEmployeeId',
    'dayOffDate',
    'dayOffReason',
    'dayOffPaid',
    'workdayConfigModal',
    'workdayConfigForm',
    'workYear',
    'workMonth',
    'expectedWorkDays',
    'holidaysList',
    'employeeDayOffList',
    'monthlyWorkdaysList',
    'messageModal',
    'messageForm',
    'messageRecipients',
    'messageType',
    'messageRating',
    'messageSubject',
    'messageText',
    'messagesList',
    'employeeRatingsList',
    'overallRatingValue',
    'unreadMessagesCount',
    'totalReviewsCount'
  ];
  ids.forEach(id => { els[id] = document.getElementById(id); });
}

function bindEvents() {
  els.loginForm?.addEventListener('submit', handleLogin);
  els.employeeForm?.addEventListener('submit', handleEmployeeSubmit);
  els.requestForm?.addEventListener('submit', handleRequestSubmit);
  els.globalHolidayForm?.addEventListener('submit', handleGlobalHolidaySubmit);
  els.employeeDayOffForm?.addEventListener('submit', handleEmployeeDayOffSubmit);
  els.workdayConfigForm?.addEventListener('submit', handleWorkdayConfigSubmit);
  els.messageForm?.addEventListener('submit', handleMessageSubmit);

  els.logoutBtn?.addEventListener('click', logout);
  els.mobileLogoutBtn?.addEventListener('click', logout);
  els.newRequestBtn?.addEventListener('click', () => openModal('requestModal'));
  els.openEmployeeModalBtn?.addEventListener('click', () => openEmployeeModal());
  els.openHolidayModalBtn?.addEventListener('click', () => openModal('globalHolidayModal'));
  els.openGlobalHolidayModalBtn?.addEventListener('click', () => openModal('globalHolidayModal'));
  els.openEmployeeDayOffModalBtn?.addEventListener('click', () => openModal('employeeDayOffModal'));
  els.openWorkdayConfigModalBtn?.addEventListener('click', () => openModal('workdayConfigModal'));
  els.openMessageModalBtn?.addEventListener('click', () => openModal('messageModal'));

  els.standardBtn?.addEventListener('click', handleStandardAttendance);
  els.overtimeBtn?.addEventListener('click', handleOvertimeAttendance);

  els.prevMonthBtn?.addEventListener('click', () => changeMonth(-1));
  els.nextMonthBtn?.addEventListener('click', () => changeMonth(1));
  els.exportAttendanceBtn?.addEventListener('click', exportAttendance);

  els.mobileMenuBtn?.addEventListener('click', toggleMobileMenu);
  els.mobileMenuClose?.addEventListener('click', toggleMobileMenu);

  els.forgotPasswordBtn?.addEventListener('click', () => showToast(t('loginHelpToast'), 'info'));
  els.toggleLoginPassword?.addEventListener('click', () => togglePassword('loginPassword', 'toggleLoginPassword'));
  els.toggleEmployeePassword?.addEventListener('click', () => togglePassword('employeePassword', 'toggleEmployeePassword'));

  els.searchEmployee?.addEventListener('input', renderEmployees);
  els.filterDepartment?.addEventListener('change', renderEmployees);
  els.chartMode?.addEventListener('change', e => {
    state.chartMode = e.target.value;
    renderDashboardChart();
  });

  [els.languageSwitcher, els.mobileLanguageSwitcher].forEach(select => {
    select?.addEventListener('change', event => {
      state.language = event.target.value;
      localStorage.setItem('ems_language', state.language);
      applyLanguage(true);
    });
  });

  document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.page)));
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.addEventListener('click', () => {
    navigateTo(btn.dataset.mobilePage);
    toggleMobileMenu();
  }));

  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  window.addEventListener('click', event => {
    [
      'requestModal',
      'employeeModal',
      'globalHolidayModal',
      'employeeDayOffModal',
      'workdayConfigModal',
      'messageModal'
    ].forEach(id => {
      if (event.target?.id === id) closeModal(id);
    });
  });

  window.openEmployeeModal = openEmployeeModal;
  window.deleteEmployee = deleteEmployee;
  window.updateRequestStatus = updateRequestStatus;
  window.markSalaryPaid = markSalaryPaid;
  window.deleteHoliday = deleteHoliday;
  window.deleteEmployeeDayOff = deleteEmployeeDayOff;
  window.markMessageRead = markMessageRead;
}

function t(key) {
  return LANGUAGES[state.language]?.strings?.[key] || LANGUAGES.sq.strings[key] || key;
}

function applyLanguage(showMessage = false) {
  document.documentElement.lang = state.language;
  [els.languageSwitcher, els.mobileLanguageSwitcher].forEach(select => {
    if (select) select.value = state.language;
  });
  document.title = t('appName');
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  if (showMessage) showToast(t('savedLanguage'), 'info');
  if (state.currentUser) renderEverything();
  lucide.createIcons();
}

function showConfigBanner(message) {
  if (!els.configBanner) return;
  els.configBanner.textContent = message;
  els.configBanner.classList.remove('hidden');
}

function hideConfigBanner() {
  els.configBanner?.classList.add('hidden');
}

function showLogin() {
  els.loginScreen?.classList.remove('hidden');
  els.mainApp?.classList.add('hidden');
}

function showMainApp() {
  els.loginScreen?.classList.add('hidden');
  els.mainApp?.classList.remove('hidden');
}

async function handleLogin(event) {
  event.preventDefault();
  const identifier = String(els.loginIdentifier?.value || '').trim().toLowerCase();
  const password = String(els.loginPassword?.value || '');

  if (!identifier || !password) return showToast(t('fillLoginFields'), 'error');

  setButtonLoading(els.loginSubmitBtn, true, t('loginLoading'));
  try {
    const passwordHash = await hashPassword(password);
    const { data, error } = await state.supabase
      .from('employees')
      .select('*')
      .eq('password_hash', passwordHash)
      .eq('active', true);

    if (error) throw error;

    const user = (data || []).map(normalizeEmployee).find(item =>
      String(item.username || '').toLowerCase() === identifier
    );

    if (!user) return showToast(t('loginError'), 'error');

    state.currentUser = user;
    localStorage.setItem('ems_current_user_id', user.id);
    if (els.rememberMe?.checked) localStorage.setItem('ems_remembered_identifier', identifier);
    else localStorage.removeItem('ems_remembered_identifier');

    await afterLogin();
    showToast(`${t('welcomeUser')}, ${user.full_name}!`, 'success');
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
  if (els.userName) els.userName.textContent = state.currentUser?.full_name || '-';
  if (els.userRole) els.userRole.textContent = isAdmin ? t('adminRole') : t('employeeRole');
  if (els.userAvatar) els.userAvatar.textContent = getAvatarText(state.currentUser?.full_name || '');

  if (els.dashboardTitle) {
    els.dashboardTitle.textContent = isAdmin ? `${t('dashboard')} - ${t('adminRole')}` : t('dashboard');
  }
  if (els.dashboardSubtitle) {
    els.dashboardSubtitle.textContent = isAdmin
      ? 'Menaxhim i plotë i pagave, pjesëmarrjes dhe kërkesave'
      : `${t('standardSchedule')} · ${t('overtimeRule')}`;
  }
  if (els.accountTypeLabel) els.accountTypeLabel.textContent = isAdmin ? t('adminRole') : t('employeeRole');

  [els.menuEmployees, els.menuPayroll, els.menuHolidays, els.mobileMenuEmployees, els.mobileMenuPayroll, els.mobileMenuHolidays]
    .forEach(el => el?.classList.toggle('hidden', !isAdmin));
  [els.menuMessages, els.mobileMenuMessages].forEach(el => el?.classList.remove('hidden'));
}

async function refreshAllData() {
  await Promise.all([
    fetchEmployees(),
    fetchRequests(),
    fetchAttendance(),
    fetchSessions(),
    fetchHolidays(),
    fetchDayOffs(),
    fetchMonthlyWorkdays(),
    fetchMessages(),
    fetchReviews()
  ]);
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

async function fetchHolidays() {
  const { data, error } = await state.supabase.from('company_holidays').select('*').order('holiday_date', { ascending: false });
  if (error) throw error;
  state.holidays = data || [];
}

async function fetchDayOffs() {
  const { data, error } = await state.supabase.from('employee_day_offs').select('*').order('off_date', { ascending: false });
  if (error) throw error;
  state.dayOffs = data || [];
}

async function fetchMonthlyWorkdays() {
  const { data, error } = await state.supabase
    .from('monthly_workday_settings')
    .select('*')
    .order('work_year', { ascending: false })
    .order('work_month', { ascending: true });
  if (error) throw error;
  state.monthlyWorkdays = data || [];
}

async function fetchMessages() {
  const { data, error } = await state.supabase.from('employee_messages').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  state.messages = data || [];
}

async function fetchReviews() {
  const { data, error } = await state.supabase.from('employee_reviews').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  state.reviews = data || [];
}

async function fetchUserById(id) {
  const { data, error } = await state.supabase.from('employees').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data ? normalizeEmployee(data) : null;
}

function startSyncTimer() {
  if (state.syncTimer) clearInterval(state.syncTimer);
  state.syncTimer = setInterval(async () => {
    try {
      await refreshAllData();
    } catch (error) {
      console.error(error);
    }
  }, 60000);
}

function logout() {
  state.currentUser = null;
  if (state.syncTimer) clearInterval(state.syncTimer);
  localStorage.removeItem('ems_current_user_id');
  showLogin();
  showToast(t('loggedOut'), 'success');
}

function navigateTo(page) {
  if (!state.currentUser) return;
  if ((page === 'employees' || page === 'payroll' || page === 'holidays') && state.currentUser.role !== 'admin') {
    return showToast(t('accessDenied'), 'error');
  }

  state.currentPage = page;

  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.toggle('active', view.id === page);
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('nav-active', btn.dataset.page === page);
  });

  renderEverything();
}

function toggleMobileMenu() {
  els.mobileMenu?.classList.toggle('hidden');
}

function renderEverything() {
  updateDashboardStats();
  renderRecentActivity();
  renderEmployees();
  renderRequests();
  renderPayroll();
  renderAttendance();
  renderDashboardChart();
  renderHolidays();
  renderEmployeeDayOffs();
  renderMonthlyWorkdays();
  renderMessages();
  renderEmployeeRatings();
  populateEmployeeSelects();
  updateStandardButton();
  updateOvertimeButton();
  setMonthLabel();
  lucide.createIcons();
}

function populateEmployeeSelects() {
  const employees = getEmployeeUsers();
  if (els.dayOffEmployeeId) {
    els.dayOffEmployeeId.innerHTML = employees.map(employee =>
      `<option value="${employee.id}">${escapeHtml(employee.full_name)} (${escapeHtml(employee.username)})</option>`
    ).join('');
  }

  if (els.messageRecipients) {
    const allOption = `<option value="__all__">Të gjithë punonjësit</option>`;
    els.messageRecipients.innerHTML = allOption + employees.map(employee =>
      `<option value="${employee.id}">${escapeHtml(employee.full_name)} (${escapeHtml(employee.username)})</option>`
    ).join('');
  }
}

function updateDashboardStats() {
  const employees = getEmployeeUsers();
  const visibleEmployees = state.currentUser.role === 'admin' ? employees : [state.currentUser];
  const pendingRequests = getVisibleRequests().filter(item => item.status === 'pending').length;
  const payrolls = visibleEmployees.map(employee => getPayrollForEmployee(employee, state.currentMonth, state.currentYear));

  const totalHours = payrolls.reduce((sum, item) => sum + item.totalHours, 0);
  const totalEarned = payrolls.reduce((sum, item) => sum + item.salaryDue, 0);
  const totalBank = payrolls.reduce((sum, item) => sum + item.bankDue, 0);

  if (els.statTotalEmployees) els.statTotalEmployees.textContent = String(employees.length);
  if (els.statHoursThisMonth) els.statHoursThisMonth.textContent = `${totalHours.toFixed(2)}h`;
  if (els.statSalaryThisMonth) els.statSalaryThisMonth.textContent = `€${totalEarned.toFixed(2)}`;
  if (els.statSalaryDue) els.statSalaryDue.textContent = `€${totalEarned.toFixed(2)}`;
  if (els.statBankSalary) els.statBankSalary.textContent = `€${totalBank.toFixed(2)}`;
  if (els.statPendingRequests) els.statPendingRequests.textContent = String(pendingRequests);
  if (els.activeMonthLabel) els.activeMonthLabel.textContent = formatMonthYear(state.currentYear, state.currentMonth);

  if (pendingRequests > 0 && els.requestBadge) {
    els.requestBadge.textContent = String(pendingRequests);
    els.requestBadge.classList.remove('hidden');
  } else {
    els.requestBadge?.classList.add('hidden');
  }

  const todaySummary = getTodaySummaryForCurrentUser();
  if (state.currentUser.role === 'admin') {
    const activeNow = getEmployeeUsers().filter(employee => !!getOpenSession(employee.id)).length;
    if (els.todayStatus) els.todayStatus.textContent = `Punonjës aktivë: ${activeNow}`;
  } else if (!todaySummary) {
    if (els.todayStatus) els.todayStatus.textContent = 'Nuk ka check in sot.';
  } else if (todaySummary.status === 'overtime_open') {
    if (els.todayStatus) els.todayStatus.textContent = `OT aktive · ${formatTime(todaySummary.last_check_out || todaySummary.first_check_in)}`;
  } else if (todaySummary.status === 'at_work') {
    const open = getOpenSession(state.currentUser.id, 'standard');
    if (els.todayStatus) els.todayStatus.textContent = open ? `Në punë që nga ${formatTime(open.check_in)}` : t('atWork');
  } else {
    if (els.todayStatus) els.todayStatus.textContent = `Përfunduar: ${Number(todaySummary.total_hours || 0).toFixed(2)}h`;
  }

  if (els.overtimeTodayHours) els.overtimeTodayHours.textContent = `${Number(todaySummary?.overtime_hours || 0).toFixed(2)}h`;
  if (els.overtimeTodayPay) els.overtimeTodayPay.textContent = `€${Number(todaySummary?.overtime_pay || 0).toFixed(2)}`;

  const visibleMessages = getVisibleMessages();
  if (els.unreadMessagesCount) els.unreadMessagesCount.textContent = String(visibleMessages.filter(m => !m.is_read).length);
  if (els.totalReviewsCount) els.totalReviewsCount.textContent = String(getVisibleReviews().length);
  if (els.overallRatingValue) {
    const avg = getAverageRatingForVisibleEmployees();
    els.overallRatingValue.textContent = avg.toFixed(1);
  }
}

function renderRecentActivity() {
  if (!els.recentActivity) return;

  const items = [
    ...getVisibleRequests().slice(0, 4).map(item => ({ type: 'request', data: item })),
    ...getVisibleAttendanceForCurrentView().slice(0, 4).map(item => ({ type: 'attendance', data: item })),
    ...getVisibleMessages().slice(0, 3).map(item => ({ type: 'message', data: item }))
  ]
    .sort((a, b) => new Date(getSortDate(b)) - new Date(getSortDate(a)))
    .slice(0, 6);

  if (!items.length) {
    els.recentActivity.innerHTML = emptyState(t('noRecentActivity'));
    return;
  }

  els.recentActivity.innerHTML = items.map(item => {
    if (item.type === 'attendance') {
      const row = item.data;
      const user = getUserById(row.user_id);
      return `
        <div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
          <div class="w-12 h-12 rounded-full bg-violet-50 text-violet-700 flex items-center justify-center font-bold">
            ${getAvatarText(user?.full_name || '')}
          </div>
          <div class="flex-1">
            <div class="font-bold text-slate-900">${escapeHtml(user?.full_name || '-')}</div>
            <p class="text-sm text-slate-500">${formatDate(row.work_date)} · ${Number(row.total_hours || 0).toFixed(2)}h</p>
          </div>
          <span class="text-xs px-2.5 py-1 rounded-full ${getAttendanceStatusClass(row.status)}">${getAttendanceStatusLabel(row.status)}</span>
        </div>
      `;
    }

    if (item.type === 'message') {
      const row = item.data;
      const sender = getUserById(row.sender_id);
      return `
        <div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
          <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            ${getAvatarText(sender?.full_name || 'A')}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <p class="font-bold text-slate-900">${escapeHtml(row.subject || 'Mesazh')}</p>
              ${row.rating ? `<span class="text-amber-500 font-semibold">${'★'.repeat(Number(row.rating))}</span>` : ''}
            </div>
            <p class="text-sm text-slate-500 line-clamp-2">${escapeHtml(row.message_text || '')}</p>
          </div>
          <div class="text-xs text-slate-400">${formatDateTime(row.created_at)}</div>
        </div>
      `;
    }

    const row = item.data;
    const user = getUserById(row.user_id);
    const status = getStatusMeta(row.status);

    return `
      <div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
        <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
          ${getAvatarText(user?.full_name || '')}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="font-bold text-slate-900">${escapeHtml(user?.full_name || '-')}</p>
            <span class="text-xs px-2.5 py-1 rounded-full ${status.className}">${status.label}</span>
          </div>
          <p class="text-sm text-slate-500">${getRequestTypeLabel(row.type)} · ${escapeHtml(row.description || '')}</p>
        </div>
        <div class="text-xs text-slate-400">${formatDateTime(row.created_at)}</div>
      </div>
    `;
  }).join('');
}

function renderEmployees() {
  if (!els.employeesTable || state.currentUser.role !== 'admin') return;

  const search = String(els.searchEmployee?.value || '').trim().toLowerCase();
  const department = String(els.filterDepartment?.value || '');

  let employees = [...state.employees];
  if (search) {
    employees = employees.filter(employee =>
      [employee.full_name, employee.username, employee.department]
        .some(value => String(value || '').toLowerCase().includes(search))
    );
  }
  if (department) {
    employees = employees.filter(employee => employee.department === department);
  }

  if (!employees.length) {
    els.employeesTable.innerHTML = `<tr><td colspan="9" class="px-6 py-10 text-center text-slate-400">${t('noEmployees')}</td></tr>`;
    return;
  }

  els.employeesTable.innerHTML = employees.map(employee => {
    const payroll = getPayrollForEmployee(employee, state.currentMonth, state.currentYear);
    const rating = getAverageRatingForEmployee(employee.id);
    const activeClass = employee.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600';

    return `
      <tr class="hover:bg-slate-50 align-top">
        <td class="px-6 py-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
              ${getAvatarText(employee.full_name)}
            </div>
            <div>
              <p class="font-semibold text-slate-900">${escapeHtml(employee.full_name)}</p>
              <p class="text-sm text-slate-500">${escapeHtml(employee.role === 'admin' ? 'Administrator' : 'Punonjës')}</p>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.department || '-')}</td>
        <td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.username || '-')}</td>
        <td class="px-6 py-4 text-sm text-slate-600">${employee.shift_start} - ${employee.shift_end}</td>
        <td class="px-6 py-4 text-sm text-slate-600">
          €${employee.full_month_salary.toFixed(2)}
          <div class="text-xs text-slate-400">Shtesa OT: €${employee.overtime_rate.toFixed(2)}</div>
        </td>
        <td class="px-6 py-4 text-sm text-slate-600">
          ${getPaymentMethodLabel(employee.payment_method)}
          <div class="text-xs text-slate-400">Bankë: €${employee.bank_salary.toFixed(2)}</div>
        </td>
        <td class="px-6 py-4 text-sm text-slate-600">
          <div class="font-semibold text-amber-500">${renderStars(rating)}</div>
          <div class="text-xs text-slate-400">${rating.toFixed(1)} / 5</div>
        </td>
        <td class="px-6 py-4">
          <span class="inline-flex px-2.5 py-1 rounded-full ${activeClass}">
            ${employee.active ? t('active') : t('inactive')}
          </span>
          <div class="text-xs text-slate-400 mt-2">Për t’u dhënë: €${payroll.salaryDue.toFixed(2)}</div>
        </td>
        <td class="px-6 py-4 text-right">
          <div class="flex justify-end gap-2">
            <button onclick="openEmployeeModal('${employee.id}')" class="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50">Edito</button>
            <button onclick="deleteEmployee('${employee.id}')" class="rounded-xl bg-rose-50 text-rose-600 px-3 py-2 text-sm font-semibold hover:bg-rose-100">Fshij</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderRequests() {
  if (!els.requestsList) return;

  const requests = getVisibleRequests();
  if (!requests.length) {
    els.requestsList.innerHTML = emptyState(t('noRequests'));
    return;
  }

  els.requestsList.innerHTML = requests.map(item => {
    const user = getUserById(item.user_id);
    const status = getStatusMeta(item.status);

    const meta = [
      item.requested_date ? formatDate(item.requested_date) : '',
      item.affects_entire_day ? 'Krejt ditën' : '',
      item.start_time ? `Nga ${item.start_time}` : '',
      item.end_time ? `Deri ${item.end_time}` : '',
      item.hours_requested ? `${Number(item.hours_requested).toFixed(1)} orë` : ''
    ].filter(Boolean).join(' · ');

    return `
      <div class="bg-white rounded-3xl card-shadow p-6">
        <div class="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
              ${getAvatarText(user?.full_name || '')}
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">${escapeHtml(user?.full_name || '-')}</h3>
                <span class="px-2.5 py-1 rounded-full text-xs ${status.className}">${status.label}</span>
              </div>
              <p class="text-sm text-slate-500 mt-1">${getRequestTypeLabel(item.type)}${meta ? ` · ${meta}` : ''}</p>
              <p class="text-slate-700 mt-3 whitespace-pre-wrap">${escapeHtml(item.description || '')}</p>
              ${item.admin_response ? `
                <div class="mt-3 text-sm rounded-2xl bg-slate-50 border border-slate-200 p-3">
                  <span class="font-semibold">Përgjigjja e adminit:</span> ${escapeHtml(item.admin_response)}
                </div>` : ''}
            </div>
          </div>

          <div class="text-sm text-slate-400 whitespace-nowrap">${formatDateTime(item.created_at)}</div>
        </div>

        ${state.currentUser.role === 'admin' && item.status === 'pending' ? `
          <div class="mt-5 flex flex-wrap gap-3">
            <button onclick="updateRequestStatus(${item.id}, 'approved')" class="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 font-semibold">Aprovo</button>
            <button onclick="updateRequestStatus(${item.id}, 'rejected')" class="rounded-2xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 font-semibold">Refuzo</button>
          </div>` : ''}
      </div>
    `;
  }).join('');
}

function renderPayroll() {
  if (state.currentUser.role !== 'admin' || !els.payrollTable) return;

  const employees = getEmployeeUsers();
  if (!employees.length) {
    els.payrollTable.innerHTML = `<tr><td colspan="11" class="px-6 py-10 text-center text-slate-400">${t('noPayrollEmployees')}</td></tr>`;
    return;
  }

  const payrollRows = employees.map(employee => getPayrollForEmployee(employee, state.currentMonth, state.currentYear));
  const totalPayroll = payrollRows.reduce((sum, item) => sum + item.salaryDue, 0);
  const totalHours = payrollRows.reduce((sum, item) => sum + item.totalHours, 0);

  if (els.totalPayroll) els.totalPayroll.textContent = `€${totalPayroll.toFixed(2)}`;
  if (els.totalHoursAll) els.totalHoursAll.textContent = `${totalHours.toFixed(2)}h`;
  if (els.avgSalary) els.avgSalary.textContent = `€${(payrollRows.length ? totalPayroll / payrollRows.length : 0).toFixed(2)}`;

  els.payrollTable.innerHTML = payrollRows.map(row => {
    const paid = isSalaryPaidForMonth(row.employee, state.currentMonth, state.currentYear);
    const paidLabel = paid ? `${t('paid')}${row.employee.salary_paid_at ? ` · ${formatDate(row.employee.salary_paid_at)}` : ''}` : t('unpaid');
    const paidClass = paid ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700';

    return `
      <tr class="hover:bg-slate-50 align-top">
        <td class="px-6 py-4">
          <div class="font-semibold text-slate-900">${escapeHtml(row.employee.full_name)}</div>
          <div class="text-sm text-slate-500">${escapeHtml(row.employee.department || '-')}</div>
        </td>
        <td class="px-6 py-4 text-sm text-slate-600">${row.workedDays.toFixed(0)} / ${row.expectedDays}</td>
        <td class="px-6 py-4 text-sm text-slate-600">${row.regularHours.toFixed(2)}h</td>
        <td class="px-6 py-4 text-sm text-slate-600">${row.overtimeHours.toFixed(2)}h<div class="text-xs text-slate-400">€${row.overtimePay.toFixed(2)}</div></td>
        <td class="px-6 py-4 text-sm font-semibold text-slate-900">€${row.salaryDue.toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${row.bankDue.toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${row.cashDue.toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${row.fullSalary.toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${row.deduction.toFixed(2)}</td>
        <td class="px-6 py-4">
          <span class="px-2.5 py-1 rounded-full text-xs ${paidClass}">${paidLabel}</span>
        </td>
        <td class="px-6 py-4 text-right">
          <button onclick="markSalaryPaid('${row.employee.id}')" class="rounded-2xl bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 text-sm font-semibold">
            Konfirmo pagën
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderAttendance() {
  if (!els.attendanceTable) return;

  const rows = getVisibleAttendanceForCurrentView();
  if (!rows.length) {
    els.attendanceTable.innerHTML = `<tr><td colspan="8" class="px-6 py-10 text-center text-slate-400">${t('noAttendanceMonth')}</td></tr>`;
    return;
  }

  els.attendanceTable.innerHTML = rows.map(row => {
    const user = getUserById(row.user_id);
    const sessions = getSessionsForDay(row.user_id, row.work_date);
    const dailyPay = getDailyPay(row.user_id, row.work_date, row);

    const sessionText = sessions.length
      ? sessions.map(session => {
          const prefix = session.session_type === 'overtime' ? 'OT ' : '';
          return `${prefix}${formatTime(session.check_in)}${session.check_out ? ` - ${formatTime(session.check_out)}` : ' - ...'}`;
        }).join('<br>')
      : '-';

    const schedule = getEffectiveSchedule(row.user_id, row.work_date);

    return `
      <tr class="hover:bg-slate-50 align-top">
        <td class="px-6 py-4">
          <div class="font-semibold text-slate-900">${escapeHtml(user?.full_name || '-')}</div>
          <div class="text-sm text-slate-500">${formatDate(row.work_date)}</div>
        </td>
        <td class="px-6 py-4 text-sm text-slate-600">${sessionText}</td>
        <td class="px-6 py-4 text-sm text-slate-600">${Number(row.regular_hours || 0).toFixed(2)}h</td>
        <td class="px-6 py-4 text-sm text-slate-600">${Number(row.overtime_hours || 0).toFixed(2)}h</td>
        <td class="px-6 py-4 text-sm text-slate-600">${Number(row.total_hours || 0).toFixed(2)}h</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${dailyPay.toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">${schedule.start} - ${schedule.end}</td>
        <td class="px-6 py-4">
          <span class="px-2.5 py-1 rounded-full text-xs ${getAttendanceStatusClass(row.status)}">${getAttendanceStatusLabel(row.status)}</span>
        </td>
      </tr>
    `;
  }).join('');
}

function renderHolidays() {
  if (!els.holidaysList) return;
  if (!state.holidays.length) {
    els.holidaysList.innerHTML = emptyState('Nuk ka festa të ruajtura.');
    return;
  }

  els.holidaysList.innerHTML = state.holidays.map(item => `
    <div class="rounded-2xl border border-slate-200 p-4 flex items-start justify-between gap-4">
      <div>
        <div class="font-semibold text-slate-900">${escapeHtml(item.title)}</div>
        <div class="text-sm text-slate-500">${formatDate(item.holiday_date)} · ${item.is_paid ? 'E paguar' : 'Pa pagesë'}</div>
      </div>
      ${state.currentUser.role === 'admin' ? `
        <button onclick="deleteHoliday(${item.id})" class="rounded-xl bg-rose-50 text-rose-600 px-3 py-2 text-sm font-semibold hover:bg-rose-100">
          Fshij
        </button>` : ''}
    </div>
  `).join('');
}

function renderEmployeeDayOffs() {
  if (!els.employeeDayOffList) return;
  if (!state.dayOffs.length) {
    els.employeeDayOffList.innerHTML = emptyState('Nuk ka pushime individuale.');
    return;
  }

  els.employeeDayOffList.innerHTML = state.dayOffs.map(item => {
    const user = getUserById(item.user_id);
    return `
      <div class="rounded-2xl border border-slate-200 p-4 flex items-start justify-between gap-4">
        <div>
          <div class="font-semibold text-slate-900">${escapeHtml(user?.full_name || '-')}</div>
          <div class="text-sm text-slate-500">${formatDate(item.off_date)} · ${item.is_paid ? 'E paguar' : 'Pa pagesë'}</div>
          ${item.reason ? `<div class="text-sm text-slate-600 mt-1">${escapeHtml(item.reason)}</div>` : ''}
        </div>
        ${state.currentUser.role === 'admin' ? `
          <button onclick="deleteEmployeeDayOff(${item.id})" class="rounded-xl bg-rose-50 text-rose-600 px-3 py-2 text-sm font-semibold hover:bg-rose-100">
            Fshij
          </button>` : ''}
      </div>
    `;
  }).join('');
}

function renderMonthlyWorkdays() {
  if (!els.monthlyWorkdaysList) return;

  const rows = state.monthlyWorkdays
    .filter(item => item.work_year === state.currentYear)
    .sort((a, b) => a.work_month - b.work_month);

  if (!rows.length) {
    els.monthlyWorkdaysList.innerHTML = emptyState('Nuk ka konfigurim për ditët e punës.');
    return;
  }

  els.monthlyWorkdaysList.innerHTML = rows.map(item => `
    <div class="rounded-2xl border border-slate-200 p-4">
      <div class="font-semibold text-slate-900">${formatMonthName(item.work_month - 1)} ${item.work_year}</div>
      <div class="text-sm text-slate-500 mt-1">${item.expected_work_days} ditë pune</div>
    </div>
  `).join('');
}

function renderMessages() {
  if (!els.messagesList) return;
  const messages = getVisibleMessages();

  if (!messages.length) {
    els.messagesList.innerHTML = emptyState('Nuk ka mesazhe.');
    return;
  }

  els.messagesList.innerHTML = messages.map(message => {
    const sender = getUserById(message.sender_id);
    const recipient = getUserById(message.recipient_id);
    const badgeClass =
      message.message_type === 'warning' ? 'bg-rose-50 text-rose-700' :
      message.message_type === 'praise' ? 'bg-emerald-50 text-emerald-700' :
      'bg-blue-50 text-blue-700';

    return `
      <div class="rounded-2xl border border-slate-200 p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-1 rounded-full text-xs ${badgeClass}">
                ${message.message_type === 'warning' ? 'Vrejtje' : message.message_type === 'praise' ? 'Lavdërim' : 'Informues'}
              </span>
              ${message.rating ? `<span class="text-amber-500 font-semibold">${renderStars(message.rating)}</span>` : ''}
            </div>
            <div class="font-semibold text-slate-900 mt-2">${escapeHtml(message.subject || 'Mesazh')}</div>
            <div class="text-sm text-slate-500 mt-1">
              Nga: ${escapeHtml(sender?.full_name || 'Admin')} · Për: ${escapeHtml(recipient?.full_name || '-')}
            </div>
            <p class="text-sm text-slate-700 mt-3 whitespace-pre-wrap">${escapeHtml(message.message_text || '')}</p>
          </div>
          <div class="text-right">
            <div class="text-xs text-slate-400">${formatDateTime(message.created_at)}</div>
            ${state.currentUser.role !== 'admin' && !message.is_read ? `
              <button onclick="markMessageRead(${message.id})" class="mt-3 rounded-xl bg-slate-900 text-white px-3 py-2 text-sm font-semibold hover:bg-slate-800">
                Lexuar
              </button>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderEmployeeRatings() {
  if (!els.employeeRatingsList) return;

  const employees = getEmployeeUsers()
    .map(employee => ({
      employee,
      avg: getAverageRatingForEmployee(employee.id),
      count: state.reviews.filter(r => r.employee_id === employee.id).length
    }))
    .sort((a, b) => b.avg - a.avg);

  if (!employees.length) {
    els.employeeRatingsList.innerHTML = emptyState('Nuk ka vlerësime.');
    return;
  }

  els.employeeRatingsList.innerHTML = employees.map(item => `
    <div class="rounded-2xl border border-slate-200 p-4 flex items-center justify-between gap-4">
      <div>
        <div class="font-semibold text-slate-900">${escapeHtml(item.employee.full_name)}</div>
        <div class="text-sm text-slate-500">${escapeHtml(item.employee.department || '-')}</div>
      </div>
      <div class="text-right">
        <div class="text-amber-500 font-semibold">${renderStars(item.avg)}</div>
        <div class="text-sm text-slate-500">${item.avg.toFixed(1)} / 5 · ${item.count} vlerësime</div>
      </div>
    </div>
  `).join('');
}

function renderDashboardChart() {
  if (!els.dashboardChart) return;

  const labels = [];
  const values = [];

  if (state.currentUser.role === 'admin') {
    const employees = getEmployeeUsers();
    employees.forEach(employee => {
      const payroll = getPayrollForEmployee(employee, state.currentMonth, state.currentYear);
      labels.push(employee.full_name);
      values.push(
        state.chartMode === 'bank' ? payroll.bankDue :
        state.chartMode === 'cash' ? payroll.cashDue :
        payroll.salaryDue
      );
    });
    if (els.chartCaption) {
      els.chartCaption.textContent =
        state.chartMode === 'bank' ? 'Shumat në bankë sipas punonjësit' :
        state.chartMode === 'cash' ? 'Shumat cash sipas punonjësit' :
        'Shumat mujore sipas punonjësit';
    }
  } else {
    const last7 = getLastSevenDaysAttendance(state.currentUser.id);
    last7.forEach(item => {
      labels.push(formatDate(item.work_date));
      values.push(Number(item.total_hours || 0));
    });
    if (els.chartCaption) els.chartCaption.textContent = '7 ditët e fundit';
  }

  if (state.chart) state.chart.destroy();
  state.chart = new Chart(els.dashboardChart, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: state.currentUser.role === 'admin' ? 'Shuma (€)' : 'Orë',
        data: values,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function updateStandardButton() {
  if (!state.currentUser || !els.standardBtn) return;

  const openStandard = getOpenSession(state.currentUser.id, 'standard');
  const today = getTodaySummaryForCurrentUser();

  els.standardBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700', 'bg-rose-600', 'hover:bg-rose-700');

  if (openStandard) {
    els.standardBtn.classList.add('bg-rose-600', 'hover:bg-rose-700');
    els.standardBtnText.textContent = 'Check Out';
    els.standardBtnIcon.setAttribute('data-lucide', 'log-out');
  } else if (today && ['complete', 'holiday', 'day_off'].includes(today.status)) {
    els.standardBtn.classList.add('bg-slate-400');
    els.standardBtnText.textContent = 'I përfunduar';
    els.standardBtnIcon.setAttribute('data-lucide', 'check-check');
  } else {
    els.standardBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
    els.standardBtnText.textContent = 'Check In';
    els.standardBtnIcon.setAttribute('data-lucide', 'log-in');
  }

  lucide.createIcons();
}

function updateOvertimeButton() {
  if (!state.currentUser || !els.overtimeBtn) return;

  const openOt = getOpenSession(state.currentUser.id, 'overtime');
  els.overtimeBtn.classList.remove('bg-violet-600', 'hover:bg-violet-700', 'bg-rose-600', 'hover:bg-rose-700');

  if (openOt) {
    els.overtimeBtn.classList.add('bg-rose-600', 'hover:bg-rose-700');
    els.overtimeBtnText.textContent = 'Orë shtesë: Check Out';
    els.overtimeBtnIcon.setAttribute('data-lucide', 'timer-off');
  } else {
    els.overtimeBtn.classList.add('bg-violet-600', 'hover:bg-violet-700');
    els.overtimeBtnText.textContent = 'Orë shtesë: Check In';
    els.overtimeBtnIcon.setAttribute('data-lucide', 'timer');
  }

  lucide.createIcons();
}

async function handleStandardAttendance() {
  try {
    const userId = state.currentUser.id;
    const now = new Date();
    const today = getDateString(now);

    const openStandard = getOpenSession(userId, 'standard');
    if (openStandard) {
      await closeSession(openStandard.id, now.toISOString(), false);
      await refreshAllData();
      showToast(t('standardCheckoutSuccess'), 'success');
      return;
    }

    const validation = canUserCheckIn(userId, now, 'standard');
    if (!validation.ok) return showToast(validation.message, 'error');

    await createSession(userId, today, 'standard', now.toISOString());
    await refreshAllData();
    showToast(t('standardCheckinSuccess'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('attendanceSaveError'), 'error');
  }
}

async function handleOvertimeAttendance() {
  try {
    const userId = state.currentUser.id;
    const now = new Date();
    const today = getDateString(now);

    const openOt = getOpenSession(userId, 'overtime');
    if (openOt) {
      await closeSession(openOt.id, now.toISOString(), false);
      await refreshAllData();
      showToast(t('overtimeEndSuccess'), 'success');
      return;
    }

    const validation = canUserCheckIn(userId, now, 'overtime');
    if (!validation.ok) return showToast(validation.message, 'error');

    const standardSummary = getAttendanceRecord(userId, today);
    const schedule = getEffectiveSchedule(userId, today);
    const shiftEnd = combineDateTime(today, schedule.end);

    if (!standardSummary || new Date(now) < shiftEnd) {
      return showToast(t('cannotStartOT'), 'error');
    }

    await createSession(userId, today, 'overtime', now.toISOString());
    await refreshAllData();
    showToast(t('overtimeStartSuccess'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('attendanceSaveError'), 'error');
  }
}

function canUserCheckIn(userId, currentDate, sessionType = 'standard') {
  const workDate = getDateString(currentDate);
  const dayStatus = getDayStatus(userId, workDate);
  const schedule = getEffectiveSchedule(userId, workDate);

  if (sessionType === 'standard') {
    if (!dayStatus.isWorkingDay) return { ok: false, message: t('notWorkingDay') };
    if (dayStatus.fullDayBlocked) return { ok: false, message: t('fullDayLeaveBlocked') };
    if (dayStatus.partialBlocked) return { ok: false, message: t('partialLeaveBlocked') };

    const allowedCheckinStart = combineDateTime(workDate, dayStatus.isFirstSaturday ? FIRST_SATURDAY_CHECKIN_FROM : subtractMinutesFromTime(schedule.start, CHECKIN_EARLY_MINUTES));
    if (currentDate < allowedCheckinStart) return { ok: false, message: t('checkinTooEarly') };

    if (getOpenSession(userId, 'standard')) return { ok: false, message: t('alreadyCheckedIn') };
  }

  if (sessionType === 'overtime') {
    if (dayStatus.fullDayBlocked || !dayStatus.isWorkingDay) return { ok: false, message: t('cannotOTOnBlockedDay') };
  }

  return { ok: true };
}

async function syncAttendanceRules() {
  const now = new Date();
  const updates = [];

  for (const session of state.sessions.filter(item => !item.check_out)) {
    if (session.session_type !== 'standard') continue;
    const dayStatus = getDayStatus(session.user_id, session.work_date);
    const schedule = getEffectiveSchedule(session.user_id, session.work_date);
    const shiftEnd = combineDateTime(session.work_date, dayStatus.isFirstSaturday ? FIRST_SATURDAY_SHIFT_END : schedule.end);

    if (now >= shiftEnd) {
      updates.push(closeSession(session.id, shiftEnd.toISOString(), true));
    }
  }

  if (updates.length) {
    await Promise.all(updates);
    await fetchSessions();
    await fetchAttendance();
  }

  await ensureHolidayAndDayOffAttendanceRows();
}

async function ensureHolidayAndDayOffAttendanceRows() {
  const updates = [];
  const relevantDates = [
    ...state.holidays.map(h => ({ type: 'holiday', date: h.holiday_date })),
    ...state.dayOffs.map(d => ({ type: 'day_off', date: d.off_date, user_id: d.user_id }))
  ];

  for (const entry of relevantDates) {
    if (entry.type === 'holiday') {
      for (const employee of getEmployeeUsers()) {
        const existing = getAttendanceRecord(employee.id, entry.date);
        if (!existing) {
          updates.push(
            state.supabase.from('attendance').insert({
              user_id: employee.id,
              work_date: entry.date,
              status: 'holiday',
              total_hours: 0,
              regular_hours: 0,
              overtime_hours: 0,
              overtime_pay: 0,
              total_sessions: 0,
              auto_checked_out: false
            })
          );
        }
      }
    } else {
      const existing = getAttendanceRecord(entry.user_id, entry.date);
      if (!existing) {
        updates.push(
          state.supabase.from('attendance').insert({
            user_id: entry.user_id,
            work_date: entry.date,
            status: 'day_off',
            total_hours: 0,
            regular_hours: 0,
            overtime_hours: 0,
            overtime_pay: 0,
            total_sessions: 0,
            auto_checked_out: false
          })
        );
      }
    }
  }

  if (updates.length) {
    await Promise.all(updates);
    await fetchAttendance();
  }
}

async function createSession(userId, workDate, sessionType, checkInIso) {
  const { error } = await state.supabase.from('attendance_sessions').insert({
    user_id: userId,
    work_date: workDate,
    session_type: sessionType,
    check_in: checkInIso
  });
  if (error) throw error;
  await recalculateAttendance(userId, workDate);
}

async function closeSession(sessionId, checkoutIso, autoCheckedOut = false) {
  const session = state.sessions.find(item => item.id === sessionId);
  if (!session) return;

  const checkIn = new Date(session.check_in);
  const checkOut = new Date(checkoutIso);
  const workedHours = Math.max(0, (checkOut - checkIn) / 36e5);

  const { error } = await state.supabase
    .from('attendance_sessions')
    .update({
      check_out: checkoutIso,
      worked_hours: round2(workedHours),
      auto_checked_out: autoCheckedOut
    })
    .eq('id', sessionId);

  if (error) throw error;
  await recalculateAttendance(session.user_id, session.work_date);
}

async function recalculateAttendance(userId, workDate) {
  const sessions = state.sessions
    .filter(item => item.user_id === userId && item.work_date === workDate)
    .map(item => ({ ...item }));

  const { data: freshSessions, error: freshError } = await state.supabase
    .from('attendance_sessions')
    .select('*')
    .eq('user_id', userId)
    .eq('work_date', workDate)
    .order('check_in', { ascending: true });

  if (freshError) throw freshError;

  const normalized = (freshSessions || []).map(normalizeSession);
  const standardSessions = normalized.filter(s => s.session_type === 'standard');
  const overtimeSessions = normalized.filter(s => s.session_type === 'overtime');

  const firstCheckIn = normalized[0]?.check_in || null;
  const lastClosed = [...normalized].filter(s => s.check_out).sort((a, b) => new Date(b.check_out) - new Date(a.check_out))[0];
  const lastCheckOut = lastClosed?.check_out || null;

  const regularHours = round2(standardSessions.reduce((sum, s) => sum + Number(s.worked_hours || 0), 0));
  const overtimeHours = round2(overtimeSessions.reduce((sum, s) => sum + Number(s.worked_hours || 0), 0));
  const overtimeRate = getUserById(userId)?.overtime_rate || DEFAULT_OVERTIME_RATE;
  const overtimePay = round2(overtimeHours * overtimeRate);
  const totalHours = round2(regularHours + overtimeHours);

  let status = 'present';
  const hasOpenStandard = standardSessions.some(s => !s.check_out);
  const hasOpenOt = overtimeSessions.some(s => !s.check_out);
  const dayStatus = getDayStatus(userId, workDate);

  if (dayStatus.isHoliday) status = 'holiday';
  else if (dayStatus.isDayOff) status = 'day_off';
  else if (hasOpenOt) status = 'overtime_open';
  else if (hasOpenStandard) status = 'at_work';
  else if (!normalized.length) status = 'absent';
  else status = 'complete';

  const existing = getAttendanceRecord(userId, workDate);

  const payload = {
    user_id: userId,
    work_date: workDate,
    first_check_in: firstCheckIn,
    last_check_out: lastCheckOut,
    regular_hours: regularHours,
    overtime_hours: overtimeHours,
    total_hours: totalHours,
    overtime_pay: overtimePay,
    total_sessions: normalized.length,
    auto_checked_out: normalized.some(s => s.auto_checked_out),
    status
  };

  if (existing) {
    const { error } = await state.supabase.from('attendance').update(payload).eq('id', existing.id);
    if (error) throw error;
  } else {
    const { error } = await state.supabase.from('attendance').insert(payload);
    if (error) throw error;
  }

  await fetchSessions();
  await fetchAttendance();
}

async function handleEmployeeSubmit(event) {
  event.preventDefault();

  const id = String(els.employeeId?.value || '').trim();
  const full_name = String(els.employeeName?.value || '').trim();
  const username = String(els.employeeUsername?.value || '').trim();
  const password = String(els.employeePassword?.value || '').trim();

  if (!full_name || !username) {
    showToast('Emri dhe username janë të detyrueshëm.', 'error');
    return;
  }

  try {
    const payload = {
      full_name,
      username,
      role: els.employeeRole?.value || 'employee',
      department: els.employeeDepartment?.value || '',
      overtime_rate: Number(els.employeeOvertimeRate?.value || DEFAULT_OVERTIME_RATE),
      full_month_salary: Number(els.employeeFullSalary?.value || 0),
      bank_salary: Number(els.employeeBankSalary?.value || 0),
      payment_method: els.employeePaymentMethod?.value || 'cash',
      shift_start: els.employeeShiftStart?.value || DEFAULT_SHIFT_START,
      shift_end: els.employeeShiftEnd?.value || DEFAULT_SHIFT_END,
      avatar: getAvatarText(full_name)
    };

    if (password) payload.password_hash = await hashPassword(password);

    let error;
    if (id) {
      ({ error } = await state.supabase.from('employees').update(payload).eq('id', id));
    } else {
      if (!payload.password_hash) payload.password_hash = await hashPassword('123456');
      ({ error } = await state.supabase.from('employees').insert(payload));
    }

    if (error) throw error;

    await fetchEmployees();
    closeModal('employeeModal');
    renderEverything();
    showToast(id ? t('employeeUpdated') : t('employeeAdded'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('employeeSaveError'), 'error');
  }
}

function openEmployeeModal(id = '') {
  if (!els.employeeForm) return;

  els.employeeForm.reset();
  if (els.employeeId) els.employeeId.value = '';
  if (els.employeeModalTitle) els.employeeModalTitle.textContent = id ? 'Edito Punonjësin' : 'Shto Punonjës';

  if (id) {
    const employee = getUserById(id);
    if (!employee) return;

    els.employeeId.value = employee.id;
    els.employeeName.value = employee.full_name || '';
    els.employeeUsername.value = employee.username || '';
    els.employeeDepartment.value = employee.department || '';
    els.employeeRole.value = employee.role || 'employee';
    els.employeeFullSalary.value = employee.full_month_salary || 0;
    els.employeeBankSalary.value = employee.bank_salary || 0;
    els.employeeOvertimeRate.value = employee.overtime_rate || DEFAULT_OVERTIME_RATE;
    els.employeePaymentMethod.value = employee.payment_method || 'cash';
    els.employeeShiftStart.value = employee.shift_start || DEFAULT_SHIFT_START;
    els.employeeShiftEnd.value = employee.shift_end || DEFAULT_SHIFT_END;
  } else {
    if (els.employeeOvertimeRate) els.employeeOvertimeRate.value = DEFAULT_OVERTIME_RATE;
    if (els.employeeShiftStart) els.employeeShiftStart.value = DEFAULT_SHIFT_START;
    if (els.employeeShiftEnd) els.employeeShiftEnd.value = DEFAULT_SHIFT_END;
  }

  openModal('employeeModal');
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
    showToast(t('employeeDeleted'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('employeeDeleteError'), 'error');
  }
}

async function handleRequestSubmit(event) {
  event.preventDefault();

  const description = String(els.requestDescription?.value || '').trim();
  const type = String(els.requestType?.value || 'other');
  const requestedDate = els.requestDate?.value || null;
  const startTime = els.requestStartTime?.value || null;
  const endTime = els.requestEndTime?.value || null;
  const hoursRequested = Number(els.requestHours?.value || 0);
  const affectsEntireDay = !!els.requestEntireDay?.checked;
  const requestedShift = els.requestShift?.value || null;

  if (!description) return showToast(t('requestDescriptionRequired'), 'error');
  if (!requestedDate) return showToast(t('requestDateRequired'), 'error');

  try {
    const payload = {
      user_id: state.currentUser.id,
      type,
      description,
      requested_date: requestedDate,
      start_time: startTime,
      end_time: endTime,
      hours_requested: hoursRequested,
      affects_entire_day: affectsEntireDay,
      requested_shift: requestedShift
    };

    const { error } = await state.supabase.from('requests').insert(payload);
    if (error) throw error;

    await fetchRequests();
    closeModal('requestModal');
    renderEverything();
    showToast(t('requestSent'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('requestSendError'), 'error');
  }
}

async function updateRequestStatus(id, status) {
  try {
    const adminResponse = prompt(status === 'approved' ? 'Mesazh aprovimi (opsionale):' : 'Arsye refuzimi (opsionale):') || '';

    const { error } = await state.supabase
      .from('requests')
      .update({
        status,
        admin_response: adminResponse,
        decided_at: new Date().toISOString(),
        decided_by: state.currentUser.id
      })
      .eq('id', id);

    if (error) throw error;

    await fetchRequests();
    await ensureHolidayAndDayOffAttendanceRows();
    renderEverything();
    showToast(status === 'approved' ? t('requestApproved') : t('requestRejected'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('requestUpdateError'), 'error');
  }
}

async function handleGlobalHolidaySubmit(event) {
  event.preventDefault();
  try {
    const payload = {
      title: String(els.holidayTitle?.value || '').trim(),
      holiday_date: els.holidayDate?.value || null,
      applies_to_all: true,
      is_paid: !!els.holidayPaid?.checked
    };

    if (!payload.title || !payload.holiday_date) {
      showToast('Plotëso emrin e festës dhe datën.', 'error');
      return;
    }

    const { error } = await state.supabase.from('company_holidays').insert(payload);
    if (error) throw error;

    await fetchHolidays();
    await ensureHolidayAndDayOffAttendanceRows();
    closeModal('globalHolidayModal');
    renderEverything();
    showToast(t('holidaySaved'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('holidaySaveError'), 'error');
  }
}

async function deleteHoliday(id) {
  try {
    const { error } = await state.supabase.from('company_holidays').delete().eq('id', id);
    if (error) throw error;
    await fetchHolidays();
    renderEverything();
    showToast(t('holidayDeleted'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('holidayDeleteError'), 'error');
  }
}

async function handleEmployeeDayOffSubmit(event) {
  event.preventDefault();
  try {
    const payload = {
      user_id: els.dayOffEmployeeId?.value || '',
      off_date: els.dayOffDate?.value || null,
      reason: String(els.dayOffReason?.value || '').trim(),
      is_paid: !!els.dayOffPaid?.checked
    };

    if (!payload.user_id || !payload.off_date) {
      showToast('Zgjedhe punonjësin dhe datën.', 'error');
      return;
    }

    const { error } = await state.supabase.from('employee_day_offs').insert(payload);
    if (error) throw error;

    await fetchDayOffs();
    await ensureHolidayAndDayOffAttendanceRows();
    closeModal('employeeDayOffModal');
    renderEverything();
    showToast(t('dayOffSaved'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('dayOffSaveError'), 'error');
  }
}

async function deleteEmployeeDayOff(id) {
  try {
    const { error } = await state.supabase.from('employee_day_offs').delete().eq('id', id);
    if (error) throw error;
    await fetchDayOffs();
    renderEverything();
    showToast(t('dayOffDeleted'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('dayOffDeleteError'), 'error');
  }
}

async function handleWorkdayConfigSubmit(event) {
  event.preventDefault();
  try {
    const work_year = Number(els.workYear?.value || state.currentYear);
    const work_month = Number(els.workMonth?.value || 1);
    const expected_work_days = Number(els.expectedWorkDays?.value || 0);

    const existing = state.monthlyWorkdays.find(item => item.work_year === work_year && item.work_month === work_month);

    let error;
    if (existing) {
      ({ error } = await state.supabase
        .from('monthly_workday_settings')
        .update({ expected_work_days })
        .eq('id', existing.id));
    } else {
      ({ error } = await state.supabase
        .from('monthly_workday_settings')
        .insert({ work_year, work_month, expected_work_days }));
    }

    if (error) throw error;

    await fetchMonthlyWorkdays();
    closeModal('workdayConfigModal');
    renderEverything();
    showToast(t('workdaysSaved'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('workdaysSaveError'), 'error');
  }
}

async function handleMessageSubmit(event) {
  event.preventDefault();

  try {
    const selected = Array.from(els.messageRecipients?.selectedOptions || []).map(opt => opt.value);
    if (!selected.length) {
      showToast('Zgjedh të paktën një marrës.', 'error');
      return;
    }

    let recipients = selected.includes('__all__')
      ? getEmployeeUsers().map(employee => employee.id)
      : selected;

    recipients = [...new Set(recipients)];

    const subject = String(els.messageSubject?.value || '').trim();
    const message_text = String(els.messageText?.value || '').trim();
    const message_type = String(els.messageType?.value || 'info');
    const rating = els.messageRating?.value ? Number(els.messageRating.value) : null;

    if (!subject || !message_text) {
      showToast('Titulli dhe mesazhi janë të detyrueshëm.', 'error');
      return;
    }

    const inserts = recipients.map(recipientId => ({
      sender_id: state.currentUser.id,
      recipient_id: recipientId,
      subject,
      message_type,
      message_text,
      rating
    }));

    const { data, error } = await state.supabase.from('employee_messages').insert(inserts).select();
    if (error) throw error;

    if (rating) {
      const reviewInserts = (data || []).map(row => ({
        employee_id: row.recipient_id,
        message_id: row.id,
        rating,
        note: subject
      }));
      const { error: reviewError } = await state.supabase.from('employee_reviews').insert(reviewInserts);
      if (reviewError) throw reviewError;
    }

    await fetchMessages();
    await fetchReviews();
    closeModal('messageModal');
    renderEverything();
    showToast(t('messageSent'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('messageSendError'), 'error');
  }
}

async function markMessageRead(id) {
  try {
    const { error } = await state.supabase.from('employee_messages').update({ is_read: true }).eq('id', id);
    if (error) throw error;
    await fetchMessages();
    renderEverything();
    showToast(t('messageMarkedRead'), 'success');
  } catch (error) {
    console.error(error);
    showToast('Nuk u shënua si i lexuar.', 'error');
  }
}

async function markSalaryPaid(employeeId) {
  try {
    const monthKey = getMonthKey(state.currentYear, state.currentMonth);
    const { error } = await state.supabase
      .from('employees')
      .update({
        salary_paid_month: monthKey,
        salary_paid_at: new Date().toISOString(),
        salary_paid_by: state.currentUser.id
      })
      .eq('id', employeeId);

    if (error) throw error;
    await fetchEmployees();
    renderEverything();
    showToast(t('salaryPaidSuccess'), 'success');
  } catch (error) {
    console.error(error);
    showToast(t('salaryPaidError'), 'error');
  }
}

function getPayrollForEmployee(employee, monthIndex, year) {
  const monthRows = state.attendance.filter(item => {
    const d = new Date(`${item.work_date}T00:00:00`);
    return item.user_id === employee.id && d.getMonth() === monthIndex && d.getFullYear() === year;
  });

  const expectedDays = getExpectedWorkDays(year, monthIndex, employee.id);
  const workedDayRows = monthRows.filter(row =>
    ['complete', 'at_work', 'overtime_open'].includes(row.status) && Number(row.regular_hours || 0) > 0
  );

  const paidHolidayDays = countPaidHolidayDaysForMonth(employee.id, year, monthIndex);
  const paidDayOffDays = countPaidDayOffDaysForMonth(employee.id, year, monthIndex);
  const approvedFullDayLeaveDays = countApprovedFullDayLeavesForMonth(employee.id, year, monthIndex);

  const countedDays = workedDayRows.length + paidHolidayDays + paidDayOffDays + approvedFullDayLeaveDays;
  const dailyRate = expectedDays > 0 ? Number(employee.full_month_salary || 0) / expectedDays : 0;

  const basePay = round2(Math.min(countedDays, expectedDays) * dailyRate);
  const fullSalary = Number(employee.full_month_salary || 0);

  const regularHours = round2(monthRows.reduce((sum, item) => sum + Number(item.regular_hours || 0), 0));
  const overtimeHours = round2(monthRows.reduce((sum, item) => sum + Number(item.overtime_hours || 0), 0));
  const overtimePay = round2(monthRows.reduce((sum, item) => sum + Number(item.overtime_pay || 0), 0));
  const salaryDue = round2(basePay + overtimePay);
  const deduction = round2(Math.max(0, fullSalary - basePay));

  const configuredBank = Number(employee.bank_salary || 0);
  const bankDue =
    employee.payment_method === 'bank' ? salaryDue :
    employee.payment_method === 'mixed' ? Math.min(configuredBank, salaryDue) :
    0;

  const cashDue = round2(Math.max(0, salaryDue - bankDue));

  return {
    employee,
    expectedDays,
    workedDays: countedDays,
    regularHours,
    overtimeHours,
    totalHours: round2(regularHours + overtimeHours),
    overtimePay,
    salaryDue,
    bankDue: round2(bankDue),
    cashDue,
    fullSalary,
    deduction
  };
}

function getExpectedWorkDays(year, monthIndex, employeeId) {
  const configured = state.monthlyWorkdays.find(item =>
    item.work_year === year && item.work_month === monthIndex + 1
  );
  if (configured) return Number(configured.expected_work_days || 0);

  let count = 0;
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, monthIndex, day);
    const dateString = getDateString(date);
    const status = getDayStatus(employeeId, dateString);
    if (status.isWorkingDay && !status.fullDayBlocked) count++;
  }

  return count;
}

function getDailyPay(userId, workDate, attendanceRow = null) {
  const employee = getUserById(userId);
  if (!employee) return 0;

  const row = attendanceRow || getAttendanceRecord(userId, workDate);
  if (!row) return 0;

  const expectedDays = getExpectedWorkDays(new Date(`${workDate}T00:00:00`).getFullYear(), new Date(`${workDate}T00:00:00`).getMonth(), userId);
  const dailyRate = expectedDays > 0 ? Number(employee.full_month_salary || 0) / expectedDays : 0;

  const paidStatuses = ['complete', 'at_work', 'overtime_open'];
  const regularPay = (paidStatuses.includes(row.status) && Number(row.regular_hours || 0) > 0) ? dailyRate : 0;
  const dayOffPaid = isPaidDayOff(userId, workDate) ? dailyRate : 0;
  const holidayPaid = isPaidHoliday(workDate) ? dailyRate : 0;

  return round2(Math.max(regularPay, dayOffPaid, holidayPaid) + Number(row.overtime_pay || 0));
}

function getDayStatus(userId, workDate) {
  const date = new Date(`${workDate}T00:00:00`);
  const day = date.getDay();
  const isFirstSaturday = day === 6 && date.getDate() <= 7;

  const holiday = state.holidays.find(item => item.holiday_date === workDate);
  const dayOff = state.dayOffs.find(item => item.user_id === userId && item.off_date === workDate);

  const approvedRequests = state.requests.filter(item =>
    item.user_id === userId &&
    item.status === 'approved' &&
    item.requested_date === workDate
  );

  const hasApprovedWeekendWork = approvedRequests.some(r => r.type === 'weekend_work');
  const fullDayLeave = approvedRequests.some(r =>
    (r.type === 'day_off' || r.type === 'leave_early') && r.affects_entire_day
  );

  let isWorkingDay = true;
  if (holiday) isWorkingDay = false;
  else if (dayOff) isWorkingDay = false;
  else if (day === 0) isWorkingDay = false;
  else if (day === 6 && !isFirstSaturday && !hasApprovedWeekendWork) isWorkingDay = false;

  return {
    isHoliday: !!holiday,
    isDayOff: !!dayOff,
    isFirstSaturday,
    isWorkingDay,
    fullDayBlocked: !!holiday || !!dayOff || fullDayLeave,
    partialBlocked: false
  };
}

function getEffectiveSchedule(userId, workDate) {
  const employee = getUserById(userId) || {};
  const dayStatus = getDayStatus(userId, workDate);

  if (dayStatus.isFirstSaturday) {
    return { start: FIRST_SATURDAY_SHIFT_START, end: FIRST_SATURDAY_SHIFT_END };
  }

  const shiftChange = state.requests.find(item =>
    item.user_id === userId &&
    item.status === 'approved' &&
    item.type === 'shift_change' &&
    item.requested_date === workDate &&
    item.requested_shift
  );

  if (shiftChange?.requested_shift === 'afternoon') return { start: '11:00', end: '19:00' };
  if (shiftChange?.requested_shift === 'morning') return { start: '08:00', end: '17:00' };

  return {
    start: employee.shift_start || DEFAULT_SHIFT_START,
    end: employee.shift_end || DEFAULT_SHIFT_END
  };
}

function getOpenSession(userId, sessionType = null) {
  return state.sessions.find(item =>
    item.user_id === userId &&
    !item.check_out &&
    (sessionType ? item.session_type === sessionType : true)
  );
}

function getAttendanceRecord(userId, workDate) {
  return state.attendance.find(item => item.user_id === userId && item.work_date === workDate);
}

function getSessionsForDay(userId, workDate) {
  return state.sessions
    .filter(item => item.user_id === userId && item.work_date === workDate)
    .sort((a, b) => new Date(a.check_in) - new Date(b.check_in));
}

function getTodaySummaryForCurrentUser() {
  if (!state.currentUser) return null;
  return getAttendanceRecord(state.currentUser.id, getDateString(new Date()));
}

function getEmployeeUsers() {
  return state.employees.filter(employee => employee.role === 'employee' || employee.role === 'admin');
}

function getUserById(id) {
  return state.employees.find(item => item.id === id) || null;
}

function getVisibleRequests() {
  return state.requests.filter(item => state.currentUser.role === 'admin' || item.user_id === state.currentUser.id);
}

function getVisibleMessages() {
  return state.messages.filter(item => state.currentUser.role === 'admin' || item.recipient_id === state.currentUser.id);
}

function getVisibleReviews() {
  if (state.currentUser.role === 'admin') return state.reviews;
  return state.reviews.filter(item => item.employee_id === state.currentUser.id);
}

function getVisibleAttendanceForCurrentView() {
  return state.attendance.filter(item => {
    const date = new Date(`${item.work_date}T00:00:00`);
    const monthMatch = date.getMonth() === state.currentMonth && date.getFullYear() === state.currentYear;
    const roleMatch = state.currentUser.role === 'admin' || item.user_id === state.currentUser.id;
    return monthMatch && roleMatch;
  }).sort((a, b) => new Date(b.work_date) - new Date(a.work_date));
}

function getAverageRatingForEmployee(employeeId) {
  const rows = state.reviews.filter(item => item.employee_id === employeeId);
  if (!rows.length) return 0;
  return rows.reduce((sum, item) => sum + Number(item.rating || 0), 0) / rows.length;
}

function getAverageRatingForVisibleEmployees() {
  const rows = getVisibleReviews();
  if (!rows.length) return 0;
  return rows.reduce((sum, item) => sum + Number(item.rating || 0), 0) / rows.length;
}

function countPaidHolidayDaysForMonth(userId, year, monthIndex) {
  return state.holidays.filter(item => {
    const d = new Date(`${item.holiday_date}T00:00:00`);
    return d.getFullYear() === year && d.getMonth() === monthIndex && item.is_paid;
  }).length;
}

function countPaidDayOffDaysForMonth(userId, year, monthIndex) {
  return state.dayOffs.filter(item => {
    const d = new Date(`${item.off_date}T00:00:00`);
    return item.user_id === userId && d.getFullYear() === year && d.getMonth() === monthIndex && item.is_paid;
  }).length;
}

function countApprovedFullDayLeavesForMonth(userId, year, monthIndex) {
  return state.requests.filter(item => {
    if (item.user_id !== userId || item.status !== 'approved' || !item.requested_date || !item.affects_entire_day) return false;
    const d = new Date(`${item.requested_date}T00:00:00`);
    return d.getFullYear() === year && d.getMonth() === monthIndex && (item.type === 'day_off' || item.type === 'leave_early');
  }).length;
}

function isPaidHoliday(workDate) {
  return !!state.holidays.find(item => item.holiday_date === workDate && item.is_paid);
}

function isPaidDayOff(userId, workDate) {
  return !!state.dayOffs.find(item => item.user_id === userId && item.off_date === workDate && item.is_paid);
}

function isSalaryPaidForMonth(employee, monthIndex, year) {
  return String(employee.salary_paid_month || '') === getMonthKey(year, monthIndex);
}

function getLastSevenDaysAttendance(userId) {
  const now = new Date();
  const rows = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const key = getDateString(date);
    const row = getAttendanceRecord(userId, key) || {
      work_date: key,
      total_hours: 0
    };
    rows.push(row);
  }

  return rows;
}

function exportAttendance() {
  const rows = getVisibleAttendanceForCurrentView();
  if (!rows.length) return showToast(t('noDataExport'), 'info');

  const csvRows = [[
    'Punonjesi',
    'Data',
    'Orari',
    'Hyrje/Dalje',
    'Ore normale',
    'Ore shtese',
    'Ore totale',
    'Paga ditore',
    'Statusi'
  ]];

  rows.forEach(row => {
    const user = getUserById(row.user_id);
    const schedule = getEffectiveSchedule(row.user_id, row.work_date);
    const sessions = getSessionsForDay(row.user_id, row.work_date)
      .map(session => `${session.session_type === 'overtime' ? 'OT ' : ''}${formatTime(session.check_in)}${session.check_out ? `-${formatTime(session.check_out)}` : '-.'}`)
      .join(' | ');

    csvRows.push([
      user?.full_name || '-',
      formatDate(row.work_date),
      `${schedule.start} - ${schedule.end}`,
      sessions,
      Number(row.regular_hours || 0).toFixed(2),
      Number(row.overtime_hours || 0).toFixed(2),
      Number(row.total_hours || 0).toFixed(2),
      getDailyPay(row.user_id, row.work_date, row).toFixed(2),
      getAttendanceStatusLabel(row.status)
    ]);
  });

  const csvContent = csvRows
    .map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(','))
    .join('\n');

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

function openModal(id) {
  document.body.classList.add('modal-open');
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal(id) {
  document.body.classList.remove('modal-open');
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  if (id === 'requestModal') els.requestForm?.reset();
  if (id === 'employeeModal') els.employeeForm?.reset();
  if (id === 'globalHolidayModal') els.globalHolidayForm?.reset();
  if (id === 'employeeDayOffModal') els.employeeDayOffForm?.reset();
  if (id === 'workdayConfigModal') els.workdayConfigForm?.reset();
  if (id === 'messageModal') els.messageForm?.reset();
}

function changeMonth(offset) {
  state.currentMonth += offset;
  if (state.currentMonth < 0) {
    state.currentMonth = 11;
    state.currentYear--;
  }
  if (state.currentMonth > 11) {
    state.currentMonth = 0;
    state.currentYear++;
  }
  setMonthLabel();
  renderEverything();
}

function setMonthLabel() {
  if (els.currentMonthDisplay) els.currentMonthDisplay.textContent = formatMonthYear(state.currentYear, state.currentMonth);
  if (els.workYear && !els.workYear.value) els.workYear.value = state.currentYear;
}

function normalizeEmployee(item) {
  return {
    ...item,
    overtime_rate: Number(item.overtime_rate || 0),
    full_month_salary: Number(item.full_month_salary || 0),
    bank_salary: Number(item.bank_salary || 0),
    shift_start: item.shift_start || DEFAULT_SHIFT_START,
    shift_end: item.shift_end || DEFAULT_SHIFT_END,
    active: item.active !== false
  };
}

function normalizeAttendance(item) {
  return {
    ...item,
    regular_hours: Number(item.regular_hours || 0),
    overtime_hours: Number(item.overtime_hours || 0),
    total_hours: Number(item.total_hours || 0),
    overtime_pay: Number(item.overtime_pay || 0),
    total_sessions: Number(item.total_sessions || 0)
  };
}

function normalizeSession(item) {
  return {
    ...item,
    worked_hours: Number(item.worked_hours || 0)
  };
}

function getStatusMeta(status) {
  if (status === 'approved') return { label: t('approved'), className: 'status-approved' };
  if (status === 'rejected') return { label: t('rejected'), className: 'status-rejected' };
  return { label: t('pending'), className: 'status-pending' };
}

function getAttendanceStatusClass(status) {
  switch (status) {
    case 'complete': return 'bg-emerald-50 text-emerald-700';
    case 'at_work': return 'bg-blue-50 text-blue-700';
    case 'overtime_open': return 'bg-violet-50 text-violet-700';
    case 'holiday': return 'bg-amber-50 text-amber-700';
    case 'day_off': return 'bg-slate-100 text-slate-700';
    case 'absent': return 'bg-rose-50 text-rose-700';
    default: return 'bg-slate-100 text-slate-700';
  }
}

function getAttendanceStatusLabel(status) {
  switch (status) {
    case 'complete': return t('complete');
    case 'at_work': return t('atWork');
    case 'overtime_open': return t('overtimeOpen');
    case 'holiday': return t('holiday');
    case 'day_off': return t('dayOff');
    case 'absent': return t('absent');
    default: return status || '-';
  }
}

function getRequestTypeLabel(type) {
  switch (type) {
    case 'leave_early': return t('requestLeaveEarly');
    case 'day_off': return t('requestDayOff');
    case 'weekend_work': return t('requestWeekendWork');
    case 'complaint': return t('requestComplaint');
    case 'shift_change': return t('requestShiftChange');
    default: return t('requestOther');
  }
}

function getPaymentMethodLabel(method) {
  switch (method) {
    case 'bank': return 'Bankë';
    case 'mixed': return 'Përzier';
    default: return 'Cash';
  }
}

function getSortDate(item) {
  if (item.type === 'attendance') return item.data.work_date;
  return item.data.created_at;
}

function getMonthKey(year, monthIndex) {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
}

function getDateString(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function combineDateTime(dateString, timeString) {
  return new Date(`${dateString}T${timeString}:00`);
}

function subtractMinutesFromTime(timeString, minutes) {
  const [h, m] = String(timeString).split(':').map(Number);
  const base = new Date(2000, 0, 1, h || 0, m || 0, 0);
  base.setMinutes(base.getMinutes() - minutes);
  return `${String(base.getHours()).padStart(2, '0')}:${String(base.getMinutes()).padStart(2, '0')}`;
}

function formatDate(value) {
  if (!value) return '-';
  const date = new Date(String(value).includes('T') ? value : `${value}T00:00:00`);
  return date.toLocaleDateString('sq-AL', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateTime(value) {
  if (!value) return '-';
  const date = new Date(value);
  return date.toLocaleString('sq-AL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatTime(value) {
  if (!value) return '-';
  const date = new Date(value);
  return date.toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' });
}

function formatMonthYear(year, monthIndex) {
  return new Date(year, monthIndex, 1).toLocaleDateString('sq-AL', { month: 'long', year: 'numeric' });
}

function formatMonthName(monthIndex) {
  return new Date(2026, monthIndex, 1).toLocaleDateString('sq-AL', { month: 'long' });
}

function getAvatarText(name) {
  return String(name || '?')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() || '')
    .join('') || '?';
}

function emptyState(text) {
  return `<div class="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-400">${escapeHtml(text)}</div>`;
}

function renderStars(value) {
  const rounded = Math.round(Number(value || 0));
  if (!rounded) return '☆☆☆☆☆';
  return '★'.repeat(rounded) + '☆'.repeat(Math.max(0, 5 - rounded));
}

function showToast(message, type = 'success') {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.className = `toast toast-${type}`;
  els.toast.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    els.toast.classList.add('hidden');
  }, 3200);
}

function setButtonLoading(button, isLoading, label = '') {
  if (!button) return;
  button.disabled = isLoading;
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.textContent = label;
    button.classList.add('opacity-70', 'cursor-not-allowed');
  } else {
    button.textContent = button.dataset.originalText || label;
    button.classList.remove('opacity-70', 'cursor-not-allowed');
  }
}

function togglePassword(inputId, buttonId) {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);
  if (!input || !button) return;

  input.type = input.type === 'password' ? 'text' : 'password';
  const icon = button.querySelector('i');
  if (icon) {
    icon.setAttribute('data-lucide', input.type === 'password' ? 'eye' : 'eye-off');
    lucide.createIcons();
  }
}

function round2(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function hashPassword(value) {
  const msgUint8 = new TextEncoder().encode(String(value));
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
function getVisibleAttendanceForCurrentView() {
  return state.attendance.filter(item => {
    const date = new Date(`${item.work_date}T00:00:00`);
    const monthMatch = date.getMonth() === state.currentMonth && date.getFullYear() === state.currentYear;
    const roleMatch = state.currentUser.role === 'admin' || item.user_id === state.currentUser.id;
    return monthMatch && roleMatch;
  }).sort((a, b) => new Date(b.work_date) - new Date(a.work_date));
}

function getAverageRatingForEmployee(employeeId) {
  const rows = state.reviews.filter(item => item.employee_id === employeeId);
  if (!rows.length) return 0;
  return rows.reduce((sum, item) => sum + Number(item.rating || 0), 0) / rows.length;
}

function getAverageRatingForVisibleEmployees() {
  const rows = getVisibleReviews();
  if (!rows.length) return 0;
  return rows.reduce((sum, item) => sum + Number(item.rating || 0), 0) / rows.length;
}

function countPaidHolidayDaysForMonth(userId, year, monthIndex) {
  return state.holidays.filter(item => {
    const d = new Date(`${item.holiday_date}T00:00:00`);
    return d.getFullYear() === year && d.getMonth() === monthIndex && item.is_paid;
  }).length;
}

function countPaidDayOffDaysForMonth(userId, year, monthIndex) {
  return state.dayOffs.filter(item => {
    const d = new Date(`${item.off_date}T00:00:00`);
    return item.user_id === userId && d.getFullYear() === year && d.getMonth() === monthIndex && item.is_paid;
  }).length;
}

function countApprovedFullDayLeavesForMonth(userId, year, monthIndex) {
  return state.requests.filter(item => {
    if (item.user_id !== userId || item.status !== 'approved' || !item.requested_date || !item.affects_entire_day) return false;
    const d = new Date(`${item.requested_date}T00:00:00`);
    return d.getFullYear() === year && d.getMonth() === monthIndex && (item.type === 'day_off' || item.type === 'leave_early');
  }).length;
}

function isPaidHoliday(workDate) {
  return !!state.holidays.find(item => item.holiday_date === workDate && item.is_paid);
}

function isPaidDayOff(userId, workDate) {
  return !!state.dayOffs.find(item => item.user_id === userId && item.off_date === workDate && item.is_paid);
}

function isSalaryPaidForMonth(employee, monthIndex, year) {
  return String(employee.salary_paid_month || '') === getMonthKey(year, monthIndex);
}

function getLastSevenDaysAttendance(userId) {
  const now = new Date();
  const rows = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const key = getDateString(date);
    const row = getAttendanceRecord(userId, key) || {
      work_date: key,
      total_hours: 0
    };
    rows.push(row);
  }

  return rows;
}

function exportAttendance() {
  const rows = getVisibleAttendanceForCurrentView();
  if (!rows.length) return showToast(t('noDataExport'), 'info');

  const csvRows = [[
    'Punonjesi',
    'Data',
    'Orari',
    'Hyrje/Dalje',
    'Ore normale',
    'Ore shtese',
    'Ore totale',
    'Paga ditore',
    'Statusi'
  ]];

  rows.forEach(row => {
    const user = getUserById(row.user_id);
    const schedule = getEffectiveSchedule(row.user_id, row.work_date);
    const sessions = getSessionsForDay(row.user_id, row.work_date)
      .map(session => `${session.session_type === 'overtime' ? 'OT ' : ''}${formatTime(session.check_in)}${session.check_out ? `-${formatTime(session.check_out)}` : '-.'}`)
      .join(' | ');

    csvRows.push([
      user?.full_name || '-',
      formatDate(row.work_date),
      `${schedule.start} - ${schedule.end}`,
      sessions,
      Number(row.regular_hours || 0).toFixed(2),
      Number(row.overtime_hours || 0).toFixed(2),
      Number(row.total_hours || 0).toFixed(2),
      getDailyPay(row.user_id, row.work_date, row).toFixed(2),
      getAttendanceStatusLabel(row.status)
    ]);
  });

  const csvContent = csvRows
    .map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(','))
    .join('\n');

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

function openModal(id) {
  document.body.classList.add('modal-open');
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal(id) {
  document.body.classList.remove('modal-open');
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  if (id === 'requestModal') els.requestForm?.reset();
  if (id === 'employeeModal') els.employeeForm?.reset();
  if (id === 'globalHolidayModal') els.globalHolidayForm?.reset();
  if (id === 'employeeDayOffModal') els.employeeDayOffForm?.reset();
  if (id === 'workdayConfigModal') els.workdayConfigForm?.reset();
  if (id === 'messageModal') els.messageForm?.reset();
}

function changeMonth(offset) {
  state.currentMonth += offset;
  if (state.currentMonth < 0) {
    state.currentMonth = 11;
    state.currentYear--;
  }
  if (state.currentMonth > 11) {
    state.currentMonth = 0;
    state.currentYear++;
  }
  setMonthLabel();
  renderEverything();
}

function setMonthLabel() {
  if (els.currentMonthDisplay) els.currentMonthDisplay.textContent = formatMonthYear(state.currentYear, state.currentMonth);
  if (els.workYear && !els.workYear.value) els.workYear.value = state.currentYear;
}

function normalizeEmployee(item) {
  return {
    ...item,
    overtime_rate: Number(item.overtime_rate || 0),
    full_month_salary: Number(item.full_month_salary || 0),
    bank_salary: Number(item.bank_salary || 0),
    shift_start: item.shift_start || DEFAULT_SHIFT_START,
    shift_end: item.shift_end || DEFAULT_SHIFT_END,
    active: item.active !== false
  };
}

function normalizeAttendance(item) {
  return {
    ...item,
    regular_hours: Number(item.regular_hours || 0),
    overtime_hours: Number(item.overtime_hours || 0),
    total_hours: Number(item.total_hours || 0),
    overtime_pay: Number(item.overtime_pay || 0),
    total_sessions: Number(item.total_sessions || 0)
  };
}

function normalizeSession(item) {
  return {
    ...item,
    worked_hours: Number(item.worked_hours || 0)
  };
}

function getStatusMeta(status) {
  if (status === 'approved') return { label: t('approved'), className: 'status-approved' };
  if (status === 'rejected') return { label: t('rejected'), className: 'status-rejected' };
  return { label: t('pending'), className: 'status-pending' };
}

function getAttendanceStatusClass(status) {
  switch (status) {
    case 'complete': return 'bg-emerald-50 text-emerald-700';
    case 'at_work': return 'bg-blue-50 text-blue-700';
    case 'overtime_open': return 'bg-violet-50 text-violet-700';
    case 'holiday': return 'bg-amber-50 text-amber-700';
    case 'day_off': return 'bg-slate-100 text-slate-700';
    case 'absent': return 'bg-rose-50 text-rose-700';
    default: return 'bg-slate-100 text-slate-700';
  }
}

function getAttendanceStatusLabel(status) {
  switch (status) {
    case 'complete': return t('complete');
    case 'at_work': return t('atWork');
    case 'overtime_open': return t('overtimeOpen');
    case 'holiday': return t('holiday');
    case 'day_off': return t('dayOff');
    case 'absent': return t('absent');
    default: return status || '-';
  }
}

function getRequestTypeLabel(type) {
  switch (type) {
    case 'leave_early': return t('requestLeaveEarly');
    case 'day_off': return t('requestDayOff');
    case 'weekend_work': return t('requestWeekendWork');
    case 'complaint': return t('requestComplaint');
    case 'shift_change': return t('requestShiftChange');
    default: return t('requestOther');
  }
}

function getPaymentMethodLabel(method) {
  switch (method) {
    case 'bank': return 'Bankë';
    case 'mixed': return 'Përzier';
    default: return 'Cash';
  }
}

function getSortDate(item) {
  if (item.type === 'attendance') return item.data.work_date;
  return item.data.created_at;
}

function getMonthKey(year, monthIndex) {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
}

function getDateString(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function combineDateTime(dateString, timeString) {
  return new Date(`${dateString}T${timeString}:00`);
}

function subtractMinutesFromTime(timeString, minutes) {
  const [h, m] = String(timeString).split(':').map(Number);
  const base = new Date(2000, 0, 1, h || 0, m || 0, 0);
  base.setMinutes(base.getMinutes() - minutes);
  return `${String(base.getHours()).padStart(2, '0')}:${String(base.getMinutes()).padStart(2, '0')}`;
}

function formatDate(value) {
  if (!value) return '-';
  const date = new Date(String(value).includes('T') ? value : `${value}T00:00:00`);
  return date.toLocaleDateString('sq-AL', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateTime(value) {
  if (!value) return '-';
  const date = new Date(value);
  return date.toLocaleString('sq-AL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatTime(value) {
  if (!value) return '-';
  const date = new Date(value);
  return date.toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' });
}

function formatMonthYear(year, monthIndex) {
  return new Date(year, monthIndex, 1).toLocaleDateString('sq-AL', { month: 'long', year: 'numeric' });
}

function formatMonthName(monthIndex) {
  return new Date(2026, monthIndex, 1).toLocaleDateString('sq-AL', { month: 'long' });
}

function getAvatarText(name) {
  return String(name || '?')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() || '')
    .join('') || '?';
}

function emptyState(text) {
  return `<div class="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-400">${escapeHtml(text)}</div>`;
}

function renderStars(value) {
  const rounded = Math.round(Number(value || 0));
  if (!rounded) return '☆☆☆☆☆';
  return '★'.repeat(rounded) + '☆'.repeat(Math.max(0, 5 - rounded));
}

function showToast(message, type = 'success') {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.className = `toast toast-${type}`;
  els.toast.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    els.toast.classList.add('hidden');
  }, 3200);
}

function setButtonLoading(button, isLoading, label = '') {
  if (!button) return;
  button.disabled = isLoading;
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.textContent = label;
    button.classList.add('opacity-70', 'cursor-not-allowed');
  } else {
    button.textContent = button.dataset.originalText || label;
    button.classList.remove('opacity-70', 'cursor-not-allowed');
  }
}

function togglePassword(inputId, buttonId) {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);
  if (!input || !button) return;

  input.type = input.type === 'password' ? 'text' : 'password';
  const icon = button.querySelector('i');
  if (icon) {
    icon.setAttribute('data-lucide', input.type === 'password' ? 'eye' : 'eye-off');
    lucide.createIcons();
  }
}

function round2(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function hashPassword(value) {
  const msgUint8 = new TextEncoder().encode(String(value));
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
