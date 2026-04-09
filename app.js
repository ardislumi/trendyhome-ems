const SUPABASE_URL = "https://nwhtnuuwijwsuraintux.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_XyOE8tSdywP1F8K3x7STnA_Bavtz8gD";

const STANDARD_START_HOUR = 8;
const STANDARD_END_HOUR = 17;
const OVERTIME_RATE = 5;
const EARLIEST_CHECKIN_HOUR = 7;
const EARLIEST_CHECKIN_MINUTE = 59;

const LANGUAGES = {
  sq: {
    code: 'sq-AL',
    name: 'Shqip',
    strings: {
      appName: 'WorkFlow EMS Pro', loginWelcome: 'Mirësevini', loginSubtitle: 'Hyni në sistemin e menaxhimit të punonjësve',
      loginIdentifierLabel: 'Email ose username', loginIdentifierPlaceholder: 'Shkruaj email-in ose username-in', password: 'Fjalëkalimi',
      loginHelp: 'Ndihmë për qasje', rememberMe: 'Më mbaj mend në këtë pajisje', login: 'Hyni',
      dashboard: 'Dashboard', employees: 'Punonjësit', requests: 'Kërkesat', payroll: 'Pagat', attendance: 'Pjesëmarrja', logout: 'Dilni',
      panelProfessional: 'Panel profesional', panel: 'Panel', quickInfo: 'Informacion i shpejtë', todayStatusTitle: 'Statusi i sotëm',
      activeMonthTitle: 'Muaji aktiv', accountTypeTitle: 'Lloji i llogarisë', overtimeTodayTitle: 'Orë shtesë sot', overtimePayTodayTitle: 'Pagesë shtesë sot',
      newRequest: 'Kërkesë e Re', standardCheckIn: 'Check In', standardCheckOut: 'Check Out', overtimeCheckIn: 'Orë shtesë: Check In', overtimeCheckOut: 'Orë shtesë: Check Out',
      completedToday: 'Përfunduar sot', totalEmployees: 'Total punonjësish', hoursThisMonth: 'Orë këtë muaj', salaryThisMonth: 'Paga këtë muaj', pendingRequests: 'Kërkesa në pritje', recentActivity: 'Aktiviteti i fundit',
      noRecentActivity: 'Nuk ka aktivitet të fundit.', noRequests: 'Nuk ka kërkesa për t’u shfaqur.', employeesTitle: 'Menaxhimi i Punonjësve', employeesSubtitle: 'Shtoni, editoni, fshini dhe filtroni punonjësit',
      addEmployee: 'Shto Punonjës', searchEmployeePlaceholder: 'Kërko sipas emrit, username ose email-it', allDepartments: 'Të gjitha departamentet', employeeCol: 'Punonjësi', departmentCol: 'Departamenti', salaryHourCol: 'Paga / orë', statusCol: 'Statusi', actionsCol: 'Veprime',
      requestsTitle: 'Kërkesat dhe Ankesat', requestsSubtitle: 'Punonjësi dërgon kërkesa, admini i aprovon ose i refuzon', payrollTitle: 'Pagat', payrollSubtitle: 'Llogaritje automatike sipas orëve normale dhe orëve shtesë',
      summary: 'Përmbledhje', totalPayroll: 'Total pagash', totalHours: 'Orë totale', averageSalary: 'Paga mesatare', payrollDetails: 'Detaje pagash', grossSalary: 'Paga bruto',
      attendanceTitle: 'Pjesëmarrja', attendanceSubtitle: 'Check in, check out, auto checkout në ora 17:00 dhe eksport CSV', export: 'Eksporto', date: 'Data', checkIn: 'Check In', checkOut: 'Check Out',
      totalHoursCol: 'Orë normale', overtimeInCol: 'Orë shtesë In', overtimeOutCol: 'Orë shtesë Out', overtimeHoursCol: 'Orë shtesë', overtimePayCol: 'Pagesë shtesë', menu: 'Menu',
      requestNewTitle: 'Kërkesë e Re', requestNewSubtitle: 'Dërgo një kërkesë ose ankesë për adminin', requestType: 'Lloji i kërkesës', requestDescription: 'Përshkrimi', requestDescriptionPlaceholder: 'Shkruaj arsyen e kërkesës', cancel: 'Anulo', send: 'Dërgo',
      employeeModalAdd: 'Shto Punonjës', employeeModalEdit: 'Edito Punonjësin', employeeModalSubtitle: 'Krijo ose përditëso një punonjës', fullName: 'Emri i plotë', username: 'Username', email: 'Email', salaryPerHour: 'Paga për orë (€)', role: 'Roli', newPassword: 'Fjalëkalimi i ri', save: 'Ruaj',
      standardSchedule: 'Orari normal: 08:00 - 17:00', overtimeRule: 'Pas orës 17:00 orët shtesë llogariten me €5/orë.', demoInfo: 'Mund të hyni me email ose username.', adminRole: 'Administrator', employeeRole: 'Punonjës',
      noAttendanceMonth: 'Nuk ka regjistrime për këtë muaj.', noEmployees: 'Nuk u gjet asnjë punonjës.', noPayrollEmployees: 'Nuk ka punonjës.', active: 'Aktiv', inactive: 'Jo aktiv', pending: 'Në pritje', approved: 'Aprovuar', rejected: 'Refuzuar', complete: 'Kompletuar', atWork: 'Në punë', absent: 'Mungon', overtimeOpen: 'Orë shtesë aktive', payrollReady: 'Për llogaritje', noHours: 'Pa orë',
      requestLeaveEarly: 'Lëshim herët nga puna', requestDayOff: 'Ditë pushimi', requestComplaint: 'Ankesë', requestOther: 'Tjetër', requestWeekendWork: 'Kërkesë për punë në vikend',
      fillLoginFields: 'Plotëso email/username dhe fjalëkalimin.', loginError: 'Email/username ose fjalëkalim i pasaktë.', loginUnexpectedError: 'Ndodhi një gabim gjatë hyrjes.', welcomeUser: 'Mirësevini', loginLoading: 'Duke hyrë...',
      loginHelpToast: 'Për demo: admin / admin@company.com dhe employee / employee@company.com. Fjalëkalimet janë ruajtur në databazë.', accessDenied: 'Nuk keni qasje në këtë faqe.', loggedOut: 'U çkyçët me sukses.',
      todayNoCheckin: 'Nuk keni bërë check in sot.', todayWorkingSince: 'Në punë që nga', todayFinished: 'Përfunduar', activeEmployeesLabel: 'Punonjës aktivë', standardCheckinSuccess: 'Check in u regjistrua me sukses.', standardCheckoutSuccess: 'Check out u regjistrua me sukses.', autoCheckoutSuccess: 'Check out automatik në ora 17:00 u regjistrua.', attendanceAlreadyDone: 'Për sot tashmë është kompletuar regjistrimi.', attendanceSaveError: 'Nuk u ruajt pjesëmarrja.',
      overtimeBeforeFive: 'Orët shtesë mund të fillojnë vetëm pas orës 17:00.', overtimeNeedStandardDone: 'Së pari duhet të përfundojë orari normal.', overtimeStartSuccess: 'Orët shtesë filluan me sukses.', overtimeEndSuccess: 'Orët shtesë u mbyllën me sukses.', overtimeAlreadyDone: 'Orët shtesë për sot janë kompletuar.', noDataExport: 'Nuk ka të dhëna për eksport.',
      employeeNameEmailRequired: 'Emri, username dhe email-i janë të detyrueshëm.', duplicateEmail: 'Ky email ekziston tashmë.', duplicateUsername: 'Ky username ekziston tashmë.', employeeUpdated: 'Punonjësi u përditësua me sukses.', employeeAdded: 'Punonjësi u shtua me sukses.', employeeSaveError: 'Nuk u ruajt punonjësi.', employeeDeleteSelf: 'Nuk mund ta fshini vetveten.', confirmDelete: 'A je i sigurt që dëshiron ta fshish', employeeDeleted: 'Punonjësi u fshi me sukses.', employeeDeleteError: 'Nuk u fshi punonjësi.',
      requestDescriptionRequired: 'Përshkrimi është i detyrueshëm.', requestSent: 'Kërkesa u dërgua me sukses.', requestSendError: 'Nuk u dërgua kërkesa.', requestApproved: 'Kërkesa u aprovua.', requestRejected: 'Kërkesa u refuzua.', requestUpdateError: 'Nuk u përditësua kërkesa.', approvalPrompt: 'Shkruaj mesazh aprovimi (opsionale):', rejectionPrompt: 'Shkruaj arsyen e refuzimit (opsionale):', adminResponse: 'Përgjigjja e adminit',
      savedLanguage: 'Gjuha u ndryshua.', weekendBlocked: 'Sot është pushim. Duhet aprovim nga admini për të punuar.', earlyCheckinBlocked: 'Check in nuk lejohet para orës 07:59.', firstSaturdayOpen: 'E shtuna e parë e muajit është ditë pune.',
      paid: 'E paguar', unpaid: 'Pa paguar', markPaid: 'Konfirmo pagën', debtFree: 'Pa borgj', debtOpen: 'Ka borgj', salaryPaidSuccess: 'Paga u konfirmua me sukses.', salaryPaidError: 'Nuk u konfirmua paga.', paidAt: 'Paguar më', weekendApproved: 'Punë vikendi e aprovuar',
      analyticsTitle: 'Analitika', analyticsAdminCaption: 'Orët mujore sipas punonjësit', analyticsEmployeeCaption: '7 ditët e fundit',
    }
  },
  en: {
    code: 'en-US', name: 'English', strings: {
      appName: 'WorkFlow EMS Pro', loginWelcome: 'Welcome', loginSubtitle: 'Sign in to the employee management system', loginIdentifierLabel: 'Email or username', loginIdentifierPlaceholder: 'Enter email or username', password: 'Password', loginHelp: 'Access help', rememberMe: 'Remember me on this device', login: 'Sign In', dashboard: 'Dashboard', employees: 'Employees', requests: 'Requests', payroll: 'Payroll', attendance: 'Attendance', logout: 'Logout', panelProfessional: 'Professional panel', panel: 'Panel', quickInfo: 'Quick info', todayStatusTitle: 'Today status', activeMonthTitle: 'Active month', accountTypeTitle: 'Account type', overtimeTodayTitle: 'Overtime today', overtimePayTodayTitle: 'Overtime pay today', newRequest: 'New Request', standardCheckIn: 'Check In', standardCheckOut: 'Check Out', overtimeCheckIn: 'Overtime: Check In', overtimeCheckOut: 'Overtime: Check Out', completedToday: 'Completed today', totalEmployees: 'Total employees', hoursThisMonth: 'Hours this month', salaryThisMonth: 'Salary this month', pendingRequests: 'Pending requests', recentActivity: 'Recent activity', noRecentActivity: 'No recent activity.', noRequests: 'No requests to display.', employeesTitle: 'Employee Management', employeesSubtitle: 'Add, edit, delete and filter employees', addEmployee: 'Add Employee', searchEmployeePlaceholder: 'Search by name, username or email', allDepartments: 'All departments', employeeCol: 'Employee', departmentCol: 'Department', salaryHourCol: 'Pay / hour', statusCol: 'Status', actionsCol: 'Actions', requestsTitle: 'Requests and Complaints', requestsSubtitle: 'Employees send requests, admin approves or rejects them', payrollTitle: 'Payroll', payrollSubtitle: 'Automatic calculation based on regular and overtime hours', summary: 'Summary', totalPayroll: 'Total payroll', totalHours: 'Total hours', averageSalary: 'Average salary', payrollDetails: 'Payroll details', grossSalary: 'Gross salary', attendanceTitle: 'Attendance', attendanceSubtitle: 'Check in, check out, automatic 5 PM checkout and CSV export', export: 'Export', date: 'Date', checkIn: 'Check In', checkOut: 'Check Out', totalHoursCol: 'Regular hours', overtimeInCol: 'Overtime In', overtimeOutCol: 'Overtime Out', overtimeHoursCol: 'Overtime hours', overtimePayCol: 'Overtime pay', menu: 'Menu', requestNewTitle: 'New Request', requestNewSubtitle: 'Send a request or complaint to admin', requestType: 'Request type', requestDescription: 'Description', requestDescriptionPlaceholder: 'Write the reason for the request', cancel: 'Cancel', send: 'Send', employeeModalAdd: 'Add Employee', employeeModalEdit: 'Edit Employee', employeeModalSubtitle: 'Create or update an employee', fullName: 'Full name', username: 'Username', email: 'Email', salaryPerHour: 'Pay per hour (€)', role: 'Role', newPassword: 'New password', save: 'Save', standardSchedule: 'Regular schedule: 08:00 - 17:00', overtimeRule: 'After 17:00, overtime is calculated at €5/hour.', demoInfo: 'You can sign in using email or username.', adminRole: 'Administrator', employeeRole: 'Employee', noAttendanceMonth: 'No records for this month.', noEmployees: 'No employees found.', noPayrollEmployees: 'No employees.', active: 'Active', inactive: 'Inactive', pending: 'Pending', approved: 'Approved', rejected: 'Rejected', complete: 'Completed', atWork: 'At work', absent: 'Absent', overtimeOpen: 'Overtime active', payrollReady: 'Ready for calculation', noHours: 'No hours', requestLeaveEarly: 'Leave early', requestDayOff: 'Day off', requestComplaint: 'Complaint', requestOther: 'Other', requestWeekendWork: 'Weekend work request', fillLoginFields: 'Fill in email/username and password.', loginError: 'Incorrect email/username or password.', loginUnexpectedError: 'An error occurred during sign in.', welcomeUser: 'Welcome', loginLoading: 'Signing in...', loginHelpToast: 'For demo: admin / admin@company.com and employee / employee@company.com. Passwords are stored in the database.', accessDenied: 'You do not have access to this page.', loggedOut: 'You logged out successfully.', todayNoCheckin: 'You have not checked in today.', todayWorkingSince: 'Working since', todayFinished: 'Finished', activeEmployeesLabel: 'Active employees', standardCheckinSuccess: 'Check in saved successfully.', standardCheckoutSuccess: 'Check out saved successfully.', autoCheckoutSuccess: 'Automatic 5 PM checkout saved.', attendanceAlreadyDone: 'Attendance for today is already completed.', attendanceSaveError: 'Attendance was not saved.', overtimeBeforeFive: 'Overtime can start only after 5 PM.', overtimeNeedStandardDone: 'The regular shift must finish first.', overtimeStartSuccess: 'Overtime started successfully.', overtimeEndSuccess: 'Overtime ended successfully.', overtimeAlreadyDone: 'Overtime for today is already completed.', noDataExport: 'There is no data to export.', employeeNameEmailRequired: 'Name, username and email are required.', duplicateEmail: 'This email already exists.', duplicateUsername: 'This username already exists.', employeeUpdated: 'Employee updated successfully.', employeeAdded: 'Employee added successfully.', employeeSaveError: 'Employee was not saved.', employeeDeleteSelf: 'You cannot delete yourself.', confirmDelete: 'Are you sure you want to delete', employeeDeleted: 'Employee deleted successfully.', employeeDeleteError: 'Employee was not deleted.', requestDescriptionRequired: 'Description is required.', requestSent: 'Request sent successfully.', requestSendError: 'Request was not sent.', requestApproved: 'Request approved.', requestRejected: 'Request rejected.', requestUpdateError: 'Request was not updated.', approvalPrompt: 'Write an approval note (optional):', rejectionPrompt: 'Write the rejection reason (optional):', adminResponse: 'Admin response', savedLanguage: 'Language changed.', weekendBlocked: 'Today is a day off. Admin approval is required to work.', earlyCheckinBlocked: 'Check in is not allowed before 07:59.', firstSaturdayOpen: 'The first Saturday of the month is a workday.', paid: 'Paid', unpaid: 'Unpaid', markPaid: 'Confirm salary', debtFree: 'No debt', debtOpen: 'Debt open', salaryPaidSuccess: 'Salary confirmed successfully.', salaryPaidError: 'Salary confirmation failed.', paidAt: 'Paid at', weekendApproved: 'Weekend work approved', analyticsTitle: 'Analytics', analyticsAdminCaption: 'Monthly hours per employee', analyticsEmployeeCaption: 'Last 7 days'
    }
  },
  bs: {
    code: 'bs-BA', name: 'Bosanski', strings: {
      appName: 'WorkFlow EMS Pro', loginWelcome: 'Dobrodošli', loginSubtitle: 'Prijavite se u sistem za upravljanje zaposlenima', loginIdentifierLabel: 'Email ili korisničko ime', loginIdentifierPlaceholder: 'Unesite email ili korisničko ime', password: 'Lozinka', loginHelp: 'Pomoć za pristup', rememberMe: 'Zapamti me na ovom uređaju', login: 'Prijava', dashboard: 'Kontrolna tabla', employees: 'Zaposleni', requests: 'Zahtjevi', payroll: 'Plate', attendance: 'Prisustvo', logout: 'Odjava', panelProfessional: 'Profesionalni panel', panel: 'Panel', quickInfo: 'Brze informacije', todayStatusTitle: 'Današnji status', activeMonthTitle: 'Aktivni mjesec', accountTypeTitle: 'Tip računa', overtimeTodayTitle: 'Prekovremeni danas', overtimePayTodayTitle: 'Isplata prekovremenih danas', newRequest: 'Novi zahtjev', standardCheckIn: 'Check In', standardCheckOut: 'Check Out', overtimeCheckIn: 'Prekovremeni: Check In', overtimeCheckOut: 'Prekovremeni: Check Out', completedToday: 'Završeno danas', totalEmployees: 'Ukupno zaposlenih', hoursThisMonth: 'Sati ovog mjeseca', salaryThisMonth: 'Plata ovog mjeseca', pendingRequests: 'Zahtjevi na čekanju', recentActivity: 'Nedavna aktivnost', noRecentActivity: 'Nema nedavne aktivnosti.', noRequests: 'Nema zahtjeva za prikaz.', employeesTitle: 'Upravljanje zaposlenima', employeesSubtitle: 'Dodajte, uredite, obrišite i filtrirajte zaposlene', addEmployee: 'Dodaj zaposlenog', searchEmployeePlaceholder: 'Pretraga po imenu, korisničkom imenu ili emailu', allDepartments: 'Svi odjeli', employeeCol: 'Zaposleni', departmentCol: 'Odjel', salaryHourCol: 'Plata / sat', statusCol: 'Status', actionsCol: 'Akcije', requestsTitle: 'Zahtjevi i žalbe', requestsSubtitle: 'Zaposleni šalju zahtjeve, administrator ih odobrava ili odbija', payrollTitle: 'Plate', payrollSubtitle: 'Automatski obračun prema redovnim i prekovremenim satima', summary: 'Sažetak', totalPayroll: 'Ukupne plate', totalHours: 'Ukupni sati', averageSalary: 'Prosječna plata', payrollDetails: 'Detalji plata', grossSalary: 'Bruto plata', attendanceTitle: 'Prisustvo', attendanceSubtitle: 'Check in, check out, automatski checkout u 17:00 i CSV izvoz', export: 'Izvezi', date: 'Datum', checkIn: 'Check In', checkOut: 'Check Out', totalHoursCol: 'Redovni sati', overtimeInCol: 'Prekovremeni In', overtimeOutCol: 'Prekovremeni Out', overtimeHoursCol: 'Prekovremeni sati', overtimePayCol: 'Isplata prekovremenih', menu: 'Meni', requestNewTitle: 'Novi zahtjev', requestNewSubtitle: 'Pošaljite zahtjev ili žalbu administratoru', requestType: 'Vrsta zahtjeva', requestDescription: 'Opis', requestDescriptionPlaceholder: 'Napišite razlog zahtjeva', cancel: 'Otkaži', send: 'Pošalji', employeeModalAdd: 'Dodaj zaposlenog', employeeModalEdit: 'Uredi zaposlenog', employeeModalSubtitle: 'Kreiraj ili ažuriraj zaposlenog', fullName: 'Puno ime', username: 'Korisničko ime', email: 'Email', salaryPerHour: 'Plata po satu (€)', role: 'Uloga', newPassword: 'Nova lozinka', save: 'Sačuvaj', standardSchedule: 'Redovno radno vrijeme: 08:00 - 17:00', overtimeRule: 'Nakon 17:00 prekovremeni rad se računa €5/sat.', demoInfo: 'Možete se prijaviti emailom ili korisničkim imenom.', adminRole: 'Administrator', employeeRole: 'Zaposleni', noAttendanceMonth: 'Nema evidencije za ovaj mjesec.', noEmployees: 'Nema pronađenih zaposlenih.', noPayrollEmployees: 'Nema zaposlenih.', active: 'Aktivan', inactive: 'Neaktivan', pending: 'Na čekanju', approved: 'Odobreno', rejected: 'Odbijeno', complete: 'Završeno', atWork: 'Na poslu', absent: 'Odsutan', overtimeOpen: 'Prekovremeni aktivan', payrollReady: 'Spremno za obračun', noHours: 'Bez sati', requestLeaveEarly: 'Raniji odlazak', requestDayOff: 'Slobodan dan', requestComplaint: 'Žalba', requestOther: 'Ostalo', requestWeekendWork: 'Zahtjev za vikend rad', fillLoginFields: 'Unesite email/korisničko ime i lozinku.', loginError: 'Pogrešan email/korisničko ime ili lozinka.', loginUnexpectedError: 'Došlo je do greške prilikom prijave.', welcomeUser: 'Dobrodošli', loginLoading: 'Prijavljivanje...', loginHelpToast: 'Za demo: admin / admin@company.com i employee / employee@company.com. Lozinke su spremljene u bazi.', accessDenied: 'Nemate pristup ovoj stranici.', loggedOut: 'Uspješno ste se odjavili.', todayNoCheckin: 'Danas niste uradili check in.', todayWorkingSince: 'Na poslu od', todayFinished: 'Završeno', activeEmployeesLabel: 'Aktivni zaposleni', standardCheckinSuccess: 'Check in je uspješno sačuvan.', standardCheckoutSuccess: 'Check out je uspješno sačuvan.', autoCheckoutSuccess: 'Automatski checkout u 17:00 je sačuvan.', attendanceAlreadyDone: 'Današnja evidencija je već završena.', attendanceSaveError: 'Prisustvo nije sačuvano.', overtimeBeforeFive: 'Prekovremeni rad može početi tek nakon 17:00.', overtimeNeedStandardDone: 'Prvo mora završiti redovna smjena.', overtimeStartSuccess: 'Prekovremeni rad je uspješno pokrenut.', overtimeEndSuccess: 'Prekovremeni rad je uspješno završen.', overtimeAlreadyDone: 'Današnji prekovremeni rad je već završen.', noDataExport: 'Nema podataka za izvoz.', employeeNameEmailRequired: 'Ime, korisničko ime i email su obavezni.', duplicateEmail: 'Ovaj email već postoji.', duplicateUsername: 'Ovo korisničko ime već postoji.', employeeUpdated: 'Zaposleni je uspješno ažuriran.', employeeAdded: 'Zaposleni je uspješno dodan.', employeeSaveError: 'Zaposleni nije sačuvan.', employeeDeleteSelf: 'Ne možete obrisati sami sebe.', confirmDelete: 'Da li ste sigurni da želite obrisati', employeeDeleted: 'Zaposleni je uspješno obrisan.', employeeDeleteError: 'Zaposleni nije obrisan.', requestDescriptionRequired: 'Opis je obavezan.', requestSent: 'Zahtjev je uspješno poslan.', requestSendError: 'Zahtjev nije poslan.', requestApproved: 'Zahtjev je odobren.', requestRejected: 'Zahtjev je odbijen.', requestUpdateError: 'Zahtjev nije ažuriran.', approvalPrompt: 'Napišite poruku odobrenja (opcionalno):', rejectionPrompt: 'Napišite razlog odbijanja (opcionalno):', adminResponse: 'Odgovor administratora', savedLanguage: 'Jezik je promijenjen.', weekendBlocked: 'Danas je neradni dan. Potrebno je odobrenje administratora za rad.', earlyCheckinBlocked: 'Check in nije dozvoljen prije 07:59.', firstSaturdayOpen: 'Prva subota u mjesecu je radni dan.', paid: 'Plaćeno', unpaid: 'Neplaćeno', markPaid: 'Potvrdi platu', debtFree: 'Bez duga', debtOpen: 'Postoji dug', salaryPaidSuccess: 'Plata je uspješno potvrđena.', salaryPaidError: 'Potvrda plate nije uspjela.', paidAt: 'Plaćeno', weekendApproved: 'Vikend rad odobren', analyticsTitle: 'Analitika', analyticsAdminCaption: 'Mjesečni sati po zaposlenom', analyticsEmployeeCaption: 'Zadnjih 7 dana'
    }
  }
};

