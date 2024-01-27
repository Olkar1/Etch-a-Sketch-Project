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
            e.target.style.backgroundColor = 'blue';
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
