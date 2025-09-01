const clansData = [
  {
    name: "Clã Kaelum",
    img: "/images/Clã Kaelum_Logo.png",
    organization: "Ordo_Vexillum",
    info: `
      <h3>🌀 Clã Kaelum — Guardiões do Pulso</h3>
      <h4>📛 Conceito Central</h4>
      <p>Mestres do Pulso, uma energia invisível que flui através de tudo, os Kaelum são vistos como pilares da Ordo Vexillum. 
      Acreditam que controlar o Pulso é dominar o próprio ritmo do universo, tanto para destruir como para proteger.</p>
      <h4>🔮 Poderes do Clã</h4>
      <ul>
        <li><strong>Sentir o Pulso:</strong> percebem vibrações sutis no ar, no solo e até em seres vivos.</li>
        <li><strong>Manipulação do Pulso:</strong> canalizam esta energia em ataques devastadores ou defesas quase impenetráveis.</li>
        <li><strong>Fluxo Vital:</strong> guerreiros experientes sincronizam-se com o Pulso para aumentar força, velocidade ou resistência.</li>
      </ul>
      <h4>🏛 Cultura e Tradições</h4>
      <ul>
        <li>Consideram-se guardiões naturais da ordem e do equilíbrio dentro da Ordo Vexillum.</li>
        <li>O <em>Rito da Máscara</em> é particularmente rigoroso: jovens que falham são vistos como uma vergonha.</li>
        <li>Valorizam disciplina, honra e lealdade acima de tudo.</li>
        <li>Temidos pela severidade dos líderes, que não toleram fraqueza.</li>
      </ul>
      <h4>🌌 Reputação na Ordo Vexillum</h4>
      <p>Respeitados como um dos três grandes clãs, os Kaelum são considerados o coração da Ordo. 
      A sua ligação ao Pulso dá-lhes uma aura de misticismo, mas também de pressão: todos esperam perfeição.</p>
    `
  },
  {
    name: "Clã Dravoryn",
    img: "/images/Clã Dravoryn_Logo.png",
    organization: "Ordo_Vexillum",
    info: `
      <h3>🦴 Clã Dravoryn — Força da Carne e do Osso</h3>
      <h4>📛 Conceito Central</h4>
      <p>Um clã de guerreiros brutais e indomáveis, capazes de transformar o próprio corpo em armas vivas. 
      Os Dravoryn acreditam que a força verdadeira vem de dentro, e que o corpo é a arma suprema.</p>
      <h4>🔮 Poderes do Clã</h4>
      <ul>
        <li><strong>Manipulação Óssea:</strong> projetam, moldam e transformam ossos em lâminas, armaduras ou estacas letais.</li>
        <li><strong>Regeneração Limitada:</strong> após batalhas, podem reconstituir ossos, embora com dor e desgaste físico.</li>
        <li><strong>Força Bruta:</strong> corpos naturalmente mais resistentes, capazes de suportar ferimentos letais para outros.</li>
      </ul>
      <h4>🏛 Cultura e Tradições</h4>
      <ul>
        <li>Valorizam coragem, agressividade e instinto acima da disciplina rígida.</li>
        <li>Os ritos de passagem envolvem provas de dor e combate físico extremo.</li>
        <li>Acreditam que apenas quem suporta a dor pode chamar-se verdadeiro Dravoryn.</li>
        <li>Defendem que “o corpo nunca mente”: a força é a medida de valor de cada indivíduo.</li>
      </ul>
      <h4>🌌 Reputação na Ordo Vexillum</h4>
      <p>Temidos em batalha pela sua ferocidade e resistência, os Dravoryn são a “muralha de carne e osso” da Ordo Vexillum. 
      Vistos como máquinas de guerra vivas, mas também imprevisíveis, muitas vezes considerados selvagens demais para a política,
      embora a sua força seja indispensável.</p>
    `
  },
  {
    name: "Clã Veythar",
    img: "/images/clã Veythar_Logo.png",
    organization: "Ordo_Vexillum",
    info: `
      <h3>🌑 Clã Veythar — Senhores da Sombra</h3>
      <h4>📛 Conceito Central</h4>
      <p>Um clã marcado pelo mistério e pela disciplina. Os Veythar são mestres em ocultar a sua presença, manipulando a escuridão e a aura para atacar no momento certo. 
      Onde os Dravoryn dominam a força e os Kaelum o “Pulso”, os Veythar controlam o silêncio e a sombra.</p>
      <h4>🔮 Poderes do Clã</h4>
      <ul>
        <li><strong>Ocultação da Aura:</strong> conseguem esconder a sua energia vital, tornando-se quase impossíveis de detetar.</li>
        <li><strong>Fusão com a Sombra:</strong> manipulam a escuridão para se moverem despercebidos ou confundir inimigos.</li>
        <li><strong>Precisão Silenciosa:</strong> ataques rápidos e letais, aproveitando o elemento surpresa.</li>
        <li><strong>Visão da Escuridão:</strong> percebem o que os outros não conseguem ver quando tudo é trevas.</li>
      </ul>
      <h4>🏛 Cultura e Tradições</h4>
      <ul>
        <li>Valorizam silêncio, astúcia e paciência acima da força ou velocidade.</li>
        <li>A iniciação envolve longos períodos de isolamento e treino no escuro absoluto.</li>
        <li>Ritual "Caça ao Eco": jovens guerreiros devem derrotar adversários sem revelar a própria presença.</li>
        <li>Acreditam que “a sombra é a guardiã da verdade” — quem controla o vazio interior controla o mundo exterior.</li>
      </ul>
      <h4>🌌 Reputação na Ordo Vexillum</h4>
      <p>Respeitados e temidos como assassinos e estrategas invisíveis. Considerados o “olho oculto” da Ordo, enviados em missões secretas, espionagem ou eliminação de alvos de alto valor. 
      Embora não sejam tão brutais quanto os Dravoryn ou dominadores quanto os Kaelum, são vistos como os mais imprevisíveis e perigosos em batalha.</p>
    `
  },
  {
    name: "Clã Myrion",
    img: "/images/clã Myrion_Logo.png",
    organization: "Ordo_Vexillum",
    info: `
      <h3>🦅 Clã Myrion — Mestres da Agilidade</h3>
      <h4>📛 Conceito Central</h4>
      <p>Um clã secundário conhecido pela sua velocidade, precisão e astúcia. 
      Os Myrion acreditam que a inteligência e a agilidade superam a força bruta, tornando cada movimento calculado e letal.</p>
      <h4>🔮 Poderes do Clã</h4>
      <ul>
        <li><strong>Reflexos Aguçados:</strong> conseguem reagir rapidamente a ataques, mesmo de adversários mais fortes.</li>
        <li><strong>Golpes Precisos:</strong> cada ataque é direcionado a pontos vitais ou vulneráveis do inimigo.</li>
        <li><strong>Agilidade Elevada:</strong> saltos longos, esquivas rápidas e movimentos fluidos em combate.</li>
      </ul>
      <h4>🏛 Cultura e Tradições</h4>
      <ul>
        <li>Valorizam astúcia, disciplina e velocidade acima da força física.</li>
        <li>Reconhecidos como estrategas de campo ou mensageiros rápidos dentro da Ordo Vexillum.</li>
        <li>Treinos envolvem percursos de precisão, obstáculos e desafios de reflexo, focados em movimentação e coordenação.</li>
        <li>Acreditam que paciência e timing certo podem superar adversários mais poderosos.</li>
      </ul>
      <h4>🌌 Reputação na Ordo Vexillum</h4>
      <p>Embora não sejam tão temidos quanto os Três Grandes Clãs, os Myrion são respeitados pela sua eficácia, rapidez e capacidade de surpreender inimigos com movimentos calculados. 
      São considerados mestres da precisão e da inteligência tática dentro da Ordo.</p>
    `
  },
  {
  name: "Clã Ignivar",
  img: "/images/clã Ignivar_Logo.png",
  organization: "Oblivionis",
  info: `
    <h3>🌋 Clã Ignivar — Mestres do Fogo</h3>
    <h4>📛 Conceito Central</h4>
    <p>O Clã Ignivar é um dos clãs mais temidos dentro da organização secreta <strong>Oblivionis</strong>. 
    Especializados no domínio absoluto do fogo e da destruição, os membros combinam força bruta com ataques devastadores que transformam qualquer campo de batalha num inferno literal. 
    Liderados por <strong>Tharion</strong>, vice-comandante da Oblivionis, são reconhecidos como guerreiros que impõem medo e disciplina pelo poder.</p>

    <h4>🔮 Poderes do Clã</h4>
    <ul>
      <li>🔥 <strong>Manipulação de Chamas:</strong> podem gerar e controlar fogo de forma precisa ou massiva, atingindo inimigos e causando destruição em larga escala.</li>
      <li>🌡️ <strong>Explosão de Calor:</strong> concentram energia térmica em rajadas ou ondas expansivas devastadoras.</li>
      <li>🔥 <strong>Fusão com o Fogo:</strong> transformam partes do corpo em chamas para ataque ou defesa, tornando-se quase indestrutíveis por breves momentos.</li>
      <li>🌪️ <strong>Controle Ambiental:</strong> alteram temperatura e atmosfera de uma área para desequilibrar adversários e criar vantagem estratégica.</li>
    </ul>

    <h4>🏛 Cultura e Tradições</h4>
    <ul>
      <li>💪 Valorizam força, coragem e audácia acima de qualquer outra virtude.</li>
      <li>🔥 Treino intenso: cada membro prova resistência ao calor extremo e deve dominar o fogo como extensão do corpo e da mente.</li>
      <li>⚡ <strong>Ritual de Iniciação:</strong> sobrevivência a um “Inferno Controlado”, onde apenas os mais fortes emergem vivos.</li>
      <li>🔥 Filosofia: “A chama decide quem merece viver; a destruição revela o verdadeiro poder.”</li>
    </ul>

    <h4>🌌 Reputação na Oblivionis</h4>
    <p>Extremamente respeitados e temidos dentro da organização, o Ignivar age como exterminador e instrumento de terror. 
    Seus ataques são rápidos, brutais e precisos, mostrando que a força do fogo determina a hierarquia. 
    Embora praticamente desconhecidos para o universo externo, dentro da Oblivionis o Ignivar é um dos clãs mais influentes, com Tharion garantindo que qualquer falha seja punida com fogo literal.</p>
  `
  }
];

const clansContainer = document.getElementById('clans-container');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.getElementById('close');

const orgSections = {};

const orgLogos = {
  Ordo_Vexillum: "/images/Ordo Vexillum_Logo.png",
  Oblivionis: "/images/Oblivionis_Logo.png"
};

clansData.forEach(clan => {
  if (!orgSections[clan.organization]) {
    const section = document.createElement('div');
    section.classList.add('org-section');

    const divider = document.createElement('div');
    divider.classList.add('divider');
    divider.innerHTML = `<img src="${orgLogos[clan.organization]}" alt="${clan.organization}">`;
    section.appendChild(divider);

    const clansGrid = document.createElement('div');
    clansGrid.classList.add('clans-grid');
    section.appendChild(clansGrid);

    clansContainer.appendChild(section);
    orgSections[clan.organization] = clansGrid;
  }

  const clanDiv = document.createElement('div');
  clanDiv.classList.add('clan');
  clanDiv.innerHTML = `
    <img src="${clan.img}" alt="${clan.name}">
    <div class="nome">${clan.name}</div>
  `;

  clanDiv.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = clan.img;
    modalName.textContent = clan.name;
    modalInfo.innerHTML = clan.info;
  });

  orgSections[clan.organization].appendChild(clanDiv);
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


