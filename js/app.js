<!-- FILE: js/app.js -->
// App logic (module navigation + data binding)
(function(){
  const modules = ['login','home','subjects','courses','tests','materials','assignments','progress','profile'];
  const state = {loggedIn:false,user:MOCK.user};

  // utility
  function $(id){return document.getElementById(id)}

  // open module
  window.openModule = function(name){
    if(!state.loggedIn && name!=='login'){
      toggleModule('login');
      return;
    }
    toggleModule(name);
    // lazy load module content
    if(name==='home') renderHome();
    if(name==='subjects') renderSubjects();
    if(name==='courses') renderCourses();
    if(name==='tests') renderTests();
    if(name==='materials') renderMaterials();
    if(name==='assignments') renderAssignments();
    if(name==='progress') renderProgress();
    if(name==='profile') renderProfile();
  }

  function toggleModule(name){
    document.querySelectorAll('.module').forEach(m=>m.classList.remove('active'));
    const el = document.getElementById('module-'+name);
    if(el) el.classList.add('active');
  }

  // login
  window.login = function(){
    const u = $('loginUsername').value.trim();
    const p = $('loginPassword').value.trim();
    if(u==='admin' && p==='1234'){
      state.loggedIn=true;
      $('homeGreeting').textContent = `Hello, ${MOCK.user.name.split(' ')[0]} 👋`;
      toggleDrawer(false);
      openModule('home');
    } else { alert('Invalid login — use admin / 1234'); }
  }

  window.logout = function(){
    state.loggedIn=false; toggleModule('login');
  }

  // side drawer toggle
  const menuBtn = $('menuBtn');
  const side = $('sideDrawer');
  menuBtn.addEventListener('click', ()=>toggleDrawer());
  function toggleDrawer(force){
    if(force===undefined) side.classList.toggle('hidden');
    else side.classList.toggle('hidden', !force);
  }

  // notifications modal
  const notifBtn = $('notifBtn');
  const notifModal = $('notifModal');
  notifBtn.addEventListener('click', ()=>openNotif());
  window.openNotif = function(){
    renderNotifs(); notifModal.classList.remove('hidden');
  }
  window.closeNotif = function(){notifModal.classList.add('hidden')}

  // render functions
  function renderHome(){
    const recent = $('recentList'); recent.innerHTML = '';
    MOCK.recent.forEach(r=>{ const d = document.createElement('div'); d.className='info-row'; d.textContent=r; recent.appendChild(d); });
    $('notifBadge').classList.toggle('hidden', MOCK.notifications.length===0);
  }

  window.filterSubjects = function(q){
    const grid = $('subjectsGrid'); grid.innerHTML='';
    const list = MOCK.subjects.filter(s=>s.title.toLowerCase().includes(q.toLowerCase()));
    list.forEach(s=>grid.appendChild(makeSubjectCard(s)));
  }

  function renderSubjects(){
    const grid = $('subjectsGrid'); grid.innerHTML='';
    MOCK.subjects.forEach(s=>grid.appendChild(makeSubjectCard(s)));
  }
  function makeSubjectCard(s){
    const el = document.createElement('div'); el.className='subject-card';
    el.innerHTML = `<h4>${s.title}</h4><div class='muted'>${s.desc}</div><div style='margin-top:8px'><button class='primary' onclick="openSubject('${s.id}')">Open</button></div>`;
    return el;
  }

  window.openSubject = function(id){
    alert('Open subject: '+id+' (you can extend this to show chapters)');
  }

  function renderCourses(){
    const list = $('coursesList'); list.innerHTML='';
    MOCK.courses.forEach(c=>{
      const d=document.createElement('div'); d.className='info-row'; d.innerHTML=`<strong>${c.title}</strong><div class='muted'>${c.meta}</div>`; list.appendChild(d);
    });
  }
  function renderTests(){
    const list = $('testsList'); list.innerHTML='';
    MOCK.tests.forEach(t=>{ const d=document.createElement('div'); d.className='info-row'; d.innerHTML=`<strong>${t.title}</strong><div class='muted'>Date: ${t.date} • Score: ${t.score}%</div>`; list.appendChild(d); });
  }
  function renderMaterials(){
    const list = $('materialsList'); list.innerHTML='';
    MOCK.materials.forEach(m=>{ const d=document.createElement('div'); d.className='info-row'; d.innerHTML=`<strong>${m.title}</strong><div class='muted'>Subject: ${m.subject}</div>`; list.appendChild(d); });
  }
  function renderAssignments(){
    const list = $('assignmentsList'); list.innerHTML='';
    MOCK.assignments.forEach(a=>{ const d=document.createElement('div'); d.className='info-row'; d.innerHTML=`<strong>${a.title}</strong><div class='muted'>Due: ${a.due}</div>`; list.appendChild(d); });
  }
  function renderProgress(){
    $('overallMeter').style.width = MOCK.progress.overall + '%';
    $('overallPercentage').textContent = MOCK.progress.overall + '%';
    $('testsTaken').textContent = MOCK.progress.testsTaken;
  }
  function renderProfile(){
    // profile module could be extended to edit details
  }

  function renderNotifs(){
    const list = $('notifList'); list.innerHTML='';
    MOCK.notifications.forEach(n=>{ const d=document.createElement('div'); d.className='info-row'; d.textContent=n.text; list.appendChild(d); });
  }

  // initial route
  toggleModule('login');
})();
// NOTIFICATION HANDLER
const notificationPopup = document.getElementById('notificationPopup');
const closeNotification = document.getElementById('closeNotification');


if (closeNotification && notificationPopup) {
closeNotification.addEventListener('click', () => {
notificationPopup.classList.remove('show');
});
}
// END NOTIFICATION HANDLER
