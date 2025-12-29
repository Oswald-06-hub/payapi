const linkPricing = document.getElementById("linkPricing")
const linkContact = document.getElementById("linkContact");
const linkAbout = document.getElementById("linkAbout");

const button = document.getElementById("getStartedbtn");
const features = document.getElementById("features");

const pricing = document.getElementById("Pricing");
const contact = document.getElementById("Contact");
const about = document.getElementById("About");

const modal = document.getElementById("featureModal");
const span = document.querySelector(".close")


button.addEventListener("click", () => {
    features.scrollIntoView({ behavior: "smooth"});
    
}); 


linkPricing.addEventListener("click", (e) => {
    e.preventDefault();
    pricing.scrollIntoView({ behavior: "smooth"});

});
linkContact.addEventListener("click", (e) => {
    e.preventDefault();
    contact.scrollIntoView({ behavior: "smooth"}); 
});

linkAbout.addEventListener("click", (e) => {
   e.preventDefault();
   about.scrollIntoView({ behavior: "smooth"});
});

document.querySelectorAll('.card').forEach (card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').innerText;
      const codeElement = document.querySelector('#featureModal code');

      if(title.includes("Easy")) {
            codeElement.innerText = `// Java Integration
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.payapi.com/v1/auth"))
    .build();`;
        } else if (title.includes("Sucre") || title.includes("Secure")) {
            codeElement.innerText = `{
  "status": "secure",
  "encryption": "AES-256",
  "message": "Payment encrypted successfully"
}`;
        } else {
            codeElement.innerText = `// Fast Performance
// Average latency: 45ms
// Throughput: 10k requests/sec`;
        }
         modal.style.display = "block";
    });
});

span.onclick = () => modal.style.display = "none";
 window.onclick = (event) => {
    if (event.target ==  modal) modal.style.display = "none";
 }; 

 document.querySelectorAll(".plan button").forEach(btn => {
   btn.addEventListener("click", () => {
     contact.scrollIntoView( {behavior: "smooth"});

   });
 });

 const form = document.querySelector(".contact-form");

 form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully ");
    form.reset();
    
 });


console.log("JS cargado");
