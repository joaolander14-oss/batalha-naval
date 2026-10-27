# Changelog

## v2.1.0 — Campo de testes, nuclear com cogumelo, ilhas destrutíveis e novos modos
**Míssil balístico nuclear (buff)**
- Raio **260 → 380**, dano **40 → 60**, recarga **90 s → 70 s**, atordoamento **8 → 12 s**. Agora também **arremessa os navios** para longe, incendeia 75% das peças atingidas e derruba drones no raio.
- **Animação do cogumelo atômico** (bola de fogo, haste, chapéu com brilho incandescente, anel de condensação, poeira e ondas de choque) que dura cerca de 13 s.
**Ilhas destrutíveis**
- **Só mísseis balísticos destroem ilhas.** Cada ilha tem vida proporcional ao tamanho: os balísticos abrem crateras e escurecem a ilha até ela desabar; **o nuclear vaporiza ilhas inteiras** no raio. O MIRV fere a ilha com as 6 ogivas juntas. Tiros, torpedos, mísseis de cruzeiro e morteiros continuam parando na ilha sem machucá-la. A ilha some do mapa e do minimapa e deixa uma mancha escura na água.
**4 modos de partida novos** (contra bots, com aliados; online fica para uma próxima versão)
- **Ataque ao Porto:** cada time tem um porto com vida e torres de defesa. Destrua o porto inimigo: tiros comuns causam pouco dano, explosões bem mais e **balísticos arrasam**. Navios do dono se reparam dentro do porto. Metade dos bots ataca e metade defende.
- **Capturar a Bandeira:** roube a bandeira do porto inimigo e leve ao seu porto (a sua precisa estar em casa). Quem carrega fica 15% mais lento; ao afundar a bandeira cai e volta sozinha depois de 20 s, ou na hora se um aliado encostar.
- **Defesa do Porto:** ondas de bots atacam o seu porto; os aliados protegem. Vença todas as ondas.
- **Corrida de Suprimentos:** caixas aparecem pelo mar (dourada vale 3, verde repara o navio). Primeiro time à meta vence.
**Mais personalização dos modos** (janela 🤖 Bots → Modo da partida)
- Para todos: **duração** (sem limite a 30 min), **reaparecimento** (3 a 20 s), **tamanho do mapa** (pequeno, médio, grande), **névoa de guerra** e **fogo amigo**.
- Por modo: pontos para vencer e **número de zonas (1 a 5)** no Controle de Zona, vidas do cargueiro no Comboio, **vida dos portos e torres** (0 a 6) nos modos de porto, capturas para vencer, número de ondas, caixas simultâneas e pontos de suprimentos.
**Campo de testes**
- Novo modo **🎯 Campo de testes** (botão no estaleiro e na janela de Bots): mar aberto, sem névoa e sem fim de partida, para testar armas e contramedidas. Ignora o orçamento do estaleiro.
- **Alvos parados** que não atiram e não se movem (nem empurrados): 9 alvos de teste (leve, comum, blindado, com escudos, com defesas pontuais, com todas as contramedidas, furtivo, com motores para mísseis térmicos e submarino imerso) mais qualquer modelo de bot e o clone do seu navio. Defesas dos alvos (defesa pontual, flares, chaff, escudo, fumaça…) funcionam normalmente.
- Painel (tecla **T**): escolher o alvo, a distância (150–1500) e a posição (proa, lado ou popa virada para você); **+1 alvo** na direção do cursor, **+5 em fila**, reconstruir alvos, remover todos, reparar o seu navio e opções de reconstruir ao afundar e de deixar os alvos sempre detectados (desligue para testar sensores e furtividade).
- **Medidor de dano**: dano total causado, DPS dos últimos 5 s e pico (conta vida do casco, das peças e escudo). Se o seu navio afundar, ele renasce sozinho no centro.

