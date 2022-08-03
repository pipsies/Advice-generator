const DivID = document.querySelector('#advice-num');
const quoteDiv = document.querySelector('#get-advice');

const newQuote = document.getElementById('getQuote')
getQuote.addEventListener('click', fetchAdvice);
window.onload = fetchAdvice;

function fetchAdvice() {

fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json();
}).then(adviceData => {
    const adviceObj = adviceData.slip;
    quoteDiv.innerHTML = `<h1>${adviceObj.advice}</h1>`;
    DivID.innerHTML = `<p>advice #${adviceObj.id}</p>`;
    
});
};

