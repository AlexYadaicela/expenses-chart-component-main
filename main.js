const json = `[
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]`; 

const obj = JSON.parse(json); 

const bar = document.querySelectorAll(".bar"); 

function setValueToBar(){
    bar.forEach((item) => {
        item.addEventListener("mouseover", () =>{
            const day = item.getAttribute("data-item"); 
            const value = document.querySelector(`.${day} .value`);
            value.style.display = "block"; 
            setTimeout(()=>{
                value.style.display = "none"; 
            },1000)
        })
    });
}

setValueToBar();