
const SUPABASE_URL = "https://nwhtnuuwijwsuraintux.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_XyOE8tSdywP1F8K3x7STnA_Bavtz8gD";

const STANDARD_START_HOUR = 8;
const STANDARD_END_HOUR = 17;
const STANDARD_DAY_HOURS = 9;
const EARLIEST_CHECKIN_HOUR = 7;
const EARLIEST_CHECKIN_MINUTE = 59;

const LANGUAGES = {
  sq: {
    code: 'sq-AL',
    strings: {
      loginWelcome:'Mirësevini', loginSubtitle:'Hyni në sistemin e menaxhimit të punonjësve',
      loginIdentifierLabel:'Email ose username', loginIdentifierPlaceholder:'Shkruaj email-in ose username-in',
      password:'Fjalëkalimi', loginHelp:'Ndihmë për qasje', rememberMe:'Më mbaj mend në këtë pajisje',
      login:'Hyni', loginLoading:'Duke hyrë...', demoInfo:'Hyr me email ose username.',
      standardSchedule:'Orari normal: 08:00 - 17:00', overtimeRule:'Orët shtesë paguhen sipas normës së caktuar për punëtorin.',
      panelProfessional:'Panel profesional', panel:'Panel', menu:'Menu', dashboard:'Dashboard', employees:'Punonjësit',
      requests:'Kërkesat', payroll:'Pagat', attendance:'Pjesëmarrja', logout:'Dilni', newRequest:'Kërkesë e Re',
      standardCheckIn:'Check In', standardCheckOut:'Check Out', overtimeCheckIn:'Orë shtesë: Check In', overtimeCheckOut:'Orë shtesë: Check Out',
      totalEmployees:'Total punonjësish', hoursThisMonth:'Orë këtë muaj', salaryDueThisMonth:"Paga për t'u dhënë", bankDueThisMonth:'Paga në bankë',
      pendingRequests:'Kërkesa në pritje', salaryChart:'Grafiku i pagave', salaryChartHint:"Për t'u dhënë këtë muaj",
      quickInfo:'Informacion i shpejtë', todayStatusTitle:'Statusi i sotëm', overtimeTodayTitle:'Orë shtesë sot', overtimePayTodayTitle:'Pagesë shtesë sot',
      accountTypeTitle:'Lloji i llogarisë', employeesTitle:'Menaxhimi i Punonjësve', employeesSubtitle:'Shtoni, editoni, fshini dhe filtroni punonjësit',
      addEmployee:'Shto Punonjës', searchEmployeePlaceholder:'Kërko sipas emrit, username ose email-it', allDepartments:'Të gjitha departamentet',
      employeeCol:'Punonjësi', departmentCol:'Departamenti', fixedSalaryCol:'Rroga fikse', bankSalaryCol:'Rroga në bankë',
      overtimeRateCol:'Orë shtesë / orë', statusCol:'Statusi', actionsCol:'Veprime', requestsTitle:'Kërkesat dhe Ankesat',
      requestsSubtitle:'Punonjësi dërgon kërkesa, admini i aprovon ose i refuzon', payrollTitle:'Pagat',
      payrollSubtitle:"Rroga fikse, paga në bankë, zbritjet sipas orëve të munguara dhe orët shtesë",
      summary:'Përmbledhje', fullSalaryTotal:'Rroga të plota', totalPayroll:"Për t'u dhënë", totalBankPayroll:'Për bankë',
      totalHours:'Orë totale', workedHoursCol:'Orë të llogaritura', missingHoursCol:'Orë të munguara', paidStatusCol:'Statusi i pagesës',
      attendanceTitle:'Pjesëmarrja', attendanceSubtitle:'Check in/out me më shumë se një hyrje në ditë, auto-checkout në 17:00 dhe CSV eksport',
      export:'Eksporto', date:'Data', totalHoursCol:'Orë normale', overtimeHoursCol:'Orë shtesë', overtimePayCol:'Pagesë shtesë',
      standardSessionsCol:'Seanca normale', overtimeSessionsCol:'Seanca shtesë', requestNewTitle:'Kërkesë e Re',
      requestNewSubtitle:'Dërgo një kërkesë ose ankesë për adminin', requestType:'Lloji i kërkesës', requestDate:'Data e kërkuar',
      requestHours:'Orë të kërkuara', requestDescription:'Përshkrimi', requestDescriptionPlaceholder:'Shkruaj arsyen e kërkesës',
      cancel:'Anulo', send:'Dërgo', employeeModalAdd:'Shto Punonjës', employeeModalEdit:'Edito Punonjësin',
      employeeModalSubtitle:'Krijo ose përditëso një punonjës', fullName:'Emri i plotë', username:'Username', email:'Email',
      role:'Roli', newPassword:'Fjalëkalimi i ri', save:'Ruaj', adminRole:'Administrator', employeeRole:'Punonjës',
      active:'Aktiv', inactive:'Çaktivizuar', pending:'Në pritje', approved:'Aprovuar', rejected:'Refuzuar', paid:'E paguar',
      unpaid:'Pa paguar', debtFree:'Pa borgj', debtOpen:'Ka borgj', noRecentActivity:'Nuk ka aktivitet të fundit.',
      noRequests:"Nuk ka kërkesa për t’u shfaqur.", noAttendanceMonth:'Nuk ka regjistrime për këtë muaj.', noEmployees:'Nuk u gjet asnjë punonjës.',
      noPayrollEmployees:'Nuk ka punonjës.', requestLeaveEarly:'Lëshim herët', requestDayOff:'Ditë pushimi',
      requestWeekendWork:'Punë në vikend', requestComplaint:'Ankesë', requestOther:'Tjetër', fillLoginFields:'Plotëso email/username dhe fjalëkalimin.',
      loginError:'Email/username ose fjalëkalim i pasaktë.', loginUnexpectedError:'Ndodhi një gabim gjatë hyrjes.',
      welcomeUser:'Mirësevini', loggedOut:'U çkyçët me sukses.', accessDenied:'Nuk keni qasje në këtë faqe.',
      todayNoCheckin:'Nuk keni bërë check in sot.', todayWorkingSince:'Në punë që nga', todayFinished:'Përfunduar',
      employeeNameEmailRequired:'Emri, username dhe email-i janë të detyrueshëm.', duplicateEmail:'Ky email ekziston tashmë.',
      duplicateUsername:'Ky username ekziston tashmë.', employeeUpdated:'Punonjësi u përditësua me sukses.',
      employeeAdded:'Punonjësi u shtua me sukses.', employeeSaveError:'Nuk u ruajt punonjësi.', employeeDeleteSelf:'Nuk mund ta fshini vetveten.',
      confirmDelete:'A je i sigurt që dëshiron ta fshish', employeeDeleted:'Punonjësi u fshi me sukses.', employeeDeleteError:'Nuk u fshi punonjësi.',
      requestDescriptionRequired:'Përshkrimi është i detyrueshëm.', requestSent:'Kërkesa u dërgua me sukses.', requestSendError:'Nuk u dërgua kërkesa.',
      requestApproved:'Kërkesa u aprovua.', requestRejected:'Kërkesa u refuzua.', requestUpdateError:'Nuk u përditësua kërkesa.',
      approvalPrompt:'Shkruaj mesazh aprovimi (opsionale):', rejectionPrompt:'Shkruaj arsyen e refuzimit (opsionale):', adminResponse:'Përgjigjja e adminit',
      standardCheckinSuccess:'Check in u regjistrua me sukses.', standardCheckoutSuccess:'Check out u regjistrua me sukses.',
      autoCheckoutSuccess:'Check out automatik në ora 17:00 u regjistrua.', attendanceSaveError:'Nuk u ruajt pjesëmarrja.',
      overtimeBeforeFive:'Orët shtesë mund të fillohen vetëm pas orës 17:00.', overtimeNeedStandardDone:'Së pari duhet të mbyllen seancat normale.',
      overtimeStartSuccess:'Orët shtesë filluan me sukses.', overtimeEndSuccess:'Orët shtesë u mbyllën me sukses.', overtimeAlreadyDone:'Orët shtesë për sot janë kompletuar.',
      weekendBlocked:'Sot është ditë pushimi. Duhet aprovim nga admini për të punuar.', earlyCheckinBlocked:'Check in nuk lejohet para orës 07:59.',
      standardAfterFiveBlocked:'Pas orës 17:00 përdor butonin e orëve shtesë.', maxRegularHoursReached:'Për sot i keni mbushur orët normale.',
      markPaid:'Konfirmo pagën', salaryPaidSuccess:'Paga u konfirmua me sukses.', salaryPaidError:'Nuk u konfirmua paga.',
      requestHoursLabelHint:'P.sh. 2 orë për dalje herët', languageChanged:'Gjuha u ndryshua.', standardCompleted:'Orari normal i plotësuar',
      overtimeOpen:'Orë shtesë aktive', atWork:'Në punë', complete:'Kompletuar', unknownUser:'Përdorues i panjohur',
      currentMonth:'Muaji aktiv', workingDaysThisMonth:'Ditë pune këtë muaj', dueVsFull:'Paga për t’u dhënë krahasuar me pagën e plotë'
    }
  },
  en: { code:'en-US', strings: {} },
  bs: { code:'bs-BA', strings: {} }
};
LANGUAGES.en.strings = {
  ...LANGUAGES.sq.strings,
  loginWelcome:'Welcome', loginSubtitle:'Sign in to the employee management system', loginIdentifierLabel:'Email or username',
  loginIdentifierPlaceholder:'Enter email or username', password:'Password', loginHelp:'Access help', rememberMe:'Remember me on this device',
  login:'Sign In', loginLoading:'Signing in...', demoInfo:'Sign in using email or username.', standardSchedule:'Regular schedule: 08:00 - 17:00',
  overtimeRule:'Overtime is paid using the rate set for each employee.', panelProfessional:'Professional panel', panel:'Panel', menu:'Menu',
  employees:'Employees', requests:'Requests', payroll:'Payroll', attendance:'Attendance', logout:'Logout', newRequest:'New Request',
  salaryDueThisMonth:'Salary due', bankDueThisMonth:'Bank salary due', pendingRequests:'Pending requests', salaryChart:'Salary chart',
  salaryChartHint:'Due this month', quickInfo:'Quick info', todayStatusTitle:'Today status', overtimeTodayTitle:'Overtime today',
  overtimePayTodayTitle:'Overtime pay today', accountTypeTitle:'Account type', employeesTitle:'Employee Management',
  employeesSubtitle:'Add, edit, delete and filter employees', addEmployee:'Add Employee', searchEmployeePlaceholder:'Search by name, username or email',
  allDepartments:'All departments', employeeCol:'Employee', departmentCol:'Department', fixedSalaryCol:'Fixed salary', bankSalaryCol:'Bank salary',
  overtimeRateCol:'Overtime / hour', statusCol:'Status', actionsCol:'Actions', requestsTitle:'Requests and Complaints',
  requestsSubtitle:'Employees send requests, admin approves or rejects them', payrollTitle:'Payroll',
  payrollSubtitle:'Fixed salary, bank salary, deductions for missed hours and overtime', summary:'Summary', fullSalaryTotal:'Full salaries',
  totalPayroll:'Due to pay', totalBankPayroll:'Bank total', totalHours:'Total hours', workedHoursCol:'Credited hours', missingHoursCol:'Missing hours',
  paidStatusCol:'Payment', attendanceTitle:'Attendance', attendanceSubtitle:'Check in/out with multiple sessions per day, 5 PM auto-checkout and CSV export',
  export:'Export', date:'Date', totalHoursCol:'Regular hours', overtimeHoursCol:'Overtime hours', overtimePayCol:'Overtime pay',
  standardSessionsCol:'Regular sessions', overtimeSessionsCol:'Overtime sessions', requestNewTitle:'New Request',
  requestNewSubtitle:'Send a request or complaint to admin', requestType:'Request type', requestDate:'Requested date', requestHours:'Requested hours',
  requestDescription:'Description', requestDescriptionPlaceholder:'Write the reason for the request', cancel:'Cancel', send:'Send',
  employeeModalAdd:'Add Employee', employeeModalEdit:'Edit Employee', employeeModalSubtitle:'Create or update an employee', fullName:'Full name',
  role:'Role', newPassword:'New password', save:'Save', adminRole:'Administrator', employeeRole:'Employee', active:'Active', inactive:'Inactive',
  pending:'Pending', approved:'Approved', rejected:'Rejected', paid:'Paid', unpaid:'Unpaid', debtFree:'No debt', debtOpen:'Debt open',
  noRecentActivity:'No recent activity.', noRequests:'No requests to display.', noAttendanceMonth:'No records for this month.',
  noEmployees:'No employees found.', noPayrollEmployees:'No employees.', requestLeaveEarly:'Leave early', requestDayOff:'Day off',
  requestWeekendWork:'Weekend work', requestComplaint:'Complaint', requestOther:'Other', fillLoginFields:'Enter email/username and password.',
  loginError:'Incorrect email/username or password.', loginUnexpectedError:'An error occurred during sign in.', welcomeUser:'Welcome',
  loggedOut:'You logged out successfully.', accessDenied:'You do not have access to this page.', employeeNameEmailRequired:'Name, username and email are required.',
  duplicateEmail:'This email already exists.', duplicateUsername:'This username already exists.', employeeUpdated:'Employee updated successfully.',
  employeeAdded:'Employee added successfully.', employeeSaveError:'Employee was not saved.', employeeDeleteSelf:'You cannot delete yourself.',
  confirmDelete:'Are you sure you want to delete', employeeDeleted:'Employee deleted successfully.', employeeDeleteError:'Employee was not deleted.',
  requestDescriptionRequired:'Description is required.', requestSent:'Request sent successfully.', requestSendError:'Request was not sent.',
  requestApproved:'Request approved.', requestRejected:'Request rejected.', requestUpdateError:'Request was not updated.',
  approvalPrompt:'Write an approval note (optional):', rejectionPrompt:'Write the rejection reason (optional):', adminResponse:'Admin response',
  standardCheckinSuccess:'Check in saved successfully.', standardCheckoutSuccess:'Check out saved successfully.', autoCheckoutSuccess:'Automatic 5 PM checkout saved.',
  attendanceSaveError:'Attendance was not saved.', overtimeBeforeFive:'Overtime can start only after 5 PM.', overtimeNeedStandardDone:'Regular sessions must be closed first.',
  overtimeStartSuccess:'Overtime started successfully.', overtimeEndSuccess:'Overtime ended successfully.', overtimeAlreadyDone:'Today overtime is already completed.',
  weekendBlocked:'Today is a day off. Admin approval is required to work.', earlyCheckinBlocked:'Check in is not allowed before 07:59.',
  standardAfterFiveBlocked:'After 5 PM use the overtime button.', maxRegularHoursReached:'Today regular hours are already complete.',
  markPaid:'Confirm salary', salaryPaidSuccess:'Salary confirmed successfully.', salaryPaidError:'Salary confirmation failed.',
  requestHoursLabelHint:'For example 2 hours for leaving early', languageChanged:'Language changed.', standardCompleted:'Regular shift completed',
  overtimeOpen:'Overtime active', atWork:'At work', complete:'Complete', unknownUser:'Unknown user', currentMonth:'Active month', workingDaysThisMonth:'Working days this month',
  dueVsFull:'Due salary compared to full salary'
};
LANGUAGES.bs.strings = {
  ...LANGUAGES.sq.strings,
  loginWelcome:'Dobrodošli', loginSubtitle:'Prijavite se u sistem za upravljanje zaposlenima', loginIdentifierLabel:'Email ili korisničko ime',
  loginIdentifierPlaceholder:'Unesite email ili korisničko ime', password:'Lozinka', loginHelp:'Pomoć za pristup', rememberMe:'Zapamti me na ovom uređaju',
  login:'Prijava', loginLoading:'Prijavljivanje...', demoInfo:'Prijavite se emailom ili korisničkim imenom.', standardSchedule:'Redovno radno vrijeme: 08:00 - 17:00',
  overtimeRule:'Prekovremeni rad se plaća prema stopi dodijeljenoj zaposleniku.', panelProfessional:'Profesionalni panel', employees:'Zaposleni',
  requests:'Zahtjevi', payroll:'Plate', attendance:'Prisustvo', logout:'Odjava', newRequest:'Novi zahtjev', salaryDueThisMonth:'Plata za isplatu',
  bankDueThisMonth:'Plata za banku', pendingRequests:'Zahtjevi na čekanju', salaryChart:'Grafikon plata', salaryChartHint:'Za isplatu ovog mjeseca',
  quickInfo:'Brze informacije', todayStatusTitle:'Današnji status', overtimeTodayTitle:'Prekovremeni danas', overtimePayTodayTitle:'Prekovremena isplata danas',
  accountTypeTitle:'Vrsta računa', employeesTitle:'Upravljanje zaposlenima', employeesSubtitle:'Dodajte, uredite, obrišite i filtrirajte zaposlene',
  addEmployee:'Dodaj zaposlenog', searchEmployeePlaceholder:'Pretraga po imenu, korisničkom imenu ili emailu', allDepartments:'Svi odjeli',
  employeeCol:'Zaposleni', departmentCol:'Odjel', fixedSalaryCol:'Fiksna plata', bankSalaryCol:'Plata u banci', overtimeRateCol:'Prekovremeni / sat',
  statusCol:'Status', actionsCol:'Akcije', requestsTitle:'Zahtjevi i žalbe', requestsSubtitle:'Zaposleni šalje zahtjeve, admin ih odobrava ili odbija',
  payrollTitle:'Plate', payrollSubtitle:'Fiksna plata, plata u banci, odbici za propuštene sate i prekovremeni rad', summary:'Sažetak', fullSalaryTotal:'Pune plate',
  totalPayroll:'Za isplatu', totalBankPayroll:'Ukupno za banku', totalHours:'Ukupni sati', workedHoursCol:'Priznati sati', missingHoursCol:'Nedostajući sati',
  paidStatusCol:'Plaćanje', attendanceTitle:'Prisustvo', attendanceSubtitle:'Check in/out sa više ulazaka dnevno, automatski check-out u 17:00 i CSV izvoz',
  export:'Izvezi', date:'Datum', totalHoursCol:'Redovni sati', overtimeHoursCol:'Prekovremeni sati', overtimePayCol:'Prekovremena isplata',
  standardSessionsCol:'Redovne sesije', overtimeSessionsCol:'Prekovremene sesije', requestNewTitle:'Novi zahtjev', requestNewSubtitle:'Pošaljite zahtjev ili žalbu administratoru',
  requestType:'Vrsta zahtjeva', requestDate:'Traženi datum', requestHours:'Traženi sati', requestDescription:'Opis', requestDescriptionPlaceholder:'Napišite razlog zahtjeva',
  cancel:'Otkaži', send:'Pošalji', employeeModalAdd:'Dodaj zaposlenog', employeeModalEdit:'Uredi zaposlenog', employeeModalSubtitle:'Kreiraj ili ažuriraj zaposlenog',
  fullName:'Puno ime', role:'Uloga', newPassword:'Nova lozinka', save:'Sačuvaj', adminRole:'Administrator', employeeRole:'Zaposleni', active:'Aktivan',
  inactive:'Neaktivan', pending:'Na čekanju', approved:'Odobreno', rejected:'Odbijeno', paid:'Plaćeno', unpaid:'Neplaćeno', debtFree:'Bez duga', debtOpen:'Postoji dug',
  noRecentActivity:'Nema nedavnih aktivnosti.', noRequests:'Nema zahtjeva za prikaz.', noAttendanceMonth:'Nema evidencije za ovaj mjesec.', noEmployees:'Nema pronađenih zaposlenih.',
  noPayrollEmployees:'Nema zaposlenih.', requestLeaveEarly:'Raniji odlazak', requestDayOff:'Slobodan dan', requestWeekendWork:'Vikend rad',
  requestComplaint:'Žalba', requestOther:'Ostalo', fillLoginFields:'Unesite email/korisničko ime i lozinku.', loginError:'Pogrešan email/korisničko ime ili lozinka.',
  loginUnexpectedError:'Došlo je do greške pri prijavi.', welcomeUser:'Dobrodošli', loggedOut:'Uspješno ste se odjavili.', accessDenied:'Nemate pristup ovoj stranici.',
  employeeNameEmailRequired:'Ime, korisničko ime i email su obavezni.', duplicateEmail:'Ovaj email već postoji.', duplicateUsername:'Ovo korisničko ime već postoji.',
  employeeUpdated:'Zaposleni je uspješno ažuriran.', employeeAdded:'Zaposleni je uspješno dodan.', employeeSaveError:'Zaposleni nije sačuvan.',
  employeeDeleteSelf:'Ne možete obrisati sami sebe.', confirmDelete:'Da li ste sigurni da želite obrisati', employeeDeleted:'Zaposleni je uspješno obrisan.',
  employeeDeleteError:'Zaposleni nije obrisan.', requestDescriptionRequired:'Opis je obavezan.', requestSent:'Zahtjev je uspješno poslan.', requestSendError:'Zahtjev nije poslan.',
  requestApproved:'Zahtjev je odobren.', requestRejected:'Zahtjev je odbijen.', requestUpdateError:'Zahtjev nije ažuriran.', approvalPrompt:'Napišite poruku odobrenja (opcionalno):',
  rejectionPrompt:'Napišite razlog odbijanja (opcionalno):', adminResponse:'Odgovor administratora', standardCheckinSuccess:'Check in uspješno sačuvan.',
  standardCheckoutSuccess:'Check out uspješno sačuvan.', autoCheckoutSuccess:'Automatski check-out u 17:00 je sačuvan.', attendanceSaveError:'Prisustvo nije sačuvano.',
  overtimeBeforeFive:'Prekovremeni rad može početi tek nakon 17:00.', overtimeNeedStandardDone:'Redovne sesije moraju prvo biti zatvorene.', overtimeStartSuccess:'Prekovremeni rad je uspješno pokrenut.',
  overtimeEndSuccess:'Prekovremeni rad je uspješno završen.', overtimeAlreadyDone:'Današnji prekovremeni rad je već završen.', weekendBlocked:'Danas je neradni dan. Potrebno je odobrenje administratora za rad.',
  earlyCheckinBlocked:'Check in nije dozvoljen prije 07:59.', standardAfterFiveBlocked:'Nakon 17:00 koristite dugme za prekovremeni rad.', maxRegularHoursReached:'Današnji redovni sati su već završeni.',
  markPaid:'Potvrdi platu', salaryPaidSuccess:'Plata je uspješno potvrđena.', salaryPaidError:'Potvrda plate nije uspjela.', requestHoursLabelHint:'Na primjer 2 sata za raniji odlazak',
  languageChanged:'Jezik je promijenjen.', standardCompleted:'Redovna smjena završena', overtimeOpen:'Prekovremeni aktivan', atWork:'Na poslu', complete:'Završeno',
  unknownUser:'Nepoznat korisnik', currentMonth:'Aktivni mjesec', workingDaysThisMonth:'Radni dani ovog mjeseca', dueVsFull:'Plata za isplatu u odnosu na punu platu'
};

