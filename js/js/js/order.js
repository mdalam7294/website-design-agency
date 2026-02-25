import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.placeOrder = async function(serviceName, paypalLink) {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(!name || !email){
    alert("Please fill all details");
    return;
  }

  await addDoc(collection(db, "orders"), {
    name: name,
    email: email,
    service: serviceName,
    status: "Pending",
    created: serverTimestamp()
  });

  window.location.href = paypalLink;
};
