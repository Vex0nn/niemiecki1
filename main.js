const array = ['backen', 'bieten', 'bitten', 'beginnen', 'bleiben', 'brechen', 'bringen', 'dürfen',
             'fahren', 'fallen', 'fangen', 'finden', 'fliegen', 'haben', 'hängen', 'heben', 
             'heißen', 'helfen', 'gehen', 'geben', 'halten', 'essen', 'denken']
// let used = []
let result = document.getElementById('result');

function check() {
    if (array.length === 0) {
        result.textContent = "Brak elementów";
        return;
    }

    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    result.textContent = randomElement;
    console.log(array);
}

document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter' || event.code == 'Space') {
        if (array.length === 0) {
            result.textContent = "Brak elementów";
            return;
        }
    
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomElement = array[randomIndex];
        array.splice(randomIndex, 1);
        result.textContent = randomElement;
        console.log(array);
    }
})