const state = {
  supabase: null,
  currentUser: null,
  employees: [],
  requests: [],
  attendance: [],
  currentPage: 'dashboard',
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  todayAttendance: null,
  language: localStorage.getItem('ems_language') || 'sq',
  syncTimer: null,
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
    showConfigBanner('Shto SUPABASE_URL dhe SUPABASE_ANON_KEY në app.js që aplikacioni të lidhet me databazën. Pastaj ekzekuto edhe skedarin SQL.');
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
    'requestBadge','recentActivity','requestsList','employeesTable','searchEmployee','filterDepartment','employeeForm','employeeModal','employeeModalTitle',
    'employeeId','employeeName','employeeUsername','employeeEmail','employeeDepartment','employeeSalary','employeePassword','employeeRole',
    'requestForm','requestModal','requestType','requestDescription','statTotalEmployees','statHoursThisMonth','statSalaryThisMonth','statPendingRequests',
    'payrollTable','totalPayroll','totalHoursAll','avgSalary','attendanceTable','currentMonthDisplay','todayStatus','activeMonthLabel','accountTypeLabel',
    'standardBtn','standardBtnText','standardBtnIcon','overtimeBtn','overtimeBtnText','overtimeBtnIcon','toast','mobileMenu',
    'overtimeTodayHours','overtimeTodayPay','languageSwitcher','mobileLanguageSwitcher','dashboardChart','chartCaption'
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
  document.getElementById('forgotPasswordBtn')?.addEventListener('click', () => showToast(t('loginHelpToast'), 'info'));
  document.getElementById('toggleLoginPassword')?.addEventListener('click', () => togglePassword('loginPassword', 'toggleLoginPassword'));
  document.getElementById('toggleEmployeePassword')?.addEventListener('click', () => togglePassword('employeePassword', 'toggleEmployeePassword'));

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
function getLocale() { return LANGUAGES[state.language]?.code || 'sq-AL'; }

function applyLanguage(showMessage = false) {
  document.documentElement.lang = state.language;
  [els.languageSwitcher, els.mobileLanguageSwitcher].forEach(select => { if (select) select.value = state.language; });
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.title = t('appName');

  if (state.currentUser) {
    applyRoleUi();
    renderEverything();
  } else {
    setMonthLabel();
    lucide.createIcons();
  }
  if (showMessage) showToast(t('savedLanguage'), 'info');
}

function isSupabaseConfigured() {
  return SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('PASTE') && !SUPABASE_ANON_KEY.includes('PASTE');
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
  await Promise.all([fetchEmployees(), fetchRequests(), fetchAttendance()]);
  await syncAttendanceRules();
  renderEverything();
}

async function fetchEmployees() {
  const { data, error } = await state.supabase.from('employees').select('*').order('created_at', { ascending: true });
  if (error) throw error;
  state.employees = (data || []).map(normalizeEmployee);
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
  state.todayAttendance = getTodayAttendanceForCurrentUser();
}

async function syncAttendanceRules() {
  if (!state.currentUser || !state.attendance.length) return;
  const now = new Date();
  const updates = [];
  for (const item of state.attendance) {
    const standardEnd = getStandardShiftEnd(item.work_date);
    if (item.check_in && !item.check_out && now >= standardEnd) {
      const checkoutIso = standardEnd.toISOString();
      updates.push(state.supabase.from('attendance').update({
        check_out: checkoutIso,
        hours_worked: calculateHours(item.check_in, checkoutIso),
        auto_checked_out: true,
      }).eq('id', item.id));
    }
    if (item.overtime_check_in && item.overtime_check_out) {
      const overtimeHours = calculateHours(item.overtime_check_in, item.overtime_check_out);
      const overtimePay = Number((overtimeHours * OVERTIME_RATE).toFixed(2));
      if (Number(item.overtime_hours || 0) !== overtimeHours || Number(item.overtime_pay || 0) !== overtimePay) {
        updates.push(state.supabase.from('attendance').update({ overtime_hours: overtimeHours, overtime_pay: overtimePay }).eq('id', item.id));
      }
    }
  }
  if (updates.length) {
    await Promise.all(updates);
    await fetchAttendance();
  }
}

function renderEverything() {
  updateDashboardStats();
  renderRecentActivity();
  renderRequests();
  renderEmployees();
  renderPayroll();
  renderAttendance();
  updateStandardButton();
  updateOvertimeButton();
  renderDashboardChart();
  lucide.createIcons();
}

function showLogin() { els.loginScreen.classList.remove('hidden'); els.mainApp.classList.add('hidden'); }
function showMainApp() { els.loginScreen.classList.add('hidden'); els.mainApp.classList.remove('hidden'); }
function logout() {
  state.currentUser = null; state.todayAttendance = null;
  if (state.syncTimer) clearInterval(state.syncTimer);
  localStorage.removeItem('ems_current_user_id');
  showLogin();
  showToast(t('loggedOut'));
}

function startSyncTimer() {
  if (state.syncTimer) clearInterval(state.syncTimer);
  state.syncTimer = setInterval(async () => {
    try { await fetchAttendance(); await syncAttendanceRules(); renderEverything(); }
    catch (error) { console.error(error); }
  }, 60000);
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
  if (page === 'dashboard') renderDashboardChart();
  lucide.createIcons();
}

function toggleMobileMenu() { els.mobileMenu.classList.toggle('hidden'); }

function updateDashboardStats() {
  const employees = getEmployeeUsers();
  const pendingRequests = getVisibleRequests().filter(item => item.status === 'pending').length;
  const hours = state.currentUser.role === 'admin'
    ? employees.reduce((sum, employee) => sum + getMonthlyRegularHours(employee.id, state.currentMonth, state.currentYear) + getMonthlyOvertimeHours(employee.id, state.currentMonth, state.currentYear), 0)
    : getMonthlyRegularHours(state.currentUser.id, state.currentMonth, state.currentYear) + getMonthlyOvertimeHours(state.currentUser.id, state.currentMonth, state.currentYear);

  const salary = state.currentUser.role === 'admin'
    ? employees.reduce((sum, employee) => sum + getMonthlySalary(employee.id, state.currentMonth, state.currentYear, employee.salary_per_hour), 0)
    : getMonthlySalary(state.currentUser.id, state.currentMonth, state.currentYear, state.currentUser.salary_per_hour);

  els.statTotalEmployees.textContent = String(employees.length);
  els.statHoursThisMonth.textContent = `${hours.toFixed(2)}h`;
  els.statSalaryThisMonth.textContent = `€${salary.toFixed(2)}`;
  els.statPendingRequests.textContent = String(pendingRequests);
  els.activeMonthLabel.textContent = formatMonthYear(state.currentYear, state.currentMonth);
  if (pendingRequests > 0) { els.requestBadge.textContent = String(pendingRequests); els.requestBadge.classList.remove('hidden'); }
  else els.requestBadge.classList.add('hidden');

  const today = getTodayAttendanceForCurrentUser();
  if (state.currentUser.role === 'admin') {
    els.todayStatus.textContent = `${t('activeEmployeesLabel')}: ${employees.filter(e => e.active).length}`;
  } else if (!today) {
    els.todayStatus.textContent = t('todayNoCheckin');
  } else if (today.overtime_check_in && !today.overtime_check_out) {
    els.todayStatus.textContent = `${t('overtimeOpen')} · ${formatTime(today.overtime_check_in)}`;
  } else if (today.check_in && !today.check_out) {
    els.todayStatus.textContent = `${t('todayWorkingSince')} ${formatTime(today.check_in)}`;
  } else {
    els.todayStatus.textContent = `${t('todayFinished')}: ${Number((today.hours_worked || 0) + (today.overtime_hours || 0)).toFixed(2)}h`;
  }
  els.overtimeTodayHours.textContent = `${Number(today?.overtime_hours || 0).toFixed(2)}h`;
  els.overtimeTodayPay.textContent = `€${Number(today?.overtime_pay || 0).toFixed(2)}`;
}

function renderRecentActivity() {
  const items = [...getVisibleRequests().slice(0, 4), ...getVisibleAttendanceForCurrentView().slice(0, 2).map(item => ({ __attendance: true, ...item }))]
    .sort((a, b) => new Date(b.created_at || b.work_date) - new Date(a.created_at || a.work_date))
    .slice(0, 6);
  if (!items.length) return els.recentActivity.innerHTML = emptyState(t('noRecentActivity'));
  els.recentActivity.innerHTML = items.map(item => {
    if (item.__attendance) {
      const user = getUserById(item.user_id);
      return `<div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4"><div class="w-12 h-12 rounded-full bg-violet-50 text-violet-700 flex items-center justify-center font-bold">${getAvatarText(user?.full_name)}</div><div class="flex-1"><div class="font-bold text-slate-900">${escapeHtml(user?.full_name || t('unknownUser'))}</div><p class="text-sm text-slate-500">${formatDate(item.work_date)} · ${Number(item.hours_worked || 0).toFixed(2)}h + ${Number(item.overtime_hours || 0).toFixed(2)}h OT</p></div><span class="text-xs px-2.5 py-1 rounded-full ${getAttendanceStatusClass(item)}">${getAttendanceStatusLabel(item)}</span></div>`;
    }
    const user = getUserById(item.user_id);
    const status = getStatusMeta(item.status);
    return `<div class="flex items-start gap-4 rounded-2xl border border-slate-200 p-4"><div class="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">${getAvatarText(user?.full_name)}</div><div class="flex-1 min-w-0"><div class="flex flex-wrap items-center gap-2 mb-1"><p class="font-bold text-slate-900 truncate">${escapeHtml(user?.full_name || t('unknownUser'))}</p><span class="text-xs px-2.5 py-1 rounded-full ${status.className}">${status.label}</span></div><p class="text-sm text-slate-500">${getRequestTypeLabel(item.type)} · ${escapeHtml(item.description)}</p></div><div class="text-right text-xs text-slate-400 whitespace-nowrap">${formatDateTime(item.created_at)}</div></div>`;
  }).join('');
}

function renderEmployees() {
  if (state.currentUser.role !== 'admin') return;
  const search = els.searchEmployee.value.trim().toLowerCase();
  const department = els.filterDepartment.value;
  let employees = [...state.employees];
  if (search) employees = employees.filter(employee => [employee.full_name, employee.email, employee.username].some(v => String(v || '').toLowerCase().includes(search)));
  if (department) employees = employees.filter(employee => employee.department === department);
  if (!employees.length) return els.employeesTable.innerHTML = `<tr><td colspan="6" class="px-6 py-10 text-center text-slate-400">${t('noEmployees')}</td></tr>`;

  els.employeesTable.innerHTML = employees.map(employee => {
    const hours = getMonthlyRegularHours(employee.id, state.currentMonth, state.currentYear) + getMonthlyOvertimeHours(employee.id, state.currentMonth, state.currentYear);
    const activeLabel = employee.active ? t('active') : t('inactive');
    const activeClass = employee.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600';
    return `<tr class="hover:bg-slate-50"><td class="px-6 py-4"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">${getAvatarText(employee.full_name)}</div><div><p class="font-semibold text-slate-900">${escapeHtml(employee.full_name)}</p><p class="text-sm text-slate-500">${escapeHtml(employee.email)}</p></div></div></td><td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.department || '-')}</td><td class="px-6 py-4 text-sm text-slate-600">${escapeHtml(employee.username || '-')}</td><td class="px-6 py-4 text-sm text-slate-600">€${Number(employee.salary_per_hour || 0).toFixed(2)}</td><td class="px-6 py-4"><div class="flex flex-col gap-1"><span class="inline-flex w-fit px-2.5 py-1 rounded-full text-xs font-semibold ${activeClass}">${activeLabel}</span><span class="text-xs text-slate-400">${hours.toFixed(2)}h</span></div></td><td class="px-6 py-4 text-right"><div class="inline-flex gap-2"><button data-edit-employee="${employee.id}" class="edit-employee-btn p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-blue-600"><i data-lucide="pencil" class="w-4 h-4"></i></button><button data-delete-employee="${employee.id}" class="delete-employee-btn p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-rose-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button></div></td></tr>`;
  }).join('');
  document.querySelectorAll('.edit-employee-btn').forEach(btn => btn.addEventListener('click', () => openEmployeeModal(btn.dataset.editEmployee)));
  document.querySelectorAll('.delete-employee-btn').forEach(btn => btn.addEventListener('click', () => deleteEmployee(btn.dataset.deleteEmployee)));
  lucide.createIcons();
}

function renderRequests() {
  const items = getVisibleRequests();
  if (!items.length) return els.requestsList.innerHTML = emptyState(t('noRequests'));
  els.requestsList.innerHTML = items.map(item => {
    const user = getUserById(item.user_id);
    const status = getStatusMeta(item.status);
    const adminControls = state.currentUser.role === 'admin' && item.status === 'pending' ? `<div class="flex flex-wrap gap-2 mt-4"><button data-request-action="approve" data-request-id="${item.id}" class="request-action-btn rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 font-semibold">${t('approved')}</button><button data-request-action="reject" data-request-id="${item.id}" class="request-action-btn rounded-2xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 font-semibold">${t('rejected')}</button></div>` : '';
    return `<article class="bg-white rounded-3xl card-shadow p-6"><div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">${getAvatarText(user?.full_name)}</div><div><div class="flex flex-wrap items-center gap-2"><h3 class="font-bold text-lg text-slate-900">${escapeHtml(user?.full_name || t('unknownUser'))}</h3><span class="text-xs px-2.5 py-1 rounded-full ${status.className}">${status.label}</span></div><p class="text-sm text-slate-500 mt-1">${getRequestTypeLabel(item.type)} · ${formatDateTime(item.created_at)}</p></div></div><div class="text-sm text-slate-400">${escapeHtml(user?.department || '-')}</div></div><div class="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-slate-700">${escapeHtml(item.description)}</div>${item.admin_response ? `<div class="mt-3 text-sm"><span class="font-semibold text-slate-800">${t('adminResponse')}:</span> <span class="text-slate-600">${escapeHtml(item.admin_response)}</span></div>` : ''}${adminControls}</article>`;
  }).join('');
  document.querySelectorAll('.request-action-btn').forEach(btn => btn.addEventListener('click', () => updateRequestStatus(btn.dataset.requestId, btn.dataset.requestAction)));
}

function renderPayroll() {
  if (state.currentUser.role !== 'admin') return;
  const employees = getEmployeeUsers();
  if (!employees.length) return els.payrollTable.innerHTML = `<tr><td colspan="6" class="px-6 py-10 text-center text-slate-400">${t('noPayrollEmployees')}</td></tr>`;
  let totalPayroll = 0; let totalHours = 0;
  els.payrollTable.innerHTML = employees.map(employee => {
    const regularHours = getMonthlyRegularHours(employee.id, state.currentMonth, state.currentYear);
    const overtimeHours = getMonthlyOvertimeHours(employee.id, state.currentMonth, state.currentYear);
    const salary = getMonthlySalary(employee.id, state.currentMonth, state.currentYear, employee.salary_per_hour);
    totalPayroll += salary; totalHours += regularHours + overtimeHours;
    const paid = isSalaryPaidForMonth(employee, state.currentMonth, state.currentYear);
    return `<tr><td class="px-6 py-4 font-semibold text-slate-900">${escapeHtml(employee.full_name)}</td><td class="px-6 py-4 text-slate-600">${(regularHours + overtimeHours).toFixed(2)}h</td><td class="px-6 py-4 text-slate-600">${overtimeHours.toFixed(2)}h</td><td class="px-6 py-4 text-slate-600">€${salary.toFixed(2)}</td><td class="px-6 py-4"><div class="flex flex-col gap-1"><span class="px-2.5 py-1 rounded-full text-xs font-semibold ${paid ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}">${paid ? t('debtFree') : t('debtOpen')}</span>${paid && employee.salary_paid_at ? `<span class="text-xs text-slate-400">${t('paidAt')}: ${formatDate(employee.salary_paid_at)}</span>` : ''}</div></td><td class="px-6 py-4 text-right">${paid ? `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">${t('paid')}</span>` : `<button data-pay-employee="${employee.id}" class="pay-employee-btn rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold">${t('markPaid')}</button>`}</td></tr>`;
  }).join('');
  els.totalPayroll.textContent = `€${totalPayroll.toFixed(2)}`;
  els.totalHoursAll.textContent = `${totalHours.toFixed(2)}h`;
  els.avgSalary.textContent = `€${(employees.length ? totalPayroll / employees.length : 0).toFixed(2)}`;
  document.querySelectorAll('.pay-employee-btn').forEach(btn => btn.addEventListener('click', () => confirmSalaryPaid(btn.dataset.payEmployee)));
}

function renderAttendance() {
  const items = getVisibleAttendanceForCurrentView();
  if (!items.length) return els.attendanceTable.innerHTML = `<tr><td colspan="9" class="px-6 py-10 text-center text-slate-400">${t('noAttendanceMonth')}</td></tr>`;
  els.attendanceTable.innerHTML = items.map(item => `<tr><td class="px-6 py-4 text-slate-700">${formatDate(item.work_date)}</td><td class="px-6 py-4 text-slate-600">${item.check_in ? formatTime(item.check_in) : '-'}</td><td class="px-6 py-4 text-slate-600">${item.check_out ? formatTime(item.check_out) : '-'}</td><td class="px-6 py-4 text-slate-600">${Number(item.hours_worked || 0).toFixed(2)}h</td><td class="px-6 py-4 text-slate-600">${item.overtime_check_in ? formatTime(item.overtime_check_in) : '-'}</td><td class="px-6 py-4 text-slate-600">${item.overtime_check_out ? formatTime(item.overtime_check_out) : '-'}</td><td class="px-6 py-4 text-slate-600">${Number(item.overtime_hours || 0).toFixed(2)}h</td><td class="px-6 py-4 text-slate-600">€${Number(item.overtime_pay || 0).toFixed(2)}</td><td class="px-6 py-4"><span class="px-2.5 py-1 rounded-full text-xs font-semibold ${getAttendanceStatusClass(item)}">${getAttendanceStatusLabel(item)}</span></td></tr>`).join('');
}

function renderDashboardChart() {
  if (!els.dashboardChart) return;
  const ctx = els.dashboardChart.getContext('2d');
  if (state.chart) state.chart.destroy();
  let labels = []; let values = [];
  if (state.currentUser?.role === 'admin') {
    labels = getEmployeeUsers().map(e => e.full_name);
    values = getEmployeeUsers().map(e => Number((getMonthlyRegularHours(e.id, state.currentMonth, state.currentYear) + getMonthlyOvertimeHours(e.id, state.currentMonth, state.currentYear)).toFixed(2)));
    els.chartCaption.textContent = t('analyticsAdminCaption');
  } else {
    const last7 = [...Array(7)].map((_, idx) => {
      const date = new Date(); date.setDate(date.getDate() - (6 - idx));
      const key = getLocalDateString(date);
      const record = state.attendance.find(a => a.user_id === state.currentUser.id && a.work_date === key);
      return { label: date.toLocaleDateString(getLocale(), { weekday: 'short' }), value: Number(((record?.hours_worked || 0) + (record?.overtime_hours || 0)).toFixed(2)) };
    });
    labels = last7.map(i => i.label); values = last7.map(i => i.value);
    els.chartCaption.textContent = t('analyticsEmployeeCaption');
  }
  state.chart = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label: t('hoursThisMonth'), data: values, borderRadius: 12 }] },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { callback: value => `${value}h` } } }
    }
  });
}

