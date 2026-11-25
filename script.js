/* =====================================================
   DEVELOPER DATA
   Companies, placed students and news are added only here.
   ===================================================== */
var PASSWORD = "12345678";

var companies = [
  { name: "Infosys", domain: "IT Services", place: "Bengaluru", seats: 120, pkg: "4-9 LPA", roles: ["Systems Engineer", "Specialist Programmer"] },
  { name: "TCS", domain: "IT Services", place: "Mumbai", seats: 150, pkg: "3.5-7 LPA", roles: ["Systems Engineer", "Digital Analyst"] },
  { name: "Wipro", domain: "IT Services", place: "Hyderabad", seats: 90, pkg: "3.5-6.5 LPA", roles: ["Project Engineer", "Cloud Associate"] },
  { name: "Accenture", domain: "Consulting", place: "Pune", seats: 80, pkg: "4.5-8 LPA", roles: ["Associate Software Engineer", "Business Analyst"] },
  { name: "Capgemini", domain: "Consulting", place: "Chennai", seats: 70, pkg: "4-7.5 LPA", roles: ["Analyst", "Software Engineer"] },
  { name: "Cognizant", domain: "IT Services", place: "Kolkata", seats: 100, pkg: "4-8 LPA", roles: ["Programmer Analyst", "Data Associate"] },
  { name: "Zoho", domain: "Product Software", place: "Chennai", seats: 25, pkg: "6-12 LPA", roles: ["Software Developer", "QA Engineer"] },
  { name: "Amazon", domain: "E-commerce and Cloud", place: "Bengaluru", seats: 15, pkg: "28-45 LPA", roles: ["SDE Intern", "Cloud Support Associate"] },
  { name: "Microsoft", domain: "Software Products", place: "Hyderabad", seats: 10, pkg: "35-50 LPA", roles: ["Software Engineer", "Explore Intern"] },
  { name: "Google", domain: "Search and Cloud", place: "Bengaluru", seats: 8, pkg: "40-100 LPA", roles: ["Software Engineer", "STEP Intern"] },
  { name: "Deloitte", domain: "Consulting", place: "Gurugram", seats: 60, pkg: "6-11 LPA", roles: ["Analyst", "Technology Intern"] },
  { name: "Tech Mahindra", domain: "Telecom IT", place: "Noida", seats: 85, pkg: "3.5-6.5 LPA", roles: ["Associate Engineer", "Network Trainee"] }
];

var placed = [
  { name: "Aarav Mehta", branch: "CSE", company: "Google", role: "Software Engineer", pkg: "\u20B91 Cr" },
  { name: "Sneha Iyer", branch: "ECE", company: "Microsoft", role: "Software Engineer", pkg: "\u20B952 LPA" },
  { name: "Rohan Das", branch: "IT", company: "Amazon", role: "SDE", pkg: "\u20B944 LPA" },
  { name: "Karan Malhotra", branch: "CSE", company: "Adobe", role: "Product Engineer", pkg: "\u20B938 LPA" },
  { name: "Priya Nair", branch: "Mechanical", company: "Tata Motors", role: "Design Engineer", pkg: "\u20B918 LPA" },
  { name: "Ishita Rao", branch: "EEE", company: "Siemens", role: "Graduate Engineer", pkg: "\u20B922 LPA" }
];

// type can be: Company, Internship, Camp, Hackathon
var news = [
  { type: "Company", title: "Deloitte pre-placement talk", date: "8 Dec 2026", mode: "Seminar Hall, 11:00 AM", info: "Open to all branches. Carry your ID card and two copies of your resume." },
  { type: "Company", title: "Google campus hiring 2027", date: "10 Dec 2026", mode: "Online test, then interviews", info: "Registration closes 5 Dec. Roles: Software Engineer and STEP Intern. Keep your profile updated." },
  { type: "Company", title: "TCS drive for 2027 batch", date: "15 Dec 2026", mode: "Placement Cell", info: "Aptitude test followed by technical and HR rounds. Formal dress is required." },
  { type: "Internship", title: "Zoho summer internship", date: "Apply by 18 Dec 2026", mode: "Chennai, 8 weeks", info: "Stipend of 25,000 per month. First-year and second-year students can apply." },
  { type: "Hackathon", title: "Smart India Hackathon internal round", date: "20 Dec 2026", mode: "Main Auditorium, 24 hours", info: "Teams of 6. Problem statements are shared on the day. Winners go to the national round." },
  { type: "Camp", title: "AWS Cloud Practitioner certification camp", date: "5 Jan 2027", mode: "Computer Lab, 5 days", info: "Exam voucher included in the fee. Limited to 60 students." },
  { type: "Internship", title: "Microsoft Explore internship", date: "Apply by 12 Jan 2027", mode: "Hyderabad, 12 weeks", info: "For first-year and second-year students. Needs one project link and a short essay." },
  { type: "Hackathon", title: "Campus CodeSprint", date: "22 Jan 2027", mode: "Computer Lab, 12 hours", info: "Solo and team entries. Cash prizes and certificates for the top 3." },
  { type: "Camp", title: "Python and data analytics bootcamp", date: "2 Feb 2027", mode: "Seminar Hall, 3 weekends", info: "Free for registered students. Certificate given on completing the final project." }
];

