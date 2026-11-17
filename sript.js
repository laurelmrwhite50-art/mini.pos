// ---------- EDIT THESE TWO LINES ----------
// Your WhatsApp number with country code, digits only. Zimbabwe numbers start with 263.
// Example: 0771234567 becomes "263771234567"
const WHATSAPP_NUMBER = "";

// The message that appears ready to send when someone taps the button
const WHATSAPP_MESSAGE = "Hello, I want to start using MiniPOS for my shop.";
// -------------------------------------------

const whatsappButton = document.getElementById("whatsapp-btn");
const whatsappNumber = document.getElementById("whatsapp-number");

if (WHATSAPP_NUMBER) {
  const link =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

  // Make the button open WhatsApp with your number
  whatsappButton.href = link;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener";

  // Show the number on the page in the form 0771 234 567
  const local = WHATSAPP_NUMBER.replace(/^263/, "0");
  whatsappNumber.textContent = local.replace(/^(\d{4})(\d{3})(\d+)$/, "$1 $2 $3");
}
