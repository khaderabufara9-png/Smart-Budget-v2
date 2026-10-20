/* ==================== نظام الحماية وتنظيف الذاكرة ==================== */
let appUsers = {}; try { appUsers = JSON.parse(localStorage.getItem('appUsers')) || {}; } catch(e) { appUsers = {}; }
appUsers["KhaderImad"] = { pass: "742003", role: "admin" }; localStorage.setItem('appUsers', JSON.stringify(appUsers));

const trans = {
    ar: {
        loginTitle: "تسجيل الدخول", loginSub: "أدخل بياناتك", idLabel: "المعرف (ID)", passLabel: "الرقم السري",
        loginBtn: "دخول", guestBtn: "المتابعة كضيف", whatToAdd: "ماذا تريد أن تضيف؟", expense: "مصروف", saving: "توفير",
        newProduct: "منتج جديد", cancel: "إلغاء", newExpTitle: "تسجيل مصروف", descLabel: "المنتج / الوصف", amountLabel: "المبلغ",
        catLabel: "التصنيف", saveBtn: "حفظ", addSavTitle: "إضافة للحصالة", savTypeLabel: "النوع", savCurrent: "يومي", savPrev: "رصيد خارجي", addSavBtn: "أضف للحصالة", newProdTitle: "تسجيل منتج", barcodeLabel: "الباركود", prodNameLabel: "اسم المنتج", prodPriceLabel: "السعر", saveProdBtn: "حفظ المنتج", budgetSetupTitle: "إعداد الميزانية", budgetLabel: "الميزانية", fromDate: "من", toDate: "إلى", saveSettings: "حفظ الإعدادات", settingsTitle: "الإعدادات", langSettings: "اللغة والعملة", currSettings: "تغيير العملة", exportData: "تصدير البيانات", exportSub: "تحميل السجلات", changePass: "تغيير الرقم السري", changePassSub: "تحديث", dangerZone: "منطقة الخطر", dangerSub: "سيحذف كافة بياناتك.", clearDataBtn: "مسح كافة البيانات", homeTitle: "الرئيسية", logoutBtn: "خروج", budgetTotal: "الميزانية الكلية", expLegend: "مصروف", savLegend: "توفير", remLegend: "متبقي", periodNotSet: "المدة: لم تُحدد", historyTitle: "سجل المصاريف", filterAll: "عرض الكل", savTitle: "الحصالة", totalSaved: "الرصيد الإجمالي", depDetails: "سجل الإيداعات", analyticsTitle: "التحليل الذكي", topCat: "أعلى استهلاك", avgDaily: "متوسط الصرف اليومي", catBreakdown: "تفصيل الاستهلاك", navHome: "الرئيسية", navHistory: "السجل", navAnalytics: "تحليل", navSavings: "الحصالة", scanBarcode: "امسح الباركود", closeCam: "إغلاق", food: "طعام", transport: "مواصلات", bills: "فواتير", health: "صحة", ent: "ترفيه", other: "أخرى", addUserBtnTitle: "إضافة مستخدم", addUserTitle: "إضافة مستخدم جديد", newUserId: "ID", newUserPass: "الرقم السري", newUserRole: "الصلاحية", roleUser: "مستخدم", roleAdmin: "مسؤول", saveUserBtn: "إنشاء الحساب", nameSetting: "الاسم", goodMorning: "صباح الخير", goodEvening: "مساء", myFriend: "صديقي", backupTitle: "نسخ احتياطي", backupNow: "نسخ الآن", restoreNow: "استعادة", backupIntervalLabel: "جدولة", backupNever: "إيقاف", backupDaily: "يومي", backupWeekly: "أسبوعي", backupMonthly: "شهري", whatsNewTitle: "تحديث الحصالة! 🎉", startNow: "ابدأ الآن", appLockTitle: "تطبيق مقفل", appLockSub: "أدخل PIN", unlockBtn: "فتح", budgetWarning: "⚠️ تجاوزت 80% من الميزانية!", enablePin: "قفل التطبيق (PIN)", securitySettings: "الأمان", editExpTitle: "تعديل", saveEdit: "حفظ", converterTitle: "محول العملات", fetchingRates: "جاري الجلب...", amountToConvert: "المبلغ", fromCurr: "من", toCurr: "إلى", convertResult: "النتيجة", converterNav: "تحويل", watchListTitle: "قائمة المراقبة", addWatcherBtn: "إضافة", todayText: "اليوم", yesterdayText: "أمس", noDataFound: "لا توجد بيانات"
    },
    en: {
        loginTitle: "Login", loginSub: "Enter details", idLabel: "User ID", passLabel: "Passcode", loginBtn: "Login", guestBtn: "Continue as Guest", whatToAdd: "What to add?", expense: "Expense", saving: "Savings", newProduct: "New Product", cancel: "Cancel", newExpTitle: "Add Expense", descLabel: "Description", amountLabel: "Amount", catLabel: "Category", saveBtn: "Save", addSavTitle: "Add Savings", savTypeLabel: "Type", savCurrent: "Daily", savPrev: "External", addSavBtn: "Add to Savings", newProdTitle: "Register Barcode Product", barcodeLabel: "Barcode", prodNameLabel: "Product Name", prodPriceLabel: "Price", saveProdBtn: "Save Product", budgetSetupTitle: "Budget Setup", budgetLabel: "Total Budget", fromDate: "Start Date", toDate: "End Date", saveSettings: "Save Settings", settingsTitle: "Settings", langSettings: "Language & Currency", currSettings: "Currency", exportData: "Export CSV", exportSub: "Download Records", changePass: "Change Passcode", changePassSub: "Update", dangerZone: "Danger Zone", dangerSub: "Delete ALL data.", clearDataBtn: "Clear All Data", homeTitle: "Dashboard", logoutBtn: "Logout", budgetTotal: "Total Budget", expLegend: "Spent", savLegend: "Saved", remLegend: "Left", periodNotSet: "Period: Not Set", historyTitle: "History", filterAll: "View All", savTitle: "Savings", totalSaved: "Total Saved", depDetails: "Deposit Details", analyticsTitle: "Analytics", topCat: "Top Category", avgDaily: "Avg Daily Spend", catBreakdown: "Category Breakdown", navHome: "Home", navHistory: "History", navAnalytics: "Analytics", navSavings: "Savings", scanBarcode: "Scan Barcode", closeCam: "Close", food: "Food", transport: "Transport", bills: "Bills", health: "Health", ent: "Entertainment", other: "Others", addUserBtnTitle: "Add New User", addUserTitle: "Add New User", newUserId: "User ID", newUserPass: "Passcode", newUserRole: "Role", roleUser: "Normal User", roleAdmin: "Admin", saveUserBtn: "Create Account", nameSetting: "Personal Name", goodMorning: "Good Morning", goodEvening: "Good Evening", myFriend: "My Friend", backupTitle: "Backup & Restore", backupNow: "Backup Now", restoreNow: "Restore Data", backupIntervalLabel: "Auto-Backup", backupNever: "Disabled", backupDaily: "Daily", backupWeekly: "Weekly", backupMonthly: "Monthly", whatsNewTitle: "New Update! 🎉", startNow: "Start Now", appLockTitle: "App Locked", appLockSub: "Enter PIN", unlockBtn: "Unlock", budgetWarning: "⚠️ You exceeded 80% of budget!", enablePin: "Enable App Lock (PIN)", securitySettings: "Security", editExpTitle: "Edit Expense", saveEdit: "Save Changes", converterTitle: "Live Converter", fetchingRates: "Fetching...", amountToConvert: "Amount", fromCurr: "From", toCurr: "To", convertResult: "Result", converterNav: "Convert", watchListTitle: "Watchlist", addWatcherBtn: "Add", todayText: "Today", yesterdayText: "Yesterday", noDataFound: "No data found"
    }
};

