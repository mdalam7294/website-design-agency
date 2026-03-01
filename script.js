function orderNow(service, price){
let message = `Hello, I want to order ${service} for ${price}. Please guide me.`;
let whatsappURL = "https://wa.me/916299901015?text=" + encodeURIComponent(message);
window.open(whatsappURL, "_blank");
}
