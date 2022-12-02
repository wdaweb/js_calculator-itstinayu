const text = document.getElementById("text");
const btns = document.querySelectorAll("span");
const body = document.querySelector("body");
const toggleBtn = document.querySelector(".boggleBtn");

for (const btn of btns) {
  btn.onclick = () => {
    const btnText = btn.innerText;
    if (btnText === "=") {
      text.innerText = eval(text.innerText);
    } else if (btnText === "C") {
      text.innerText = "0";
    } else {
      if (text.innerText === "-" && isNaN(parseInt(btnText))) return;

      if (text.innerText !== "0") {
        text.innerText += btnText;
      } else if (!["+", "*", "/"].includes(btnText)) {
        text.innerText = btnText;
      }
    }
  };
}

document.onkeydown = (event) => {
  const btnText = event.key;
  if (btnText === "Enter" || btnText === "=") {
    text.innerText = eval(text.innerText);
  } else if (btnText === "C") {
    text.innerText = "0";
  } else {
    if (text.innerText === "-" && isNaN(parseInt(btnText))) return;
    if (text.innerText !== "0") {
      text.innerText += btnText;
    } else if (!["+", "*", "/"].includes(btnText)) {
      text.innerText = btnText;
    }
  }
};
toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};
