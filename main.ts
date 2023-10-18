

function initThemeSelector(){
    const themeSelect= document.getElementById('myRangeTheme') as HTMLInputElement;
    const themeStylesheetLink=document.getElementById('themeStylesheetLink') as HTMLInputElement;
    

    function activateTheme(themeName:string){
        themeStylesheetLink.setAttribute('href', `./themes/${themeName}`);
    }

    themeSelect.addEventListener('change', ()=>{
        let theme:string;

        switch(themeSelect.value){
            case '1':
                theme='theme1.css';
                break;
            case '2':
                theme='theme2.css';
                break;
            case '3':
                theme='theme3.css';
                break;
            default:
                theme='';
                break;
        }
        activateTheme(theme);
    })

}


initThemeSelector();


const display= document.getElementById('calculator-display') as HTMLInputElement;
const buttons=document.getElementsByTagName('button');

const buttonsArray=Array.from(buttons);

buttonsArray.forEach((buttons)=>{
    buttons.addEventListener('click', ()=>{
        
        let botonApretado=buttons.innerHTML;
        console.log(botonApretado);
        console.log(display.innerHTML);
        if(buttons.id==='c'){
            display.innerHTML='0';
            return;
        }

        if(buttons.id==='del'){
            if(display.innerHTML.length===1 || display.innerHTML==='Error'){
                display.innerHTML='0';
            }else{
                display.innerHTML=display.innerHTML.slice(0,-1);

            }
            return;
        }

        if(buttons.id==='igual'){
            try{
                display.innerHTML=eval(display.innerHTML);
            }catch{
                display.innerHTML='Error';
            }
            return;
        }

        if(display.innerHTML==='0' || display.innerHTML==='Error'){
            display.innerHTML=botonApretado;
        }else{
            if(botonApretado==='x'){
                botonApretado='*';
            }
            display.innerHTML+=botonApretado;
        }
        

    });
});




function calculadora(buton:HTMLButtonElement, display:HTMLInputElement){
    switch(buton.innerHTML){
        case 'DEL':
            borrarUltimo(display);
            break;
        case 'RESET':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, buton);
            break;
    }
}

function calcular(display: HTMLInputElement){
    display.innerHTML=eval(display.innerHTML);
}
function actualizar(display:HTMLInputElement, buton:HTMLButtonElement){
    if(display.innerHTML== '0'){
        display.innerHTML='';
    }
    display.innerHTML+=buton.innerHTML;
}

function borrar(display:HTMLInputElement){
    display.innerHTML='0';
}

function borrarUltimo(display:HTMLInputElement){
    display.innerHTML='0';
}