## v2.0.0 — morteiros, aletas, sensores, avarias, apoio e contramedidas
**11 morteiros novos** (todos giram, miram no cursor e passam por cima de tudo)
- **Leve**, **Duplo** (2 granadas), **de Rajada** (4 granadas espalhadas), **de Fogo Rápido**, **de Longo Alcance** (1400), **de Cerco** (dano enorme em ponto), **Incendiário** (napalm), **de Fragmentação** (5 submunições), **Eletromagnético** (zera escudo, atordoa 7 s), **de Fumaça** (nuvem de 125 de raio por 17 s) e **Lança-minas** (a granada vira uma mina invisível). A IA não usa fumaça nem minas.
**14 aletas novas** (família de laterais com versão esquerda/direita automática, traseiras e de proa)
- Laterais: **Larga** (vale por 2), **Blindada**, **Hidrofólio** (+4% de velocidade), **Quilha Estabilizadora** (anti-derrapagem), **Furtiva** (conta na cobertura furtiva), **Hidroplano de Mergulho** (submarinos) e **a Jato**.
- Traseiras: **Leme Duplo**, **Leme Blindado**, **Leme Vetorial** e **Skeg de Popa**.
- **Aletas de proa** (novidade): **Proa Hidrodinâmica** (+5% de velocidade), **Domo de Sonar de Proa** (sonar passivo embutido) e **Defletor de Proa** (blindagem frontal). O estaleiro escolhe sozinho o lado certo e o espelho continua funcionando.
**Sensores** — Radar de Longo Alcance (+520), Mastro de Vigia (+140, até 3), Sonar Rebocado (1250), Sonar Ativo Compacto, **Sensor Infravermelho** (vê o calor dos motores e atravessa metade da furtividade), **Radar Antifurtivo** (nenhum navio fica abaixo de 45% de visibilidade), **Detector de Ameaças** (marca mísseis, torpedos e granadas inimigos mesmo na névoa), **Detector de Minas**, **Telêmetro Laser** (+10% de alcance e −25% de dispersão) e **Gerador Furtivo Compacto**.
**Controle de avarias** — Bomba Compacta e de Alta Vazão (valem as 3 melhores), Reparo Pesado, **Central de Reparos** (raio de 9 células), Extintor de Alta Capacidade, **Selante de Rombos**, **Câmara de Flutuação**, **Supressor de Explosão** (munição explode bem menos), **Cortador de Cabos** (contra o gancho), **Isolante de Choque** (atordoamento pela metade) e **Dissipador de Choque** (−12% de dano de explosão).
**Apoio** — Escudo Rápido e Escudo Pesado, Compressor de Motores (+8% de força), **Centro de Combate** (+25% nos bônus da tripulação), Oficina de Drones, Computador Balístico, **Esteira de Munição** (carregador melhor), **Diretor de Tiro** (computador de tiro melhor) e Estabilizador Giroscópico. Carregadores e computadores de tiro agora somam os dois melhores.
**Contramedidas** — **Defesa Pontual Rápida** (CIWS), **Defesa Pontual Longa**, **Laser de Defesa**, **Lançador de Chaff** (engana mísseis de radar), **Isca Antitorpedo** (engana torpedos guiados e acústicos), Bloqueador de Longo Alcance, **Interferidor de Torpedos**, **Gerador de Fumaça** (automático ao ser atingido), **Silenciador Acústico**, **Supressor Térmico** (mísseis térmicos curvam pior), **Cinto Desmagnetizador** (contra torpedos magnéticos e minas) e **Interferidor de Drones**.
**Mudanças de regra**
- Aletas agora têm valor próprio (aleta larga = 2 laterais) e podem somar velocidade, giro, aderência e furtividade; o painel de estatísticas mostra o valor.
- Online: o servidor aceita as novas ogivas de morteiro (fumaça e mina); a fumaça não revela quem atirou e permite assinatura menor para quem leva fumaça; o sensor infravermelho e o radar antifurtivo valem na névoa de guerra do anfitrião.
- Projetos antigos continuam funcionando sem alteração.

## v1.9.2 — armas nucleares só como balísticos
- **Removidos** os 7 mísseis de cruzeiro especiais da v1.9.1 (nuclear, fragmentação, perfurante, incendiário, EMP, supersônico e anti-radiação) e o **torpedo nuclear**. Projetos salvos que usavam peças removidas as perdem automaticamente (sem quebrar o jogo).
- **Novos mísseis balísticos** (marque no minimapa, lance com B): **Nuclear** (260 de raio, incendeia, atordoa, zera escudos e dá um clarão; recarga de 90 s), **MIRV** (6 ogivas em área), **Incendiário**, **EMP**, **Hipersônico** (chega em ~1 s) e **Perfurante** (dano enorme no ponto).
- Os torpedos novos continuam: mini, acústico, magnético e cacheiro. A regra "Permitir armas nucleares" da sala vale para o balístico nuclear.
- O **Cruzador Tático** agora usa mísseis de cruzeiro comuns e balísticos incendiário e EMP.