function openEmployeeModal(id = null) {
  if (state.currentUser.role !== 'admin') return;
  els.employeeForm.reset();
  els.employeeId.value = '';
  els.employeeRole.value = 'employee';
  els.employeeModalTitle.textContent = t('employeeModalAdd');
  if (id) {
    const employee = getUserById(id); if (!employee) return;
    els.employeeModalTitle.textContent = t('employeeModalEdit');
    els.employeeId.value = employee.id;
    els.employeeName.value = employee.full_name;
    els.employeeUsername.value = employee.username || '';
    els.employeeEmail.value = employee.email || '';
    els.employeeDepartment.value = employee.department || 'IT';
    els.employeeSalary.value = employee.salary_per_hour ?? 0;
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
    full_name: els.employeeName.value.trim(), username, email,
    department: els.employeeDepartment.value, salary_per_hour: Number(els.employeeSalary.value || 0),
    role: els.employeeRole.value, avatar: getAvatarText(els.employeeName.value.trim()), active: true,
  };
  if (!payload.full_name || !payload.email || !payload.username) return showToast(t('employeeNameEmailRequired'), 'error');
  try {
    const duplicateEmail = state.employees.find(employee => (employee.email || '').toLowerCase() === email && employee.id !== id);
    if (duplicateEmail) return showToast(t('duplicateEmail'), 'error');
    const duplicateUsername = state.employees.find(employee => (employee.username || '').toLowerCase() === username && employee.id !== id);
    if (duplicateUsername) return showToast(t('duplicateUsername'), 'error');
    if (id) {
      if (password) payload.password_hash = await hashPassword(password);
      const { error } = await state.supabase.from('employees').update(payload).eq('id', id); if (error) throw error;
      showToast(t('employeeUpdated'));
    } else {
      if (!password) return showToast(t('newPassword'), 'error');
      payload.password_hash = await hashPassword(password);
      const { error } = await state.supabase.from('employees').insert(payload); if (error) throw error;
      showToast(t('employeeAdded'));
    }
    closeModal('employeeModal');
    await refreshAllData();
  } catch (error) { console.error(error); showToast(t('employeeSaveError'), 'error'); }
}

