$(document).ready(function() {

    const apiUrl = 'https://steamcommunity.com/market/priceoverview/';
    const country = 'DE';
    const currency = 3;
    const appId = 730;
    var marketHashName = 'Clutch%20Case'; // URL-encoded name of the item
    var url = `${apiUrl}?country=${country}&currency=${currency}&appid=${appId}&market_hash_name=${marketHashName}`;

    UpdatePrices(url, '1', 564, 504.38 - 58 - 57.85);

    marketHashName = 'Prisma%202%20Case'; // URL-encoded name of the item
    url = `${apiUrl}?country=${country}&currency=${currency}&appid=${appId}&market_hash_name=${marketHashName}`;

    UpdatePrices(url, '2', 199, 58 + 57.85);

    ///////////////////

    var marketHashName = 'Clutch%20Case'; // URL-encoded name of the item
    var url = `${apiUrl}?country=${country}&currency=${currency}&appid=${appId}&market_hash_name=${marketHashName}`;

    UpdatePricesInterval(url, '1', 564, 504.38 - 58 - 57.85, 15000);

    marketHashName = 'Prisma%202%20Case'; // URL-encoded name of the item
    url = `${apiUrl}?country=${country}&currency=${currency}&appid=${appId}&market_hash_name=${marketHashName}`;

    UpdatePricesInterval(url, '2', 199, 58 + 57.85, 15000);
    
});

function UpdatePricesInterval(url, id, data_amountBought, data_moneySpent, interval) {

    setInterval(function() {
    
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    
        function displayData(data) {
    
            const lowestPrice = data.lowest_price - 0.1;
            const lowestPriceNumber = Number(lowestPrice.replace(/[^0-9.-]+/g,"")) / 100;
            const amountBought = data_amountBought;
            const moneySpent = data_moneySpent;
            const currentValue = Math.floor(lowestPriceNumber * amountBought);
            const profit = Math.floor(lowestPriceNumber * amountBought - moneySpent);
        
            $('#price-' + id).text(lowestPriceNumber + '€');
            $('#profit-' + id).text(profit + '€');
            $('#amount-' + id).text(amountBought + 'x');
        
            if (profit > 0) {
                $('#profit-' + id).css('background-color', 'green');
            } else if (profit == 0) {
                $('#profit-' + id).css('background-color', 'gray');
            } else {
                $('#profit-' + id).css('background-color', 'red');
            }
        
        }
    
        console.log('Updated prices');
    }, interval);
}

function UpdatePrices(url, id, data_amountBought, data_moneySpent) {

    
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    function displayData(data) {

        const lowestPrice = data.lowest_price - 0.1;
        const lowestPriceNumber = Number(lowestPrice.replace(/[^0-9.-]+/g,"")) / 100;
        const amountBought = data_amountBought;
        const moneySpent = data_moneySpent;
        const currentValue = Math.floor(lowestPriceNumber * amountBought);
        const profit = Math.floor(lowestPriceNumber * amountBought - moneySpent);
    
        $('#price-' + id).text(lowestPriceNumber + '€');
        $('#profit-' + id).text(profit + '€');
        $('#amount-' + id).text(amountBought + 'x');
    
        if (profit > 0) {
            $('#profit-' + id).css('background-color', 'green');
        } else if (profit == 0) {
            $('#profit-' + id).css('background-color', 'gray');
        } else {
            $('#profit-' + id).css('background-color', 'red');
        }
    
    }
    
    console.log('Updated prices');
}