## v1.9.1 — mais mísseis, mais torpedos e otimização
**Mísseis de cruzeiro novos**
- **Nuclear:** ogiva de 230 de raio; incendeia tudo, atordoa a tripulação, zera escudos e cega a tela com um clarão. Lento (recarga de 60 s), a defesa pontual pode derrubá-lo.
- **Fragmentação** (5 submunições em área), **Perfurante** (fere as 2 peças seguintes), **Incendiário** (napalm), **EMP** (zera escudo e atordoa 7 s), **Supersônico** (a defesa pontual falha mais) e **Anti-radiação** (caça radar e sonar, mira no equipamento).
**Torpedos novos**
- **Mini-torpedos** (2 por salva), **Acústico** (trava no navio mais barulhento, até submarinos que você não vê), **Magnético** (explode sob o casco com rombo maior), **Cacheiro** (divide em 3 depois de 1 s) e **Nuclear submarino** (240 de raio, atinge submarinos).
- Novos modelos prontos: **Cruzador Tático** e **Submarino Acústico**.
**Online**
- Nova regra da sala: **Permitir armas nucleares** (o servidor recusa projetos e disparos nucleares quando proibido); as ogivas especiais são repassadas e validadas.
**Desempenho**
- Névoa de guerra desenhada em baixa resolução e ampliada (era o maior custo por quadro).
- Navios com casco e sombra em cache (refeitos só quando uma peça muda), ilhas em sprite, fundo do minimapa em cache.
- Colisão tiro × casco por grade numérica (sem montar texto por teste), partículas fora da tela descartadas, HUD atualizado a ~15 Hz e só quando o valor muda.
- Resultado no teste de estresse (11 navios, ilhas, drones): de ~11,3 ms para ~7 ms por quadro.

## v1.9.0 — mísseis, balísticos, drones, ilhas e novos modos
**Armas**
- **Mísseis de cruzeiro antinavio:** leve / médio / pesado × lock **radar**, **térmico**, **GPS** e **teleguiado** (12 modelos). O térmico mira no motor mais potente do alvo; o GPS vai às coordenadas do cursor; o teleguiado segue o cursor.
- **Mísseis balísticos** (pequeno, médio, grande): clique no **minimapa** para marcar a região e lance com **B** (ou o botão 🎯 no celular). Arco longo, imunes a defesa pontual e bloqueador; o inimigo recebe o alerta com contagem regressiva e a área de impacto.
- **Lançador de Flares:** isca os mísseis térmicos. Bloqueador e defesa pontual passam a ser agrupados em *Contramedidas*.
- **Metralhadoras agora atacam drones** (têm prioridade e antecipam o movimento).
- **5 drones novos:** Escolta (metralhadora), Bombardeiro, Torpedeiro, Enxame (3 mini-drones suicidas) e Radar AEW (visão 720).
- **5 placas de convés novas:** Pesada, Cerâmica, Titânio, Corta-fogo e Isolante Térmica.
- 3 modelos novos: **Fragata Lança-mísseis**, **Defesa Aérea** e **Cruzador Balístico**.

**Mapas**
- **Ilhas** invencíveis (poucas, normais ou muitas): navios colidem, tiros diretos e torpedos param, bots desviam; morteiros, balísticos e drones passam por cima.
- **7 ambientes:** mar aberto, arquipélago tropical, ártico, tempestade (chuva e raios), nevoeiro, noite e costa vulcânica, com efeitos na visão. Escolha no 🤖 Bots (campanha/offline) ou nas regras da sala (online); a semente é sorteada pelo anfitrião e todos veem o mesmo mapa.

