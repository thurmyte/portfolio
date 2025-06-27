function toggleTheme() {
  document.body.classList.toggle("dark");
}

async function sendPrompt(prompt) {
  const response = await fetch("https://your-api-url.com/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  alert("Bot says: " + data.reply);
}