var newsFilter = "All";

/* =====================================================
   STUDENT DATA (each registration number gets its own)
   Sample applications are included so the pages are not empty.
   Empty the list in sampleApps() to start with no applications.
   ===================================================== */
var users = {};
var me = null;
var regNo = "";
var KEYWORDS = ["hackathon", "winner", "rank", "award", "gold", "patent", "published", "national"];

function sampleApps() {
  return [
    { company: "TCS", role: "Systems Engineer", pkg: "3.5-7 LPA", status: "Offered", interview: true, source: "Campus drive", response: "Pending" },
    { company: "Cognizant", role: "Programmer Analyst", pkg: "4-8 LPA", status: "Offered", interview: true, source: "Campus drive", response: "Pending" },
    { company: "Zoho", role: "Software Developer", pkg: "6-12 LPA", status: "Interview", interview: true, source: "Campus drive", response: "" },
    { company: "Wipro", role: "Project Engineer", pkg: "3.5-6.5 LPA", status: "Rejected", interview: true, source: "Campus drive", response: "" },
    { company: "Accenture", role: "Associate Software Engineer", pkg: "4.5-8 LPA", status: "Applied", interview: false, source: "Campus drive", response: "" },
    { company: "Capgemini", role: "Analyst", pkg: "4-7.5 LPA", status: "Rejected", interview: false, source: "Campus drive", response: "" }
  ];
}

/* =====================================================
   HELPERS
   ===================================================== */
function $(id) {
  return document.getElementById(id);
}

function val(id) {
  return $(id).value.trim();
}

// creates an element with optional class and text
function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function badge(status) {
  return el("span", "badge " + status.toLowerCase(), status);
}

