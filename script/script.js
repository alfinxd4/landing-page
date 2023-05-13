const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

const show_hide = () => {
  const click = document.querySelector(".dropdown");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
};

function handleGetFormData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
}

function isNumber(string) {
  if (isNaN(string) == false) {
    return true;
  } else {
    return false;
  }
}

function checkboxIsChecked() {
  let status = document.getElementById("status").checked;

  if (status == true) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(data) {
  if (!data) {
    return false;
  }
  if (!isNumber(data.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }
  return true;
}

function submit() {
  if (validateFormData() == false) {
    document
      .getElementById("warning")
      .innerHTML("Periksa form anda sekali lagi");
  } else {
    document
    .getElementById("warning")
    .innerHTML("");
  }
}