const state = {
  supabase: null,
  currentUser: null,
  employees: [],
  requests: [],
  sessions: [],
  payrollConfirmations: [],
  currentPage: 'dashboard',
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  language: localStorage.getItem('ems_language') || 'sq',
  chart: null,
};

const els = {};

document.addEventListener('DOMContentLoaded', initApp);

async function initApp() {
  cacheElements();
  bindEvents();
  applyLanguage(false);
  setMonthLabel();
  if (!isSupabaseConfigured()) {
    showConfigBanner('Vendos SUPABASE_URL dhe SUPABASE_ANON_KEY në app.js.');
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
  showLogin();
}

function cacheElements() {
  [
    'configBanner','loginScreen','mainApp','loginForm','loginIdentifier','loginPassword','rememberMe','loginSubmitBtn','forgotPasswordBtn',
    'dashboardTitle','dashboardSubtitle','userName','userRole','userAvatar','menuEmployees','menuPayroll','mobileMenuEmployees','mobileMenuPayroll',
    'requestBadge','requestsList','employeesTable','searchEmployee','filterDepartment','employeeForm','employeeModal','employeeModalTitle',
    'employeeId','employeeName','employeeUsername','employeeEmail','employeeDepartment','employeeSalary','employeeBankSalary','employeeOvertimeRate','employeePassword','employeeRole',
    'requestForm','requestModal','requestType','requestDate','requestHours','requestDescription','requestHoursWrap','requestDateWrap',
    'statTotalEmployees','statHoursThisMonth','statSalaryThisMonth','statBankThisMonth','statPendingRequests','payrollTable','totalPayroll',
    'totalBankPayroll','totalHoursAll','totalFullSalary','attendanceTable','currentMonthDisplay','todayStatus','accountTypeLabel',
    'standardBtn','standardBtnText','overtimeBtn','overtimeBtnText','toast','mobileMenu','dashboard','overtimeTodayHours','overtimeTodayPay',
    'languageSwitcher','mobileLanguageSwitcher','salaryChart'
  ].forEach(id => { els[id] = document.getElementById(id); });
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
  document.getElementById('forgotPasswordBtn')?.addEventListener('click', () => showToast('admin / admin123 | employee / employee123', 'info'));
  document.getElementById('toggleLoginPassword')?.addEventListener('click', () => togglePassword('loginPassword', 'toggleLoginPassword'));
  document.getElementById('toggleEmployeePassword')?.addEventListener('click', () => togglePassword('employeePassword', 'toggleEmployeePassword'));
  document.getElementById('requestType')?.addEventListener('change', updateRequestFormUi);

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
  els.searchEmployee?.addEventListener('input', renderEmployees);
  els.filterDepartment?.addEventListener('change', renderEmployees);
  window.addEventListener('click', event => {
    if (event.target?.id === 'requestModal') closeModal('requestModal');
    if (event.target?.id === 'employeeModal') closeModal('employeeModal');
  });
}

function t(key) {
  return LANGUAGES[state.language]?.strings?.[key] || LANGUAGES.sq.strings[key] || key;
}
function locale() { return LANGUAGES[state.language]?.code || 'sq-AL'; }

function applyLanguage(showMessage = false) {
  document.documentElement.lang = state.language;
  [els.languageSwitcher, els.mobileLanguageSwitcher].forEach(select => { if (select) select.value = state.language; });
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.title = 'Trendy Home EMS';
  updateRequestFormUi();
  if (state.currentUser) {
    applyRoleUi();
    renderEverything();
  } else {
    setMonthLabel();
    lucide.createIcons();
  }
  if (showMessage) showToast(t('languageChanged'), 'info');
}

function isSupabaseConfigured() {
  return SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('PASTE');
}
function showConfigBanner(message) { els.configBanner.textContent = message; els.configBanner.classList.remove('hidden'); }
function hideConfigBanner() { els.configBanner.classList.add('hidden'); }

async function handleLogin(event) {
  event.preventDefault();
  const identifier = els.loginIdentifier.value.trim().toLowerCase();
  const password = els.loginPassword.value;
  if (!identifier || !password) return showToast(t('fillLoginFields'), 'error');
  setButtonLoading(els.loginSubmitBtn, true, t('loginLoading'));
  try {
    const passwordHash = await hashPassword(password);
    const { data, error } = await state.supabase
      .from('employees').select('*')
      .eq('password_hash', passwordHash)
      .eq('active', true);
    if (error) throw error;
    const user = (data || []).map(normalizeEmployee).find(item => (item.email || '').toLowerCase() === identifier || (item.username || '').toLowerCase() === identifier);
    if (!user) return showToast(t('loginError'), 'error');
    state.currentUser = user;
    if (els.rememberMe.checked) {
      localStorage.setItem('ems_remembered_identifier', identifier);
      localStorage.setItem('ems_current_user_id', state.currentUser.id);
    } else {
      localStorage.removeItem('ems_remembered_identifier');
      localStorage.setItem('ems_current_user_id', state.currentUser.id);
    }
    await afterLogin();
    showToast(`${t('welcomeUser')}, ${state.currentUser.full_name}!`);
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
  navigateTo('dashboard');
}

function applyRoleUi() {
  const isAdmin = state.currentUser?.role === 'admin';
  els.userName.textContent = state.currentUser.full_name;
  els.userRole.textContent = isAdmin ? t('adminRole') : t('employeeRole');
  els.userAvatar.textContent = getAvatarText(state.currentUser.full_name);
  els.dashboardTitle.textContent = t('dashboard');
  els.dashboardSubtitle.textContent = t('payrollSubtitle');
  els.accountTypeLabel.textContent = isAdmin ? t('adminRole') : t('employeeRole');
  [els.menuEmployees, els.menuPayroll, els.mobileMenuEmployees, els.mobileMenuPayroll].forEach(el => el?.classList.toggle('hidden', !isAdmin));
}

async function refreshAllData() {
  await Promise.all([fetchEmployees(), fetchRequests(), fetchSessions(), fetchPayrollConfirmations()]);
  await autoCloseExpiredSessions();
  renderEverything();
}

async function fetchEmployees() {
  const { data, error } = await state.supabase.from('employees').select('*').order('created_at', { ascending: true });
  if (error) throw error;
  state.employees = (data || []).map(normalizeEmployee);
  if (state.currentUser) {
    const match = state.employees.find(x => x.id === state.currentUser.id);
    if (match) state.currentUser = match;
  }
}
async function fetchRequests() {
  const { data, error } = await state.supabase.from('requests').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  state.requests = data || [];
}
async function fetchSessions() {
  const { data, error } = await state.supabase.from('attendance_sessions').select('*').order('work_date', { ascending: false }).order('check_in', { ascending: true });
  if (error) throw error;
  state.sessions = (data || []).map(x => ({ ...x, hours_worked: Number(x.hours_worked || 0) }));
}
async function fetchPayrollConfirmations() {
  const { data, error } = await state.supabase.from('payroll_confirmations').select('*').order('confirmed_at', { ascending: false });
  if (error) throw error;
  state.payrollConfirmations = data || [];
}

async function autoCloseExpiredSessions() {
  const now = new Date();
  const toUpdate = [];
  for (const session of state.sessions) {
    if (session.check_out) continue;
    if (session.session_type !== 'standard') continue;
    const end = new Date(`${session.work_date}T17:00:00`);
    if (now >= end) {
      const hours = Math.max(0, Number(((end - new Date(session.check_in)) / 36e5).toFixed(2)));
      toUpdate.push({ id: session.id, check_out: end.toISOString(), hours_worked: hours, auto_closed: true });
    }
  }
  if (!toUpdate.length) return;
  for (const item of toUpdate) {
    await state.supabase.from('attendance_sessions').update({
      check_out: item.check_out,
      hours_worked: item.hours_worked,
      auto_closed: true
    }).eq('id', item.id);
  }
  await fetchSessions();
  if (toUpdate.length) showToast(t('autoCheckoutSuccess'), 'info');
}

function renderEverything() {
  updateDashboardStats();
  renderRequests();
  renderEmployees();
  renderPayroll();
  renderAttendance();
  updateAttendanceButtons();
  renderSalaryChart();
  lucide.createIcons();
}

function showLogin() { els.loginScreen.classList.remove('hidden'); els.mainApp.classList.add('hidden'); }
function showMainApp() { els.loginScreen.classList.add('hidden'); els.mainApp.classList.remove('hidden'); }
function logout() {
  state.currentUser = null;
  localStorage.removeItem('ems_current_user_id');
  showLogin();
  showToast(t('loggedOut'));
}
function navigateTo(page) {
  if ((page === 'employees' || page === 'payroll') && state.currentUser.role !== 'admin') return showToast(t('accessDenied'), 'error');
  state.currentPage = page;
  document.querySelectorAll('.page-view').forEach(view => view.classList.toggle('active', view.id === page));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('nav-active', btn.dataset.page === page));
  if (page === 'employees') renderEmployees();
  if (page === 'requests') renderRequests();
  if (page === 'payroll') renderPayroll();
  if (page === 'attendance') renderAttendance();
  lucide.createIcons();
}
function toggleMobileMenu() { els.mobileMenu.classList.toggle('hidden'); }

function updateDashboardStats() {
  const employees = getEmployeeUsers();
  const payrollRows = employees.map(getPayrollForEmployee);
  const totalDue = payrollRows.reduce((s, x) => s + x.dueGross, 0);
  const totalBank = payrollRows.reduce((s, x) => s + x.dueBank, 0);
  const pendingRequests = getVisibleRequests().filter(x => x.status === 'pending').length;
  const hours = state.currentUser.role === 'admin'
    ? payrollRows.reduce((s, x) => s + x.creditedHours + x.overtimeHours, 0)
    : getPayrollForEmployee(state.currentUser).creditedHours + getPayrollForEmployee(state.currentUser).overtimeHours;

  els.statTotalEmployees.textContent = employees.length;
  els.statHoursThisMonth.textContent = `${hours.toFixed(2)}h`;
  els.statSalaryThisMonth.textContent = `€${(state.currentUser.role === 'admin' ? totalDue : getPayrollForEmployee(state.currentUser).dueGross).toFixed(2)}`;
  els.statBankThisMonth.textContent = `€${(state.currentUser.role === 'admin' ? totalBank : getPayrollForEmployee(state.currentUser).dueBank).toFixed(2)}`;
  els.statPendingRequests.textContent = String(pendingRequests);
  if (pendingRequests > 0) {
    els.requestBadge.textContent = String(pendingRequests);
    els.requestBadge.classList.remove('hidden');
  } else els.requestBadge.classList.add('hidden');

  const today = getTodayStatusSummary(state.currentUser.role === 'admin');
  els.todayStatus.textContent = today.label;
  els.overtimeTodayHours.textContent = `${today.overtimeHours.toFixed(2)}h`;
  els.overtimeTodayPay.textContent = `€${today.overtimePay.toFixed(2)}`;
}

function getTodayStatusSummary(forAdmin) {
  const today = currentDateString();
  const todays = state.sessions.filter(s => s.work_date === today);
  if (forAdmin) {
    return {
      label: `${t('totalEmployees')}: ${getEmployeeUsers().length} · ${t('hoursThisMonth')}: ${todays.reduce((s,x)=>s+Number(x.hours_worked||0),0).toFixed(2)}h`,
      overtimeHours: todays.filter(x=>x.session_type==='overtime').reduce((s,x)=>s+Number(x.hours_worked||0),0),
      overtimePay: todays.filter(x=>x.session_type==='overtime').reduce((s,x)=>s+Number(x.hours_worked||0)*getEmployeeById(x.user_id).overtime_rate,0),
    };
  }
  const mine = todays.filter(s => s.user_id === state.currentUser.id);
  const openStandard = mine.find(s => s.session_type === 'standard' && !s.check_out);
  const openOvertime = mine.find(s => s.session_type === 'overtime' && !s.check_out);
  let label = t('todayNoCheckin');
  if (openOvertime) label = t('overtimeOpen');
  else if (openStandard) label = `${t('todayWorkingSince')} ${formatTime(openStandard.check_in)}`;
  else if (mine.length) label = t('todayFinished');
  return {
    label,
    overtimeHours: mine.filter(x=>x.session_type==='overtime').reduce((s,x)=>s+Number(x.hours_worked||0),0),
    overtimePay: mine.filter(x=>x.session_type==='overtime').reduce((s,x)=>s+Number(x.hours_worked||0)*Number(state.currentUser.overtime_rate||0),0),
  };
}

function renderEmployees() {
  if (state.currentUser?.role !== 'admin') return;
  const search = (els.searchEmployee.value || '').trim().toLowerCase();
  const department = els.filterDepartment.value;
  let employees = [...state.employees];
  if (search) {
    employees = employees.filter(employee =>
      employee.full_name.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      employee.username.toLowerCase().includes(search)
    );
  }
  if (department) employees = employees.filter(employee => employee.department === department);
  if (!employees.length) {
    els.employeesTable.innerHTML = `<tr><td colspan="7" class="px-6 py-10 text-center text-slate-400">${t('noEmployees')}</td></tr>`;
    return;
  }
  els.employeesTable.innerHTML = employees.map(employee => {
    const statusClass = employee.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600';
    const statusText = employee.active ? t('active') : t('inactive');
    return `
      <tr class="hover:bg-slate-50">
        <td class="px-6 py-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">${getAvatarText(employee.full_name)}</div>
            <div>
              <p class="font-semibold text-slate-900">${escapeHtml(employee.full_name)}</p>
              <p class="text-sm text-slate-500">${escapeHtml(employee.username)} · ${escapeHtml(employee.email)}</p>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.department || '-')}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${Number(employee.monthly_salary || 0).toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${Number(employee.bank_salary || 0).toFixed(2)}</td>
        <td class="px-6 py-4 text-sm text-slate-600">€${Number(employee.overtime_rate || 0).toFixed(2)}</td>
        <td class="px-6 py-4"><span class="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${statusClass}">${statusText}</span></td>
        <td class="px-6 py-4 text-right">
          <div class="inline-flex gap-2">
            <button data-edit-employee="${employee.id}" class="edit-employee-btn p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-blue-600"><i data-lucide="pencil" class="w-4 h-4"></i></button>
            <button data-delete-employee="${employee.id}" class="delete-employee-btn p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-rose-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
          </div>
        </td>
      </tr>`;
  }).join('');
  document.querySelectorAll('.edit-employee-btn').forEach(btn => btn.addEventListener('click', () => openEmployeeModal(btn.dataset.editEmployee)));
  document.querySelectorAll('.delete-employee-btn').forEach(btn => btn.addEventListener('click', () => deleteEmployee(btn.dataset.deleteEmployee)));
  lucide.createIcons();
}

function renderRequests() {
  const items = getVisibleRequests();
  if (!items.length) {
    els.requestsList.innerHTML = `<div class="bg-white rounded-3xl p-10 text-center text-slate-400 card-shadow">${t('noRequests')}</div>`;
    return;
  }
  els.requestsList.innerHTML = items.map(item => {
    const user = getEmployeeById(item.user_id);
    const badge = getStatusBadge(item.status);
    const dateRow = item.request_date ? `<p class="text-sm text-slate-500">${formatDate(item.request_date)}</p>` : '';
    const hoursRow = item.hours_requested ? `<p class="text-sm text-slate-500">${t('requestHours')}: ${Number(item.hours_requested).toFixed(2)}</p>` : '';
    const adminControls = state.currentUser.role === 'admin' && item.status === 'pending'
      ? `<div class="flex flex-wrap gap-2 mt-4">
           <button data-request-action="approve" data-request-id="${item.id}" class="request-action-btn rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 font-semibold">Aprovo</button>
           <button data-request-action="reject" data-request-id="${item.id}" class="request-action-btn rounded-2xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 font-semibold">Refuzo</button>
         </div>` : '';
    return `
      <article class="bg-white rounded-3xl card-shadow p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">${getAvatarText(user?.full_name)}</div>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="font-bold text-lg text-slate-900">${escapeHtml(user?.full_name || t('unknownUser'))}</h3>
                <span class="text-xs px-2.5 py-1 rounded-full ${badge.className}">${badge.label}</span>
              </div>
              <p class="text-sm text-slate-500 mt-1">${getRequestTypeLabel(item.type)} · ${formatDateTime(item.created_at)}</p>
              ${dateRow}
              ${hoursRow}
            </div>
          </div>
          <div class="text-sm text-slate-400">${escapeHtml(user?.department || '-')}</div>
        </div>
        <div class="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-slate-700">${escapeHtml(item.description)}</div>
        ${item.admin_response ? `<div class="mt-3 text-sm"><span class="font-semibold text-slate-800">${t('adminResponse')}:</span> <span class="text-slate-600">${escapeHtml(item.admin_response)}</span></div>` : ''}
        ${adminControls}
      </article>`;
  }).join('');
  document.querySelectorAll('.request-action-btn').forEach(btn => btn.addEventListener('click', () => updateRequestStatus(btn.dataset.requestId, btn.dataset.requestAction)));
}

function renderPayroll() {
  if (state.currentUser.role !== 'admin') return;
  const employees = getEmployeeUsers();
  if (!employees.length) {
    els.payrollTable.innerHTML = `<tr><td colspan="10" class="px-6 py-10 text-center text-slate-400">${t('noPayrollEmployees')}</td></tr>`;
    return;
  }
  let totalFull = 0, totalDue = 0, totalBank = 0, totalHours = 0;
  const payrollMonth = currentPayrollMonthKey();
  els.payrollTable.innerHTML = employees.map(employee => {
    const p = getPayrollForEmployee(employee);
    totalFull += p.fullGross;
    totalDue += p.dueGross;
    totalBank += p.dueBank;
    totalHours += p.creditedHours + p.overtimeHours;
    const confirmation = getPayrollConfirmation(employee.id, payrollMonth);
    const paidBadge = confirmation
      ? `<span class="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold badge-paid">${t('paid')}</span>`
      : `<span class="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">${t('unpaid')}</span>`;
    return `
      <tr>
        <td class="px-6 py-4 font-semibold text-slate-900">${escapeHtml(employee.full_name)}</td>
        <td class="px-6 py-4 text-slate-600">€${p.fullGross.toFixed(2)}</td>
        <td class="px-6 py-4 text-slate-600">€${p.fullBank.toFixed(2)}</td>
        <td class="px-6 py-4 text-slate-600">${p.creditedHours.toFixed(2)}h</td>
        <td class="px-6 py-4 text-slate-600">${p.missingHours.toFixed(2)}h</td>
        <td class="px-6 py-4 text-slate-600">€${p.overtimePay.toFixed(2)}</td>
        <td class="px-6 py-4 text-slate-600 font-semibold">€${p.dueGross.toFixed(2)}</td>
        <td class="px-6 py-4 text-slate-600 font-semibold">€${p.dueBank.toFixed(2)}</td>
        <td class="px-6 py-4">${paidBadge}</td>
        <td class="px-6 py-4 text-right">
          ${confirmation
            ? `<div class="text-xs text-slate-500">${formatDateTime(confirmation.confirmed_at)}</div>`
            : `<button data-payroll-id="${employee.id}" class="mark-paid-btn rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold">${t('markPaid')}</button>`
          }
        </td>
      </tr>`;
  }).join('');
  els.totalFullSalary.textContent = `€${totalFull.toFixed(2)}`;
  els.totalPayroll.textContent = `€${totalDue.toFixed(2)}`;
  els.totalBankPayroll.textContent = `€${totalBank.toFixed(2)}`;
  els.totalHoursAll.textContent = `${totalHours.toFixed(2)}h`;

  document.querySelectorAll('.mark-paid-btn').forEach(btn => btn.addEventListener('click', () => confirmPayroll(btn.dataset.payrollId)));
}

function renderAttendance() {
  const grouped = getGroupedAttendanceForView();
  if (!grouped.length) {
    els.attendanceTable.innerHTML = `<tr><td colspan="7" class="px-6 py-10 text-center text-slate-400">${t('noAttendanceMonth')}</td></tr>`;
    return;
  }
  els.attendanceTable.innerHTML = grouped.map(day => `
    <tr>
      <td class="px-6 py-4 text-slate-700">${formatDate(day.work_date)}</td>
      <td class="px-6 py-4 text-slate-600">${day.standardSessions.length ? day.standardSessions.map(formatSessionRange).join('<br>') : '-'}</td>
      <td class="px-6 py-4 text-slate-600">${day.standardHours.toFixed(2)}h</td>
      <td class="px-6 py-4 text-slate-600">${day.overtimeSessions.length ? day.overtimeSessions.map(formatSessionRange).join('<br>') : '-'}</td>
      <td class="px-6 py-4 text-slate-600">${day.overtimeHours.toFixed(2)}h</td>
      <td class="px-6 py-4 text-slate-600">€${day.overtimePay.toFixed(2)}</td>
      <td class="px-6 py-4"><span class="px-2.5 py-1 rounded-full text-xs font-semibold ${day.badge.className}">${day.badge.label}</span></td>
    </tr>`).join('');
}

function renderSalaryChart() {
  const employees = getEmployeeUsers().slice(0, 8);
  const labels = employees.map(e => e.full_name);
  const dueData = employees.map(e => getPayrollForEmployee(e).dueGross);
  const fullData = employees.map(e => getPayrollForEmployee(e).fullGross);
  if (state.chart) state.chart.destroy();
  const ctx = els.salaryChart.getContext('2d');
  state.chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: t('salaryDueThisMonth'), data: dueData, backgroundColor: 'rgba(37, 99, 235, 0.75)', borderRadius: 12 },
        { label: t('fullSalaryTotal'), data: fullData, backgroundColor: 'rgba(148, 163, 184, 0.45)', borderRadius: 12 }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function updateAttendanceButtons() {
  if (!state.currentUser || state.currentUser.role === 'admin') {
    els.standardBtn.disabled = true;
    els.overtimeBtn.disabled = true;
    return;
  }
  const today = currentDateString();
  const openStandard = getOpenSession('standard', state.currentUser.id, today);
  const openOvertime = getOpenSession('overtime', state.currentUser.id, today);
  const regularSummary = getDaySummaryForEmployee(state.currentUser.id, today);
  if (openStandard) {
    els.standardBtnText.textContent = t('standardCheckOut');
    setButtonEnabled(els.standardBtn, 'emerald');
  } else if (regularSummary.standardHours >= getRegularHoursCapForDate(state.currentUser.id, today)) {
    els.standardBtnText.textContent = t('standardCompleted');
    setButtonDisabled(els.standardBtn);
  } else {
    els.standardBtnText.textContent = t('standardCheckIn');
    setButtonEnabled(els.standardBtn, 'emerald');
  }
  if (openOvertime) {
    els.overtimeBtnText.textContent = t('overtimeCheckOut');
    setButtonEnabled(els.overtimeBtn, 'violet');
  } else {
    els.overtimeBtnText.textContent = t('overtimeCheckIn');
    setButtonEnabled(els.overtimeBtn, 'violet');
  }
}

function setButtonEnabled(btn, color) {
  if (!btn) return;
  const classes = color === 'violet'
    ? 'rounded-2xl bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg shadow-violet-600/15'
    : 'rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/15';
  btn.className = classes;
  btn.disabled = false;
}
function setButtonDisabled(btn) {
  if (!btn) return;
  btn.className = 'rounded-2xl bg-slate-400 text-white px-5 py-3 font-semibold flex items-center gap-2 cursor-not-allowed';
  btn.disabled = true;
}

async function handleStandardAttendance() {
  try {
    const today = currentDateString();
    const now = new Date();
    const openStandard = getOpenSession('standard', state.currentUser.id, today);
    if (openStandard) {
      const hours = Math.max(0, Number(((now - new Date(openStandard.check_in)) / 36e5).toFixed(2)));
      const dayCap = getRegularHoursCapForDate(state.currentUser.id, today);
      const doneBefore = getDaySummaryForEmployee(state.currentUser.id, today).standardHours - Number(openStandard.hours_worked || 0);
      const remaining = Math.max(0, dayCap - doneBefore);
      const finalHours = Math.min(hours, remaining);
      const checkout = new Date(new Date(openStandard.check_in).getTime() + finalHours * 36e5);
      const { error } = await state.supabase.from('attendance_sessions').update({
        check_out: checkout.toISOString(),
        hours_worked: finalHours
      }).eq('id', openStandard.id);
      if (error) throw error;
      showToast(t('standardCheckoutSuccess'));
    } else {
      if (!canStartStandard(now)) return;
      const cap = getRegularHoursCapForDate(state.currentUser.id, today);
      if (getDaySummaryForEmployee(state.currentUser.id, today).standardHours >= cap) return showToast(t('maxRegularHoursReached'), 'error');
      const { error } = await state.supabase.from('attendance_sessions').insert({
        user_id: state.currentUser.id,
        work_date: today,
        session_type: 'standard',
        check_in: now.toISOString(),
        hours_worked: 0
      });
      if (error) throw error;
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
    const today = currentDateString();
    const now = new Date();
    const openStandard = getOpenSession('standard', state.currentUser.id, today);
    if (openStandard) return showToast(t('overtimeNeedStandardDone'), 'error');
    const openOvertime = getOpenSession('overtime', state.currentUser.id, today);
    if (openOvertime) {
      const hours = Math.max(0, Number(((now - new Date(openOvertime.check_in)) / 36e5).toFixed(2)));
      const { error } = await state.supabase.from('attendance_sessions').update({
        check_out: now.toISOString(),
        hours_worked: hours
      }).eq('id', openOvertime.id);
      if (error) throw error;
      showToast(t('overtimeEndSuccess'));
    } else {
      const five = new Date(`${today}T17:00:00`);
      if (now < five) return showToast(t('overtimeBeforeFive'), 'error');
      const { error } = await state.supabase.from('attendance_sessions').insert({
        user_id: state.currentUser.id,
        work_date: today,
        session_type: 'overtime',
        check_in: now.toISOString(),
        hours_worked: 0
      });
      if (error) throw error;
      showToast(t('overtimeStartSuccess'));
    }
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('attendanceSaveError'), 'error');
  }
}

function canStartStandard(now) {
  const h = now.getHours();
  const m = now.getMinutes();
  if (h < EARLIEST_CHECKIN_HOUR || (h === EARLIEST_CHECKIN_HOUR && m < EARLIEST_CHECKIN_MINUTE)) {
    showToast(t('earlyCheckinBlocked'), 'error');
    return false;
  }
  if (h >= STANDARD_END_HOUR) {
    showToast(t('standardAfterFiveBlocked'), 'error');
    return false;
  }
  const today = currentDateString();
  if (!isWorkdayAllowed(state.currentUser.id, today)) {
    showToast(t('weekendBlocked'), 'error');
    return false;
  }
  return true;
}

function isWorkdayAllowed(userId, dateStr) {
  const date = new Date(`${dateStr}T12:00:00`);
  const day = date.getDay();
  if (day >= 1 && day <= 5) return true;
  if (day === 6 && date.getDate() <= 7) return true;
  return hasApprovedWeekendRequest(userId, dateStr);
}
function hasApprovedWeekendRequest(userId, dateStr) {
  return state.requests.some(r => r.user_id === userId && r.type === 'weekend_work' && r.status === 'approved' && r.request_date === dateStr);
}
function getApprovedHourDeduction(userId, dateStr) {
  return state.requests
    .filter(r => r.user_id === userId && r.status === 'approved' && r.request_date === dateStr)
    .reduce((sum, r) => {
      if (r.type === 'day_off') return sum + STANDARD_DAY_HOURS;
      if (r.type === 'leave_early') return sum + Number(r.hours_requested || 0);
      return sum;
    }, 0);
}
function getRegularHoursCapForDate(userId, dateStr) {
  const base = isWorkdayAllowed(userId, dateStr) ? STANDARD_DAY_HOURS : 0;
  return Math.max(0, base - getApprovedHourDeduction(userId, dateStr));
}

function getPayrollForEmployee(employee) {
  const sessions = getSessionsForMonth(employee.id, state.currentMonth, state.currentYear);
  const workingDays = countWorkingDaysForMonth(state.currentYear, state.currentMonth);
  const expectedHours = workingDays * STANDARD_DAY_HOURS;
  const dayMap = {};
  sessions.forEach(s => {
    if (!dayMap[s.work_date]) dayMap[s.work_date] = { standard: 0, overtime: 0 };
    if (s.session_type === 'standard') dayMap[s.work_date].standard += Number(s.hours_worked || 0);
    else dayMap[s.work_date].overtime += Number(s.hours_worked || 0);
  });
  let creditedStandard = 0;
  for (const [date, val] of Object.entries(dayMap)) {
    const cap = getRegularHoursCapForDate(employee.id, date);
    creditedStandard += Math.min(val.standard, cap);
  }
  const overtimeHours = sessions.filter(s => s.session_type === 'overtime').reduce((sum, s) => sum + Number(s.hours_worked || 0), 0);
  const overtimePay = Number((overtimeHours * Number(employee.overtime_rate || 0)).toFixed(2));
  const hourlyGross = expectedHours ? Number(employee.monthly_salary || 0) / expectedHours : 0;
  const hourlyBank = expectedHours ? Number(employee.bank_salary || 0) / expectedHours : 0;
  const dueBaseGross = Number((creditedStandard * hourlyGross).toFixed(2));
  const dueBaseBank = Number((creditedStandard * hourlyBank).toFixed(2));
  const dueGross = Number((dueBaseGross + overtimePay).toFixed(2));
  const dueBank = Number((dueBaseBank + overtimePay).toFixed(2));
  const missingHours = Math.max(0, expectedHours - creditedStandard);
  return {
    fullGross: Number(employee.monthly_salary || 0),
    fullBank: Number(employee.bank_salary || 0),
    expectedHours,
    creditedHours: Number(creditedStandard.toFixed(2)),
    missingHours: Number(missingHours.toFixed(2)),
    overtimeHours: Number(overtimeHours.toFixed(2)),
    overtimePay,
    dueGross,
    dueBank
  };
}

function getGroupedAttendanceForView() {
  const rows = state.sessions.filter(s => {
    const date = new Date(`${s.work_date}T12:00:00`);
    const sameMonth = date.getMonth() === state.currentMonth && date.getFullYear() === state.currentYear;
    const visible = state.currentUser.role === 'admin' || s.user_id === state.currentUser.id;
    return sameMonth && visible;
  });
  const map = {};
  rows.forEach(s => {
    const key = `${s.user_id}-${s.work_date}`;
    if (!map[key]) map[key] = { work_date: s.work_date, user_id: s.user_id, standardSessions: [], overtimeSessions: [], standardHours: 0, overtimeHours: 0, overtimePay: 0 };
    if (s.session_type === 'standard') {
      map[key].standardSessions.push(s);
      map[key].standardHours += Number(s.hours_worked || 0);
    } else {
      map[key].overtimeSessions.push(s);
      map[key].overtimeHours += Number(s.hours_worked || 0);
      const emp = getEmployeeById(s.user_id);
      map[key].overtimePay += Number(s.hours_worked || 0) * Number(emp?.overtime_rate || 0);
    }
  });
  return Object.values(map).sort((a,b) => b.work_date.localeCompare(a.work_date)).map(day => {
    let label = t('complete');
    let className = 'bg-emerald-50 text-emerald-700';
    if (day.standardSessions.some(s => !s.check_out) || day.overtimeSessions.some(s => !s.check_out)) {
      label = t('atWork');
      className = 'bg-amber-50 text-amber-700';
    } else if (day.overtimeHours > 0) {
      label = t('overtimeOpen');
      className = 'bg-violet-50 text-violet-700';
    }
    day.overtimePay = Number(day.overtimePay.toFixed(2));
    day.badge = { label, className };
    return day;
  });
}

function getVisibleRequests() {
  return state.requests.filter(item => state.currentUser.role === 'admin' || item.user_id === state.currentUser.id);
}
function getEmployeeUsers() {
  return state.employees.filter(item => item.role === 'employee');
}
function getEmployeeById(id) {
  return state.employees.find(item => item.id === id);
}
function getSessionsForMonth(userId, month, year) {
  return state.sessions.filter(s => s.user_id === userId && new Date(`${s.work_date}T12:00:00`).getMonth() === month && new Date(`${s.work_date}T12:00:00`).getFullYear() === year);
}
function getOpenSession(type, userId, dateStr) {
  return state.sessions.find(s => s.user_id === userId && s.session_type === type && s.work_date === dateStr && !s.check_out);
}
function getDaySummaryForEmployee(userId, dateStr) {
  const rows = state.sessions.filter(s => s.user_id === userId && s.work_date === dateStr);
  return {
    standardHours: rows.filter(s => s.session_type === 'standard').reduce((sum, s) => sum + Number(s.hours_worked || 0), 0),
    overtimeHours: rows.filter(s => s.session_type === 'overtime').reduce((sum, s) => sum + Number(s.hours_worked || 0), 0),
  };
}
function countWorkingDaysForMonth(year, month) {
  let count = 0;
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    const day = date.getDay();
    const d = date.getDate();
    if ((day >= 1 && day <= 5) || (day === 6 && d <= 7)) count++;
    date.setDate(date.getDate() + 1);
  }
  return count;
}
function currentPayrollMonthKey() {
  return `${state.currentYear}-${String(state.currentMonth + 1).padStart(2, '0')}`;
}
function getPayrollConfirmation(userId, monthKey) {
  return state.payrollConfirmations.find(p => p.user_id === userId && p.payroll_month === monthKey);
}

