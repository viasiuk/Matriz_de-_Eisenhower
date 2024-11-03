document.getElementById('adicionar').addEventListener('click', () => {
    const atividadeInput = document.getElementById('atividade');
    const quadranteSelect = document.getElementById('quadrante');

    const atividadeTexto = atividadeInput.value.trim();
    const quadranteValor = quadranteSelect.value;

    if (atividadeTexto === '') {
        alert('Por favor, insira uma atividade.');
        return;
    }

    const novoItem = document.createElement('div');
    novoItem.textContent = atividadeTexto;
    novoItem.draggable = true;

    novoItem.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', atividadeTexto);
        e.dataTransfer.effectAllowed = 'move';
    });

    const quadrante = document.getElementById(`quadrante${quadranteValor}`);
    quadrante.appendChild(novoItem);
    
    atividadeInput.value = '';
});

// Implementação do arrastar e soltar
const quadrantes = document.querySelectorAll('.quadrante');

quadrantes.forEach(quadrante => {
    quadrante.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    quadrante.addEventListener('drop', (e) => {
        e.preventDefault();
        const atividadeTexto = e.dataTransfer.getData('text/plain');
        const novoItem = document.createElement('div');
        novoItem.textContent = atividadeTexto;
        novoItem.draggable = true;

        novoItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', atividadeTexto);
            e.dataTransfer.effectAllowed = 'move';
        });

        quadrante.appendChild(novoItem);
    });
});
