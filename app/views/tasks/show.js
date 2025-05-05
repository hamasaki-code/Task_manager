document.addEventListener("turbo:load", () => {
  console.log("show.js loaded"); // 確認用ログ

  const canvas = document.getElementById("dueDateGauge");
  if (!canvas) {
    console.error("Canvas element with id 'dueDateGauge' not found.");
    return;
  }

  console.log("Canvas element found:", canvas);

  const dueDateAttr = canvas.dataset.dueDate;
  if (!dueDateAttr) {
    console.error("data-due-date attribute is missing or invalid.");
    return;
  }

  console.log("Due date attribute:", dueDateAttr);

  const dueDate = new Date(dueDateAttr);
  const now = new Date();

  console.log("Due date object:", dueDate);
  console.log("Current date object:", now);

  if (isNaN(dueDate.getTime())) {
    console.error("Invalid date provided for dueDate:", dueDateAttr);
    return;
  }

  const totalTime = (dueDate - now) / (1000 * 60 * 60 * 24); // 日数
  const percentage = Math.max(0, Math.min(1, totalTime / 30)); // 0〜1に正規化
  console.log("Percentage for gauge:", percentage);

  const gauge = new ProgressBar.Circle(canvas, {
    color: "#4caf50",
    trailColor: "#e0e0e0",
    trailWidth: 1,
    duration: 1400,
    easing: "easeInOut",
    strokeWidth: 4,
    text: {
      value: "0%",
    },
    from: { color: "#4caf50" },
    to: { color: "#f44336" },
    step: (state, circle) => {
      circle.path.setAttribute("stroke", state.color);
      circle.setText(Math.round(circle.value() * 100) + "%");
    },
  });

  gauge.animate(percentage); // アニメーションでゲージを表示
});
