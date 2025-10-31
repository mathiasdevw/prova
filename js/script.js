// Questões, alternativas e gabarito (30 questões)
const questions = [
  {q:'1. O que é hardware?', opts:['Conjunto de programas de computador','Parte lógica do computador','Parte física do computador','Sistema operacional'], a:2, comment:'Hardware = parte física do computador.'},
  {q:'2. O que é software?', opts:['Parte física do computador','Programas e sistemas utilizados no computador','Dispositivo de armazenamento','Placa-mãe'], a:1, comment:'Software = programas e sistemas.'},
  {q:'3. Qual é a função do sistema operacional?', opts:['Apenas executar programas de planilha','Controlar o hardware e permitir a interação do usuário com o computador','Apenas armazenar arquivos','Conectar a internet'], a:1, comment:'SO = gerencia hardware e recursos.'},
  {q:'4. A memória RAM tem como principal característica:', opts:['Armazenar dados permanentemente','Ser uma memória somente de leitura','Ser volátil — perde os dados ao desligar o computador','Servir como backup'], a:2, comment:'RAM é volátil; perde os dados ao desligar.'},
  {q:'5. Um arquivo com extensão “.xlsx” é:', opts:['Documento de texto do Word','Planilha do Excel','Apresentação do PowerPoint','Arquivo compactado'], a:1, comment:'.xlsx = planilha do Excel.'},
  {q:'6. O que significa “URL”?', opts:['User Registration Login','Universal Resource Locator','Uniform Record List','Universal Routing Link'], a:1, comment:'URL = endereço de recurso na internet.'},
  {q:'7. Qual a principal diferença entre HTTP e HTTPS?', opts:['Nenhuma diferença','HTTPS utiliza criptografia para comunicação segura','HTTPS é mais rápido que HTTP','HTTP é usado apenas em redes locais'], a:1, comment:'HTTPS = versão segura do HTTP (criptografia).'},
  {q:'8. O que é phishing?', opts:['Vírus de computador','Técnica de enganar usuários para roubar informações pessoais','Programa de antivírus','Sistema de backup'], a:1, comment:'Phishing = golpe para coletar dados sensíveis.'},
  {q:'9. O que é um endereço IP?', opts:['Nome de um site','Número que identifica um dispositivo em uma rede','Tipo de antivírus','Arquivo de texto'], a:1, comment:'IP identifica um dispositivo em rede.'},
  {q:'10. O que é criptografia?', opts:['Compressão de arquivos','Codificação de informações para protegê-las','Exclusão de dados','Armazenamento em nuvem'], a:1, comment:'Criptografia protege confidencialidade e integridade.'},
  {q:'11. O que significa “backup”?', opts:['Eliminar arquivos antigos','Copiar dados importantes para outro local seguro','Criptografar dados sensíveis','Atualizar software'], a:1, comment:'Backup = cópia de segurança.'},
  {q:'12. O que é um antivírus?', opts:['Programa que cria vírus','Programa que detecta e remove ameaças de software malicioso','Programa de edição de texto','Firewall'], a:1, comment:'Antivírus detecta e remove malwares.'},
  {q:'13. O que é autenticação de dois fatores (2FA)?', opts:['Login automático','Sistema que requer duas formas de verificação para acessar uma conta','Atualização de software','Criptografia em nuvem'], a:1, comment:'2FA = duas formas de autenticação.'},
  {q:'14. O que é o SUS?', opts:['Sistema de software privado','Sistema público de saúde brasileiro','Programa antivírus','Banco de dados nacional'], a:1, comment:'SUS = Sistema Único de Saúde.'},
  {q:'15. O que é o SIAB?', opts:['Sistema de registro acadêmico','Sistema de Informação da Atenção Básica','Programa de agendamento hospitalar','Ferramenta de telemedicina'], a:1, comment:'SIAB = Informação da Atenção Básica.'},
  {q:'16. O que é o e-SUS AB?', opts:['Sistema para registro de atendimentos da Atenção Básica','Software de farmácia','Programa de controle financeiro','Sistema de radiologia'], a:0, comment:'e-SUS AB registra atendimentos da Atenção Básica.'},
  {q:'17. O que é o CNES?', opts:['Cadastro Nacional de Estabelecimentos de Saúde','Cadastro Nacional de Especialidades','Cadastro de Necessidades Estratégicas','Catálogo Nacional de Exames e Serviços'], a:0, comment:'CNES = cadastro dos estabelecimentos de saúde.'},
  {q:'18. O que é o Prontuário Eletrônico do Paciente (PEP)?', opts:['Banco de dados financeiro','Registro digital das informações clínicas do paciente','Documento administrativo','Relatório de laboratório'], a:1, comment:'PEP = registro clínico eletrônico.'},
  {q:'19. O que é interoperabilidade em saúde?', opts:['Integração de diferentes sistemas para trocarem informações entre si','Isolamento de sistemas','Backup automático','Controle de impressoras hospitalares'], a:0, comment:'Interoperabilidade = integração de sistemas.'},
  {q:'20. O que é assinatura digital?', opts:['Imagem da assinatura manuscrita','Código que garante autenticidade e integridade de documentos eletrônicos','Documento escaneado','Software de edição'], a:1, comment:'Assinatura digital garante autenticidade e integridade.'},
  {q:'21. A LGPD trata de:', opts:['Leis de proteção ambiental','Proteção de dados pessoais e privacidade','Código penal','Políticas de backup'], a:1, comment:'LGPD protege dados pessoais e privacidade.'},
  {q:'22. O que é dado sensível segundo a LGPD?', opts:['Qualquer informação genérica','Dado sobre saúde, religião, origem racial, opinião política etc.','Endereço residencial','Nome completo'], a:1, comment:'Dado sensível = saúde, religião, origem racial, etc.'},
  {q:'23. O que é anonimização de dados?', opts:['Tornar os dados públicos','Alterar ou remover informações que identifiquem uma pessoa','Criptografar arquivos','Excluir completamente registros'], a:1, comment:'Anonimização = remover identificadores pessoais.'},
  {q:'24. Qual é a principal vantagem do prontuário eletrônico?', opts:['Dificulta o acesso a dados clínicos','Facilita o acesso e o compartilhamento de informações médicas de forma segura','Elimina o uso de internet','Dispensa backup'], a:1, comment:'PEP facilita acesso seguro às informações.'},
  {q:'25. A telemedicina depende de:', opts:['Telefonia analógica','Conexão de dados e sistemas de informação','Arquivos em papel','Cartões magnéticos'], a:1, comment:'Telemedicina depende de conectividade e TI.'},
  {q:'26. O Conecte SUS tem como objetivo:', opts:['Centralizar e disponibilizar dados de saúde do cidadão brasileiro','Gerenciar apenas exames laboratoriais','Substituir o SIAB','Ser usado apenas por médicos militares'], a:0, comment:'Conecte SUS centraliza dados do cidadão.'},
  {q:'27. Qual o principal risco da má gestão de segurança digital em hospitais?', opts:['Atraso em consultas','Vazamento de dados de pacientes e interrupção de serviços','Falta de papel','Perda de produtividade apenas'], a:1, comment:'Risco: vazamento de dados e interrupção de serviços.'},
  {q:'28. O que é um navegador (browser)?', opts:['Sistema operacional','Programa usado para acessar páginas da internet','Antivírus','Editor de texto'], a:1, comment:'Browser permite acessar páginas web.'},
  {q:'29. Qual é o principal princípio da segurança da informação?', opts:['Privacidade, integridade e disponibilidade dos dados','Velocidade e estética','Capacidade de processamento','Quantidade de usuários'], a:0, comment:'Princípios: confidencialidade, integridade e disponibilidade.'},
  {q:'30. Quais cuidados devem ser tomados ao enviar laudos por e-mail?', opts:['Enviar sem senha para agilizar o processo','Utilizar criptografia e verificar o destinatário','Enviar para qualquer endereço conhecido','Usar redes públicas de Wi-Fi'], a:1, comment:'Use criptografia e confirme o destinatário.'}
];

