const h1 = document.querySelector('h1')
h1.classList.add('color-change')
console.log(h1)


function displayUserInfo(user_info) {
    element = document.getElementById('sampleText');
    element.innerHTML = user_info
}


let button = document.createElement('button')
button.innerHTML = 'Cogito, ergo sum';
document.body.append(button)

const form = document.getElementById('testForm');
form.onsubmit = submitForm;


function submitForm(event) {
    event.preventDefault(); //so the name won't load until the input is done
    
    console.log(document.getElementById('first-name').value);
    console.log(document.querySelector('#last-name').value);
}


function submitButtonForm() {
    document.querySelector('#username').value;
    document.querySelector('#password').value;
}


const colorSection = document.querySelector('#colors');


colorSection.addEventListener('click', changeColor);


function changeColor(e) {
    document.body.style.backgroundColor = e.target.dataset.hex;
}


function getJson() {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    
    
    let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
    let given_name_text = document.createElement('#givenName')
    given_name_text.innerHTML = givenName
    document.body.append(given_name_text)

    
    let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
    let familyName_text = document.querySelector('familyName') 
    familyName_text.innerHTML = familyName

   
    for (let i=0; i<3; i++) {
        let constructors_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
        let display_constructors = document.createElement('h1')
        display_constructors.innerHTML = constructors_name
        document.body.append(display_constructors)
    }

    })
}