function openEmployeeModal(id = null) {
  if (state.currentUser.role !== 'admin') return;
  els.employeeForm.reset();
  els.employeeId.value = '';
  els.employeeRole.value = 'employee';
  els.employeeDepartment.value = 'Prodhim';
  els.employeeOvertimeRate.value = 5;
  els.employeeModalTitle.textContent = t('employeeModalAdd');
  if (id) {
    const employee = getEmployeeById(id);
    if (!employee) return;
    els.employeeModalTitle.textContent = t('employeeModalEdit');
    els.employeeId.value = employee.id;
    els.employeeName.value = employee.full_name;
    els.employeeUsername.value = employee.username;
    els.employeeEmail.value = employee.email;
    els.employeeDepartment.value = employee.department || 'Prodhim';
    els.employeeSalary.value = employee.monthly_salary ?? 0;
    els.employeeBankSalary.value = employee.bank_salary ?? 0;
    els.employeeOvertimeRate.value = employee.overtime_rate ?? 5;
    els.employeeRole.value = employee.role;
  }
  openModal('employeeModal');
}

async function handleEmployeeSubmit(event) {
  event.preventDefault();
  if (state.currentUser.role !== 'admin') return;
  const id = els.employeeId.value || null;
  const email = els.employeeEmail.value.trim().toLowerCase();
  const username = els.employeeUsername.value.trim().toLowerCase();
  const password = els.employeePassword.value.trim();
  const payload = {
    full_name: els.employeeName.value.trim(),
    username,
    email,
    department: els.employeeDepartment.value,
    monthly_salary: Number(els.employeeSalary.value || 0),
    bank_salary: Number(els.employeeBankSalary.value || 0),
    overtime_rate: Number(els.employeeOvertimeRate.value || 0),
    role: els.employeeRole.value,
    avatar: getAvatarText(els.employeeName.value.trim()),
    active: true,
  };
  if (!payload.full_name || !payload.email || !payload.username) return showToast(t('employeeNameEmailRequired'), 'error');
  try {
    const duplicateEmail = state.employees.find(employee => employee.email === email && employee.id !== id);
    if (duplicateEmail) return showToast(t('duplicateEmail'), 'error');
    const duplicateUsername = state.employees.find(employee => employee.username === username && employee.id !== id);
    if (duplicateUsername) return showToast(t('duplicateUsername'), 'error');

    if (id) {
      if (password) payload.password_hash = await hashPassword(password);
      const { error } = await state.supabase.from('employees').update(payload).eq('id', id);
      if (error) throw error;
      showToast(t('employeeUpdated'));
    } else {
      if (!password) return showToast(t('newPassword'), 'error');
      payload.password_hash = await hashPassword(password);
      const { error } = await state.supabase.from('employees').insert(payload);
      if (error) throw error;
      showToast(t('employeeAdded'));
    }
    closeModal('employeeModal');
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('employeeSaveError'), 'error');
  }
}