function addRow(tbody, cells) {
  var tr = el("tr");
  cells.forEach(function (c) {
    var td = el("td");
    if (typeof c === "object") {
      td.appendChild(c);
    } else {
      td.textContent = c;
    }
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
}

/* =====================================================
   LOGIN, LOGOUT AND NAVIGATION
   ===================================================== */
function login(e) {
  e.preventDefault();
  var reg = val("regInput");
  var pass = $("passInput").value;
  var msg = $("loginMsg");

  if (reg === "" || pass === "") {
    msg.textContent = "Enter your registration number and password.";
    return;
  }
  if (pass !== PASSWORD) {
    msg.textContent = "Wrong password. Please try again.";
    return;
  }
  // open the dashboard page and pass the registration number
  window.location.href = "dashboard.html?reg=" + encodeURIComponent(reg);
}

function logout() {
  window.location.href = "index.html";
}

// runs when dashboard.html opens
function startApp() {
  var params = new URLSearchParams(window.location.search);
  regNo = (params.get("reg") || "").trim();
  if (regNo === "") {
    window.location.href = "index.html";   // not logged in
    return;
  }
  if (!users[regNo]) {
    users[regNo] = { profile: null, apps: sampleApps(), docs: [], direct: false };
  }
  me = users[regNo];
  $("whoami").textContent = "Reg. No. " + regNo;
  fillProfileForm();
  showPage("dashboard");
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(function (p) { p.classList.add("hidden"); });
  document.querySelectorAll(".sidebar button").forEach(function (b) { b.classList.remove("active"); });
  $(id).classList.remove("hidden");
  var navBtn = $("nav-" + id);
  if (navBtn) navBtn.classList.add("active");
  renderAll();
}

/* =====================================================
   STUDENT PROFILE
   ===================================================== */
function fillProfileForm() {
  var p = me.profile;
  $("pReg").value = regNo;
  $("pName").value = p ? p.name : "";
  $("pBranch").value = p ? p.branch : "CSE";
  $("pEmail").value = p ? p.email : "";
  $("pSkills").value = p ? p.skills : "";
  $("pAddress").value = p ? p.address : "";
  $("pAch").value = p ? p.ach : "";
}

function saveProfile() {
  var name = val("pName"), email = val("pEmail"), skills = val("pSkills"), address = val("pAddress");
  if (name === "" || email === "" || skills === "" || address === "") {
    alert("Please fill name, email, skills and address");
    return;
  }
  if (email.indexOf("@") === -1) {
    alert("Please enter a valid email");
    return;
  }
  me.profile = {
    name: name, reg: regNo, branch: $("pBranch").value,
    email: email, skills: skills, address: address, ach: val("pAch")
  };
  checkDirectOffer();
  renderAll();
}

// a strong achievement gives a direct hiring offer (only once)
function checkDirectOffer() {
  if (me.direct) return;
  var text = me.profile.ach.toLowerCase();
  var found = KEYWORDS.some(function (k) { return text.indexOf(k) !== -1; });
  if (!found) return;
  me.direct = true;
  me.apps.push({ company: "Infosys", role: "Specialist Programmer", pkg: "9-11 LPA", status: "Offered", interview: false, source: "Profile achievements", response: "Pending" });
  alert("Your achievements earned a direct hiring offer from Infosys. Check Offers & Status.");
}

function cvSection(box, title) {
  box.appendChild(el("h4", "", title));
}

function renderCV() {
  var box = $("cv");
  var p = me.profile;
  box.innerHTML = "";
  if (!p) {
    box.appendChild(el("p", "hint", "Fill in your details and press Save Profile to see your CV here."));
    return;
  }

  var head = el("div", "cv-head");
  head.appendChild(el("div", "avatar"));
  var info = el("div");
  info.appendChild(el("h2", "", p.name));
  info.appendChild(el("p", "", p.branch + "  |  Reg. No. " + p.reg));
  info.appendChild(el("p", "", p.email));
  head.appendChild(info);
  box.appendChild(head);

  cvSection(box, "Skills");
  p.skills.split(",").forEach(function (s) {
    if (s.trim() !== "") box.appendChild(el("span", "chip", s.trim()));
  });

  cvSection(box, "Address");
  box.appendChild(el("p", "", p.address));

  cvSection(box, "Achievements");
  var ul = el("ul");
  var lines = p.ach.split("\n").filter(function (l) { return l.trim() !== ""; });
  if (lines.length === 0) {
    box.appendChild(el("p", "hint", "No achievements added yet."));
  } else {
    lines.forEach(function (l) { ul.appendChild(el("li", "", l.trim())); });
    box.appendChild(ul);
  }
}

/* =====================================================
   COMPANIES AND APPLICATIONS
   ===================================================== */
function renderCompanies() {
  var tbody = $("companyTable");
  tbody.innerHTML = "";
  companies.forEach(function (c) {
    var sel = el("select");
    c.roles.forEach(function (r) { sel.add(new Option(r, r)); });
    var applyBtn = el("button", "small", "Apply");
    applyBtn.onclick = function () { applyTo(c, sel.value); };
    var cell = el("div");
    cell.appendChild(sel);
    cell.appendChild(applyBtn);
    addRow(tbody, [c.name, c.domain, c.place, c.seats, c.pkg, cell]);
  });
}

function applyTo(c, role) {
  if (!me.profile) {
    alert("Please complete your student profile before applying.");
    showPage("profile");
    return;
  }
  for (var i = 0; i < me.apps.length; i++) {
    if (me.apps[i].company === c.name && me.apps[i].role === role) {
      alert("You have already applied to " + c.name + " as " + role);
      return;
    }
  }
  me.apps.push({ company: c.name, role: role, pkg: c.pkg, status: "Applied", interview: false, source: "Campus drive", response: "" });
  alert("Applied to " + c.name + " as " + role);
  renderAll();
}

function renderApplications() {
  var seen = {};
  me.apps.forEach(function (a) { seen[a.company] = true; });
  $("appCompanies").textContent = Object.keys(seen).length;
  $("appTotal").textContent = me.apps.length;

  var tbody = $("applicationTable");
  tbody.innerHTML = "";
  me.apps.forEach(function (a) {
    addRow(tbody, [a.company, a.role, badge(a.status)]);
  });
}

/* =====================================================
   OFFERS AND STATUS TRACKING
   ===================================================== */
function respond(a, answer) {
  a.response = answer;
  renderAll();
}

function renderOffers() {
  var seen = {}, interviews = 0, selected = 0, rejected = 0;
  me.apps.forEach(function (a) {
    seen[a.company] = true;
    if (a.interview) interviews++;
    if (a.status === "Offered") selected++;
    if (a.status === "Rejected") rejected++;
  });
  $("stApplied").textContent = Object.keys(seen).length;
  $("stInterview").textContent = interviews;
  $("stSelected").textContent = selected;
  $("stRejected").textContent = rejected;

  var offerBody = $("offerTable");
  offerBody.innerHTML = "";
  me.apps.forEach(function (a) {
    if (a.status !== "Offered") return;
    var action = el("span", "", "Final");
    if (a.response === "Pending" || a.response === "On Hold") {
      action = el("div");
      var yes = el("button", "small", "Accept");
      var no = el("button", "small no", "Reject");
      yes.onclick = function () { respond(a, "Accepted"); };
      no.onclick = function () { respond(a, "Rejected"); };
      action.appendChild(yes);
      action.appendChild(no);
      if (a.response === "Pending") {
        var wait = el("button", "small wait", "Hold");
        wait.onclick = function () { respond(a, "On Hold"); };
        action.appendChild(wait);
      }
    }
    addRow(offerBody, [a.company, a.role, a.pkg, a.source, a.response, action]);
  });
  if (offerBody.children.length === 0) {
    addRow(offerBody, ["No offers yet", "", "", "", "", ""]);
  }

  var pkgBody = $("packageTable");
  pkgBody.innerHTML = "";
  me.apps.forEach(function (a) {
    addRow(pkgBody, [a.company, a.role, a.pkg, badge(a.status)]);
  });
}

/* =====================================================
   MILESTONES (placed students)
   ===================================================== */
function renderPlaced() {
  var grid = $("placedGrid");
  grid.innerHTML = "";
  placed.forEach(function (p) {
    var card = el("div", "person");
    card.appendChild(el("div", "avatar"));
    card.appendChild(el("h3", "", p.name));
    card.appendChild(el("p", "branch", p.branch));
    var offer = el("div", "offer");
    offer.appendChild(el("p", "pkg", p.pkg));
    offer.appendChild(el("p", "", p.role + " at " + p.company));
    card.appendChild(offer);
    grid.appendChild(card);
  });
}

/* =====================================================
   REPORTS (news)
   ===================================================== */
function setFilter(type) {
  newsFilter = type;
  renderNews();
}

function renderNews() {
  document.querySelectorAll(".tabs button").forEach(function (b) {
    b.classList.toggle("active", b.getAttribute("data-f") === newsFilter);
  });
  var list = $("newsList");
  list.innerHTML = "";
  news.forEach(function (n) {
    if (newsFilter !== "All" && n.type !== newsFilter) return;
    var card = el("div", "news " + n.type);
    card.appendChild(el("span", "tag", n.type));
    card.appendChild(el("h3", "", n.title));
    card.appendChild(el("p", "meta", n.date + "  |  " + n.mode));
    card.appendChild(el("p", "", n.info));
    list.appendChild(card);
  });
}

/* =====================================================
   DOCUMENTS
   ===================================================== */
function addDoc() {
  var title = val("dTitle"), file = $("dFile").files[0];
  if (title === "" || !file) {
    alert("Enter a title and choose a file");
    return;
  }
  me.docs.push({
    title: title, type: $("dType").value, name: file.name,
    date: new Date().toLocaleDateString(), url: URL.createObjectURL(file)
  });
  $("dTitle").value = "";
  $("dFile").value = "";
  renderAll();
}

function renderDocs() {
  var grid = $("docGrid");
  grid.innerHTML = "";
  if (me.docs.length === 0) {
    grid.appendChild(el("p", "hint", "No documents added yet."));
    return;
  }
  me.docs.forEach(function (d, i) {
    var card = el("div", "doc");
    card.appendChild(el("span", "tag", d.type));
    card.appendChild(el("h3", "", d.title));
    card.appendChild(el("p", "meta", d.name + "  |  " + d.date));
    var open = el("a", "", "Open");
    open.href = d.url;
    open.target = "_blank";
    card.appendChild(open);
    var del = el("button", "small no", "Remove");
    del.onclick = function () { me.docs.splice(i, 1); renderAll(); };
    card.appendChild(del);
    grid.appendChild(card);
  });
}

/* =====================================================
   DASHBOARD PANELS
   ===================================================== */
function renderDashboardExtras() {
  var ev = $("dashEvents");
  ev.innerHTML = "";
  news.slice(0, 4).forEach(function (n) {
    var row = el("div", "event");
    row.appendChild(el("span", "tag", n.type));
    row.appendChild(el("b", "", n.title));
    row.appendChild(el("p", "meta", n.date + "  |  " + n.mode));
    ev.appendChild(row);
  });

  var rec = $("dashRecruiters");
  rec.innerHTML = "";
  companies.forEach(function (c) {
    rec.appendChild(el("span", "chip", c.name));
  });
}

/* =====================================================
   REFRESH EVERYTHING
   ===================================================== */
function renderAll() {
  if (me === null) return;
  var offers = me.apps.filter(function (a) { return a.status === "Offered"; }).length;
  $("dashLine").textContent = "You have applied to " + me.apps.length + " roles and hold " + offers + " offers.";
  renderCV();
  renderCompanies();
  renderApplications();
  renderOffers();
  renderPlaced();
  renderNews();
  renderDocs();
  renderDashboardExtras();
}

// ----- start (only on the dashboard page) -----
if (document.body.getAttribute("data-page") === "dashboard") {
  startApp();
}
