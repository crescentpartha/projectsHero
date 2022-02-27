
const loadData = () => {
    const input = document.getElementById('search-field');
    const inputText = input.value;
    console.log(inputText);
    input.value = '';
    const search = document.getElementById('container-clicked');
    search.innerHTML = '';
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displayPlayer(data.sports))
}
const displayPlayer = data => {
    // console.log(data);
    const container = document.getElementById('container');
    data.forEach(sport => {
        const div = document.createElement('div');
        div.classList.add('container-div');
        div.innerHTML = `
        <div onclick="displayClicked('${sport.strSportThumb}', '${sport.strSportIconGreen}', '${sport.strSport}', '${sport.strSportDescription.slice(0, 250)}')">
            <img src="${sport.strSportThumb}">
            <img src="${sport.strSportIconGreen}">
            <h2>${sport.strSport}</h2>
            <p>${sport.strSportDescription.slice(0, 250)}</p>
        </div>
        `;
        container.appendChild(div);
        // console.log(sport.strSport);
    })
}
// 

const displayClicked = (thum, icon, title, des) => {
    const search = document.getElementById('container-clicked');
    search.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="container-div">
        <img src="${thum}">
        <img src="${icon}">
        <h2>${title}</h2>
        <p>${des}</p>
    </div>
    `;
    search.appendChild(div);
    // console.log(thum, icon, title, des);
}