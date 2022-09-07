const dropList = document.querySelectorAll("form select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
    getButton = document.querySelector("form button");


let country_list = {
    "IDR": "ID",
    "CAD": "CA",
    "GBP": "GB",
    "CHF": "CH",
    "EUR": "FR",
}

for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        // selecting USD by default as FROM currency and NPR as TO currency
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "IDR" ? "selected" : "";
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("load", e => {
        loadFlag(e.target); // calling loadFlag with passing target element as an argument
    });
}

function loadFlag(element) {
    for (let code in country_list) {
        if (code == element.value) { // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", () => {
    getExchangeRate();
    loadFlag(dropList[0]);
});

getButton.addEventListener("click", e => {
    e.preventDefault(); //preventing form from submitting
    getExchangeRate(); 
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
    loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate(); // calling getExchangeRate
})

function getExchangeRate() {
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting exchange rate...";
    
    let url = `https://api.currencyfreaks.com/latest?apikey=410c97d2f6b34af8bacd492c14a404ba`
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.rates[toCurrency.value];
            // console.log(exchangeRate)
            let totalExRate = (amountVal * exchangeRate).toFixed(2);
            let weBuy = (totalExRate * 1.05).toFixed(2);
            let weSell = (totalExRate * 0.95).toFixed(2);
            exchangeRateTxt.innerText = `Exchange Rate  : ${totalExRate} ${toCurrency.value}
                                         We Buy : ${weBuy} ${toCurrency.value}
                                         We Sell    : ${weSell} ${toCurrency.value}`;
        })
        .catch((err) => { // if user is offline or any other error occured while fetching data then catch function will run
            console.error(err)
            exchangeRateTxt.innerText = "Something went wrong";
        });
}


