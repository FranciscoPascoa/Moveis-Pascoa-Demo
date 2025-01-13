// Selecionar elementos
const modal = document.getElementById('modal-orcamento');
const fecharModal = document.querySelector('.fechar');
const botoesOrcamento = document.querySelectorAll('.btn-orcamento');
const inputProduto = document.getElementById('produto');

// 1. Ao clicar em "Pedir Orçamento"
botoesOrcamento.forEach((botao) => {
  botao.addEventListener('click', () => {
    const nomeProduto = botao.getAttribute('data-produto');
    inputProduto.value = nomeProduto; // preenche o input

    // Mostra o modal
    modal.style.display = 'block';
  });
});

// 2. Fechar modal ao clicar no X
fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 3. Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
