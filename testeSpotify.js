// CONSOLE SAVE
(function(console){
    console.save = function(data, filename){
        if(!data) {
            console.error('Console.save: No data')
            return;
        }
        if(!filename) filename = 'musicas.json'
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

// SCRAPING
function scrapMusic(){
    var qtdMusicasPlaylist = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.oIeuP60w1eYpFaXESRSg.oYS_3GP9pvVjqbFlh9tq > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)").childElementCount;
    console.log(qtdMusicasPlaylist + " músicas");
	
    var arrArtista = [];
	var arrMusica = [];
	var arrAlbum = []
    var arrCompleto = [];
	
	for(var i=0; i<qtdMusicasPlaylist; i++){
		// MUDAR O PRIMEIRO CHILDREN
		nomeArtista = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.oIeuP60w1eYpFaXESRSg.oYS_3GP9pvVjqbFlh9tq > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)").children[i].children[0].children[1].children[1].children[1].textContent;
        arrArtista.push(nomeArtista);

		// MUDAR O PRIMEIRO CHILDREN
		nomeMusica = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.oIeuP60w1eYpFaXESRSg.oYS_3GP9pvVjqbFlh9tq > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)").children[i].children[0].children[1].children[1].children[0].textContent;
		arrMusica.push(nomeMusica);

		// MUDAR O PRIMEIRO CHILDREN
		nomeAlbum = nomeMusica = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.oIeuP60w1eYpFaXESRSg.oYS_3GP9pvVjqbFlh9tq > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)").children[i].children[0].children[2].children[0].children[0].children[0].textContent;
		arrAlbum.push(nomeAlbum);

	}

	for(var j=0; j<qtdMusicasPlaylist; j++){
		arrCompleto.push(`${arrArtista[j]} - ${arrMusica[j]} [${arrAlbum[j]}]`);
	}

	console.log(arrCompleto);
	console.save(arrCompleto);
	
} scrapMusic();