**Modos de partida** (online e contra bots, com equipes)
- **Controle de Zona:** 3 zonas de captura; cada zona dominada rende 1 ponto por segundo. Primeiro a atingir a meta (ou quem lidera no fim do tempo) vence.
- **Comboio:** a equipe A escolta um cargueiro (só anda com escolta por perto) até o destino; a equipe B ataca. Se o cargueiro afundar, **renasce** no último ponto de controle (vidas configuráveis).
- Contra bots há aliados configuráveis e renascimento automático.

**Outros**
- Colisões levam em conta a massa dos navios (o mais pesado é empurrado menos).
- Código do navio (copiar/colar) agora é seguro para as novas peças (UTF-8).
- Servidor: valida mísseis/balísticos pelo projeto, repassa o alerta balístico a todos e limita drones a 750 de visão.

## v1.8.1 — correção
- **Corrigido:** no modo online sem servidor, o anfitrião não conseguia iniciar a partida quando havia outro jogador humano na sala (a função que esconde a tripulação inimiga não existia no navegador). Partidas só com bots já funcionavam.

## v1.8.0 — combate de perto, alagamento, fogo, drones e tripulação
- **Armas de corpo a corpo:** Espinhos, Serra Giratória, Aríete, Gancho de Abordagem (reduz a velocidade do alvo) e Bobina de Choque (atordoa peças).
- **Cascos e blindagens:** Casco Cerâmico, de Titânio, Compartimentado (vaza menos), Flutuante (aguenta mais água), Corta-fogo, e placas de convés (Aço e Reativa).
- **Alagamento:** o casco rompido deixa entrar água; ao encher o navio afunda, e a água o deixa mais lento. Novas peças: Bomba de Esgoto e Sistema Anti-Incêndio. Submarinos alagados não seguram a profundidade.
- **Fogo:** chance de incêndio ao atingir uma peça; as chamas causam dano, se espalham e podem detonar munição. Cascos corta-fogo resistem.
- **Drones (hangares):** Reconhecimento (visão extra), Ataque (bombas) e Suicida (explode no alvo). Podem ser derrubados por metralhadoras e defesa pontual; os bots também os usam. Novo preset **Porta-drones**, além de Abordador e Titã.
- **Tripulação:** nova camada no estaleiro com círculos invisíveis para o inimigo. Cada grupo dá um bônus (recarga, motores, reparo/vazamentos, incêndio, giro, sensores, abordagem) e o perde se a peça sob ele for danificada ou destruída.
- **Online:** água, fogo e drones são sincronizados; o servidor não envia a tripulação do projeto aos inimigos e valida os novos campos.
- Observação: a v1.7 foi os controles do anfitrião; os drones de reconhecimento também ampliam a névoa de guerra no online.

## v1.7.0 — controles do anfitrião
**No lobby (regras da sala)**
- **Jogadores máx.** (2–8), **tempo de reaparecimento** (1–15 s), **tamanho da arena** (pequena/média/grande), **névoa de guerra** liga/desliga e **fogo amigo** (equipes).
- **Peças proibidas:** submarinos, peças furtivas e armas guiadas. Navios e bots que violam as regras são recusados/removidos.
- **Trancar a sala** e **senha** (quem entra precisa digitar a senha).
- **Expulsar** e **banir** (por nome) jogadores; **mover jogadores/bots de equipe** (clique na etiqueta da equipe) e **balancear equipes**.
- **Preencher com bots** (modelos que cabem nas regras e no orçamento) e **remover todos os bots**.

**Durante a partida (botão 👑, ou Esc → Painel do anfitrião)**
- **Pausar/continuar** para todos (o tempo da partida não corre durante a pausa).
- **+5 min**, **encerrar a partida** e **anunciar** uma mensagem a todos.
- Ajustar **abates para vencer**, **tempo de reaparecimento** e **fogo amigo** ao vivo.
- **Expulsar/banir** jogadores e **remover bots** sem parar o jogo.

**Correção:** o servidor agora limita e valida todos esses comandos (só o anfitrião pode usá-los).

