console.log("IranVerse OS Initialized");


// ===============================
// Hero System Check
// ===============================

if (typeof IranVerseHeroes !== "undefined") {
    console.log("Heroes System:", IranVerseHeroes);
}





// ===============================
// AI Status System
// ===============================

const aiButton = document.getElementById("ai-check");
const aiStatus = document.getElementById("ai-status");


if (aiButton) {

    aiButton.onclick = function () {


        if (window.IranVerseAI) {


            aiStatus.innerHTML =

            `
            Online ✅ <br>
            Mode: ${IranVerseAI.mode}<br>
            Version: ${IranVerseAI.version}
            `;


        } 
        
        else {


            aiStatus.innerHTML =
            "AI Core Not Connected";


        }

    };

}






// ===============================
// AI Command Approval System
// ===============================

const commandButton =
document.getElementById("send-command");


const commandBox =
document.getElementById("ai-command");


const responseBox =
document.getElementById("ai-response");



if(commandButton){


commandButton.onclick = function(){


let command =
commandBox.value.trim();



if(command){


if(window.AIApproval){


let request =
AIApproval.createRequest(command);



responseBox.innerHTML =

`
Status:
${request.status}

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

async function loadLore(){


try{


const response =
await fetch("story/lore.json");


const lore =
await response.json();



console.log(
"Lore System Activated:",
lore
);



window.IranVerseLore =
lore;



}


catch(error){


console.error(
"Lore loading failed:",
error
);


}


}


loadLore();








// ===============================
// IranVerseOs World Database Engine
// ===============================

async function loadWorlds(){


try{


const response =
await fetch("worlds/worlds.json");



const worldsData =
await response.json();



console.log(
"World Database Activated:",
worldsData
);



window.IranVerseWorlds =
worldsData;



displayWorlds();



}


catch(error){


console.error(
"World database loading failed:",
error
);


}


}



loadWorlds();










// ===============================
// World Visualization System
// ===============================

function displayWorlds(){



const container =
document.getElementById("world-container");



if(
!container ||
!window.IranVerseWorlds ||
!window.IranVerseWorlds.worlds
){

return;

}





container.innerHTML = "";





window.IranVerseWorlds.worlds.forEach(world => {



const card =
document.createElement("div");



card.className =
`world-card ${world.id}`;



const identity =
world.identity || {};





card.innerHTML =



`

<div class="world-symbol">

${identity.symbol || "◈"}

</div>



<h3>
${world.name}
</h3>



<h4>
${world.title}
</h4>



<p>
${world.description}
</p>



<p>
<strong>Type:</strong>
${world.type}
</p>



<p>
<strong>Status:</strong>
${world.status}
</p>



<p>
<strong>Element:</strong>
${identity.element || "Unknown"}
</p>



<p>
<strong>Theme:</strong>
${identity.theme || "Unknown"}
</p>



<p>
<strong>Rank:</strong>
${identity.rank || "Unknown"}
</p>



<p>
<strong>Energy Color:</strong>
${identity.color || "Unknown"}
</p>



<p>
<strong>Power Source:</strong>

${
world.power_source
?
world.power_source.join(", ")
:
"Unknown"
}

</p>



<p>

<strong>Lore:</strong>

${
world.lore
?
world.lore.origin
:
"Unknown"
}

</p>


`;



container.appendChild(card);



});



}
