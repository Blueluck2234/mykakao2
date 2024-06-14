// 상단 AI 아이콘 ON, OFF
document.getElementById("aiSwitch").addEventListener("click", function () {
  let aiIcon = document.getElementById("aiIcon");
  if (aiIcon.src.includes("off")) {
    aiIcon.src = "./images/icons8-AI-on-48.png";
  } else {
    aiIcon.src = "./images/icons8-AI-off-48.png";
  }
});
