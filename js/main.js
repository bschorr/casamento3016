var home =
"Estamos no século 31. Maria Paula e Bernardo vão se casar.\n\nComandos disponíveis:\n\n"+
"- 'festa': informações sobre a celebração\n" +
"- 'dress code': como se vestir\n" + 
"- 'perguntas': respostas para -quase- todas as perguntas\n" +
"- 'rsvp': confirme sua presença\n" +
"- 'contato': precisando, fale conosco.\n\n";

var festa = 
"\nO ano é 3016. O nível do mar já chega ao segundo andar dos edifícios. Veículos flutuantes e drones compõem a paisagem celeste já quase sem pássaros. Chegamos ao nível de super-inteligência artificial. A procriação é controlada, visto que a morte é opcional. Se o mundo mudou muito, a humanidade mudou pouco, e casar entre amigos ainda é de enorme importância.\n\n" +

"Convidamos vocês, amigos cibernéticos, a celebrar nosso casamento em 3016. Festa Open Bar.\n\n" + 

"Sábado, 17 de Dezembro / 22h-6h\n" +
"Studioline\n" +
"R. Álvaro Ramos, 414\n" +
"Botafogo Rio de Janeiro\n\n" +

"Atenção para o 'dress code' e não se esqueça de 'RSVP'\n";


var dresscodeone = 
"\nPense num futuro fictício de alguém numa trip de ácido nos anos 60. Roupas prateadas, acessórios fosforescentes, trajes espaciais, LEDs. Se piscar, melhor. Estamos deixando a a lista de referências bem aberta: ";

var dresscodelinks =
'<a href="http://www.google.com/images?q=cyborg+fashion" target="_blank">Cyber</a>, ' +

'<a href="http://www.google.com/images?q=industrial+music+clothing" target="_blank">Industrial</a>, ' +

'<a href="http://www.google.com/images?q=barbarella+clothing" target="_blank">Barbarella</a>, ' +

'<a href="http://www.google.com/images?q=capitol+fashion+hunger+games" target="_blank">Capitol (Jogos Vorazes)</a>, ' +

'<a href="http://www.google.com/images?q=replicant+costumes" target="_blank">Replicantes</a>, ' +

'<a href="http://www.google.com/images?q=mad+max+costume" target="_blank">Mad Max</a>, ' +

'<a href="http://www.google.com/images?q=cite+des+enfants+perdus" target="_blank">Cidade das crianças perdidas</a>, ' +

'<a href="http://www.google.com/images?q=bauhaus+costumes" target="_blank">Bauhaus (a escola, não a banda)</a>, ' +

'<a href="http://www.google.com/images?q=coruscant+fashion" target="_blank">Coruscant (Star Wars)</a>, ' +

'<a href="http://www.google.com/images?q=daft+punk+fashion" target="_blank">Daft Punk</a>';

var dresscodetwo =
". Pense visores, comunicadores, computadores, indicadores luminosos, robôs. Abuse de maquiagem. Rua da Alfândega e Mercado Livre são seus maiores aliados. Se não estiver um pouco constrangido de sair na rua, não se esforçou o suficiente.\n\n" +

"Por favor não venha vestido de Matrix, Darth Vader ou qualquer outro personagem de ficção. A ideia é você no futuro. Criatividade, não festa a fantasia ;-)\n";

var perguntas = 
"\nComo vai ser a festa?\n" +
"Boate do futuro com Open Bar. Teremos uns amendoins e outros petiscos, mas não teremos buffet. Venham comidos.\n\n" +

"Preciso obedecer o dress code?\n" +
"Na medida do possível, sim, por favor. A ideia é ser uma festa futurista. Não precisa fazer a produção do milênio: uma make prateada pode ser comprada com poucos reais e compor com roupa preta, tá valendo.\n\n" +

"Não tem lista de presentes?\n" + 
"Não, mas muito obrigado! Já temos casa montada no futuro e moramos longe. Levar qualquer coisa em viagem do tempo é difícil. Se a generosidade estiver alta, entre em contato que arrumamos um jeito de sermos presenteados ou então sugerimos uma doação a uma das seguintes organizações: Anistia Internacional, Médicos sem Fronteiras, Saúde Criança, Viva Rio ou Grupo Arco-Íris.\n";

var rsvp = 
"\nPara confirmar presença, visite esse ";

var contato = 
"\nÉ fácil encontrar a gente através dos e-mails mariapaula.saba@gmail.com & bernardo.schorr@gmail.com\n";

var erro = 
"\nComando não encontrado. Tente um dos comandos abaixo:\n\n" +
"- 'festa': informações sobre a celebração\n" +
"- 'dress code': como se vestir\n" + 
"- 'perguntas': respostas para -quase- todas as perguntas\n" +
"- 'rsvp': confirme sua presença\n" +
"- 'contato': precisando, fale conosco.\n\n";

$(function () {
  var jqconsole = $('#console').jqconsole(home, '> ');
  var startPrompt = function () {

    // Start the prompt with history enabled.
    jqconsole.Prompt(true, function (input) {

      // Output input with the class jqconsole-output.
      if (input == "festa") {
        jqconsole.Write(festa + '\n', 'jqconsole-output');
      } else if (input == "dress code") {
        jqconsole.Write(dresscodeone + '\n', 'jqconsole-output');
        jqconsole.Append($(dresscodelinks));
        jqconsole.Write(dresscodetwo + '\n', 'jqconsole-output');
      } else if (input == "perguntas") {
        jqconsole.Write(perguntas + '\n', 'jqconsole-output');
      } else if (input == "rsvp") {
        jqconsole.Write(rsvp, 'jqconsole-output');
        jqconsole.Append($('<a href="https://goo.gl/forms/gakNu16Unuok5GS32" target="_blank">link</a>'));
        jqconsole.Write(".\n\n", 'jqconsole-output');
      } else if (input == "contato") {
        jqconsole.Write(contato + '\n', 'jqconsole-output');
      } else {
        jqconsole.Write(erro, 'jqconsole-output');
      }
      //jqconsole.Write(input + '\n', 'jqconsole-output');
      // Restart the prompt.
      startPrompt();
    });
  };
  startPrompt();
});