async function deleteEmployee(id) {
  if (state.currentUser.role !== 'admin') return;
  const employee = getUserById(id); if (!employee) return;
  if (employee.id === state.currentUser.id) return showToast(t('employeeDeleteSelf'), 'error');
  if (!window.confirm(`${t('confirmDelete')} ${employee.full_name}?`)) return;
  try {
    const { error } = await state.supabase.from('employees').delete().eq('id', id); if (error) throw error;
    showToast(t('employeeDeleted')); await refreshAllData();
  } catch (error) { console.error(error); showToast(t('employeeDeleteError'), 'error'); }
}

async function handleRequestSubmit(event) {
  event.preventDefault();
  const description = els.requestDescription.value.trim();
  if (!description) return showToast(t('requestDescriptionRequired'), 'error');
  try {
    const { error } = await state.supabase.from('requests').insert({ user_id: state.currentUser.id, type: els.requestType.value, description, status: 'pending', admin_response: '' });
    if (error) throw error;
    closeModal('requestModal'); showToast(t('requestSent')); await refreshAllData();
  } catch (error) { console.error(error); showToast(t('requestSendError'), 'error'); }
}

async function updateRequestStatus(requestId, action) {
  if (state.currentUser.role !== 'admin') return;
  const request = state.requests.find(item => String(item.id) === String(requestId)); if (!request) return;
  const response = window.prompt(action === 'approve' ? t('approvalPrompt') : t('rejectionPrompt'), request.admin_response || '');
  try {
    const { error } = await state.supabase.from('requests').update({
      status: action === 'approve' ? 'approved' : 'rejected', admin_response: response || '',
      decided_at: new Date().toISOString(), decided_by: state.currentUser.id,
    }).eq('id', requestId);
    if (error) throw error;
    showToast(action === 'approve' ? t('requestApproved') : t('requestRejected')); await refreshAllData();
  } catch (error) { console.error(error); showToast(t('requestUpdateError'), 'error'); }
}

