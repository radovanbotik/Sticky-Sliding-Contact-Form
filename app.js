const contactControlIcon = document.querySelector(".contact-control__icon");
const contactControl = document.querySelector(".contact-control");
const iconImage = document.querySelector(".icon-image");

console.log(contactControlIcon, contactControl);

const toggleActive = () => {
  contactControl.classList.toggle("active");
  if (iconImage.textContent.includes("close")) {
    iconImage.textContent = "mail";
  } else {
    iconImage.textContent = "close";
  }
};

contactControlIcon.addEventListener("click", toggleActive);
