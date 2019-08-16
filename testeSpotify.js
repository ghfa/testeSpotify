// OBTER NOME DA MÚSICA E DOS ARTISTAS DE UMA PLAYLIST DO SPOTIFY WEB
// CONSOLE.SAVE: http://bgrins.github.io/devtools-snippets/#console-save
// SOURCES > SNIPPETS > NEW SNIPPET > consoleSave.js > save > run

function nomeMusicas() {
    arrMusica = [];
    arrArtista = [];
    arrCompleto = [];
    strTotalMusicas = document.getElementsByClassName('TrackListHeader__entity-additional-info');
    intTotalMusicas = parseInt(strTotalMusicas[0].innerText.substring(0,3)) - 1;
    for (let i = 0; i <= intTotalMusicas; i++) {
        musicas = document.getElementsByClassName('tracklist-name');
        artistas = document.getElementsByClassName('TrackListRow__artists');
        arrMusica.push(musicas[i].innerText);
        arrArtista.push(artistas[i].innerText);
        arrCompleto.push(musicas[i].innerText + ' - ' + artistas[i].innerText);
    }
    // console.log(arrMusica);
    // console.log(arrArtista);
    console.log(arrCompleto);
    console.save(arrCompleto);
}

nomeMusicas();

/* CONSOLE SAVE

(function(console){
console.save = function(data, filename){
    if(!data) {
        console.error('Console.save: No data')
        return;
    }
    if(!filename) filename = 'console.json'
    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }
    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)

*/