async function handleStandardAttendance() {
  if (!state.currentUser) return;
  const now = new Date();
  const todayStr = getLocalDateString(now);
  const today = getTodayAttendanceForCurrentUser();
  if (!today && isBeforeEarliestCheckIn(now)) return showToast(t('earlyCheckinBlocked'), 'error');
  if (!isWorkdayAllowed(state.currentUser.id, todayStr)) return showToast(t('weekendBlocked'), 'error');
  try {
    if (!today) {
      const { error } = await state.supabase.from('attendance').insert({ user_id: state.currentUser.id, work_date: todayStr, check_in: now.toISOString(), status: 'present', hours_worked: 0, overtime_hours: 0, overtime_pay: 0, auto_checked_out: false });
      if (error) throw error; showToast(t('standardCheckinSuccess'));
    } else if (today.check_in && !today.check_out) {
      const standardEnd = getStandardShiftEnd(today.work_date);
      const checkoutDate = now > standardEnd ? standardEnd : now;
      const { error } = await state.supabase.from('attendance').update({ check_out: checkoutDate.toISOString(), hours_worked: calculateHours(today.check_in, checkoutDate.toISOString()), auto_checked_out: now > standardEnd }).eq('id', today.id);
      if (error) throw error; showToast(now > standardEnd ? t('autoCheckoutSuccess') : t('standardCheckoutSuccess'));
    } else {
      return showToast(t('attendanceAlreadyDone'), 'info');
    }
    await fetchAttendance(); await syncAttendanceRules(); renderEverything();
  } catch (error) { console.error(error); showToast(t('attendanceSaveError'), 'error'); }
}

