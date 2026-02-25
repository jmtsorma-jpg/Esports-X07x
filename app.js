function register(){
let user=username.value;
let pass=password.value;
let users=JSON.parse(localStorage.getItem("users"))||[];
users.push({user,pass,balance:0});
localStorage.setItem("users",JSON.stringify(users));
alert("Registered");
location="login.html";
}

function login(){
let user=loginUser.value;
let pass=loginPass.value;
let users=JSON.parse(localStorage.getItem("users"))||[];
let found=users.find(u=>u.user==user && u.pass==pass);
if(found){
localStorage.setItem("currentUser",user);
location="dashboard.html";
}else alert("Wrong login");
}

function loadDashboard(){
let user=localStorage.getItem("currentUser");
let users=JSON.parse(localStorage.getItem("users"))||[];
let u=users.find(x=>x.user==user);
if(u) balance.innerText=u.balance;
}

function addMoney(){
let user=localStorage.getItem("currentUser");
let users=JSON.parse(localStorage.getItem("users"))||[];
let u=users.find(x=>x.user==user);
if(u){u.balance+=100;}
localStorage.setItem("users",JSON.stringify(users));
loadDashboard();
}

function loadTournaments(){
let tournaments=JSON.parse(localStorage.getItem("tournaments"))||[];
let html="";
tournaments.forEach(t=>{
html+=`<div><h3>${t.name}</h3>Prize: ${t.prize}<br>Entry: ${t.entry}</div>`;
});
document.getElementById("tournamentList").innerHTML=html;
}

function addTournament(){
let name=prompt("Tournament name");
let prize=prompt("Prize");
let entry=prompt("Entry fee");
let tournaments=JSON.parse(localStorage.getItem("tournaments"))||[];
tournaments.push({name,prize,entry});
localStorage.setItem("tournaments",JSON.stringify(tournaments));
}

function loadPoints(){
let teams=JSON.parse(localStorage.getItem("teams"))||[];
let html="";
teams.forEach((t,i)=>{
let total=(t.kill||0)+(t.rank||0);
html+=`<tr><td>${i+1}</td><td>${t.name}</td><td>${t.kill||0}</td><td>${t.rank||0}</td><td>${total}</td></tr>`;
});
document.getElementById("pointsTable").innerHTML=html;
}

function addTeam(){
let name=prompt("Team name");
let teams=JSON.parse(localStorage.getItem("teams"))||[];
teams.push({name,kill:0,rank:0});
localStorage.setItem("teams",JSON.stringify(teams));
}