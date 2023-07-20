$(document).ready(function() {
    const apiUrl = 'https://steamcommunity.com/market/priceoverview/';
    const country = 'DE';
    const currency = 3;
    const appId = 730;
    const marketHashName = 'Clutch%20Case'; // URL-encoded name of the item

    const url = `${apiUrl}?country=${country}&currency=${currency}&appid=${appId}&market_hash_name=${marketHashName}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data here
        displayData(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    function displayData(data) {

    const lowestPrice = data.lowest_price;
    const lowestPriceNumber = Number(lowestPrice.replace(/[^0-9.-]+/g,"")) / 100;
    const amountBought = 564;
    const moneySpent = 504.38 - 58 - 57.85;
    const currentValue = Math.floor(lowestPriceNumber * amountBought);
    const profit = Math.floor(lowestPriceNumber * amountBought - moneySpent);
    
    // Example of displaying the lowest price and volume
    console.log('-----------------------------------')
    console.log("Item: " + "Clutch Case") // marketHashName
    console.log('Niedrigstes Angebot:', lowestPriceNumber + '€');
    console.log('Investitionsmenge:', amountBought + ' Stück');
    console.log('Ausgaben:', moneySpent + '€');
    console.log('Aktueller Wert:', currentValue + '€');
    console.log('Profit:', profit + '€')
    console.log('-----------------------------------')
    
    }

    const marketHashName2 = 'Prisma%202%20Case'; // URL-encoded name of the item

    const url2 = `${apiUrl}?country=${country}&currency=${currency}&appid=${appId}&market_hash_name=${marketHashName2}`;

    fetch(url2)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data here
        displayData2(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    function displayData2(data) {

    const lowestPrice2 = data.lowest_price;
    const lowestPriceNumber2 = Number(lowestPrice2.replace(/[^0-9.-]+/g,"")) / 100;
    const amountBought2 = 199;
    const moneySpent2 = 58 + 57.85;
    const currentValue2 = Math.floor(lowestPriceNumber2 * amountBought2);
    const profit2 = Math.floor(lowestPriceNumber2 * amountBought2 - moneySpent2);
    
    // Example of displaying the lowest price and volume
    console.log('-----------------------------------')
    console.log("Item: " + "Prisma 2 Case") // marketHashName2
    console.log('Niedrigstes Angebot:', lowestPriceNumber2 + '€');
    console.log('Investitionsmenge:', amountBought2 + ' Stück');
    console.log('Ausgaben:', moneySpent2 + '€');
    console.log('Aktueller Wert:', currentValue2 + '€');
    console.log('Profit:', profit2 + '€')
    console.log('-----------------------------------')
    
    }

});