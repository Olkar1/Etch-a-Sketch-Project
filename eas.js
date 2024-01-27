const container = document.querySelector('#container');

const btn = document.getElementById('setPanel');
btn.addEventListener("click",ShowSizePopup);

let numberOfSquares;

function PopulatePage(numberOfSqueres){
    if(typeof numberOfSqueres !== 'number'){
        console.log('Wrong value')
        return;
    }
    for(let i =0;i<numberOfSqueres;i++){
        const squere = document.createElement('div');
        squere.classList.add('squere');
        squere.addEventListener("mouseenter",function(e){
            const opacity = getAlphaValue(e.target.style.backgroundColor);
            e.target.style.backgroundColor = GetRandomColor((opacity-0.1));
            e.target.style.opa
        });
        container.appendChild(squere);
    }
}
function ShowSizePopup(){
    const nmb = prompt("Desired size: ");
    if (nmb !== null && !isNaN(nmb) && nmb > 0) {
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        PopulatePage(nmb * nmb);
        
    } else {
        alert("Wrong value!");
    }
}
function getAlphaValue(color) {
    const rgbaMatch = color.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
    if (rgbaMatch) {
        const alpha = parseFloat(rgbaMatch[4]);
        return alpha;
    } else {
        return 1;
    }
}

function GetRandomColor(opacity){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    
    const randomColor = `rgb(${red},${green},${blue},${opacity})`;
    return randomColor;
}