async function deleteEmployee(id) {
  if (state.currentUser.role !== 'admin') return;
  const employee = getEmployeeById(id);
  if (!employee) return;
  if (employee.id === state.currentUser.id) return showToast(t('employeeDeleteSelf'), 'error');
  if (!window.confirm(`${t('confirmDelete')} ${employee.full_name}?`)) return;
  try {
    const { error } = await state.supabase.from('employees').delete().eq('id', id);
    if (error) throw error;
    showToast(t('employeeDeleted'));
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('employeeDeleteError'), 'error');
  }
}

function updateRequestFormUi() {
  if (!els.requestType) return;
  const type = els.requestType.value;
  const showDate = type !== 'complaint' && type !== 'other';
  const showHours = type === 'leave_early';
  els.requestDateWrap.style.display = showDate ? '' : 'none';
  els.requestHoursWrap.style.display = showHours ? '' : 'none';
}

async function handleRequestSubmit(event) {
  event.preventDefault();
  const description = els.requestDescription.value.trim();
  if (!description) return showToast(t('requestDescriptionRequired'), 'error');
  try {
    const payload = {
      user_id: state.currentUser.id,
      type: els.requestType.value,
      request_date: els.requestDate.value || null,
      hours_requested: Number(els.requestHours.value || 0),
      description,
      status: 'pending',
      admin_response: ''
    };
    const { error } = await state.supabase.from('requests').insert(payload);
    if (error) throw error;
    closeModal('requestModal');
    showToast(t('requestSent'));
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('requestSendError'), 'error');
  }
}

