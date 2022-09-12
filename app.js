const contactControlIcon = document.querySelector(".contact-control__icon");
const contactControl = document.querySelector(".contact-control");

console.log(contactControlIcon, contactControl);

const addActive = () => {
  contactControl.classList.toggle("active");
};

contactControlIcon.addEventListener("click", addActive);
