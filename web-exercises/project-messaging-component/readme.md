# Componente de Comentários

> Um componente de comentários em **HTML**, **CSS** e **JavaScript** com suporte a modo dark/light, avatar do usuário, adição e exclusão de comentários.

---

## 🖼️ Referências Visuais

### Modo Claro

<p align="center">
  <img src="examples/light-mode.png" alt="Componente com o Light-Mode" />
</p>

### Modo Escuro

<p align="center">
  <img src="examples/dark-mode.png" alt="Componente com o Dark-Mode" />
</p>


---

## 🚀 Funcionalidades

1. **Modo Dark / Light**  
   - Toggle para alternar temas  
   - Armazena preferência no `localStorage`  
2. **Botão “⋮”**  
   - Localizado no canto superior direito para futuras opções  
3. **Avatar no Formulário**  
   - Mostra o avatar do usuário atual ao lado da área de texto  
4. **Adicionar Comentários**  
   - Digite no `<textarea>` e clique em “Comentar”  
   - Novo comentário aparece imediatamente na lista  
5. **Excluir Comentários**  
   - Ícone “🗑️” em cada comentário permite remoção  

---

## 📁 Estrutura do Projeto

/project
│
├── index.html # Marcações HTML e referência aos estilos e scripts
├── styles.css # Variáveis de tema, layout e responsividade
├── script.js # Lógica de tema, criação e exclusão de comentários
├── images/
├── boy-2.jpg # Avatar local do usuário atual
├── boy-1.jpg # Avatar local de outros usuários
├── woman-1.jpg # Avatar local de outros usuários
└── woman-2.jpg # Avatar local de outros usuários
├── examples/
├── light-mode.png
└── dark-mode.png

---

## Como Executar

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd Project-Password\ Checker
   ```
3. Abra o arquivo `index.html` em seu navegador.

---

## Contribuindo

1. Faça um *fork* deste repositório.
2. Crie uma branch para sua feature:

   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça suas alterações e commite:

   ```bash
   git commit -m "Adicionando uma nova funcionalidade"
   ```
4. Envie para o repositório remoto:

   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
