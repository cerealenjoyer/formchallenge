const contactForm = document.querySelector("form");
const contactBoard = document.querySelector("#contactBoard");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateAndSend(contactForm);
});
function validateAndSend(form) {
  const formData = new FormData(form);
  if (formData.get("email") == "" && formData.get("tel") == "") {
    alert("Please enter either an email address or telephone number.");
    return false;
  } else if (
    formData.get("prefsemail") == null &&
    formData.get("prefstel") == null
  ) {
    alert("Please select a contact preference");
    return false;
  } else {
    displayDetails(Object.fromEntries(formData));
  }
}

function displayDetails(object) {
  const contactCard = document.createElement("div");
  contactCard.classList.add("box", "center");
  const inputs = Object.entries(object);
  inputs.forEach((a) => {
    const entry = document.createElement("span");
    if (a[0].slice(0, 5) === "prefs") {
      entry.innerText = `Contact preference: ${capital(a[0].slice(5))}`;
    } else entry.innerText = `${capital(a[0])} : ${a[1]}`;
    contactCard.append(entry);
    contactBoard.append(contactCard);
  });
}

const capital = (str) => str.charAt(0).toUpperCase() + str.slice(1);