async function updateRequestStatus(requestId, action) {
  if (state.currentUser.role !== 'admin') return;
  const response = window.prompt(action === 'approve' ? t('approvalPrompt') : t('rejectionPrompt'), '') || '';
  try {
    const { error } = await state.supabase.from('requests').update({
      status: action === 'approve' ? 'approved' : 'rejected',
      admin_response: response,
      decided_at: new Date().toISOString(),
      decided_by: state.currentUser.id
    }).eq('id', requestId);
    if (error) throw error;
    showToast(action === 'approve' ? t('requestApproved') : t('requestRejected'));
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('requestUpdateError'), 'error');
  }
}

async function confirmPayroll(userId) {
  try {
    const employee = getEmployeeById(userId);
    const payroll = getPayrollForEmployee(employee);
    const month = currentPayrollMonthKey();
    const existing = getPayrollConfirmation(userId, month);
    if (existing) return;
    const { error } = await state.supabase.from('payroll_confirmations').insert({
      user_id: userId,
      payroll_month: month,
      gross_due: payroll.dueGross,
      bank_due: payroll.dueBank,
      confirmed_by: state.currentUser.id
    });
    if (error) throw error;
    showToast(t('salaryPaidSuccess'));
    await refreshAllData();
  } catch (error) {
    console.error(error);
    showToast(t('salaryPaidError'), 'error');
  }
}

