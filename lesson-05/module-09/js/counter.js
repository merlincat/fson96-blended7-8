import { refs } from './refs.js'

const COUNTER_KEY = 'counter';
let counter =  Number(JSON.parse(localStorage.getItem(COUNTER_KEY))) || Number(refs.display.textContent);

refs.display.textContent = counter;

const handlerCtrlBtnClick = (e) => {
    if (e.target.nodeName !== 'BUTTON') return;
    
    switch (e.target.dataset.action) {
        case 'decrease':
            counter -= 1;
            break;
        case 'increase':
            counter += 1;
            break;
        case 'reset':
            counter = 0;
            break;
    
        default:
            alert('error');
            break;
    };

    refs.display.textContent = counter;
};

const handlerSaveBtnClick = (e) => { 
    if (e.target.nodeName !== 'BUTTON') return;

    if (e.target.dataset.action === 'save') { 
        localStorage.setItem(COUNTER_KEY, JSON.stringify(counter));
    };
    if (e.target.dataset.action === 'clear-save') { 
        localStorage.removeItem(COUNTER_KEY);
     };
};

refs.controlsBtn.addEventListener('click', handlerCtrlBtnClick);
refs.savesBtn.addEventListener('click', handlerSaveBtnClick);