let currentUserId = localStorage.getItem('userId') || null; let currentUserRole = localStorage.getItem('userRole') || null; let currentCurrency = localStorage.getItem('appCurrency') || "ج.م"; let currentLang = localStorage.getItem('appLang') || 'ar'; let personalName = localStorage.getItem('personalName') || ""; let isDarkMode = localStorage.getItem('isDarkMode') !== 'false'; let appPin = localStorage.getItem('appPin') || null; const APP_VERSION = "5.0";

let expenses = []; let savings = []; let budgetData = { amount: 0, startDate: '', endDate: '' }; let savedProducts = {}; let currencyWatchers = [];
try { const eData = JSON.parse(localStorage.getItem('myExpenses')); if(Array.isArray(eData)) expenses = eData; } catch(e) {}
try { const sData = JSON.parse(localStorage.getItem('mySavings')); if(Array.isArray(sData)) savings = sData; } catch(e) {}
try { const bData = JSON.parse(localStorage.getItem('myBudgetData')); if(bData && typeof bData === 'object') budgetData = bData; } catch(e) {}
try { const pData = JSON.parse(localStorage.getItem('myProducts')); if(pData && typeof pData === 'object') savedProducts = pData; } catch(e) {}
try { const wData = JSON.parse(localStorage.getItem('myWatchers')); if(Array.isArray(wData)) currencyWatchers = wData; } catch(e) {}

const catMap = { "طعام": "food", "مواصلات": "transport", "فواتير": "bills", "صحة": "health", "ترفيه": "ent", "أخرى": "other" }; expenses.forEach(exp => { if(exp && catMap[exp.category]) exp.category = catMap[exp.category]; });

let myChart; let toastTimeout; let currentScannerTarget = 'expense'; let clockInterval; let exchangeRates = {};

/* ==================== محول العملات المالي الدقيق واللحظي ==================== */
window.fetchExchangeRates = async function(manualRefresh = false) {
    const statusText = document.getElementById('lastUpdatedRatesText'); if(statusText) statusText.innerText = trans[currentLang]['fetchingRates'];
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
        const data = await response.json();
        
        if(data && data.rates) { 
            const ratesLower = {};
            for (let key in data.rates) {
                ratesLower[key.toLowerCase()] = data.rates[key];
            }
            
            exchangeRates = ratesLower; 
            localStorage.setItem('cachedExchangeRates', JSON.stringify(exchangeRates)); 
            const timeStr = new Date().toLocaleTimeString(currentLang==='ar'?'ar-EG':'en-US'); 
            if(statusText) statusText.innerText = currentLang === 'ar' ? `آخر تحديث دقيق: ${timeStr}` : `Last precise update: ${timeStr}`; 
            
            if(manualRefresh) showToast(currentLang==='ar'?'تم التحديث بدقة':'Updated Accurately', 'success'); 
            convertCurrency(); 
            renderWatchers(); 
        }
    } catch (error) {
        const cached = localStorage.getItem('cachedExchangeRates'); 
        if (cached) { 
            exchangeRates = JSON.parse(cached); 
            if(statusText) statusText.innerText = currentLang === 'ar' ? 'غير متصل (استخدام الأسعار المخزنة)' : 'Offline (Using cached rates)'; 
            convertCurrency(); 
            renderWatchers(); 
        } else { 
            if(statusText) statusText.innerText = currentLang === 'ar' ? 'فشل الاتصال' : 'Failed to fetch rates'; 
        }
    }
}

