var home =
"This is the 31st century. Maria Paula and Bernardo are getting married.\nAvailable commands:\n\n"+
"- 'party': all about the celebration\n" +
"- 'dress code': what to wear\n" + 
"- 'faq': answers to -almost- all questions\n" +
"- 'rsvp': confirm your presence\n" +
"- 'contact': in need, get in touch\n\n";

var party = 
"\nThe year is 3016. The sea level is well above the 2nd floor of buildings. Floating vehicles and drones dot an almost birdless sky. Artificial super-intelligence is a reality. Reproduction is controlled as dying became optional. If the world has changed a lot, humanity is still pretty similar, and marrying among friends is still enormously important.\n\n" +

"We invite you, cybernetic friends, to celebrate our wedding in 3016. It will be an open bar celebration.\n\n" + 

"Saturday, December 17 / 22h-6h\n" +
"Studioline\n" +
"R. Álvaro Ramos, 414\n" +
"Botafogo, Rio de Janeiro\n\n" +

"Please remember to check out the 'dresscode' and don't forget to 'RSVP.'\n";


var dresscodeone = 
"\nThink of a fictitious future imagined by someone in an acid trip in the 60s. Silver clothes, fluorescent accessories, space suits, LEDs. If your clothes are blinking, better. List of references is pretty inclusive: ";

var dresscodelinks =
'<a href="http://www.google.com/images?q=cyborg+fashion" target="_blank">Cyber</a>, ' +

'<a href="http://www.google.com/images?q=industrial+music+clothing" target="_blank">Industrial</a>, ' +

'<a href="http://www.google.com/images?q=barbarella+clothing" target="_blank">Barbarella</a>, ' +

'<a href="http://www.google.com/images?q=capitol+fashion+hunger+games" target="_blank">Capitol (Hunger Games)</a>, ' +

'<a href="http://www.google.com/images?q=replicant+costumes" target="_blank">Replicants</a>, ' +

'<a href="http://www.google.com/images?q=mad+max+costume" target="_blank">Mad Max</a>, ' +

'<a href="http://www.google.com/images?q=cite+des+enfants+perdus" target="_blank">City of Lost Children</a>, ' +

'<a href="http://www.google.com/images?q=bauhaus+costumes" target="_blank">Bauhaus (the school)</a>, ' +

'<a href="http://www.google.com/images?q=coruscant+fashion" target="_blank">Coruscant (Star Wars)</a>, ' +

'<a href="http://www.google.com/images?q=daft+punk+fashion" target="_blank">Daft Punk</a>';

var dresscodetwo =
". Think visors, communicators, computers, indicators, robots. Use make-up. If you're not a bit embarrassed of coming out in the street, you didn't put in enough effort.\n\n" +

"Please don't wear Matrix, Darth Vader or any other recognizable character costumes. Creativity, not a costume party ;-)\n";

var faq = 
"\nWhat will the party be like?\n" +
"Club of the future and open bar. We'll have some peanuts and things to munch on, but no food service.\n\n" +

"Do I need to dress the code?\n" +
"As much as you can, yes, please. It's a futurist party. Doesn't need to be too complicated: Silver make up and black clothes should do the trick, if you want something simple.\n\n" +

"Is there no registry?\n" + 
"No, but thank you! Our home in the future is mostly ready. Taking presents in time travel is pretty complicated. If generosity is high, be in touch and we'll gladly accept a present. Or we suggest a donation to one of the following organizations: Amnesty International, Doctors Without Borders, The Ali Forney Center.\n";

var contact = 
"\nIt's easy to reach us at mariapaula.saba@gmail.com & bernardo.schorr@gmail.com\n";

var error = 
"\nCommand not found. Try one of the below:\n\n" +
"- 'party': all about the celebration\n" +
"- 'dress code': what to wear\n" + 
"- 'faq': answers to -almost- all questions\n" +
"- 'rsvp': confirm your presence\n" +
"- 'contact': in need, get in touch\n\n";

var rsvp = 
"\n To confirm your presence, visit this ";

$(function () {
  var jqconsole = $('#console').jqconsole(home, '> ');
  var startPrompt = function () {

    // Start the prompt with history enabled.
    jqconsole.Prompt(true, function (input) {

      // Output input with the class jqconsole-output.
      if (input == "party") {
        jqconsole.Write(party + '\n', 'jqconsole-output');
      } else if (input == "dress code") {
        jqconsole.Write(dresscodeone + '\n', 'jqconsole-output');
        jqconsole.Append($(dresscodelinks));
        jqconsole.Write(dresscodetwo + '\n', 'jqconsole-output');
      } else if (input == "faq") {
        jqconsole.Write(faq + '\n', 'jqconsole-output');
      } else if (input == "rsvp") {
        jqconsole.Write(rsvp, 'jqconsole-output');
        jqconsole.Append($('<a href="https://goo.gl/forms/mexfVpQMo9HWHdv72" target="_blank">link</a>'));
        jqconsole.Write(".\n\n", 'jqconsole-output');
      } else if (input == "contact") {
        jqconsole.Write(contact + '\n', 'jqconsole-output');
      } else {
        jqconsole.Write(error, 'jqconsole-output');
      //jqconsole.Write(input + '\n', 'jqconsole-output');
      // Restart the prompt.
      }
      startPrompt();
    });
  };
  startPrompt();
});