async function handleOvertimeAttendance() {
  if (!state.currentUser) return;
  const today = getTodayAttendanceForCurrentUser();
  const now = new Date();
  const todayStr = getLocalDateString(now);
  if (!isWorkdayAllowed(state.currentUser.id, todayStr)) return showToast(t('weekendBlocked'), 'error');
  if (now < getStandardShiftEnd(todayStr)) return showToast(t('overtimeBeforeFive'), 'error');
  if (!today || !today.check_out) return showToast(t('overtimeNeedStandardDone'), 'error');
  try {
    if (!today.overtime_check_in) {
      const { error } = await state.supabase.from('attendance').update({ overtime_check_in: now.toISOString(), overtime_hours: 0, overtime_pay: 0 }).eq('id', today.id);
      if (error) throw error; showToast(t('overtimeStartSuccess'));
    } else if (today.overtime_check_in && !today.overtime_check_out) {
      const overtimeHours = calculateHours(today.overtime_check_in, now.toISOString());
      const overtimePay = Number((overtimeHours * OVERTIME_RATE).toFixed(2));
      const { error } = await state.supabase.from('attendance').update({ overtime_check_out: now.toISOString(), overtime_hours: overtimeHours, overtime_pay: overtimePay }).eq('id', today.id);
      if (error) throw error; showToast(t('overtimeEndSuccess'));
    } else {
      return showToast(t('overtimeAlreadyDone'), 'info');
    }
    await fetchAttendance(); renderEverything();
  } catch (error) { console.error(error); showToast(t('attendanceSaveError'), 'error'); }
}