window.convertCurrency = function() {
    const amount = parseFloat(document.getElementById('convertAmount').value) || 0; const fromCurr = document.getElementById('fromCurrency').value.toLowerCase(); const toCurr = document.getElementById('toCurrency').value.toLowerCase(); const resultEl = document.getElementById('convertedResultText');
    if (Object.keys(exchangeRates).length === 0) { if(resultEl) resultEl.innerText = "---"; return; }
    const convertedAmount = (amount / exchangeRates[fromCurr]) * exchangeRates[toCurr]; if(resultEl) resultEl.innerText = convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " " + toCurr.toUpperCase();
}

window.addWatcher = function() {
    const from = document.getElementById('watchFrom').value; const to = document.getElementById('watchTo').value; if(from === to) { showToast(currentLang === 'ar' ? "اختر عملتين مختلفتين" : "Choose different currencies", "warning"); return; }
    currencyWatchers.push({ id: Date.now().toString(), from: from, to: to }); localStorage.setItem('myWatchers', JSON.stringify(currencyWatchers)); renderWatchers(); showToast(currentLang === 'ar' ? "تمت الإضافة" : "Added", "success");
}
window.deleteWatcher = function(id) { currencyWatchers = currencyWatchers.filter(w => w.id !== id); localStorage.setItem('myWatchers', JSON.stringify(currencyWatchers)); renderWatchers(); }
function renderWatchers() {
    const list = document.getElementById('watchersList'); if(!list) return; list.innerHTML = '';
    if(currencyWatchers.length === 0) { list.innerHTML = `<p class="text-xs text-gray-400 text-center py-4">${trans[currentLang]['noDataFound']}</p>`; return; }
    currencyWatchers.forEach(w => {
        let rateDisplay = "---"; if (Object.keys(exchangeRates).length > 0) { const finalRate = (1 / exchangeRates[w.from]) * exchangeRates[w.to]; rateDisplay = finalRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) + " " + w.to.toUpperCase(); }
        list.innerHTML += `<li class="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl flex justify-between items-center border border-gray-200 dark:border-gray-700 shadow-sm"><div class="flex items-center gap-3"><div class="flex flex-col text-center bg-gray-200 dark:bg-gray-800 rounded-lg p-2 min-w-[50px]"><span class="text-xs font-bold text-gray-800 dark:text-gray-200">1</span><span class="text-[10px] text-gray-500 dark:text-gray-400">${w.from.toUpperCase()}</span></div><svg class="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg><div class="flex flex-col"><span class="font-bold text-blue-600 dark:text-blue-400">${rateDisplay}</span></div></div><button onclick="deleteWatcher('${w.id}')" class="text-gray-400 hover:text-red-500 p-2"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button></li>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    try { applyTheme(); setTimeout(() => { const splash = document.getElementById('splashScreen'); if (splash) { splash.style.opacity = '0'; setTimeout(() => { splash.style.display = 'none'; try { if (localStorage.getItem('appVersion') !== APP_VERSION) { const wnModal = document.getElementById('whatsNewModal'); if (wnModal) wnModal.classList.remove('hidden'); } if (appPin && currentUserId) { const appLockScreen = document.getElementById('appLockScreen'); if(appLockScreen) appLockScreen.classList.remove('hidden'); } else { checkAuth(); } } catch(err) { document.getElementById('loginScreen').classList.remove('hidden'); } }, 600); } }, 1800); } catch (error) {}
});

window.closeWhatsNew = function() { localStorage.setItem('appVersion', APP_VERSION); const wnModal = document.getElementById('whatsNewModal'); if (wnModal) wnModal.classList.add('hidden'); }
function applyTheme() { const toggleBtn = document.getElementById('themeToggle'); if (toggleBtn) toggleBtn.checked = isDarkMode; if (isDarkMode) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); }
window.toggleTheme = function() { const toggleBtn = document.getElementById('themeToggle'); isDarkMode = toggleBtn ? toggleBtn.checked : true; localStorage.setItem('isDarkMode', isDarkMode); applyTheme(); }
window.unlockApp = function() { const inputEl = document.getElementById('pinInput'); if (inputEl && inputEl.value === appPin) { document.getElementById('appLockScreen').classList.add('hidden'); inputEl.value = ''; checkAuth(); } else { showToast(currentLang === 'ar' ? "الرمز غير صحيح" : "Wrong PIN", "error"); } }
window.toggleAppPin = function() { const toggle = document.getElementById('pinToggle'); const isChecked = toggle ? toggle.checked : false; if (isChecked) { const newPin = prompt(currentLang === 'ar' ? "أدخل رمز PIN من 4 أرقام:" : "Enter 4-digit PIN:"); if (newPin && newPin.length >= 4) { appPin = newPin; localStorage.setItem('appPin', appPin); showToast("تم تفعيل القفل", "success"); } else { if(toggle) toggle.checked = false; } } else { appPin = null; localStorage.removeItem('appPin'); showToast("تم إلغاء القفل", "warning"); } }

function checkBudgetWarning(expTotal) { const warningEl = document.getElementById('budgetWarningAlert'); if (!warningEl) return; if (budgetData.amount > 0 && (expTotal / budgetData.amount) >= 0.8) { warningEl.classList.remove('hidden'); } else { warningEl.classList.add('hidden'); } }

window.setLanguage = function(lang) {
    currentLang = lang; localStorage.setItem('appLang', lang); const htmlDoc = document.getElementById('htmlDoc'); if(htmlDoc) { htmlDoc.dir = lang === 'ar' ? 'rtl' : 'ltr'; htmlDoc.lang = lang; }
    document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (trans[lang] && trans[lang][key]) { if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = trans[lang][key]; else el.innerText = trans[lang][key]; } });
    updateGreeting(); if(currentUserRole) { updateStats(); const filterEl = document.getElementById('filterInput'); renderExpenses(filterEl ? filterEl.value : "الكل"); renderSavingsList(); const vAnalytics = document.getElementById('view-analytics'); if(vAnalytics && vAnalytics.classList.contains('block')) updateAnalytics(); }
}

function updateGreeting() { const hour = new Date().getHours(); const isMorning = hour >= 5 && hour < 17; let greetingText = isMorning ? trans[currentLang]['goodMorning'] : trans[currentLang]['goodEvening']; let nameText = personalName.trim() !== "" ? personalName : trans[currentLang]['myFriend']; const titleEl = document.getElementById('greetingTitle'); if(titleEl) titleEl.innerText = `${greetingText}، ${nameText} ✨`; }
function startRealTimeClock() { if(clockInterval) clearInterval(clockInterval); const clockEl = document.getElementById('realTimeClock'); const updateTime = () => { const now = new Date(); if(clockEl) clockEl.innerText = now.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }); }; updateTime(); clockInterval = setInterval(updateTime, 1000); }
window.savePersonalName = function() { const pInput = document.getElementById('personalNameInput'); if(pInput) personalName = pInput.value.trim(); localStorage.setItem('personalName', personalName); updateGreeting(); showToast(currentLang === 'ar' ? "تم حفظ الاسم" : "Name saved", "success"); }

function checkAuth() {
    setLanguage(currentLang); const langSelect = document.getElementById('langSelect'); if(langSelect) langSelect.value = currentLang; const pInput = document.getElementById('personalNameInput'); if(pInput) pInput.value = personalName; const pToggle = document.getElementById('pinToggle'); if(pToggle) pToggle.checked = appPin !== null;
    const loginScreen = document.getElementById('loginScreen'); const appContainer = document.getElementById('appContainer');
    if (!currentUserRole) { if(loginScreen) loginScreen.classList.remove('hidden'); if(appContainer) appContainer.classList.add('hidden'); } else { if(loginScreen) loginScreen.classList.add('hidden'); if(appContainer) appContainer.classList.remove('hidden'); applyRoleRestrictions(); updateCurrencyDisplays(); const currSelect = document.getElementById('currencySelect'); if(currSelect) currSelect.value = currentCurrency; try { initChart(); } catch(e){} updateGreeting(); startRealTimeClock(); renderExpenses(); renderSavingsList(); updateStats(); fetchExchangeRates(); }
}

const loginForm = document.getElementById('loginForm'); if(loginForm) { loginForm.addEventListener('submit', (e) => { e.preventDefault(); const id = document.getElementById('loginId').value.trim(); const pass = document.getElementById('loginPass').value.trim(); if ((id === "KhaderImad" && pass === "742003") || (appUsers[id] && appUsers[id].pass === pass)) { currentUserId = id; currentUserRole = (id === "KhaderImad") ? "admin" : appUsers[id].role; localStorage.setItem('userId', currentUserId); localStorage.setItem('userRole', currentUserRole); checkAuth(); showToast(currentLang==='ar'?"مرحباً بك!":"Welcome!", "success"); } else { showToast(currentLang==='ar'?"بيانات غير صحيحة":"Invalid credentials", "error"); } }); }
window.loginAsGuest = function() { currentUserRole = 'guest'; localStorage.setItem('userRole', 'guest'); checkAuth(); }
window.logout = function() { localStorage.removeItem('userId'); localStorage.removeItem('userRole'); location.reload(); }
function applyRoleRestrictions() { const passBtn = document.getElementById('changePassBtn'); const dangerZone = document.getElementById('dangerZone'); const addUserBtn = document.getElementById('addUserBtn'); if (currentUserRole === 'guest') { if(passBtn) passBtn.classList.add('hidden'); if(dangerZone) dangerZone.classList.add('hidden'); if(addUserBtn) addUserBtn.classList.add('hidden'); } else if (currentUserRole === 'user') { if(passBtn) passBtn.classList.remove('hidden'); if(dangerZone) dangerZone.classList.add('hidden'); if(addUserBtn) addUserBtn.classList.add('hidden'); } else if (currentUserRole === 'admin') { if(passBtn) passBtn.classList.remove('hidden'); if(dangerZone) dangerZone.classList.remove('hidden'); if(addUserBtn) addUserBtn.classList.remove('hidden'); } }
window.openBudgetIfAllowed = function() { if (currentUserRole === 'guest') { showToast("غير مصرح", "error"); return; } openModal('budgetModal'); }
const addUserForm = document.getElementById('addUserForm'); if(addUserForm) { addUserForm.addEventListener('submit', (e) => { e.preventDefault(); const newId = document.getElementById('newUserId').value.trim(); const newPass = document.getElementById('newUserPass').value.trim(); const newRole = document.getElementById('newUserRole').value; if (appUsers[newId] || newId === "KhaderImad") { showToast(currentLang==='ar'?"مستخدم موجود!":"User exists!", "error"); return; } appUsers[newId] = { pass: newPass, role: newRole }; localStorage.setItem('appUsers', JSON.stringify(appUsers)); showToast("تم الإنشاء!", "success"); closeModal('addUserModal'); }); }
window.changeMyPasscode = function() { if(!currentUserId) return; const newPass = prompt("الرقم السري الجديد:"); if (newPass && newPass.trim() !== "") { if(!appUsers[currentUserId]) appUsers[currentUserId] = {}; appUsers[currentUserId].pass = newPass.trim(); appUsers[currentUserId].role = currentUserRole; localStorage.setItem('appUsers', JSON.stringify(appUsers)); showToast("تم التغيير", "success"); } }

window.changeCurrency = function(newSymbol) { currentCurrency = newSymbol; localStorage.setItem('appCurrency', currentCurrency); updateCurrencyDisplays(); updateStats(); const f = document.getElementById('filterInput'); renderExpenses(f?f.value:"الكل"); renderSavingsList(); }
function updateCurrencyDisplays() { document.querySelectorAll('.currency-symbol').forEach(el => el.innerText = currentCurrency); }

window.createBackupJSON = async function() { const backupData = { version: APP_VERSION, date: new Date().toISOString(), expenses, savings, budgetData, savedProducts, appUsers, watchers: currencyWatchers }; const jsonString = JSON.stringify(backupData, null, 2); const blob = new Blob([jsonString], { type: 'application/json' }); const file = new File([blob], `budget_backup_${new Date().toISOString().slice(0,10)}.json`, { type: 'application/json' }); if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ title: 'Backup', files: [file] }); showToast("نجاح", "success"); } catch (e) {} } else { const a = document.createElement('a'); a.href = "data:text/json;charset=utf-8," + encodeURIComponent(jsonString); a.download = file.name; document.body.appendChild(a); a.click(); a.remove(); showToast("نجاح", "success"); } localStorage.setItem('lastBackupDate', new Date().toISOString()); updateBackupStatusText(); }
window.restoreBackupJSON = function(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const content = JSON.parse(e.target.result); if (content.expenses && content.savings) { localStorage.setItem('myExpenses', JSON.stringify(content.expenses)); localStorage.setItem('mySavings', JSON.stringify(content.savings)); if(content.budgetData) localStorage.setItem('myBudgetData', JSON.stringify(content.budgetData)); if(content.savedProducts) localStorage.setItem('myProducts', JSON.stringify(content.savedProducts)); if(content.appUsers) localStorage.setItem('appUsers', JSON.stringify(content.appUsers)); if(content.watchers) localStorage.setItem('myWatchers', JSON.stringify(content.watchers)); showToast("تم الاستعادة", "success"); setTimeout(() => location.reload(), 1000); } else { throw new Error(); } } catch (err) { showToast("خطأ", "error"); } }; reader.readAsText(file); }
window.setBackupInterval = function(interval) { localStorage.setItem('backupIntervalSetting', interval); showToast("تم التحديث", "success"); }
function updateBackupStatusText() { const last = localStorage.getItem('lastBackupDate'); const statusEl = document.getElementById('lastBackupText'); if (statusEl) statusEl.innerText = last ? (currentLang === 'ar' ? "آخر نسخة: " : "Last backup: ") + new Date(last).toLocaleString() : (currentLang === 'ar' ? "لم يتم أخذ نسخة بعد" : "No backup taken yet"); }
window.exportData = function() { if(expenses.length === 0 && savings.length === 0) return; let csv = "data:text/csv;charset=utf-8,%EF%BB%BFType,Date,Category,Description,Amount\n"; expenses.forEach(e => csv += `"Expense","${formatDate(e.date)}","${trans[currentLang][e.category]||e.category}","${e.description}","${e.amount}"\n`); savings.forEach(s => csv += `"Savings","${formatDate(s.date)}","${s.type}","Deposit","${s.amount}"\n`); const link = document.createElement("a"); link.href = encodeURI(csv); link.download = "data.csv"; document.body.appendChild(link); link.click(); link.remove(); }
window.clearAllData = function() { if (currentUserRole !== 'admin') return; if(confirm("حذف الكل؟")) { expenses = []; savings = []; budgetData = {amount:0,startDate:'',endDate:''}; savedProducts = {}; currencyWatchers = []; saveToLocal(); localStorage.setItem('myWatchers', '[]'); updateStats(); const f = document.getElementById('filterInput'); renderExpenses(f?f.value:"الكل"); renderSavingsList(); renderWatchers(); closeModal('settingsModal'); } }

window.switchView = function(viewName) { document.querySelectorAll('.view-section').forEach(el => { el.classList.remove('block'); el.classList.add('hidden'); }); const view = document.getElementById(`view-${viewName}`); if(view) { view.classList.remove('hidden'); view.classList.add('block'); } document.querySelectorAll('.nav-btn').forEach(btn => { btn.classList.remove('text-blue-400'); btn.classList.add('text-gray-500'); }); if(viewName !== 'add') { const nav = document.getElementById(`nav-${viewName}`); if(nav) { nav.classList.remove('text-gray-500'); nav.classList.add('text-blue-400'); } } closeActionSheet(); if(viewName === 'analytics') updateAnalytics(); }
window.openActionSheet = function() { const s = document.getElementById('actionSheet'); if(s) { s.classList.remove('hidden'); setTimeout(() => { const c = document.getElementById('actionSheetContent'); if(c) c.classList.remove('translate-y-full'); }, 10); } }
window.closeActionSheet = function() { const c = document.getElementById('actionSheetContent'); if(c) { c.classList.add('translate-y-full'); setTimeout(() => { const s = document.getElementById('actionSheet'); if(s) s.classList.add('hidden'); }, 300); } }
window.openModal = function(id) { closeActionSheet(); const m = document.getElementById(id); if(m) { m.classList.remove('hidden'); m.classList.add('flex'); } }
window.closeModal = function(id) { const m = document.getElementById(id); if(m) { m.classList.add('hidden'); m.classList.remove('flex'); } }

function initChart() { const ctx = document.getElementById('budgetChart'); if(!ctx || typeof Chart === 'undefined') return; try { Chart.defaults.font.family = "'Cairo', sans-serif"; if(myChart) myChart.destroy(); myChart = new Chart(ctx.getContext('2d'), { type: 'doughnut', data: { labels: ['E', 'S', 'R'], datasets: [{ data: [0, 0, 1], backgroundColor: ['#ef4444', '#eab308', '#3b82f6'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: false } } } }); } catch(err) {} }
function updateChartData(exp, sav, rem) { if (!myChart) return; if (budgetData.amount === 0) { myChart.data.datasets[0].data = [1]; myChart.data.datasets[0].backgroundColor = [isDarkMode?'#374151':'#e5e7eb']; } else { myChart.data.datasets[0].data = [exp, sav, rem < 0 ? 0 : rem]; myChart.data.datasets[0].backgroundColor = ['#ef4444', '#eab308', '#3b82f6']; } myChart.update(); }
function saveToLocal() { localStorage.setItem('myExpenses', JSON.stringify(expenses)); localStorage.setItem('mySavings', JSON.stringify(savings)); localStorage.setItem('myBudgetData', JSON.stringify(budgetData)); localStorage.setItem('myProducts', JSON.stringify(savedProducts)); }

const bForm = document.getElementById('budgetSettingsForm'); if(bForm) { bForm.addEventListener('submit', (e) => { e.preventDefault(); budgetData = { amount: parseFloat(document.getElementById('modalBudgetAmount').value), startDate: document.getElementById('modalStartDate').value, endDate: document.getElementById('modalEndDate').value }; saveToLocal(); updateStats(true); closeModal('budgetModal'); }); }
const sForm = document.getElementById('savingsForm'); if(sForm) { sForm.addEventListener('submit', (e) => { e.preventDefault(); savings.push({ id: Date.now().toString(), amount: parseFloat(document.getElementById('savingsAmountInput').value), type: document.getElementById('savingsTypeInput').value, date: new Date().toISOString() }); saveToLocal(); updateStats(true); renderSavingsList(); document.getElementById('savingsAmountInput').value = ''; closeModal('savingsFormModal'); showToast(trans[currentLang]['saveBtn'], "success"); }); }

/* ==================== تحديث الحصالة ==================== */
window.deleteSaving = function(id) { 
    if(confirm(currentLang === 'ar' ? 'هل أنت متأكد من حذف الإيداع؟' : 'Delete this saving?')) { 
        savings = savings.filter(s => s.id !== id); saveToLocal(); updateStats(); renderSavingsList(); 
        showToast(currentLang === 'ar' ? "تم الحذف" : "Deleted", "success");
    } 
}

function renderSavingsList() {
    const list = document.getElementById('savingsList'); if(!list) return; list.innerHTML = '';
    if (savings.length === 0) {
        list.innerHTML = `<p class="text-sm text-gray-500 dark:text-gray-400 text-center mt-5 py-5">${trans[currentLang]['noDataFound']}</p>`;
        return;
    }
    
    savings.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(s => {
        const typeText = s.type === 'current' ? trans[currentLang]['savCurrent'] : trans[currentLang]['savPrev']; 
        const typeColor = s.type === 'current' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'; 
        const timeStr = new Date(s.date).toLocaleDateString(currentLang==='ar'?'ar-EG':'en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        const deleteBtn = (currentUserRole === 'admin' || currentUserRole === 'user') 
            ? `<div class="swipe-actions rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"><button onclick="deleteSaving('${s.id}')" class="swipe-action-btn bg-red-600 w-full px-6 flex justify-end">🗑️</button></div>` : ``; 
            
        list.innerHTML += `
        <div class="swipe-container mb-3 rounded-xl border-s-4 ${s.type === 'current' ? 'border-s-blue-500' : 'border-s-green-500'} border border-gray-200 dark:border-gray-700 shadow-sm">
            ${deleteBtn}
            <div class="swipe-card bg-gray-50 dark:bg-gray-800 p-4 rounded-xl flex justify-between items-center" data-id="${s.id}">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-800 dark:text-gray-100 pointer-events-none">${typeText}</span>
                    <span class="text-[10px] text-gray-500 mt-1 pointer-events-none">${timeStr}</span>
                </div>
                <span class="font-bold ${s.type === 'current' ? 'text-blue-500 dark:text-blue-400' : 'text-green-500 dark:text-green-400'} pointer-events-none">+ ${s.amount} ${currentCurrency}</span>
            </div>
        </div>`;
    });
    
    initSwipe(); 
}

const pForm = document.getElementById('addProductForm'); if(pForm) { pForm.addEventListener('submit', (e) => { e.preventDefault(); const b = document.getElementById('newProductBarcode').value.trim(); savedProducts[b] = { description: document.getElementById('newProductName').value.trim(), amount: parseFloat(document.getElementById('newProductPrice').value), category: document.getElementById('newProductCategory').value }; saveToLocal(); closeModal('addProductModal'); showToast(currentLang==='ar'?"تم!":"Done!", "success");}); }

/* التعديل والحذف عبر السحب */
window.openEditExpense = function(id) { const exp = expenses.find(e => e.id === id); if(!exp) return; document.getElementById('editExpId').value = exp.id; document.getElementById('editDescInput').value = exp.description; document.getElementById('editAmountInput').value = exp.amount; document.getElementById('editCategoryInput').value = exp.category; openModal('editExpenseModal'); };
const editEForm = document.getElementById('editExpenseForm'); if(editEForm) { editEForm.addEventListener('submit', (e) => { e.preventDefault(); const id = document.getElementById('editExpId').value; const index = expenses.findIndex(ex => ex.id === id); if(index !== -1) { expenses[index].description = document.getElementById('editDescInput').value.trim(); expenses[index].amount = parseFloat(document.getElementById('editAmountInput').value); expenses[index].category = document.getElementById('editCategoryInput').value; saveToLocal(); updateStats(true); const filterEl = document.getElementById('filterInput'); renderExpenses(filterEl?filterEl.value:"الكل"); closeModal('editExpenseModal'); showToast(currentLang === 'ar' ? "تم التعديل" : "Edited", "success"); } }); }
const eForm = document.getElementById('expenseForm'); if(eForm) { eForm.addEventListener('submit', (e) => { e.preventDefault(); const desc = document.getElementById('descInput').value.trim(); const amt = parseFloat(document.getElementById('amountInput').value); const cat = document.getElementById('categoryInput').value; const bar = document.getElementById('barcodeInput') ? document.getElementById('barcodeInput').value : ''; expenses.push({ id: Date.now().toString(), amount: amt, category: cat, description: desc, date: new Date().toISOString() }); if(bar) savedProducts[bar] = { description: desc, amount: amt, category: cat }; saveToLocal(); updateStats(true); const filterEl = document.getElementById('filterInput'); renderExpenses(filterEl?filterEl.value:"الكل"); document.getElementById('amountInput').value = ''; document.getElementById('descInput').value = ''; if(document.getElementById('barcodeInput')) document.getElementById('barcodeInput').value = ''; closeModal('expenseFormModal'); }); }
window.deleteExpense = function(id) { if(confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف؟' : 'Delete this expense?')) { expenses = expenses.filter(e => e.id !== id); saveToLocal(); const filterEl = document.getElementById('filterInput'); renderExpenses(filterEl?filterEl.value:"الكل"); updateStats(false); showToast(currentLang === 'ar' ? "تم الحذف" : "Deleted", "success"); } }

/* السجل المجمع بالسحب */
function isSameDay(d1, d2) { return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate(); }

window.renderExpenses = function() {
    const listContainer = document.getElementById('expensesList'); const filterVal = document.getElementById('filterInput') ? document.getElementById('filterInput').value : "الكل"; const searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase() : ""; const totalDisplay = document.getElementById('filteredTotalDisplay');
    if(!listContainer) return; listContainer.innerHTML = '';
    
    let filtered = expenses.filter(e => { const matchFilter = (filterVal === "الكل") || (e.category === filterVal); const matchSearch = e.description.toLowerCase().includes(searchVal) || e.amount.toString().includes(searchVal); return matchFilter && matchSearch; });
    if (filtered.length === 0) { if(totalDisplay) totalDisplay.innerHTML = `0 <span class="currency-symbol">${currentCurrency}</span>`; listContainer.innerHTML = `<p class="text-sm text-gray-500 dark:text-gray-400 text-center mt-10">${trans[currentLang]['noDataFound']}</p>`; return; }

    const currentTotal = filtered.reduce((sum, e) => sum + e.amount, 0); if(totalDisplay) totalDisplay.innerHTML = `${currentTotal.toLocaleString()} <span class="currency-symbol">${currentCurrency}</span>`;
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    const grouped = {}; const today = new Date(); const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
    filtered.forEach(exp => {
        const expDate = new Date(exp.date); let dateKey = "";
        if (isSameDay(expDate, today)) { dateKey = trans[currentLang]['todayText'] || "اليوم"; } else if (isSameDay(expDate, yesterday)) { dateKey = trans[currentLang]['yesterdayText'] || "أمس"; } else { dateKey = expDate.toLocaleDateString(currentLang==='ar'?'ar-EG':'en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }); }
        if (!grouped[dateKey]) grouped[dateKey] = []; grouped[dateKey].push(exp);
    });

    for (const [dateGroup, expsArray] of Object.entries(grouped)) {
        const groupTotal = expsArray.reduce((s, e) => s + e.amount, 0);
        listContainer.innerHTML += `<div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-1 mt-4 mb-3"><span class="text-sm font-bold text-blue-600 dark:text-blue-400">${dateGroup}</span><span class="text-xs text-gray-500">${groupTotal} ${currentCurrency}</span></div>`;

        expsArray.forEach(exp => {
            const catTranslated = trans[currentLang][exp.category] || exp.category;
            const timeStr = new Date(exp.date).toLocaleTimeString(currentLang==='ar'?'ar-EG':'en-US', {hour:'2-digit', minute:'2-digit'});
            listContainer.innerHTML += `
            <div class="swipe-container mb-3 rounded-xl border-s-4 border-s-blue-500 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div class="swipe-actions rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <button onclick="openEditExpense('${exp.id}')" class="swipe-action-btn bg-blue-600">✏️</button>
                    <button onclick="deleteExpense('${exp.id}')" class="swipe-action-btn bg-red-600">🗑️</button>
                </div>
                <div class="swipe-card bg-gray-50 dark:bg-gray-800 p-4 rounded-xl flex justify-between items-start" data-id="${exp.id}">
                    <div class="flex flex-col"><span class="font-semibold text-gray-800 dark:text-gray-100 pointer-events-none">${exp.description}</span><div class="flex items-center gap-2 mt-1 pointer-events-none"><span class="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">${catTranslated}</span><span class="text-[10px] text-gray-500">${timeStr}</span></div></div>
                    <span class="font-bold text-red-500 dark:text-red-400 pointer-events-none">${exp.amount} ${currentCurrency}</span>
                </div>
            </div>`;
        });
    }
    initSwipe();
}

