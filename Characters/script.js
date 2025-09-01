// Array com todos os personagens e suas informações detalhadas
const personagensData = [
  {
    name: "Diogo Kaelum",
    image: "/images/Diogo Kaelum.png",
    info: `
      <p><strong>Idade:</strong> 9 anos (início do da história)</p>
      <p><strong>Clã:</strong> Kaelum</p>
      <p><strong>Poderes:</strong> Inicialmente incapaz de controlar o Pulso Kaelum; <br>Posteriormente, aprende a ocultar a sua aura através do treino secreto com Orin Veythar.</p>
      <p><strong>Descrição:</strong></p>
      <p>Diogo é um jovem determinado e curioso, filho de Deymar Kaelum e neto de Ardyn Kaelum, líder respeitado do Clã Kaelum. Apesar de nascer em uma família poderosa e cercado pelos maiores guerreiros do Ordo Vexillum, Diogo enfrenta dificuldades no controle do Pulso, tornando-o alvo da frustração do pai e do olhar crítico da sociedade do clã.</p>
      <p>Desde cedo, Diogo demonstra uma personalidade resiliente, persistindo em treinar mesmo quando todos os outros à sua idade já dominam os seus poderes. A sua coragem e inteligência silenciosa destacam-se, e ele não se deixa abater pelos desafios, procurando soluções alternativas e caminhos secretos para evoluir.</p>
      <p>Durante a sua jornada, Diogo encontra aliados valiosos, como Kaedra Dravoryn, amiga de infância, e Orin Veythar, que ensina-lhe técnicas proibidas para ocultar e controlar sua aura. A sua história é marcada pelo conflito interno, pela raiva e pela vontade de provar que pode superar as limitações impostas, tornando-se um guerreiro capaz de enfrentar qualquer adversário.</p>
      <p><strong>Personalidade:</strong> Determinado, inteligente, resiliente e curioso, com uma profunda necessidade de se provar perante a família e do Ordo Vexillum. Apesar de jovem, demonstra grande maturidade emocional em situações de perigo e conflito.</p>
      <p><strong>Objetivo:</strong> Dominar o Pulso Kaelum e tornar-se forte o suficiente para proteger aqueles que ama, enquanto navega pelas complexas intrigas e desafios do Ordo Vexillum.</p>
    `
  },
  {
    name: "Deymar Kaelum",
    image: "/images/Deymar Kaelum.png",
    info: `
    <p><strong>Idade:</strong> 35 anos</p>
    <p><strong>Clã:</strong> Kaelum</p>
    <p><strong>Poderes:</strong> Mestre do Pulso Kaelum, capaz de acelerar o batimento vital, desestabilizar o ritmo de adversários e sincronizar sua energia com o ambiente para combate.</p>
    <p><strong>Descrição:</strong></p>
    <p>Deymar Kaelum é o filho de Ardyn Kaelum e pai de Diogo Kaelum, representante do Clã Kaelum no Triunvirato dos Grandes Clãs do Ordo Vexillum. Reconhecido pelo seu talento militar e estratégia implacável, Deymar é rigoroso, frio e ambicioso, sempre colocando o poder do clã acima de tudo.</p>
    <p>A sua personalidade é marcada por disciplina extrema e exigência, tanto consigo próprio quanto com aqueles ao seu redor. Esta postura dura leva-o a pressionar Diogo a todo o momento, na esperança de moldar o filho no futuro líder do clã, mesmo que isso signifique recorrer a métodos questionáveis e secretos.</p>
    <p><strong>Personalidade:</strong> Frio, estratégico, ambicioso e autoritário. Deymar não demonstra facilmente emoções, e a sua determinação em controlar o destino do clã e de sua família é absoluta. Apesar disso, é capaz de reconhecer talento e potencial, mesmo que escondido, e valoriza a força e a disciplina acima de tudo.</p>
    <p><strong>Objetivo:</strong> Garantir a supremacia do Clã Kaelum e do Ordo Vexillum, moldando Diogo para se tornar um guerreiro poderoso capaz de enfrentar qualquer desafio. Está disposto a ultrapassar limites éticos para alcançar este objetivo, mesmo que isso coloque em risco a relação familiar.</p>
    `
  },
  {
    name: "Serenya Kaelum",
    image: "/images/Serenya Kaelum.png",
    info: `
    <p><strong>Idade:</strong> 34 anos</p>
    <p><strong>Clã:</strong> Kaelum</p>
    <p><strong>Poderes:</strong> Domínio avançado do Pulso Kaelum, capacidade de harmonizar e sentir o fluxo de energia ao redor; <br> Habilidades de orientação e apoio em combate, sem ataques ofensivos extremos.</p>
    
    <p><strong>Descrição:</strong></p>
    <p>Serenya é co-líder do Clã Kaelum e mãe de Diogo Kaelum. Respeitada e admirada dentro do clã, combina autoridade e empatia, mantendo o equilíbrio entre disciplina e cuidado. Atua como mentora para os jovens guerreiros, incentivando-os a superar dificuldades e desenvolver o seu potencial sem sacrificar a harmonia do clã.</p>
    <p>A sua presença transmite confiança e serenidade, sendo capaz de orientar até os guerreiros mais rebeldes com paciência e firmeza. Durante a história, desempenha um papel crucial no apoio a Diogo, proporcionando encorajamento e orientação enquanto ele enfrenta desafios do Pulso Kaelum e pressões do clã.</p>
    
    <p><strong>Personalidade:</strong> Serena, empática, estratégica e determinada. Demonstra grande maturidade emocional e habilidade em liderança, combinando rigor com cuidado.</p>
    
    <p><strong>Objetivo:</strong> Orientar e proteger os membros do Clã Kaelum, ajudando-os a dominar o Pulso e a tornar-se guerreiros equilibrados e preparados para enfrentar os desafios do Ordo Vexillum.</p>
    `
  },
  {
    name: "Lysera Kaelum",
    image: "/images/Lysera Kaelum.png",
    info: `
    <p><strong>Idade:</strong> 11 anos</p>
    <p><strong>Clã:</strong> Kaelum</p>
    <p><strong>Poderes:</strong> Controle do Pulso Kaelum em nível inicial <br> Habilidades defensivas e de percepção, com foco em harmonia e sincronização do próprio ritmo com o ambiente; <br> Completou o Rito da Máscara aos 10 anos, tornando-se uma jovem capacitada dentro do clã.</p>
    
    <p><strong>Descrição:</strong></p>
    <p>Lysera é irmã de Diogo Kaelum e filha de Deymar e Serenya Kaelum. Apesar da pouca idade, demonstra grande maturidade e determinação, tendo superado com sucesso o Rito da Máscara aos 10 anos. É dedicada ao treino e ao desenvolvimento das suas habilidades, mantendo forte ligação familiar, especialmente com a mãe e o irmão mais velho, embora às vezes se frustre com a falta de progresso de Diogo no controle do Pulso.</p>
    <p>Combina disciplina, inteligência e curiosidade, mostrando personalidade firme e focada. No clã, é vista como promessa futura e jovem exemplar, determinada a honrar o legado Kaelum.</p>
    
    <p><strong>Personalidade:</strong> Inteligente, determinada, disciplinada e protetora com a família; <Br> Demonstra maturidade emocional acima da sua idade e forte senso de responsabilidade.</p>
    
    <p><strong>Objetivo:</strong> Tornar-se uma guerreira completa do Clã Kaelum, dominar o Pulso e apoiar a família, especialmente guiando o irmão Diogo no seu crescimento e evolução dentro do clã.</p>
    `
  },
  {
    name: "Kaelith Kaelum",
    image: "/images/Kaelith Kaelum.png",
    info: `
    <p><strong>Idade:</strong> 14 anos</p>
    <p><strong>Clã:</strong> Kaelum</p>
    <p><strong>Poderes:</strong> Controle inicial do Pulso Kaelum, capacidade de manipular o próprio ritmo vital para aumentar força e velocidade em combate; <Br> Habilidades defensivas básicas e percepção de energia.</p>
    
    <p><strong>Descrição:</strong></p>
    <p>Kaelith é o irmão mais velho de Diogo Kaelum e filho de Deymar e Serenya Kaelum. Desde cedo, demonstrou grande talento no domínio do Pulso Kaelum, destacando-se como jovem guerreiro promissor dentro do clã. É disciplinado, determinado e extremamente competitivo, servindo muitas vezes como modelo para os mais novos, incluindo o irmão Diogo.</p>
    <p>Apesar da sua força e habilidades, mantém um lado protetor em relação à família, especialmente à irmã Lysera e ao irmão mais novo, embora às vezes se frustre com a falta de progresso de Diogo. Sua personalidade combina confiança e responsabilidade, tornando-o uma figura central na dinâmica familiar e no futuro do Clã Kaelum.</p>
    
    <p><strong>Personalidade:</strong> Determinado, disciplinado, competitivo e protetor com a família; <Br> Demonstra maturidade emocional e senso de dever em relação ao clã.</p>
    
    <p><strong>Objetivo:</strong> Tornar-se um guerreiro completo do Clã Kaelum, aperfeiçoar o domínio do Pulso e servir como exemplo e protetor da família, mantendo o legado do clã dentro do Ordo Vexillum.</p>
    `
  },
  {
    name: "Kaedra Dravoryn",
    image: "/images/Kaedra Dravoryn.png",
    info: `
        <p><strong>Idade:</strong> 9 anos</p>
        <p><strong>Clã:</strong> Dravoryn</p>
        <p><strong>Poderes:</strong> Capacidade de Metamorfose Parcial, podendo transformar partes do corpo, como braços em lâminas ósseas, endurecer a pele como metal ou potenciar os músculos para força explosiva.</p>
        <p><strong>Descrição:</strong></p>
        <p>Kaedra é a filha de Rothgar Dravoryn, representante do Clã Dravoryn, e amiga de infância de Diogo Kaelum. Cresceu num ambiente rigoroso de treino intenso, como é típico dos Dravoryn, aprendendo desde cedo a disciplina, a estratégia em combate e a arte de transformar o corpo em arma viva.</p>
        <p>Inteligente e perspicaz, Kaedra combina talento natural com determinação, mostrando habilidades impressionantes apesar da sua idade. A sua lealdade aos amigos e a coragem diante do perigo destacam-na, sendo uma aliada valiosa para Diogo, especialmente na sua luta para superar os próprios limites.</p>
        <p><strong>Personalidade:</strong> Corajosa, perspicaz e leal. Embora seja competitiva e determinada, também demonstra compaixão e cuidado pelos que estão próximos dela. A sua inteligência estratégica permite-lhe analisar situações de combate com calma e precisão, mesmo sob pressão.</p>
        <p><strong>Objetivo:</strong> Aperfeiçoar os seus poderes de Dravoryn, proteger aqueles que lhe são caros e apoiar Diogo na sua jornada, ajudando-o a enfrentar os desafios do universo do Ordo Vexillum.</p>
    `
  },
  {
  name: "Harruk Dravoryn",
  image: "/images/Harruk Dravoryn.png",
  info: `
    <p><strong>Idade:</strong> 52 anos</p>
    <p><strong>Clã:</strong> Dravoryn</p>
    <p><strong>Poderes:</strong> Metamorfose Parcial, pode transformar partes do corpo em armas naturais (como lâminas de osso) ou endurecê-las; <Br> Regeneração Limitada para curar ferimentos médios; Predador Alfa, permitindo adaptação progressiva ao estilo de combate do inimigo.</p>

    <p><strong>Descrição:</strong></p>
    <p>Harruk é um dos três Augares originais do Ordo Vexillum e líder do Clã Dravoryn, conhecido por sua abordagem militarista e estratégica. Guerreador experiente, combina força bruta, adaptabilidade e disciplina em combate, sendo capaz de liderar batalhas complexas com eficiência e precisão.</p>
    <p>Com presença intimidadora e respeito incontestável entre os membros do clã, Harruk valoriza lealdade e coragem. É mentor para os jovens Dravoryn e mantém padrões elevados para todos, guiando-os para superar limites e se tornarem guerreiros completos.</p>

    <p><strong>Personalidade:</strong> Rigoroso, estratégico, disciplinado e protetor; <Br> Combina dureza com senso de dever e lealdade inabalável ao clã e à Ordo Vexillum.</p>
    
    <p><strong>Objetivo:</strong> Fortalecer o Clã Dravoryn e garantir que seus membros sejam guerreiros preparados para qualquer batalha, enquanto mantém a supremacia e a disciplina militar dentro da Ordo Vexillum.</p>
  `
  },
  {
  name: "Ardyn Kaelum",
  image: "/images/Ardyn Kaelum.png",
  info: `
    <p><strong>Idade:</strong> 74 anos</p>
    <p><strong>Clã:</strong> Kaelum</p>
    <p><strong>Poderes:</strong> Pulso Interno, Descompasso, Ressonância e Evolução Avançada, domínio completo do Pulso Kaelum, capaz de aumentar temporariamente sua força e velocidade, desestabilizar inimigos, sentir vibrações e presenças ocultas, e emitir ondas pulsantes que podem curar aliados ou danificar adversários.</p>

    <p><strong>Descrição:</strong></p>
    <p>Ardyn Kaelum é o patriarca do Clã Kaelum e um dos Augares originais do Ordo Vexillum, reconhecido como um dos guerreiros mais poderosos de todos os tempos. Com presença imponente e respeitada por todos, combina experiência, sabedoria e força, sendo capaz de comandar batalhas e tomar decisões estratégicas com maestria.</p>
    <p>É mentor e guia para toda a família Kaelum, transmitindo ensinamentos sobre o controle do Pulso e a importância do equilíbrio entre força e responsabilidade. Apesar de seu poder, demonstra calma e paciência, valorizando a disciplina e o crescimento gradual de seus discípulos.</p>
    <p>É pai de Deymar e avô de Diogo, exercendo grande influência sobre o destino do clã e do Ordo Vexillum como um todo.</p>
    <p><strong>Personalidade:</strong> Sábio, estratégico, paciente e poderoso; combina autoridade natural com empatia e visão de futuro, sendo um líder admirado e temido.</p>
    
    <p><strong>Objetivo:</strong> Preservar o legado do Clã Kaelum, orientar a próxima geração de guerreiros e manter o equilíbrio e a força do Ordo Vexillum através do poder do Pulso Kaelum.</p>
  `
  },
  {
  name: "Lysand Myrion",
  image: "/images/Lysand Myrion.png",
  info: `
    <p><strong>Idade:</strong> 48 anos</p>
    <p><strong>Clã:</strong> Myrion</p>
    <p><strong>Poderes:</strong> Reflexos Aguçados, Golpes Precisos e Agilidade Elevada, é capaz de reagir rapidamente a ataques de adversários mais fortes, executar golpes em pontos vitais e movimentar-se com velocidade e precisão excepcionais.</p>

    <p><strong>Descrição:</strong></p>
    <p>Lysand é o único membro do Clã Myrion a alcançar um posto de alto nível, sendo um dos 3 Augures, destacando-se por sua habilidade incomparável dentro do Ordo Vexillum. Apesar de vir de um clã secundário, a sua agilidade, precisão e inteligência tática permitem que ele rivalize com os guerreiros dos maiores clãs.</p>
    <p>Calmo e metódico, Lysand possui a capacidade de tomar decisões ousadas quando necessário, tornando-o um estratega valioso. Sempre vestindo sua máscara amarela, símbolo de velocidade e agilidade, ele mantém uma presença serena, mas intimidadora, sendo respeitado e temido por sua destreza em combate.</p>

    <p><strong>Personalidade:</strong> Calmo, metódico, estratégico e surpreendentemente ousado quando a situação exige.</p>
    
    <p><strong>Objetivo:</strong> Provar que habilidade e inteligência podem superar força bruta, proteger o seu clã e contribuir de forma decisiva para a liderança estratégica do Ordo Vexillum.</p>
  `
  },
  {
  name: "Rothgar Dravoryn",
  image: "/images/Rothgar Dravoryn.png",
  info: `
    <p><strong>Idade:</strong> 46 anos</p>
    <p><strong>Clã:</strong> Dravoryn</p>
    <p><strong>Poderes:</strong> Metamorfose Parcial, braço esquerdo permanentemente transformado em lâmina óssea; <Br> Força, agilidade e resistência acima da média; <Br> Predador Alfa, permitindo adaptação progressiva ao estilo de combate do inimigo.</p>

    <p><strong>Descrição:</strong></p>
    <p>Rothgar é o representante do Clã Dravoryn no conselho da Ordo Vexillum e um guerreiro colossal, com o corpo coberto de cicatrizes que refletem anos de batalhas intensas. Conhecido pela sua destreza física e força impressionante, combina disciplina, experiência e astúcia, sendo capaz de enfrentar adversários poderosos com inteligência tática e habilidade marcial.</p>
    <p>Além de sua presença intimidadora, Rothgar é leal à sua família e ao clã, servindo como mentor para os jovens Dravoryn e transmitindo valores de coragem, adaptabilidade e honra. A sua postura firme e confiável o torna um aliado essencial nas decisões e conflitos do Ordo Vexillum.</p>

    <p><strong>Personalidade:</strong> Estratégico, disciplinado, protetor e determinado; <Br> Respeitado por sua experiência, força e senso de justiça dentro do clã e da Ordo Vexillum.</p>
    
    <p><strong>Objetivo:</strong> Garantir a supremacia do Clã Dravoryn, orientar a próxima geração de guerreiros e contribuir para as decisões estratégicas do Ordo Vexillum, mantendo a força e honra do clã.</p>
  `
  },
  {
  name: "Draknor Dravoryn",
  image: "/images/Draknor Dravoryn.png",
  info: `
    <p><strong>Idade:</strong> 60 anos</p>
    <p><strong>Clã:</strong> Dravoryn</p>
    <p><strong>Poderes:</strong> Força bruta incomparável, resistência extraordinária e habilidades de combate pesado; <Br> Capaz de liderar unidades de ataque devastadoras. Seu corpo sofreu mutações exageradas que o tornam fisicamente deformado, mas ainda assim poderoso e intimidador.</p>

    <p><strong>Descrição:</strong></p>
    <p>Draknor é um dos guerreiros mais temidos do Clã Dravoryn, conhecido tanto por sua força bruta quanto pelo seu corpo deformado por mutações que amplificam ainda mais o seu poder físico. Apesar das alterações em sua forma, mantém uma disciplina rigorosa e serve como comandante das unidades de ataque pesado do clã, liderando batalhas com ferocidade e estratégia.</p>
    <p>Sua presença intimidadora inspira respeito e temor, tornando-o um guerreiro essencial na supremacia do Clã Dravoryn dentro do Ordo Vexillum. Apesar da aparência monstruosa, Draknor possui inteligência tática e experiência, combinando brutalidade com liderança militar.</p>

    <p><strong>Personalidade:</strong> Determinado, estratégico, implacável e disciplinado; respeitado por sua força e liderança, mesmo que sua aparência cause medo.</p>
    
    <p><strong>Objetivo:</strong> Comandar unidades de ataque pesado, proteger a supremacia do Clã Dravoryn e assegurar o sucesso das operações do Ordo Vexillum.</p>
  `
  },
  {
  name: "Maelith Veythar",
  image: "/images/Maelith Veythar.png",
  info: `
    <p><strong>Idade:</strong> 41 anos</p>
    <p><strong>Clã:</strong> Veythar</p>
    <p><strong>Poderes:</strong> Mestre absoluto em ocultamento de aura; especialista em furtividade e manipulação estratégica, capaz de permanecer invisível aos sentidos dos adversários. Nenhum o derrotou em duelos individuais, embora nunca tenha demonstrado todo o seu poder em batalha “séria”.</p>

    <p><strong>Descrição:</strong></p>
    <p>Maelith é o atual líder do Clã Veythar, famoso por sua habilidade incomparável de ocultar a sua presença e manipular a energia ao redor sem ser detectado. A sua reputação como invencível em combates individuais é reforçada pelo mistério que o cerca: raramente mostra sua força real, tornando cada encontro imprevisível e perigoso.</p>
    <p>Inteligente, calculista e estrategista nato, Maelith valoriza a paciência e a discrição, preferindo agir nas sombras e controlar eventos à distância. Mesmo dentro do Ordo Vexillum, poucos ousam confrontá-lo diretamente, sabendo que sua habilidade em furtividade e manipulação de aura é quase absoluta.</p>

    <p><strong>Personalidade:</strong> Calmo, misterioso, estratégico e cauteloso; mantém sempre a iniciativa e observa cada detalhe antes de agir, evitando confrontos desnecessários.</p>
    
    <p><strong>Objetivo:</strong> Preservar a supremacia do Clã Veythar, controlar operações estratégicas do Ordo Vexillum e demonstrar poder através da inteligência e da manipulação, em vez de confrontos diretos.</p>
  `
  },
  {
  name: "Orin “O Cego”",
  image: "/images/Orin O Cego.png",
  info: `
    <p><strong>Idade:</strong> 53 anos</p>
    <p><strong>Clã:</strong> Veythar</p>
    <p><strong>Poderes:</strong> Criador de ilusões táteis, mesmo sem visão, consegue manipular a percepção dos sentidos alheios, criando ilusões impossíveis de distinguir da realidade. Mestre em furtividade, treino e estratégia, é mentor de Diogo Kaelum no controlo da aura.</p>

    <p><strong>Descrição:</strong></p>
    <p>Orin, conhecido como “O Cego”, perdeu a visão durante um duelo intenso, mas em troca adquiriu uma habilidade única: criar ilusões táteis realistas, capazes de enganar completamente adversários. A sua experiência e inteligência fazem dele um mentor excecional, capaz de guiar Diogo Kaelum em treinos secretos e técnicas proibidas.</p>
    <p>Calmo, paciente e profundamente perceptivo, Orin observa o mundo através de uma sensibilidade aguçada à aura e aos fluxos de energia. Embora a sua aparência possa parecer frágil ou limitada pela perda da visão, a sua presença impõe respeito, e a sua habilidade em manipular o ambiente e enganar inimigos é temida por muitos.</p>

    <p><strong>Personalidade:</strong> Paciente, sábio, estratégico e perceptivo; guia os seus discípulos com firmeza e gentileza, mas nunca subestima a gravidade do treino.</p>
    
    <p><strong>Objetivo:</strong> Treinar Diogo Kaelum no controlo da aura e em técnicas de ocultamento, preparar a próxima geração para enfrentar os desafios do Ordo Vexillum e preservar os segredos do Clã Veythar.</p>
  `
  },
  {
  name: "Veyra Veythar",
  image: "/images/Veyra Veythar.png",
  info: `
    <p><strong>Idade:</strong> 15 anos</p>
    <p><strong>Clã:</strong> Veythar</p>
    <p><strong>Poderes:</strong> Mestre em ilusões, consegue criar enganos visuais e tácteis que confundem até guerreiros veteranos, usando a manipulação de aura para se esconder.</p>

    <p><strong>Descrição:</strong></p>
    <p>Veyra é filha de Maelith Veythar e já demonstra ser um prodígio dentro do Clã Veythar. Apesar da juventude, a sua habilidade em criar ilusões complexas e enganar até guerreiros experientes é notável. Treinada desde cedo para dominar a manipulação de aura e ocultamento, Veyra combina inteligência, criatividade e precisão em combate, tornando-se uma força emergente no Ordo Vexillum.</p>
    <p>Com uma personalidade curiosa, perspicaz e determinada, procura sempre desafiar os seus limites, impressionando aliados e desafiando inimigos com a sua sagacidade. Veyra é uma jovem que, apesar da idade, carrega o peso e a responsabilidade de um futuro líder do seu clã.</p>

    <p><strong>Personalidade:</strong> Inteligente, astuta, perspicaz e determinada; gosta de testar os limites dos outros e de si própria, sempre buscando superar-se.</p>
    
    <p><strong>Objetivo:</strong> Tornar-se uma mestre em ilusões capaz de rivalizar com qualquer guerreiro veterano e proteger os interesses do Clã Veythar dentro do Ordo Vexillum.</p>
  `
  }
];

// Seleciona o container do grid e os elementos do modal
const gridContainer = document.querySelector('.grid-container');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalImgContainer = document.querySelector('.modal-left');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const modalText = document.querySelector('.modal-right');
const closeBtn = document.getElementById('close');

// Função para gerar os personagens no grid
function gerarPersonagens() {
  personagensData.forEach(p => {
    const div = document.createElement('div');
    div.classList.add('personagem');
    div.dataset.name = p.name;
    div.dataset.info = p.info;

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="nome">${p.name}</div>
    `;

    div.addEventListener('click', () => {
      abrirModal(p);
    });

    gridContainer.appendChild(div);
  });
}

// Função para abrir modal com animação
function abrirModal(personagem) {
  modal.style.display = 'flex';
  modalImg.src = personagem.image;
  modalName.textContent = personagem.name;
  modalInfo.innerHTML = personagem.info;

  // Reset animações
  modalContent.classList.remove('show');
  modalImgContainer.classList.remove('show');
  modalText.classList.remove('show');

  // Forçar reflow
  void modalContent.offsetWidth;

  // Adiciona classes para animação
  modalContent.classList.add('show');
  modalImgContainer.classList.add('show');
  modalText.classList.add('show');
}

// Fechar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

gerarPersonagens();
