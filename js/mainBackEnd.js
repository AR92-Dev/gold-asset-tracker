let dollar_24k_ounce = 0;
let dollar_24k_1gram = 0;
let dollar_21k_1gram = 0;
let dollar_18k_1gram = 0;
let dollar_21k_rashadiCoin = 0;
let dollar_21k_englishCoin = 0;

let jod_24k_ounce = 0;
let jod_24k_1gram = 0;
let jod_21k_1gram = 0;
let jod_18k_1gram = 0;
let jod_21k_rashadiCoin = 0;
let jod_21k_englishCoin = 0;
// let dates=[]
// let currency ="dollar"
// if(localStorage.getItem("dates")===null){
//      dates=[]
//      console.log("There is no date ")
// }
// else{
//     dates=JSON.parse(localStorage.getItem("dates"))
//     console.log("There is date ")
// }

// function to get 2 decimal of the nuumer 
function format(num) {
    return Math.round(num * 100) / 100;
}


//  function to convert to jod
function convert_to_jod(num) {
    return (num * 0.709);
}

//this function fetchs gold price from API
async function fetchGold() {

    //the api returns this object
    //     {
    //   "currency": "USD",
    //   "currencySymbol": "$",
    //   "exchangeRate": 1,
    //   "name": "Gold",
    //   "price": 4670.5,
    //   "symbol": "XAU",
    //   "updatedAt": "2026-03-31T18:59:10Z",
    //   "updatedAtReadable": "a few seconds ago"
    // } 
    try {
        const res = await fetch('https://api.gold-api.com/price/XAU');
        const data = await res.json();

        dollar_24k_ounce = data.price;
        dollar_24k_ounce = format(dollar_24k_ounce);

        console.log(dollar_24k_ounce + " this is ounce");

        // const datejs = new Date(data.updatedAt)
        // console.log(datejs)
        // dates.push({
        //     year:datejs.getFullYear(),
        //     day:datejs.getDate(),
        //     month:datejs.getMonth()+1,
        //     hours:datejs.getHours(),
        //     minuts:datejs.getMinutes(),
        //     price:data.price
        // });
        // localStorage.setItem("dates",JSON.stringify(dates))
        // console.log(JSON.parse(localStorage.getItem("dates")))
        

    } catch (err) {
        console.error(err);
    }
}

// function to get all kirates prices in dol and jod
function getAllKirates() {

    dollar_24k_1gram = format(dollar_24k_ounce / 31.1035);
    dollar_21k_1gram = format(dollar_24k_1gram * 0.875);
    dollar_18k_1gram = format(dollar_24k_1gram * 0.75);

    jod_24k_ounce = format(convert_to_jod(dollar_24k_ounce));
    jod_24k_1gram = format(convert_to_jod(dollar_24k_1gram));
    jod_21k_1gram = format(convert_to_jod(dollar_21k_1gram));
    jod_18k_1gram = format(convert_to_jod(dollar_18k_1gram));


    dollar_21k_englishCoin = format(dollar_21k_1gram * 8);
    dollar_21k_rashadiCoin = format(dollar_21k_1gram * 7);

    jod_21k_rashadiCoin = format(jod_21k_1gram * 7);
    jod_21k_englishCoin = format(jod_21k_1gram * 8);


    // console.log("24K:", dollar_24k_1gram);
    // console.log("21K:", dollar_21k_1gram);
    // console.log("18K:", dollar_18k_1gram);
    // console.log("24K_jod:", jod_24k_1gram);
    // console.log("21K_jod:", jod_21k_1gram);
    // console.log("18K_jod:", jod_18k_1gram);
    // console.log(dollar_21k_englishCoin);
    // console.log(dollar_21k_rashadiCoin);
    // console.log(jod_21k_englishCoin);
    // console.log(jod_21k_rashadiCoin);



}
// document.addEventListener("click", (e) => {
//     if (e.target.closest("#dollar")) {
//         currency = "dollar";
//         updateUI(currency);
//         document.getElementById("dollar").classList.add("selected");
//         document.getElementById("jod").classList.remove("selected");
//     }
//     else if (e.target.closest("#jod")) {
//         currency = "jod";
//         updateUI(currency);
//         document.getElementById("jod").classList.add("selected");
//         document.getElementById("dollar").classList.remove("selected");
//     }
// });
// function updateUI(currency) {
//     if(currency==="dollar"){
//         document.getElementById("price-ounce").innerText = "$" + dollar_24k_ounce;
//     document.getElementById("price-24k").innerText = "$" + dollar_24k_1gram;
//     document.getElementById("price-21k").innerText = "$" + dollar_21k_1gram;
//     document.getElementById("price-18k").innerText = "$" + dollar_18k_1gram;
//     document.getElementById("rashadi").innerHTML="$"+dollar_21k_rashadiCoin;
//     document.getElementById("english_coin").innerHTML="$"+dollar_21k_englishCoin;
//     }
//     else if(currency==="jod"){
//         document.getElementById("price-ounce").innerText = jod_24k_ounce+" JOD";
//     document.getElementById("price-24k").innerText = jod_24k_1gram+" JOD";
//     document.getElementById("price-21k").innerText =jod_21k_1gram+" JOD";
//     document.getElementById("price-18k").innerText =jod_18k_1gram+" JOD";
//     document.getElementById("rashadi").innerHTML=jod_21k_rashadiCoin+" JOD";
//     document.getElementById("english_coin").innerHTML=jod_21k_englishCoin+" JOD";
//     }
    
// }



async function main() {
    await fetchGold();
    getAllKirates();
    // updateUI(currency);
}
//  main()
// const timer = setInterval(() => {
//     main()

// }, 10000);



