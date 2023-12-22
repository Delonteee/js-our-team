const ourTeam = [
    createProfile('Wayne Barnett', 'Founder & CEO', 'img/wayne-barnett-founder-ceo.jpg'),
    createProfile('Angela Caroll', 'Chief Editor', 'img/angela-caroll-chief-editor.jpg'),
    createProfile('Walter Gordon', 'Office Manager', 'img/walter-gordon-office-manager.jpg'),
    createProfile('Angela Lopez', 'Social Media Manager', 'img/angela-lopez-social-media-manager.jpg'),
    createProfile('Scott Estrada', 'Developer', 'img/scott-estrada-developer.jpg'),
    createProfile('Barbara Ramos', 'Graphic Designer', 'img/barbara-ramos-graphic-designer.jpg')
]; 

console.log(ourTeam);

for(let i = 0; i < ourTeam.length; i++){

    for(let key in ourTeam[i]){
        console.log(key,': ', ourTeam[i][key]);
    }

    const ourTeamList = document.getElementById('my-container');
    ourTeamList.innerHTML += `  <div class="col-6 text-center my-2 card p-2">
                                    <h2>${ourTeam[i]['name']}</h2>
                                    <h3>${ourTeam[i]['role']}</h3>
                                    ${ourTeam[i]['image']}
                                </div> `
};

//---- FUNCTIONS ----//

function createProfile(userName, userRole, userImage){
    let newProfile = {
        name : userName,
        role : userRole,
        image : `<img src="${userImage}">`
    };

    return newProfile;
};