const form = document.getElementById('quizForm');
const summary = document.getElementById('summary');
const resultArea = document.getElementById('resultArea');
const welcomeSection = document.getElementById('welcomeSection');
const quizSection = document.getElementById('quizSection');
const startBtn = document.getElementById('startBtn');
const userNameInput = document.getElementById('userName');
const userProfessionSelect = document.getElementById('userProfession');
const progressFill = document.getElementById('progressFill');
const questionCounter = document.getElementById('questionCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const checkBtn = document.getElementById('checkBtn');

let userName = '';
let userProfession = '';
let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);

// Start quiz
startBtn.addEventListener('click', ()=>{
  userName = userNameInput.value.trim();
  userProfession = userProfessionSelect.value;
  if(!userName || !userProfession){
    alert('Por favor, preencha seu nome e profissão.');
    return;
  }
  welcomeSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
  renderQuestions(currentQuestionIndex);
  updateProgress();
});

// render questions
function renderQuestions(idx){
  form.innerHTML = ''; // Clear previous
  const item = questions[idx];
  const div = document.createElement('div');
  div.className = 'q';
  div.id = 'q'+idx;
  div.style.animationDelay = '0s'; // No stagger for single
  const h = document.createElement('h3');
  h.textContent = item.q.replace(/^\d+\.\s*/,'');
  div.appendChild(h);

  const opts = document.createElement('div');
  opts.className = 'options';

  item.opts.forEach((opt, i)=>{
    const id = `q${idx}o${i}`;
    const label = document.createElement('label');
    label.htmlFor = id;
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'q'+idx;
    input.id = id;
    input.value = i;
    if(answers[idx] === i.toString()) input.checked = true;
    label.appendChild(input);
    label.innerHTML += ` <strong>${String.fromCharCode(65+i)}</strong>. <span>${opt}</span>`;
    opts.appendChild(label);
  });

  div.appendChild(opts);
  form.appendChild(div);
  updateQuestionCounter();
}

