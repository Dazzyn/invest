$(document).ready(function() {

    setInterval(function() {

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
        
            $('#price-1').text(lowestPriceNumber + '€');
            $('#profit-1').text(profit + '€');
            $('#amount-1').text(amountBought + 'x');
        
            if (profit > 0) {
                $('#profit-1').css('background-color', 'green');
            } else if (profit == 0) {
                $('#profit-1').css('background-color', 'gray');
            } else {
                $('#profit-1').css('background-color', 'red');
            }
        
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
        
            $('#price-2').text(lowestPriceNumber2 + '€');
            $('#profit-2').text(profit2 + '€');
            $('#amount-2').text(amountBought2 + 'x');
        
            if (profit2 > 0) {
                $('#profit-2').css('background-color', 'green');
            } else if (profit2 == 0) {
                $('#profit-2').css('background-color', 'gray');
            } else {
                $('#profit-2').css('background-color', 'red');
            }
            
        }

        console.log('Updated prices');
    }, 1500);
});
