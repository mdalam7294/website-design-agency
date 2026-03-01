import { db } from "./firebase.js";
import { collection, getDocs, updateDoc, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const ADMIN_EMAIL="websitedesignagency1@gmail.com";
const ADMIN_PASS="Mdalam7294110767@";

window.adminLogin=function(){

const email=document.getElementById("adminEmail").value;
const pass=document.getElementById("adminPass").value;

if(email===ADMIN_EMAIL && pass===ADMIN_PASS){
document.getElementById("loginBox").style.display="none";
document.getElementById("dashboard").style.display="block";
loadOrders();
}else{
alert("Invalid Login");
}

}

async function loadOrders(){

const querySnapshot=await getDocs(collection(db,"orders"));
const container=document.getElementById("orders");
container.innerHTML="";

querySnapshot.forEach((docSnap)=>{

const data=docSnap.data();

container.innerHTML+=`
<div class="card">
<h3>${data.service}</h3>
<p>Name: ${data.name}</p>
<p>Email: ${data.email}</p>
<p>Price: ${data.price}</p>
<p>Status: ${data.status}</p>
<button onclick="markComplete('${docSnap.id}')">Mark Complete</button>
<button onclick="deleteOrder('${docSnap.id}')">Delete</button>
</div>
`;

});

}

window.markComplete=async function(id){

await updateDoc(doc(db,"orders",id),{
status:"Completed"
});

loadOrders();
}

window.deleteOrder=async function(id){

await deleteDoc(doc(db,"orders",id));
loadOrders();
}
