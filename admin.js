import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, password);

  loadOrders();
};

async function loadOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  let output = "<h3>Orders</h3>";

  querySnapshot.forEach(doc => {
    const data = doc.data();
    output += `<p>${data.name} - ${data.plan} - $${data.price}</p>`;
  });

  document.getElementById("orders").innerHTML = output;
}
