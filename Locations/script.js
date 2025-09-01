// Array com os locais
const locaisData = [
    {
        name: "Campo de Treino Kaelum",
        image: "/images/Local de treinamento dos Kaelum.png",
        info: `
        <p><strong>Descrição:</strong> O local de treino dos Kaelum é um amplo campo aberto situado nas proximidades da sede do clã, concebido para treinar guerreiros desde tenra idade no controlo do Pulso Kaelum. Rodeado por vegetação escassa e rochas naturais, o terreno permite que os jovens guerreiros sintam as vibrações do solo e harmonizem os seus batimentos vitais com o ambiente, prática essencial para desenvolver habilidades de ressonância e descompasso.</p>
        <p>O campo é utilizado para uma variedade de exercícios, incluindo técnicas de velocidade, combate corpo a corpo, perceção de pulsos de energia e testes de resistência. Instrutores experientes, como Betch Kaelum, supervisionam os treinos, orientando os aprendizes a dominar o seu Pulso e expandir as suas capacidades.</p>
        <p>O ambiente combina simplicidade com funcionalidade: marcas no solo indicam zonas de treino específicas, estruturas básicas servem para exercícios de agilidade, e o vento constante adiciona um elemento natural de desafio aos exercícios de perceção.</p>
        <p><strong>Atmosfera:</strong> Focada, disciplinada e desafiadora; cada treino é uma oportunidade de crescimento físico e espiritual para os membros do clã.</p>
    `
    },
    {
    name: "Campo de Treino Dravoryn",
    image: "/images/Local de treinamento dos Dravoryn.png",
    info: `
        <p><strong>Descrição:</strong> O campo de treino dos Dravoryn está localizado nas proximidades da residência do clã, concebido para desenvolver a força física, a metamorfose parcial e as habilidades de combate corpo a corpo dos jovens guerreiros. Diferente do campo dos Kaelum, o terreno é rochoso e irregular, desafiando os aprendizes a adaptar os seus movimentos e a transformar partes do corpo de forma estratégica durante o treino.</p>
        <p>O espaço é amplo, permitindo que os membros do clã realizem exercícios intensos de força, resistência e adaptação do corpo. Estruturas básicas de madeira e pedra servem para treinos de escalada, salto e ataque, enquanto algumas áreas são destinadas a simulações de batalha contra adversários ou criaturas mecânicas.</p>
        <p>A atmosfera do campo é dinâmica e competitiva, refletindo a natureza predadora do clã: cada treino é uma oportunidade de superar limites físicos e despertar instintos de combate, incentivando a metamorfose estratégica do corpo e a capacidade de adaptação rápida.</p>
        <p><strong>Atmosfera:</strong> Intensa, desafiante e competitiva; o treino enfatiza força, resistência e evolução constante, promovendo a excelência marcial entre os Dravoryn.</p>
    `
    },
    {
    name: "Base dos Kaelum",
    image: "/images/Base Kaelum.png",
    info: `
        <p><strong>Descrição:</strong> A base dos Kaelum é a sede central do clã e o lar dos membros mais poderosos e influentes. Localizada num planeta estratégico do Ordo Vexillum, a base combina uma arquitectura imponente com funcionalidade militar, refletindo o prestígio e a disciplina do clã.</p>
        <p>O complexo é composto por torres altas, salas de treino especializadas, laboratórios para estudos avançados do Pulso Kaelum e residências privadas para os guerreiros e as suas famílias. O espaço interno é concebido para o aperfeiçoamento do Pulso, planeamento estratégico e convívio familiar. Áreas externas incluem pátios para treino físico e testes de ressonância, bem como jardins bem cuidados que oferecem momentos de reflexão e treino mental.</p>
        <p>A base funciona como centro de comando do clã, onde decisões críticas são tomadas, sendo também um símbolo da força e do legado dos Kaelum. Apenas membros autorizados e aliados de confiança têm acesso completo às suas instalações mais secretas.</p>
        <p><strong>Atmosfera:</strong> Disciplinada, imponente e estratégica; combina o rigor militar com o legado ancestral do clã, inspirando respeito e admiração entre aliados e temor entre adversários.</p>
    `
    },
    {
    name: "Laboratório Secreto",
    image: "/images/Laboratorio Secreto.png",
    info: `
        <p><strong>Descrição:</strong> Este planeta, anteriormente conquistado pelo Ordo Vexillum, esconde um dos seus segredos mais sombrios: o laboratório subterrâneo onde Deymar Kaelum realiza experiências às escondidas de todos. À superfície, o planeta parece desolado e pouco notável, com paisagens áridas e rochosas, camuflando a tecnologia avançada enterrada abaixo.</p>
        <p>O laboratório é uma gigantesca instalação subterrânea, equipada com tecnologia avançada para monitorização de aura, manipulação genética e experiências proibidas. Corredores amplos, salas de contenção e laboratórios cheios de máquinas complexas compõem o ambiente, onde fios, painéis e dispositivos de medição se conectam a macas e equipamentos de treino de energia. A luz é fria e artificial, lançando sombras que reforçam a atmosfera de segredo e perigo.</p>
        <p>Apesar do ambiente hostil, a instalação foi cuidadosamente planeada para testar limites físicos e energéticos, mantendo o controlo absoluto sobre todos os experimentos realizados ali. É um lugar de tensão, medo e descobertas, simbolizando o lado obscuro da ambição do clã Kaelum.</p>
        <p><strong>Atmosfera:</strong> Sombria, tecnológica e opressiva; mistura avanço científico com perigo moral, refletindo a ambição e o controlo extremo do clã sobre os seus membros.</p>
    `
    }
];

// Seleciona elementos do DOM
const gridContainer = document.querySelector('.grid-container');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalImgContainer = document.querySelector('.modal-left');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const modalText = document.querySelector('.modal-right');
const closeBtn = document.getElementById('close');

// Função para gerar grid de locais
function gerarLocais() {
    locaisData.forEach(local => {
        const div = document.createElement('div');
        div.classList.add('personagem');
        div.dataset.name = local.name;
        div.dataset.info = local.info;

        div.innerHTML = `
            <img src="${local.image}" alt="${local.name}">
            <div class="nome">${local.name}</div>
        `;

        div.addEventListener('click', () => {
            abrirModal(local);
        });

        gridContainer.appendChild(div);
    });
}

// Função para abrir modal
function abrirModal(local) {
    modal.style.display = 'flex';
    modalImg.src = local.image;
    modalName.textContent = local.name;
    modalInfo.innerHTML = local.info;

    modalContent.classList.remove('show');
    modalImgContainer.classList.remove('show');
    modalText.classList.remove('show');

    void modalContent.offsetWidth;

    modalContent.classList.add('show');
    modalImgContainer.classList.add('show');
    modalText.classList.add('show');
}

// Fechar modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicializa grid
gerarLocais();
