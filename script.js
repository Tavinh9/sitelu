// Pega o botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Alterna a classe de tema no body
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');  // Alterna o tema escuro
    // Troca o ícone com base no tema
    if (document.body.classList.contains('dark')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});
