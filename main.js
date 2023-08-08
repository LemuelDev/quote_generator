const generateBtn = document.querySelector('.generate-btn')
const quoteResult = document.querySelector('.quote-result')
const quoteName = document.querySelector('.quote-name')

 async function renderQuotes(){

    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
     method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a70f384ddcmsh3afc67a057b6b39p1c2a31jsn724a8cd0cf18',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
    // object to request, get the promise to resolve with api-key

    try {
        const res = await fetch(url, options)
        const data = await res.json()
        const theQuote = data.content
        const author = data.originator.name

        quoteResult.innerHTML = `${theQuote}`
        quoteName.innerHTML = `- ${author}.`
        console.log(data);
       
    }catch {
        quoteResult.innerHTML = 'Error: Something went wrong'
    }

}


generateBtn.addEventListener('click', renderQuotes )