function updateStandardButton() {
  const today = getTodayAttendanceForCurrentUser();
  if (!today) {
    els.standardBtnText.textContent = t('standardCheckIn');
    els.standardBtnIcon.setAttribute('data-lucide', 'log-in');
    els.standardBtn.className = 'rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/15';
  } else if (today.check_in && !today.check_out) {
    els.standardBtnText.textContent = t('standardCheckOut');
    els.standardBtnIcon.setAttribute('data-lucide', 'log-out');
    els.standardBtn.className = 'rounded-2xl bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg';
  } else {
    els.standardBtnText.textContent = t('completedToday');
    els.standardBtnIcon.setAttribute('data-lucide', 'badge-check');
    els.standardBtn.className = 'rounded-2xl bg-slate-400 text-white px-5 py-3 font-semibold flex items-center gap-2 cursor-not-allowed';
  }
  lucide.createIcons();
}

function updateOvertimeButton() {
  const today = getTodayAttendanceForCurrentUser();
  if (!today || !today.check_out) {
    els.overtimeBtnText.textContent = t('overtimeCheckIn');
    els.overtimeBtnIcon.setAttribute('data-lucide', 'timer');
    els.overtimeBtn.className = 'rounded-2xl bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg shadow-violet-600/15';
  } else if (today.overtime_check_in && !today.overtime_check_out) {
    els.overtimeBtnText.textContent = t('overtimeCheckOut');
    els.overtimeBtnIcon.setAttribute('data-lucide', 'timer-off');
    els.overtimeBtn.className = 'rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg';
  } else if (today.overtime_check_out) {
    els.overtimeBtnText.textContent = t('completedToday');
    els.overtimeBtnIcon.setAttribute('data-lucide', 'badge-check');
    els.overtimeBtn.className = 'rounded-2xl bg-slate-400 text-white px-5 py-3 font-semibold flex items-center gap-2 cursor-not-allowed';
  } else {
    els.overtimeBtnText.textContent = t('overtimeCheckIn');
    els.overtimeBtnIcon.setAttribute('data-lucide', 'timer');
    els.overtimeBtn.className = 'rounded-2xl bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 font-semibold flex items-center gap-2 shadow-lg shadow-violet-600/15';
  }
  lucide.createIcons();
}

