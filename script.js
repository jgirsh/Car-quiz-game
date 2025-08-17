// Options
optionsEl.innerHTML = "";
const shuffledOptions = shuffle([...q.options]);  // new line

shuffledOptions.forEach(opt => {
  const btn = document.createElement("div");
  btn.textContent = opt;
  btn.className = "option";
  btn.tabIndex = 0;
  btn.addEventListener("click", () => selectAnswer(opt, btn));
  btn.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      selectAnswer(opt, btn);
    }
  });
  optionsEl.appendChild(btn);
});
