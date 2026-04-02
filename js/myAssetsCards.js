
function addAssetsCards() {
    
let assetsContainer = document.getElementById("assetsContainer");
    
    assetsContainer.innerHTML = "";

    
    let assets = JSON.parse(localStorage.getItem("assets")) || [];

    assets.forEach(asset => {
        
        let card = document.createElement("div");
        card.classList.add("first_card");

        card.innerHTML = `
            <img src="${asset.image}" >
            <div class="card_first_line">
                <div class="tit_subTit">
                    <div> ${asset.name}  </div>
                    <sub>${asset.type}</sub>
                </div>
                <div id="card_kirat">${asset.kirat}</div>
            </div>
            <div class="card_second_line">
                <div class="data_info">
                    <sub> WEIGHT</sub>
                    <p>${asset.weight}g</p>
                </div>
                <div class="data_info">
                    <sub> PURCHASE DATE</sub>
                    <p>${new Date(asset.date).toLocaleDateString("en-US", { month:"short", day:"2-digit", year:"numeric" })}</p>
                </div>
            </div>
            <div class="card_third_line">
                <div class="data_info">
                    <sub> PURCHASE PRICE</sub>
                    <p>$${asset.price.toLocaleString()}</p>
                </div>
                <div class="data_info">
                    <sub> CURRENT VALUE</sub>
                    <p id="current_value">$${calculateCurrentValue(asset)}</p>
                </div>
            </div>
            <hr>
            <div class="card_bottom_line">
                <div class="data_info">
                    <sub> PROFIT/LOSS</sub>
                    <p id="prof_value">${calculateProfit(asset)}</p>
                </div>
                <div id="percentage_value">${calculatePercentage(asset)}</div>
            </div>
        `;

       
        assetsContainer.appendChild(card);
    });
}


function calculateCurrentValue(asset) {
    // Here you can put your own logic, e.g., current price per gram
    let currentPricePerGram = 50; // Example
    return (asset.weight * currentPricePerGram).toFixed(2);
}

function calculateProfit(asset) {
    let current = calculateCurrentValue(asset);
    let profit = current - asset.price;
    return (profit >= 0 ? "+" : "") + "$" + profit.toFixed(2);
}

function calculatePercentage(asset) {
    let current = calculateCurrentValue(asset);
    let profit = current - asset.price;
    let percent = (profit / asset.price) * 100;
    return (profit >= 0 ? "+" : "") + percent.toFixed(1) + "%";
}


addAssetsCards();