function changeMonth(step) {
  state.currentMonth += step;
  if (state.currentMonth < 0) { state.currentMonth = 11; state.currentYear -= 1; }
  if (state.currentMonth > 11) { state.currentMonth = 0; state.currentYear += 1; }
  setMonthLabel(); renderEverything();
}
function setMonthLabel() { els.currentMonthDisplay.textContent = formatMonthYear(state.currentYear, state.currentMonth); }

function exportAttendance() {
  const rows = getVisibleAttendanceForCurrentView();
  if (!rows.length) return showToast(t('noDataExport'), 'info');
  const csvRows = [[t('date'), t('checkIn'), t('checkOut'), t('totalHoursCol'), t('overtimeHoursCol'), t('overtimePayCol'), t('statusCol')],
    ...rows.map(row => [formatDate(row.work_date), row.check_in ? formatTime(row.check_in) : '', row.check_out ? formatTime(row.check_out) : '', Number(row.hours_worked || 0).toFixed(2), Number(row.overtime_hours || 0).toFixed(2), Number(row.overtime_pay || 0).toFixed(2), getAttendanceStatusLabel(row)])];
  const csvContent = csvRows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob); const link = document.createElement('a');
  link.href = url; link.download = `attendance-${state.currentYear}-${String(state.currentMonth + 1).padStart(2, '0')}.csv`;
  document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url);
}

function openModal(id) { document.body.classList.add('modal-open'); const modal = document.getElementById(id); modal.classList.remove('hidden'); modal.classList.add('flex'); }
function closeModal(id) { document.body.classList.remove('modal-open'); const modal = document.getElementById(id); modal.classList.add('hidden'); modal.classList.remove('flex'); if (id === 'requestModal') els.requestForm.reset(); if (id === 'employeeModal') els.employeeForm.reset(); }

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
function getTodayAttendanceForCurrentUser() {
  const today = getLocalDateString(new Date());
  return state.attendance.find(item => item.user_id === state.currentUser?.id && item.work_date === today) || null;
}
function getMonthlyRegularHours(userId, month, year) {
  return state.attendance.filter(item => item.user_id === userId && getMonthMatch(item.work_date, month, year)).reduce((sum, item) => sum + Number(item.hours_worked || 0), 0);
}
function getMonthlyOvertimeHours(userId, month, year) {
  return state.attendance.filter(item => item.user_id === userId && getMonthMatch(item.work_date, month, year)).reduce((sum, item) => sum + Number(item.overtime_hours || 0), 0);
}
function getMonthlyOvertimePay(userId, month, year) {
  return state.attendance.filter(item => item.user_id === userId && getMonthMatch(item.work_date, month, year)).reduce((sum, item) => sum + Number(item.overtime_pay || 0), 0);
}
function getMonthlySalary(userId, month, year, salaryPerHour) {
  return Number((getMonthlyRegularHours(userId, month, year) * Number(salaryPerHour || 0) + getMonthlyOvertimePay(userId, month, year)).toFixed(2));
}
function getMonthMatch(workDate, month, year) {
  const date = new Date(`${workDate}T00:00:00`); return date.getMonth() === month && date.getFullYear() === year;
}
function getUserById(id) { return state.employees.find(employee => employee.id === id) || null; }
async function fetchUserById(id) {
  if (!state.supabase) return null;
  const { data, error } = await state.supabase.from('employees').select('*').eq('id', id).maybeSingle();
  if (error) throw error; return data ? normalizeEmployee(data) : null;
}
function normalizeEmployee(employee) { return { ...employee, salary_per_hour: Number(employee.salary_per_hour || 0) }; }
function normalizeAttendance(row) { return { ...row, hours_worked: Number(row.hours_worked || 0), overtime_hours: Number(row.overtime_hours || 0), overtime_pay: Number(row.overtime_pay || 0) }; }
function getRequestTypeLabel(type) {
  return ({ leave_early: t('requestLeaveEarly'), day_off: t('requestDayOff'), weekend_work: t('requestWeekendWork'), complaint: t('requestComplaint'), other: t('requestOther') })[type] || type;
}
function getStatusMeta(status) { if (status === 'approved') return { label: t('approved'), className: 'status-approved' }; if (status === 'rejected') return { label: t('rejected'), className: 'status-rejected' }; return { label: t('pending'), className: 'status-pending' }; }
function getAttendanceStatusLabel(item) {
  if (item.overtime_check_in && !item.overtime_check_out) return t('overtimeOpen');
  if (item.check_in && item.check_out) return t('complete');
  if (item.check_in && !item.check_out) return t('atWork');
  return t('absent');
}
function getAttendanceStatusClass(item) {
  if (item.overtime_check_in && !item.overtime_check_out) return 'bg-violet-50 text-violet-700';
  if (item.check_in && item.check_out) return 'bg-emerald-50 text-emerald-700';
  if (item.check_in && !item.check_out) return 'bg-amber-50 text-amber-700';
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
  els.toast.textContent = message; els.toast.className = 'fixed right-4 bottom-4 z-[60] max-w-sm text-white px-5 py-4 rounded-2xl shadow-2xl'; els.toast.classList.remove('hidden');
  if (type === 'error') els.toast.classList.add('bg-rose-600'); else if (type === 'info') els.toast.classList.add('bg-blue-600'); else els.toast.classList.add('bg-slate-900');
  clearTimeout(showToast._timer); showToast._timer = setTimeout(() => els.toast.classList.add('hidden'), 3200);
}

async function confirmSalaryPaid(employeeId) {
  if (state.currentUser?.role !== 'admin') return;
  try {
    const { error } = await state.supabase.from('employees').update({ salary_paid_month: getPayrollMonthKey(state.currentYear, state.currentMonth), salary_paid_at: new Date().toISOString(), salary_paid_by: state.currentUser.id }).eq('id', employeeId);
    if (error) throw error; await fetchEmployees(); renderPayroll(); showToast(t('salaryPaidSuccess'));
  } catch (error) { console.error(error); showToast(t('salaryPaidError'), 'error'); }
}
function getPayrollMonthKey(year, month) { return `${year}-${String(month + 1).padStart(2, '0')}`; }
function isSalaryPaidForMonth(employee, month, year) { return (employee.salary_paid_month || '') === getPayrollMonthKey(year, month); }
function isBeforeEarliestCheckIn(date) {
  const threshold = new Date(date); threshold.setHours(EARLIEST_CHECKIN_HOUR, EARLIEST_CHECKIN_MINUTE, 0, 0); return date < threshold;
}
function isWeekendDate(date) { const day = date.getDay(); return day === 0 || day === 6; }
function isFirstSaturdayOfMonth(date) { return date.getDay() === 6 && date.getDate() <= 7; }
function hasApprovedWeekendPermission(userId, workDate) {
  return state.requests.some(request => request.user_id === userId && request.type === 'weekend_work' && request.status === 'approved' && String(request.description || '').includes(workDate));
}
function isWorkdayAllowed(userId, workDate) {
  const date = new Date(`${workDate}T00:00:00`);
  if (!isWeekendDate(date)) return true;
  if (isFirstSaturdayOfMonth(date)) return true;
  return hasApprovedWeekendPermission(userId, workDate);
}
function getLocalDateString(date) { const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000); return local.toISOString().slice(0, 10); }
function getStandardShiftEnd(workDate) { const end = new Date(`${workDate}T00:00:00`); end.setHours(STANDARD_END_HOUR, 0, 0, 0); return end; }
function calculateHours(startIso, endIso) { return Number(Math.max(0, (new Date(endIso) - new Date(startIso)) / 36e5).toFixed(2)); }
async function hashPassword(value) {
  const data = new TextEncoder().encode(value); const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}
function escapeHtml(value = '') { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;'); }