## v1.6.0
**Submarinos**
- 🚢 **Torre Submarina**: troque a ponte por ela e o navio vira submarino. **V** (ou o botão ⬇) mergulha/emerge.
- Submerso: some da visão normal e do radar (só sonar e colado a 110 detectam), **só leva torpedos, minas e cargas de profundidade** (tiros, morteiros e mísseis passam por cima) e só dispara torpedos e minas. Gasta **bateria** (60 s base, recarrega na superfície), vê menos longe (350) e perde 45% da força dos motores a diesel.
- Peças de submarino: **Periscópio** (visão submersa 650), **Tanque de Lastro** (mergulho mais rápido), **Bateria Extra**, **Lançador de Minas** (tecla **F**; minas invisíveis ao inimigo) e **Cargas de Profundidade** (contra submarinos).
- O sonar passivo ouve menos longe navios **silenciosos ou parados** (motor elétrico).
- 4 modelos novos: **Submarino**, **Submarino Minador**, **Caça-submarinos** e **Submarino Nuclear**. Os bots mergulham e emergem sozinhos.

**Mais peças**
- Motores: **Motor Elétrico** (silencioso, 100% submerso), **Turbina a Gás**, **Hidrojato** (ajuda a virar) e **Reator Nuclear** (bateria infinita).
- Torpedos: **Guiado** (curva até o alvo detectado; o Bloqueador atrapalha), **Pesado**, **Supercavitante** (muito rápido) e **Salva Tripla**.

**Bots configuráveis** (🤖 Bots)
- **Dificuldade** Fácil / Normal / Difícil / Mestre, **quantidade** na campanha, **onda inicial** e **quais modelos** podem aparecer (inclusive *Clone do meu navio*).
- **Escaramuça** offline: monte a batalha escolhendo quantos bots de cada modelo.
- **Bots no online**: o anfitrião adiciona/remove bots na sala (modelo, dificuldade e equipe). Eles rodam no navegador do anfitrião, enxergam pela própria visão (névoa de guerra) e aparecem no placar.
- Cada bot decide com a **própria detecção**: perde o alvo, procura no último ponto conhecido e divide a informação com a equipe.

**Zoom**
- **⚙ Opções**: zoom de 35% a 160% (menor = vê mais da tela). Na batalha: roda do mouse ou teclas **−/+**. Salvo no aparelho; no celular o padrão é 75%.

## v1.5.1
- 🌐 **Online sem servidor:** agora funciona só com o GitHub Pages. O navegador do anfitrião roda a lógica do servidor e os jogadores se conectam por **P2P (WebRTC/PeerJS)** usando um **código de sala** ou **link de convite** (`?sala=CODIGO`).
- A lógica do servidor foi extraída para `gameserver.js` (roda no navegador ou no Node); o servidor dedicado (`server/server.js`) continua disponível como opção avançada.
- Service worker passa a revalidar os arquivos (evita ficar com versão antiga em cache).

## v1.5.0
**Novo**
- 🌐 **Modo online** (cliente ↔ servidor ↔ clientes): salas com código, todos-contra-todos ou equipes, orçamento por sala, limite de abates e tempo, placar, reaparecimento e fim de partida. Servidor em `server/` (Node + `ws`) que também hospeda o jogo.
- 📱 **Celular**: joysticks na tela, botão de torpedo/míssil, layout responsivo, tela cheia/paisagem e **PWA** (instalável, offline na campanha). Pronto para **GitHub Pages**.
- 👁 **Sistema de visão**: névoa de guerra; só se vê até certo alcance (radar aumenta); minimapa mostra só o que foi detectado.
- 📡 **Sonar Passivo** e **Sonar Ativo** (pulso que revela contatos, mas denuncia quem pinga).
- 🥷 **Furtividade**: *Casco Furtivo* e *Gerador Furtivo*. Com 60% de cobertura o navio some do mapa, do sonar e das armas guiadas/torres automáticas; é revelado ao atirar, ao pingar sonar ou quando colado.
- Novas peças: **Radar**, **Bloqueador** (derruba a guiagem de mísseis), **Carregador Automático**, **Computador de Tiro**.
- Novos modelos: **Sentinela** (radar + sonar) e **Fantasma** (furtivo).
- IA que perde o alvo: vai ao último ponto conhecido e procura; inimigos furtivos são expostos de tempos em tempos para não travar a onda.

## v1.0
- Estaleiro em grade, dano por peça, campanha em ondas, 14 modelos, morteiros/mísseis/railgun/escudo/defesa pontual, blindagens, moedas e orçamento.
