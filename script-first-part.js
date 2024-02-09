// First part
const endButton = document.getElementById('end-button');
endButton.hidden = true;

consoleText([
    'Olá amor',
    'Hoje celebramos seis meses juntos',
    'E a cada dia ao seu lado eu me sinto mais feliz',
    'Quero que saiba',
    'O quanto você significa para mim,',
    'Não apenas neste momento,',
    'Mas em todos os momentos que compartilhamos desde que nos conhecemos.',
    'Tenho certeza que mais dias como esse virão',
    'Obrigado por tudo',
    ''
], 'text', ['tomato']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    
    target.setAttribute('style', 'color:' + colors[0])
    const loop = window.setInterval(function () {


        // Start to write the message
        if (letterCount === 0 && waiting === false) {
            // Condition to stop the loop at the last word otherwise it will keep going forever
            if(words[0] === ''){
                clearInterval(loop);

                // stop underscore and remove and show button
                clearInterval(under);
                document.getElementById('console').remove();
                endButton.hidden = false;
                endButton.className = 'button'
                endButton.addEventListener('click', () => {
                    window.location.href = 'photos.html';
                })
            }

            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            // Condition activated when write current string completed

            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {

            // First word to start the loop
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)

    // Control the underscore animation
    const under = window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

