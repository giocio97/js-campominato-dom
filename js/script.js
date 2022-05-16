
let livello = document.getElementById("difficoltà");
let button = document.getElementById ("invio");
const griglia = document.getElementById ("griglia");
console.log(livello, button);


let nodeFacile;
let nodeMedio;
let nodeDifficile;


button.addEventListener("click",
() => {

    let nCelle, classCelle;

    const selLiv = parseInt(livello.value);
    console.log(selLiv);

    // svuota griglia
    griglia.innerHTML = ""; 

    switch (selLiv) {
       case 1 :
        default:
            nCelle = 100;
            classCelle = "square-facile";
            break;

            case 2:
            nCelle = 81;
            classCelle = "square-medio";
            break;

            case 3:
            nCelle = 49;
            classCelle = "square-difficile";
            break;



    }



    let myArrRandom = creaRandomNum (nCelle, 1, nCelle);
    console.log(myArrRandom);



for(let i = 0; i < myArrRandom.length; i++){
   
    const livFacile = livellobase (classCelle);
    let arrItem = myArrRandom[i];
    
    livFacile.addEventListener("click",
    function() {
        
        this.append(arrItem);
        
        this.classList.add("clicked");


    }
    )

    griglia.append(livFacile);
    // console.log(livFacile);
    
}
}

)
        






               
// funzioni
function livellobase (classDiv) {
    let nodeBase = document.createElement ("div");
    nodeBase.className = classDiv;
    return nodeBase;

}






function creaRandomNum (numItems, min, max ){
    const arrInt =[];
    while ( arrInt.length < numItems) {
        let randomNum = getRandomMinMax (min, max);
        if (!arrInt.includes (randomNum)){
            arrInt.push(randomNum);
        }
    }
    return arrInt;
}

function getRandomMinMax (rangeMin, RangeMax){
    let result = Math.floor(Math.random() * (RangeMax - rangeMin + 1)) + rangeMin;
    return result;
}





