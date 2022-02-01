const btn = document.querySelector('.btn');
const kelvin = document.querySelector('.kelvin');
const celcius = document.querySelector('.celcius');
const fahrenheit = document.querySelector('.fahrenheit');

let lastEdit = '';

const updateLastEdit = ()=>{
    celcius.addEventListener('keyup', (e)=>{
        lastEdit = 'celcius'
    });

    fahrenheit.addEventListener('keyup', (e)=>{
        lastEdit = 'fahrenheit'
    });

    kelvin.addEventListener('keyup', (e)=>{
        lastEdit = 'kelvin'
    });
};
updateLastEdit();


const convert = (lastEdit, temp)=>{
    if (lastEdit === 'celcius') {
        const fvalue = (parseFloat(celcius.value) * 9/5 +32);
        const kvalue = (parseFloat(celcius.value) + 273.15 );
        fahrenheit.value = fvalue;
        kelvin.value = kvalue;
    }else if (lastEdit=== 'fahrenheit') {
        const cvalue = (parseFloat(celcius.value -32) * 5/9);
        const kvalue = (parseFloat (fahrenheit.value - 32) * 5/9 + 273.15);
        celcius.value = cvalue;
        kelvin.value = kvalue;
    }else if( lastEdit=== 'kelvin'){
        const fvalue = (parseFloat(kelvin.value - 273.15) * 9/5 + 32);
        const cvalue = (parseFloat(kelvin.value) - 273.15 );
        fahrenheit.value = fvalue;
        celcius.value = cvalue;
    }
}

btn.addEventListener('click', (e)=>{
    convert(lastEdit)
});