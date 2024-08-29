//your JS code here. If required.
const codes = document.querySelectorAll(".code");
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (event) => {
    console.log(event);
    console.log(codes[idx]);
    if (event.key >= "0" && event.key <= "9") {
      codes[idx].value = "";
      setTimeout(() => {
        codes[idx + 1] && codes[idx + 1].focus();
      }, 10);
    } else if (event.key === "backspace") {
      setTimeout(() => {
        codes[idx - 1] && codes[idx - 1].focus();
      }, 10);
    }
  });
});