function createMember() {
    event.preventDefault();
    const member = document.getElementById("memberNameInput").value;
    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];
    memberList.push(member);
    window.localStorage.setItem("memberList", JSON.stringify(memberList));
    
    renderMemberList();
    closePopup("popup_member_main");
    event.target.reset();
}

function renderMemberList() {

    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];
    const memberOptions = document.getElementById("member");
    memberOptions.innerHTML = "";
    const savedMemberOptions = document.getElementById("saved_member");
    savedMemberOptions.innerHTML = "";

    for(const member of memberList){
        memberOptions.innerHTML += `<option>${member}</option>`;
        savedMemberOptions.innerHTML += `<option>${member}</option>`;
    }

    const memberInitials = document.getElementById("members");
    memberInitials.innerHTML = "";

    for (const member of memberList) {
        const newMember = document.createElement("div");
        newMember.className = "member";
        newMember.innerHTML = `<p>${getInitials(member)} </p>`;
        memberInitials.appendChild(newMember);
    }
}

renderMemberList();

function getInitials(name) {
    let initials = "";
    let newWord = false;

    for (var i = 0; i < name.length; i++) {
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
