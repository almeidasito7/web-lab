// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form        = document.getElementById("commentForm");
  const input       = document.getElementById("commentInput");
  const list        = document.getElementById("commentList");
  const themeToggle = document.getElementById("themeToggle");
  const darkClass   = "dark-mode";

  // ⚙️ Caminho da sua imagem local e nome do usuário
  const currentUserAvatar = "images/boy-2.jpg";
  const currentUserName   = "Você";

  // — Inicializa tema salvo em localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add(darkClass);
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Alternar para modo claro");
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Alternar para modo escuro");
  }

  // — Alterna modo dark/light
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle(darkClass);
    if (isDark) {
      themeToggle.textContent = "☀️";
      themeToggle.setAttribute("aria-label", "Alternar para modo claro");
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙";
      themeToggle.setAttribute("aria-label", "Alternar para modo escuro");
      localStorage.setItem("theme", "light");
    }
  });

  // — Ajusta o avatar do input de comentário para usar sua imagem local
  const inputAvatar = document.querySelector(".input-avatar");
  if (inputAvatar) {
    inputAvatar.src = currentUserAvatar;
    inputAvatar.alt = `Avatar de ${currentUserName}`;
  }

  // — Criação de novos comentários
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    // novo <li class="comment-item">
    const item = document.createElement("li");
    item.className = "comment-item";

    // avatar com a sua foto local
    const avatar = document.createElement("div");
    avatar.className = "comment-avatar";
    const img = document.createElement("img");
    img.src = currentUserAvatar;
    img.alt = `Avatar de ${currentUserName}`;
    avatar.appendChild(img);

    // conteúdo
    const content = document.createElement("div");
    content.className = "comment-content";

    // cabeçalho com autor e timestamp
    const header = document.createElement("div");
    header.className = "comment-header";
    header.innerHTML = `
      <span class="author">${currentUserName}</span>
      <span class="timestamp">${new Date().toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      })}</span>
    `;

    // texto
    const message = document.createElement("p");
    message.className = "comment-text";
    message.textContent = text;

    // botão de excluir
    const btnDel = document.createElement("button");
    btnDel.className = "delete-btn";
    btnDel.setAttribute("aria-label", "Excluir comentário");
    btnDel.textContent = "🗑️";

    // monta tudo
    content.append(header, message);
    item.append(avatar, content, btnDel);
    list.appendChild(item);

    // limpa input e foca de novo
    input.value = "";
    input.focus();
  });

  // — Delegação: exclusão de comentários
  list.addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
      e.target.closest(".comment-item").remove();
    }
  });
});
