const scriptURL =
  "https://script.google.com/macros/s/AKfycbzh1P4wJmXPUpIO286XiqT1FZg-1NbSGsz0qRJgce-y6CVd6MBp0JdJ_4eAviqnuXEE_g/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted successfully."))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error! Something's wrong", error.message));
});
