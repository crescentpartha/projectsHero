
// 42.7 Explore localStorage and sessionStorage with JSON

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // 
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';

    /* In console panel

        localStorage.setItem('friends', [45, 78, 98]);
        localStorage.setItem('friends', JSON.stringify([45, 78, 98]));

        let pen = { price: 10, color: 'black' };
        localStorage.setItem('pen', pen);
        localStorage.setItem('pen', JSON.stringify(pen));

        const storedPen = localStorage.getItem('pen');
        console.log(storedPen);
        const storedPenObj = JSON.parse(storedPen);
        console.log(storedPenObj);

        pen.price = 50;
        console.log(pen);
        localStorage.setItem('pen', JSON.stringify(pen));

        // Put value as a JSON.stringify
        // Get value as a JSON.parse
        
    */
}


