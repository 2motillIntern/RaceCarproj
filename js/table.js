function getJson() {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    
   


   for (let i = 0; i<7; i++) {
    let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
    let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
    let target = document.getElementById(`tr${i+1}`)
    let fullName = document.createElement('td')
    fullName.innerHTML = `${givenName} ${familyName}`
    target.append(fullName)
}

    for (let i = 0; i<7; i++) {
        let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
        let target = document.getElementById(`tr${i+1}`)
        let fullName = document.createElement('td')
        fullName.innerHTML = nationality
        target.append(fullName)
    }
    
    for (let i = 0; i<7; i++) {
        let constructors_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
        let target = document.getElementById(`tr${i+1}`)
        let fullName = document.createElement('td')
        fullName.innerHTML = constructors_name
        target.append(fullName)
    }
    for (let i = 0; i<7; i++) {
        let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
        let target = document.getElementById(`tr${i+1}`)
        let fullName = document.createElement('td')
        fullName.innerHTML = points
        target.append(fullName)
    }
    })
}
