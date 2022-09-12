const contactControlIcon = document.querySelector(".contact-control__icon");
const contactControl = document.querySelector(".contact-control");
const iconImage = document.querySelector(".icon-image");
const inputUserName = document.querySelector("input#user_name");

const toggleActive = () => {
  contactControl.classList.toggle("active");
  if (iconImage.textContent.includes("close")) {
    iconImage.textContent = "mail";
  } else {
    iconImage.textContent = "close";
  }
  inputUserName.focus();
};

contactControlIcon.addEventListener("click", toggleActive);