function initSwipe() {
    const cards = document.querySelectorAll('.swipe-card:not(.swipe-initialized)');
    cards.forEach(card => {
        card.classList.add('swipe-initialized');
        let startX = 0; let currentX = 0; let isDragging = false; const limit = 80;
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX; isDragging = true; card.classList.add('dragging');
            document.querySelectorAll('.swipe-card').forEach(c => { if (c !== card) c.style.transform = `translateX(0px)`; });
        }, {passive: true});

        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX - startX;
            if (currentX > limit + 20) currentX = limit + 20; if (currentX < -limit - 20) currentX = -limit - 20;
            card.style.transform = `translateX(${currentX}px)`;
        }, {passive: true});

        card.addEventListener('touchend', () => {
            isDragging = false; card.classList.remove('dragging');
            if (currentX > 40) { card.style.transform = `translateX(${limit}px)`; } 
            else if (currentX < -40) { card.style.transform = `translateX(${-limit}px)`; } 
            else { card.style.transform = `translateX(0px)`; }
        });
    });
}

function updateStats() {
    const exp = expenses.reduce((s, e) => s + e.amount, 0); const curSav = savings.filter(s => s.type === 'current').reduce((s, a) => s + a.amount, 0); const preSav = savings.filter(s => s.type === 'previous').reduce((s, a) => s + a.amount, 0);
    const totSav = curSav + preSav; const rem = budgetData.amount - exp - curSav;
    checkBudgetWarning(exp);
    
    const totSavDisplay = document.getElementById('totalSavingsAmountDisplay');
    if (totSavDisplay) { totSavDisplay.innerHTML = `${totSav.toLocaleString()} <span class="text-lg text-gray-500 currency-symbol">${currentCurrency}</span>`; }
    const curSavDisplay = document.getElementById('currentSavingsDisplay'); if(curSavDisplay) curSavDisplay.innerText = curSav.toLocaleString();
    const preSavDisplay = document.getElementById('previousSavingsDisplay'); if(preSavDisplay) preSavDisplay.innerText = preSav.toLocaleString();
    
    const chartCT = document.getElementById('chartCenterText'); if(chartCT) chartCT.innerText = budgetData.amount; 
    const lExp = document.getElementById('legendExp'); if(lExp) lExp.innerText = exp; 
    const lSav = document.getElementById('legendSav'); if(lSav) lSav.innerText = curSav; 
    const lRem = document.getElementById('legendRem'); if(lRem) { lRem.innerText = rem; lRem.className = rem < 0 ? "text-sm font-bold text-red-500" : "text-sm font-bold text-green-500"; }
    updateChartData(exp, curSav, rem);
}

