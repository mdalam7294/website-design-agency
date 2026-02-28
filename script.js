let currency = "USD";

const services = [

{
name:"Starter Plan",
priceINR:4999,
priceUSD:99,
paypal:"https://www.paypal.com/ncp/payment/JB3NMGMFWE76W",
razorpay:"https://rzp.io/rzp/NWf1FweI"
},

{
name:"Business Plan",
priceINR:9999,
priceUSD:199,
paypal:"https://www.paypal.com/ncp/payment/UHDEAJU6HZD6Y",
razorpay:"https://rzp.io/rzp/36kU4D6z"
},

{
name:"Pro Plan",
priceINR:19999,
priceUSD:399,
paypal:"https://www.paypal.com/ncp/payment/YEGBMGH5Y32V8",
razorpay:"https://rzp.io/rzp/ZKRzCsh"
},

{
name:"Landing Page Design",
priceINR:3999,
priceUSD:79,
paypal:"https://www.paypal.com/ncp/payment/SE573FSDAWKA4",
razorpay:"https://rzp.io/rzp/ouOAlg05"
},

{
name:"SEO Monthly",
priceINR:7499,
priceUSD:149,
paypal:"https://www.paypal.com/ncp/payment/VQZATQ8LE3LRL",
razorpay:"https://rzp.io/rzp/fm03thQ"
},

{
name:"AI Chatbot Setup",
priceINR:9999,
priceUSD:199,
paypal:"https://www.paypal.com/ncp/payment/7PTB2MGL263YN",
razorpay:"https://rzp.io/rzp/TfNoYOIe"
},

{
name:"Website Maintenance",
priceINR:2999,
priceUSD:59,
paypal:"https://www.paypal.com/ncp/payment/P3E8TCM48MA4J",
razorpay:"https://rzp.io/rzp/Vuh49oX"
},

{
name:"Google Ads Management",
priceINR:14999,
priceUSD:299,
paypal:"https://www.paypal.com/ncp/payment/QSGZAHKQEGGDL",
razorpay:"https://rzp.io/rzp/787RcDK"
},

{
name:"Social Media Management",
priceINR:12499,
priceUSD:249,
paypal:"https://www.paypal.com/ncp/payment/W47T6ELNGTZA2",
razorpay:"https://rzp.io/rzp/5YtZYXkW"
},

{
name:"Email Marketing Automation",
priceINR:9999,
priceUSD:199,
paypal:"https://www.paypal.com/ncp/payment/985W67LK4X9YE",
razorpay:"https://rzp.io/rzp/bstwoIIm"
},

{
name:"CRM Setup & Automation",
priceINR:14999,
priceUSD:299,
paypal:"https://www.paypal.com/ncp/payment/7LTGSBV4AUTKU",
razorpay:"https://rzp.io/rzp/BWFAJ6ob"
},

{
name:"Growth Package",
priceINR:24999,
priceUSD:499,
paypal:"https://www.paypal.com/ncp/payment/CPQ7QABSUVTEN",
razorpay:"https://rzp.io/rzp/LrnxJxdO"
},

{
name:"Complete Business Automation",
priceINR:39999,
priceUSD:799,
paypal:"https://www.paypal.com/ncp/payment/LU4TBVQQ2UL9G",
razorpay:"https://rzp.io/rzp/fnsjaGE"
},

{
name:"International Expansion Package",
priceINR:49999,
priceUSD:999,
paypal:"https://www.paypal.com/ncp/payment/LQBZJ7BWBUFGE",
razorpay:"https://rzp.io/rzp/Lq8e8KZ9"
},

{
name:"Full Digital Growth System",
priceINR:74999,
priceUSD:1499,
paypal:"https://www.paypal.com/ncp/payment/QCBQCUYBY6WUG",
razorpay:"https://rzp.io/rzp/ITAkpSQ"
}

];

const container = document.getElementById("services");

function render(){
container.innerHTML="";

services.forEach(service=>{

let price = currency==="INR" ? service.priceINR : service.priceUSD;
let symbol = currency==="INR" ? "₹" : "$";

container.innerHTML += `
<div class="plan">
<h2>${service.name}</h2>
<div class="price">${symbol}${price}</div>

<button class="buy" onclick="pay('${service.paypal}')">
Pay with PayPal
</button>

<button class="buy" onclick="pay('${service.razorpay}')">
Pay with Razorpay
</button>

</div>`;
});
}

function setCurrency(cur){
currency=cur;
render();
}

function pay(link){
window.open(link,"_blank");
}

render();
