// MODULES AND IIFIE
// SOLID PATTERN
const temperatureController = (function(){
    const DOMstrings = {
        iCel:"i-cel",
        iCelR:'i-celR',
        iFar:"i-far",
        iFarR:'i-farR',
        iKel:"i-kel",
        iKelR:'i-kelR',
        bCel:"b-cel",
        bFar:'b-far',
        bKel:'b-kel'
    }
    // 2. Private Functions
    let celToFar = function(cel){
        let result;
        result = (cel * 9/5) + 32;
        return result
    }
    const farToCel = function(far){
        let result;
        result = (far - 32) * 5/9
        return result
    }
    const kelToFar = function(kel){
        let result;
        result = (kel - 273.15) * 9/5 + 32
        return result
    }
    // Access to Functions 
    return {
       getTemp: function(){
           return {
                getCel: document.getElementById(DOMstrings.iCel).value,
                getFar: document.getElementById(DOMstrings.iFar).value,
                getKel: document.getElementById(DOMstrings.iKel).value,
                }
            },
        celcius: function(){
            let r = document.getElementById( DOMstrings.iCelR );
            r.textContent = celToFar(this.getTemp().getCel);
        },
        farenheit: function(){
            let r = document.getElementById( DOMstrings.iFarR );
            r.textContent = farToCel(this.getTemp().getFar);                                                                      
        },
        kelvin: function(){
            let r = document.getElementById( DOMstrings.iKelR );
            r.textContent = kelToFar(this.getTemp().getKel);                                                                     
        },
        getDOM: () => DOMstrings
    }
    
}());
const controller = (function(tempCtrl){
    let ctrlDOM = tempCtrl.getDOM();
    const setupEventListener = () => {
        document.getElementById(ctrlDOM.bCel).addEventListener('click',tempCel);
        document.getElementById(ctrlDOM.bFar).addEventListener('click',tempFar);
        document.getElementById(ctrlDOM.bKel).addEventListener('click',tempKel);
    }
    const tempCel = function(){
        let input;
        input = tempCtrl.celcius();
        return input;
    }
    const tempFar = function(){
        let input;
        input = tempCtrl.farenheit();
        return input;
    }
    const tempKel = function(){
        let input;
        input = tempCtrl.kelvin();
        return input;
    }
    return{
        init: function(){
            console.log('Start');
            setupEventListener();
        },
    }
}(temperatureController));
controller.init();

/*NO PATTERNS FOLLOWED
 *DESORGANIZED CODE

document.getElementById("b-cel").addEventListener('click',function(cel){
    const iCel = document.getElementById("i-cel").value;
    const iCelR = document.getElementById('i-celR');
    cel = iCel;
    let formula = (cel * 9/5) + 32 
    console.log(formula)
    iCelR.textContent = formula
});

document.getElementById("b-far").addEventListener('click',function(far){
    const iFar = document.getElementById('i-far').value;
    const iFarR = document.getElementById('i-farR');
    far = iFar
    let formula = (far - 32) * 5/9
    console.log(formula);
    iFarR.textContent = formula
});

document.getElementById("b-kel").addEventListener('click',function(kel){
    const iKel = document.getElementById('i-kel').value;
    const iKelR = document.getElementById('i-kelR');
    kel = iKel
        let formula = (kel - 273.15) * 9/5 + 32
        console.log(formula);
        iKelR.textContent = formula
});
*/





