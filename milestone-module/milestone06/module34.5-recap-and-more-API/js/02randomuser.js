
// 06. Load data from reandomuser.me then show picture of user and after that you have to show all properties of location like street, city, coordinates, timezone etc.

const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadRandomUsers();
const displayUsers = name => {
    const user = name.results[0];
    // console.log(user);
    const userContianer = document.getElementById('random-users');
    userContianer.innerHTML = `
        <img class="image" src="${user.picture.large}">
        <h2>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <p><b>Location:</b> ${user.location.street.number} ${user.location.street.name}</p>
        <p><b>City:</b> ${user.location.city}</p>
        <p><b>Coordinates:</b> ${user.location.coordinates.latitude} ${user.location.coordinates.longitude}</p>
        <p><b>Timezone:</b> ${user.location.timezone.offset} ${user.location.timezone.description}</p>
    `;
    // console.log(user.location.timezone);
}
