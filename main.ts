

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