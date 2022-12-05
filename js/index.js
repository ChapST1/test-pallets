const editBtn = document.getElementById("edit-btn");
const modal = document.getElementById("modalEdit");
const closeModal = document.getElementById("close-modal");
const form = document.getElementById("form");

editBtn.addEventListener("click", () => {
  modal.classList.add("modal-active");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});

function getValues() {
  let bodyBg = document.getElementById("body-bg").value;
  let headerBg = document.getElementById("header-bg").value;
  let logoColor = document.getElementById("logo-color").value;
  let linkColor = document.getElementById("link-color").value;
  let titleColor = document.getElementById("title-color").value;
  let paragraphColor = document.getElementById("paragraph-color").value;
  let buttonBg = document.getElementById("button-bg").value;
  let buttonColor = document.getElementById("button-color").value;
  let svgBg = document.getElementById("svg-bg").value;
  let cardsBg = document.getElementById("cards-bg").value;
  let footerBg = document.getElementById("footer-bg").value;
  let footerColor = document.getElementById("footer-color").value;

  return {
    bodyBg,
    headerBg,
    logoColor,
    linkColor,
    titleColor,
    paragraphColor,
    buttonBg,
    buttonColor,
    svgBg,
    cardsBg,
    footerBg,
    footerColor,
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const allValues = getValues();
  setValue(allValues);
  clearInputs(allValues);
});

function setValue(obj) {
  const cssVariables = document.documentElement.style;

  cssVariables.setProperty("--body-bg", `#${obj.bodyBg}`);
  cssVariables.setProperty("--header-bg", `#${obj.headerBg}`);
  cssVariables.setProperty("--logo-color", `#${obj.logoColor}`);
  cssVariables.setProperty("--link-color", `#${obj.linkColor}`);
  cssVariables.setProperty("--title-color", `#${obj.titleColor}`);
  cssVariables.setProperty("--paragraph-color", `#${obj.paragraphColor}`);
  cssVariables.setProperty("--button-bg", `#${obj.buttonBg}`);
  cssVariables.setProperty("--button-color", `#${obj.buttonColor}`);
  cssVariables.setProperty("--svg-bg", `#${obj.svgBg}`);
  cssVariables.setProperty("--cards-bg", `#${obj.cardsBg}`);
  cssVariables.setProperty("--footer-bg", `#${obj.footerBg}`);
  cssVariables.setProperty("--footer-color", `#${obj.footerColor}`);
}

function clearInputs(obj) {
  obj.bodyBg == "";
}
