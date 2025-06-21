const messages = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const whisper = document.getElementById('whisper');

const creepyReplies = [
  "I can hear you breathing.",
  "There’s something behind you.",
  "You shouldn’t have typed that.",
  "Do you remember what happened at 3:33 AM?",
  "The house remembers.",
];

function addMessage(text, sender = 'ai') {
  const msg = document.createElement('div');
  msg.textContent = (sender === 'user' ? "> " : "") + text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

userInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && userInput.value.trim()) {
    const input = userInput.value.trim();
    addMessage(input, 'user');
    userInput.value = '';

    setTimeout(() => {
      const reply = creepyReplies[Math.floor(Math.random() * creepyReplies.length)];
      addMessage(reply);
      if (Math.random() < 0.5) whisper.play();
    }, 1000);
  }
	});