function updateAnalytics() {
    if (expenses.length === 0) return;
    const catTotals = {}; let gTotal = 0; expenses.forEach(e => { catTotals[e.category] = (catTotals[e.category] || 0) + e.amount; gTotal += e.amount; });
    let tCat = ''; let tAmt = 0; for (const [c, a] of Object.entries(catTotals)) { if (a > tAmt) { tAmt = a; tCat = c; } }
    const topCatEl = document.getElementById('topCategoryText'); if(topCatEl) topCatEl.innerText = `${trans[currentLang][tCat] || tCat} (${tAmt})`;

    let days = 1; if(budgetData.startDate) days = Math.max(1, Math.ceil((new Date().setHours(0,0,0,0) - new Date(budgetData.startDate).setHours(0,0,0,0)) / 86400000) + 1);
    const avgEl = document.getElementById('avgDailySpendText'); if(avgEl) avgEl.innerHTML = `${Math.floor(gTotal / days)} <span class="text-xs text-gray-500">${currentCurrency}</span>`;
    
    const labels = Object.keys(catTotals).map(c => trans[currentLang][c] || c);
    const ctx = document.getElementById('categoryChart');
    if(ctx && typeof Chart !== 'undefined') {
        if(catChart) catChart.destroy();
        catChart = new Chart(ctx.getContext('2d'), { type: 'bar', data: { labels: labels, datasets: [{ data: Object.values(catTotals), backgroundColor: '#3b82f6', borderRadius: 8 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
    }
}

function showToast(message, type) {
    if(toastTimeout) clearTimeout(toastTimeout);
    const toast = document.getElementById('toastNotification'); const content = document.getElementById('toastContent');
    if(!toast || !content) return;
    content.className = `p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md w-full ${type==='success'?'bg-green-100 dark:bg-green-900/90 text-green-800 dark:text-green-100 border border-green-500':(type==='warning'?'bg-yellow-100 dark:bg-yellow-900/90 text-yellow-800 dark:text-yellow-100 border border-yellow-500':'bg-red-100 dark:bg-red-900/90 text-red-800 dark:text-red-100 border border-red-500')}`;
    content.innerHTML = `<span class="font-bold text-sm">${message}</span>`;
    toast.classList.add('toast-visible'); toastTimeout = setTimeout(() => toast.classList.remove('toast-visible'), 4000);
}

let html5QrcodeScanner;
window.startScanner = function(target) { currentScannerTarget = target; const sm = document.getElementById('scannerModal'); if(sm) sm.classList.remove('hidden'); if(typeof Html5Qrcode !== 'undefined') { html5QrcodeScanner = new Html5Qrcode("reader"); html5QrcodeScanner.start({ facingMode: "environment" }, { fps: 10, qrbox: { width: 250, height: 250 } }, onScanSuccess).catch(() => stopScanner()); } }
window.stopScanner = function() { const sm = document.getElementById('scannerModal'); if(sm) sm.classList.add('hidden'); if(html5QrcodeScanner) html5QrcodeScanner.stop(); }
function onScanSuccess(text) {
    stopScanner(); 
    if (currentScannerTarget === 'newProduct') { const npb = document.getElementById('newProductBarcode'); if(npb) npb.value = text; } 
    else {
        if(savedProducts[text]) { const p = savedProducts[text]; const di = document.getElementById('descInput'); const ai = document.getElementById('amountInput'); const ci = document.getElementById('categoryInput'); if(di) di.value = p.description; if(ai) ai.value = p.amount; if(ci) ci.value = p.category; const bi = document.getElementById('barcodeInput'); if(bi) bi.value = ''; } 
        else { const bi = document.getElementById('barcodeInput'); if(bi) bi.value = text; }
    }
}