function exportAttendance() {
  const rows = getGroupedAttendanceForView();
  if (!rows.length) return showToast('Nuk ka të dhëna për eksport.', 'info');
  const csv = [
    ['Date', 'User', 'Regular Sessions', 'Regular Hours', 'Overtime Sessions', 'Overtime Hours', 'Overtime Pay'].join(',')
  ];
  rows.forEach(row => {
    const user = getEmployeeById(row.user_id);
    csv.push([
      row.work_date,
      `"${(user?.full_name || '').replace(/"/g, '""')}"`,
      `"${row.standardSessions.map(formatSessionRange).join(' | ')}"`,
      row.standardHours.toFixed(2),
      `"${row.overtimeSessions.map(formatSessionRange).join(' | ')}"`,
      row.overtimeHours.toFixed(2),
      row.overtimePay.toFixed(2)
    ].join(','));
  });
  const blob = new Blob([csv.join('\n')], { type:'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `attendance-${currentPayrollMonthKey()}.csv`;
  a.click();
}

async function fetchUserById(id) {
  if (!state.supabase) state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data, error } = await state.supabase.from('employees').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data ? normalizeEmployee(data) : null;
}

function normalizeEmployee(employee) {
  return {
    ...employee,
    monthly_salary: Number(employee.monthly_salary || 0),
    bank_salary: Number(employee.bank_salary || 0),
    overtime_rate: Number(employee.overtime_rate || 0)
  };
}

function getRequestTypeLabel(type) {
  return ({
    leave_early: t('requestLeaveEarly'),
    day_off: t('requestDayOff'),
    weekend_work: t('requestWeekendWork'),
    complaint: t('requestComplaint'),
    other: t('requestOther')
  })[type] || type;
}

function getStatusBadge(status) {
  return {
    pending: { label: t('pending'), className: 'badge-pending' },
    approved: { label: t('approved'), className: 'badge-approved' },
    rejected: { label: t('rejected'), className: 'badge-rejected' },
  }[status] || { label: status, className: 'bg-slate-100 text-slate-700' };
}

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hidden');
  el.classList.add('flex');
  document.body.classList.add('modal-open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('hidden');
  el.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function formatDate(dateStr) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString(locale(), { day:'2-digit', month:'2-digit', year:'numeric' });
}
function formatDateTime(dateStr) {
  return new Date(dateStr).toLocaleString(locale(), { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
function formatTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString(locale(), { hour:'2-digit', minute:'2-digit' });
}
function formatSessionRange(session) {
  return `${formatTime(session.check_in)} - ${session.check_out ? formatTime(session.check_out) : '...'}`;
}
function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}
function getAvatarText(name = '') {
  return name.split(' ').filter(Boolean).slice(0,2).map(x => x[0]?.toUpperCase()).join('') || 'U';
}
function showToast(message, type = 'success') {
  const color = type === 'error' ? 'bg-rose-600' : type === 'info' ? 'bg-slate-700' : 'bg-emerald-600';
  els.toast.textContent = message;
  els.toast.className = `fixed right-4 bottom-4 z-[60] rounded-2xl px-5 py-4 text-white font-semibold shadow-2xl ${color}`;
  els.toast.classList.remove('hidden');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.add('hidden'), 2800);
}
function togglePassword(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (!input || !btn) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.innerHTML = `<i data-lucide="${input.type === 'password' ? 'eye' : 'eye-off'}" class="w-5 h-5"></i>`;
  lucide.createIcons();
}
function setButtonLoading(button, loading, text) {
  if (!button) return;
  button.disabled = loading;
  button.textContent = text;
}
function currentDateString() {
  return new Date().toISOString().slice(0, 10);
}
function setMonthLabel() {
  els.currentMonthDisplay.textContent = new Date(state.currentYear, state.currentMonth, 1).toLocaleDateString(locale(), { month:'long', year:'numeric' });
}
function changeMonth(direction) {
  state.currentMonth += direction;
  if (state.currentMonth < 0) { state.currentMonth = 11; state.currentYear--; }
  if (state.currentMonth > 11) { state.currentMonth = 0; state.currentYear++; }
  setMonthLabel();
  renderEverything();
}
async function hashPassword(password) {
  const encoded = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}
