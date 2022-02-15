
// 3. In the below website add ul list and number of list as your wish. Add a new button sothat if you click then new list item is added in the ul list.

let count = 6;
document.getElementById('addItem').addEventListener('click', function(){
    // let count = 6;
    const parent = document.getElementById('parent');
    const item = document.createElement('li');
    item.innerText = 'Item No - ' + count;
    parent.appendChild(item);
    count++;
});

// 4. Take one input field and one button. Set input field value is zero. If you click button then input field value will be increased.



let incre = 0; 
document.getElementById('increment').addEventListener('click', function(){
    const button = document.getElementById('increment');
    let num = document.getElementById('number');
    // console.log(parseInt(num.value)+1);
    num.value++;

    // 5. when input field value is 5 then set button disable.
    if (num.value == 5){
        button.disabled = true;
    }

});

