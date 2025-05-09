document.addEventListener('DOMContentLoaded', () => {
  const spanAno = document.getElementById('ano-atual');
  const anoAtual = new Date().getFullYear();
  spanAno.textContent = anoAtual;
});
