const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateAndSend(contactForm);
});
function validateAndSend(form) {
  const formData = new FormData(contactForm);
  if (formData.get("email") == "" && formData.get("tel") == "") {
    alert("Please give us a way to contact you.");
    return false;
  } else if (
    formData.get("prefsemail") == null &&
    formData.get("prefstel") == null
  ) {
    alert("Please select a contact preference");
    return false;
  } else {
    form.submit();
  }
}
