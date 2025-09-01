const orgsData = [
  {
    name: "Ordo Vexillum",
    logo: "/images/Ordo Vexillum_Logo.png",
    info: `
    <h3>🎇 Ordo Vexillum — Guardiões da Ordem</h3>

    <h4>📛 Conceito Central</h4>
    <p>A Ordo Vexillum é uma poderosa aliança de clãs guerreiros que domina vastos setores do universo com mão de ferro. Fundada há séculos, a organização une clãs de elite — como Kaelum, Dravoryn e Veythar — sob um único estandarte, impondo ordem, conquista e medo onde passa.</p>
    <p>A filosofia da Ordo é clara: <em>“A aura é a medida de todas as coisas. Quem domina a sua aura, domina o universo.”</em> Eles veem-se como portadores da ordem cósmica, e qualquer resistência é tratada com força absoluta.</p>

    <h4>🏛 Estrutura e Liderança</h4>
    <ul>
    <li><strong>Líder Supremo:</strong> Sevrin Veynar, responsável pela visão e supremacia da Ordo.</li>
    <li><strong>Conclave dos Augures:</strong> místicos, estrategas e guerreiros lendários aposentados que interpretam o fluxo das auras.</li>
    <li><strong>Triunvirato dos Grandes Clãs:</strong> representantes de Kaelum, Dravoryn e Veythar, que governam sob supervisão do líder.</li>
    </ul>
    <p>Clãs secundários e legiões apoiam nas operações sem questionar a hierarquia, mantendo disciplina e eficácia militar.</p>

    <h4>🔮 Filosofia e Estratégia</h4>
    <ul>
    <li>Disciplina interna rigorosa e rivalidades controladas para fortalecer os guerreiros.</li>
    <li>Ritos de iniciação e desafios de força garantem que apenas os mais capazes ascendem.</li>
    <li>Vitórias e conquistas são celebradas com rituais e exibições de poder.</li>
    <li>A identidade individual é secundária; o estandarte, a ordem e a supremacia do grupo prevalecem.</li>
    </ul>

    <h4>🌌 Símbolos e Costumes</h4>
    <ul>
    <li><strong>Máscaras únicas:</strong> cada membro possui uma máscara que representa o seu lugar na hierarquia.</li>
    <li><strong>Rito da Conquista:</strong> cada geração deve provar a sua força conquistando territórios estratégicos.</li>
    <li><strong>Estandarte Vexillum:</strong> tecido que vibra com energia de aura, símbolo máximo da Ordo.</li>
    </ul>
    `
  },
  {
    name: "Oblivionis",
    logo: "/images/Oblivionis_Logo.png",
    info: `
      <h3>🎆 Oblivionis — Sombra do Poder</h3>

        <h4>📛 Conceito Central</h4>
        <p>Os Oblivionis são uma organização secreta temida por todo o universo, conhecida apenas através de rumores e lendas. Enquanto aparentam neutralidade ou inexistência em regiões civis, na realidade são uma força assassina e destruidora, que governa pelo medo e pela força bruta. A sua filosofia é simples e cruel: <em>“Os mais fortes dominam. Quem não se impõe, desaparece.”</em></p>

        <h4>🏛 Estrutura Hierárquica</h4>
        <ul>
        <li><strong>Comandante Supremo:</strong> líder absoluto da organização.</li>
        <li><strong>Vice-Comandante:</strong> Tharion, responsável pelas divisões de elite.</li>
        <li><strong>Capitães das oito divisões:</strong> lideram operações específicas de destruição e assassinato.</li>
        </ul>
        <p>Cada divisão é altamente especializada, mas todos partilham a mesma filosofia: terror, força e domínio total.</p>

        <h4>🔮 Operações e Filosofia</h4>
        <ul>
        <li>Movem-se entre sistemas sem deixar rasto, eliminando alvos estratégicos e manipulando eventos.</li>
        <li>Executam operações clandestinas, mas sempre com impacto e letalidade máximos.</li>
        <li>O fracasso não é tolerado; nenhuma missão é demasiado impossível.</li>
        <li>O terror é uma arma tão poderosa quanto a lâmina ou a aura.</li>
        </ul>

        <h4>🌌 Reputação no Universo</h4>
        <p>Poucos ousam conhecer os Oblivionis, e ainda menos sobrevivem para contar. Apesar da sua discrição, a mera menção do seu nome provoca medo absoluto, até os clãs mais poderosos da Ordo Vexillum reconhecem a ameaça silenciosa que representam.</p>
    `
  }
];

const orgsContainer = document.getElementById('orgs-container');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.getElementById('close');

orgsData.forEach(org => {
  const orgDiv = document.createElement('div');
  orgDiv.classList.add('org');
  orgDiv.innerHTML = `
    <img src="${org.logo}" alt="${org.name}">
    <div class="org-name">${org.name}</div>
  `;

  orgDiv.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = org.logo;
    modalName.textContent = org.name;
    modalInfo.innerHTML = org.info;
  });

  orgsContainer.appendChild(orgDiv);
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
