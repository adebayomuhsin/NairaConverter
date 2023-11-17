const btn = document.querySelector('button');
const input = document.querySelector('input[type="Text"]');
const parentUi = document.querySelector('h1');


const fetchApi = async () => {
    const fetcha = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const parseApi = await fetcha.json ()
    return  (parseApi.bpi.USD.rate_float)
}

btn.addEventListener("click", async () => {
    const btcRate = await fetchApi()

    parentUi.textContent = input.value * btcRate

});