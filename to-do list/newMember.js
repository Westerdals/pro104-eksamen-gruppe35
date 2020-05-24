function createMember(){
    event.preventDefault();

    const member = document.getElementById("memberNameInput").value;

    const memberArray = {member}; //Trenger kanskje ikke memberArray..?

    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];

    memberList.push(memberArray);

    window.localStorage.setItem("memberList", JSON.stringify(memberList));

    renderMemberList();
    
    closeMemberPopup();
    event.target.reset();

}

function renderMemberList(){

    //Henter ut medlemslisten lagret i localstorage
    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];

    //Henter objektet for navne initialene på medlem fra HTML
    const memberInitials = document.getElementById("member_initials");

    //Tømmer navne initialene på medlem
    memberInitials.innerHTML = "";

    //Loopen kjører X antall ganger, der x er medlemmer i medlemslisten
    for (const memberArray of memberList) {

        //Lager en div og lagrer den i 'newMember'
        const newMember = document.createElement("div");

        //Henter verdiene fra objektet så initialene blir synlige på siden
        const {member} = memberArray;

        //setter opp members på siden.
        newMember.innerHTML =
        `<div 
            <p>${getInitials(member)} </p>
        </div>`;

        //Legger den nye div'en med tekst i til HTML doc
        memberInitials.appendChild(newMember);

    }

}

renderMemberList();

const name = document.getElementById("memberNameInput").value;

function getInitials(name){
    let initials = "";
    let newWord = false;

    for(var i=0; i < name.length; i++){
        if (!newWord) {
            initials += name[i];
            newWord = true;
        }

        if (name[i] === " ") {
            newWord = false;
        }
    }

    return initials.toUpperCase(member);

}