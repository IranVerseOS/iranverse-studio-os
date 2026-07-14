console.log("IranVerse OS Initialized");
console.log(IranVerseHeroes);
const aiButton = document.getElementById("ai-check");

const aiStatus = document.getElementById("ai-status");


if(aiButton){

aiButton.onclick = function(){

if(window.IranVerseAI){

aiStatus.innerHTML = 
`
Online ✅ <br>
Mode: ${IranVerseAI.mode}<br>
Version: ${IranVerseAI.version}
`;

}

else{

aiStatus.innerHTML =
"AI Core Not Connected";

}

};

}
const commandButton =
document.getElementById("send-command");


const commandBox =
document.getElementById("ai-command");


const responseBox =
document.getElementById("ai-response");


if(commandButton){

commandButton.onclick=function(){


let command = commandBox.value;


if(command){

if(window.AIApproval){

let request =
AIApproval.createRequest(command);


responseBox.innerHTML =

`
Status: ${request.status}

<br><br>

Request:

${request.action}

<br><br>

Waiting Founder Decision
`;

}
else{

responseBox.innerHTML =
"Approval System Offline";

}
}


};

}

// ===============================
// IranVerseOs Lore Engine
// ===============================

async function loadLore() {
    try {
        const response = await fetch("story/lore.json");
        const lore = await response.json();

        console.log("Lore System Activated:", lore);

        window.IranVerseLore = lore;

    } catch (error) {
        console.error("Lore loading failed:", error);
    }
}

loadLore();
