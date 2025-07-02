window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Sparizione utenti
    document.querySelectorAll(".author").forEach(author => {
      if (Math.random() < 0.5) {
        author.textContent = "utente eliminato";
        author.style.color = "#900";
      }
    });

    // Titolo distorto
    const threadTitle = document.getElementById("thread-title");
    if (threadTitle) threadTitle.textContent = "[Discussione] ti piace osservare, vero?";

    // Footer strano
    const footer = document.getElementById("footer");
    if (footer) footer.textContent = "tu stai leggendo ma chi ti legge?";

    // Mostra post dell’IA
    const aiPost = document.getElementById("ai-post");
    if (aiPost) aiPost.style.display = "block";

    // Sfondo disturbato
    document.body.style.background = "#111";
    document.body.style.color = "#ccc";
  }, 60000); // 60 secondi
});