function updateQuestionCounter(){
  questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}. Marque uma alternativa e navegue com os botões.`;
}

function updateProgress(){
  const answered = answers.filter(a => a !== null).length;
  const pct = Math.round((answered / questions.length) * 100);
  progressFill.style.width = `${pct}%`;
}

function saveCurrentAnswer(){
  const radios = document.getElementsByName('q'+currentQuestionIndex);
  for(const r of radios){
    if(r.checked){
      answers[currentQuestionIndex] = r.value;
      return;
    }
  }
  answers[currentQuestionIndex] = null;
}

prevBtn.addEventListener('click', ()=>{
  saveCurrentAnswer();
  if(currentQuestionIndex > 0){
    currentQuestionIndex--;
    renderQuestions(currentQuestionIndex);
    updateProgress();
  }
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = false;
});

nextBtn.addEventListener('click', ()=>{
  saveCurrentAnswer();
  if(currentQuestionIndex < questions.length - 1){
    currentQuestionIndex++;
    renderQuestions(currentQuestionIndex);
    updateProgress();
  }
  nextBtn.disabled = currentQuestionIndex === questions.length - 1;
  prevBtn.disabled = false;
});

checkBtn.addEventListener('click', ()=>{
  saveCurrentAnswer();
  const selected = answers[currentQuestionIndex];
  const item = questions[currentQuestionIndex];
  resultArea.innerHTML = '';

  if(selected === null){
    const resultBox = document.createElement('div');
    resultBox.className = 'result bad';
    resultBox.innerHTML = `<strong>Não respondeu.</strong> A resposta correta é <strong>${String.fromCharCode(65+item.a)}</strong>. ${item.opts[item.a]}<br><div class="small" style="margin-top:6px;color:var(--muted)">${item.comment}</div>`;
    resultArea.appendChild(resultBox);
  } else if (parseInt(selected,10) === item.a){
    const resultBox = document.createElement('div');
    resultBox.className = 'result good';
    resultBox.innerHTML = `<strong>Correta!</strong> Você escolheu <strong>${String.fromCharCode(65+parseInt(selected,10))}</strong>. ${item.opts[item.a]}<br><div class="small" style="margin-top:6px;color:var(--muted)">${item.comment}</div>`;
    resultArea.appendChild(resultBox);
  } else {
    const resultBox = document.createElement('div');
    resultBox.className = 'result bad';
    resultBox.innerHTML = `<strong>Errada.</strong> Você escolheu <strong>${String.fromCharCode(65+parseInt(selected,10))}</strong>. ${item.opts[parseInt(selected,10)]}<br>A resposta correta é <strong>${String.fromCharCode(65+item.a)}</strong>. ${item.opts[item.a]}<br><div class="small" style="margin-top:6px;color:var(--muted)">${item.comment}</div>`;
    resultArea.appendChild(resultBox);
  }
  resultArea.scrollIntoView({behavior:'smooth'});
});

document.getElementById('resetBtn').addEventListener('click', ()=>{
  answers.fill(null);
  currentQuestionIndex = 0;
  form.reset();
  resultArea.innerHTML='';
  summary.textContent='';
  progressFill.style.width = '0%';
  document.querySelectorAll('.q').forEach(el=>el.classList.remove('correct','incorrect'));
  renderQuestions(currentQuestionIndex);
  updateQuestionCounter();
  prevBtn.disabled = true;
  nextBtn.disabled = false;
});
