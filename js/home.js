let dates = [];
let currency = "dollar";
if (localStorage.getItem("dates") === null) {
    dates = [];
    console.log("There is no date");
} else {
    dates = JSON.parse(localStorage.getItem("dates"));
    console.log("There is date");
}

function addData(data) {
    const datejs = new Date(data.updatedAt);
    
    dates.push({
        year: datejs.getFullYear(),
        month: datejs.getMonth() + 1,
        day: datejs.getDate(),
        hours: datejs.getHours(),
        minuts: datejs.getMinutes(),
        price: data.price
    });
    if(dates.length>=30){
        dates.shift()
    }
    localStorage.setItem("dates", JSON.stringify(dates));
    
}

document.addEventListener("click", (e) => {
    if (e.target.closest("#dollar")) {
        currency = "dollar";
        updateUI(currency);
        document.getElementById("dollar").classList.add("selected");
        document.getElementById("jod").classList.remove("selected");
    } 
    else if (e.target.closest("#jod")) {
        currency = "jod";
        updateUI(currency);
        document.getElementById("jod").classList.add("selected");
        document.getElementById("dollar").classList.remove("selected");
    }
});

function updateUI(currency) {
    if (currency === "dollar") {
        document.getElementById("price-ounce").innerText = "$" + dollar_24k_ounce;
        document.getElementById("price-24k").innerText = "$" + dollar_24k_1gram;
        document.getElementById("price-21k").innerText = "$" + dollar_21k_1gram;
        document.getElementById("price-18k").innerText = "$" + dollar_18k_1gram;
        document.getElementById("rashadi").innerHTML = "$" + dollar_21k_rashadiCoin;
        document.getElementById("english_coin").innerHTML = "$" + dollar_21k_englishCoin;
    } else if (currency === "jod") {
        document.getElementById("price-ounce").innerText = jod_24k_ounce + " JOD";
        document.getElementById("price-24k").innerText = jod_24k_1gram + " JOD";
        document.getElementById("price-21k").innerText = jod_21k_1gram + " JOD";
        document.getElementById("price-18k").innerText = jod_18k_1gram + " JOD";
        document.getElementById("rashadi").innerHTML = jod_21k_rashadiCoin + " JOD";
        document.getElementById("english_coin").innerHTML = jod_21k_englishCoin + " JOD";
    }
}

async function startApp() {
    try {
        let data = await fetchGold();
        console.log("the data is :", data);
        getAllKirates();
        
        addData(data);
        updateUI(currency);

        setInterval(async () => {
            let newData = await fetchGold();
            console.log(dates)
            getAllKirates();
            addData(newData); 
            updateUI(currency);
            
        }, 60000); 

    } catch (error) {
    }
}

startApp();