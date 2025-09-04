const timelineData = [
  {
    year: "🌀 ???",
    title: "Nascimento dos Nexarys",
    desc: "Seres sem clãs, milagrosos e devastadores, considerados deuses por todos os que conhecem o seu poder.",
    full: "Diz-se que surgiram de um cataclismo mágico ou foram forjados por forças primordiais, mas ninguém conhece a verdade completa. Cada aparição dos Nexarys é envolta em temor e reverência, e a sua força e presença desafiam a própria realidade, tornando-os figuras de lenda e pavor. Ao longo dos séculos, histórias sobre os seus feitos e destruições espalharam-se por mundos e clãs, consolidando-os como deuses capazes de moldar o destino do universo"
  },
  {
    year: "🔥 0",
    title: "O Guerreiro e o Olhar Enfurecido",
    desc: "Um homem de olhos vermelhos derrotou sozinho uma criatura colossal, dando início a uma nova contagem do tempo.",
    full: "Num planeta esquecido, a besta espalhava destruição e ninguém ousava enfrentá-la. Este homem surgiu com força e precisão sobrenaturais, derrubando a criatura sozinho e desaparecendo sem deixar rasto. O seu ato foi tão marcante que os cronologistas definiram este momento como Ano 0, o início de uma nova era no universo. O seu olhar enfurecido tornou-se símbolo de poder absoluto, inspiração para guerreiros e Nexarys, e marco do começo de uma contagem do tempo que moldaria gerações inteiras."
  },
  {
    year: "🌌 1997",
    title: "A Criação da Ordo Vexillum",
    desc: "O Nexary Sevrin Veynar surge, enfrentando os três Augures e mudando para sempre o destino da Ordo Vexillum",
   full: `
        <div class="full-content">
        <h3>Os Três Augures</h3>
        <p>Depois da era das lendas, quando os Nexarys ainda vagueavam pelo universo e os clãs guerreiros lutavam pela sobrevivência e conquista, surgiram:</p>
        <p><strong>Harruk Dravoryn</strong> – mestre da força e disciplina</p>
        <p><strong>Lysand Myrion</strong> – estratega e político de génio</p>
        <p><strong>Ardyn Kaelum</strong> – capaz de ler as correntes invisíveis da aura</p>

        <h3>O Nexary Surge</h3>
        <p>Então surgiu <strong>Sevrin Veynar</strong>, um Nexary sem clã, cujo poder bruto e insondável alterava o equilíbrio. Com um só gesto podia desarmar campeões e inspirar medo mesmo nos guerreiros mais experientes.</p>

        <h3>A Batalha Final</h3>
        <p>No campo de batalha desolado, Harruk, Lysand e Ardyn avançaram juntos, mas Sevrin dominava cada movimento. A força de Harruk era refletida contra ele, os golpes precisos de Lysand transformados em ondas de choque, e a energia de Ardyn absorvida e distorcida. Cada ataque mostrava a supremacia do Nexary.</p>

        <h3>O Reconhecimento</h3>
        <p>No fim, Ardyn aproximou-se de Sevrin num gesto silencioso de reconhecimento. A batalha terminou sem humilhação, mas a mensagem era clara: <strong>Sevrin seria o Líder Supremo da Ordo Vexillum</strong>, um poder capaz de redefinir o futuro do universo.</p>
        </div>
    `
  }
];

const timeline = document.getElementById("timeline");

timelineData.forEach((item, index) => {
  const side = index % 2 === 0 ? "left" : "right";
  const div = document.createElement("div");
  div.classList.add("timeline-item", side);

  div.innerHTML = `
    <div class="content">
      <h2>${item.year}</h2>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <button class="read-more">Ler mais...</button>
      <div class="extra-text hidden">${item.full}</div>
    </div>
  `;

  timeline.appendChild(div);
});

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('hidden');
    btn.textContent = extra.classList.contains('hidden') ? "Ler mais..." : "Mostrar menos";
  });
});
