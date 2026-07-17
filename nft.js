// =======================================
// PersiaNexus NFT Engine v1.0
// =======================================


console.log("💎 PersiaNexus NFT Engine Activated");



// Load NFT Database

async function loadNFTs(){


try{


const response = await fetch("nft/nft.json");


const data = await response.json();



window.PersiaNexusNFTs = data;



console.log(
"NFT Collection Loaded:",
data
);



displayNFTs();



}


catch(error){


console.error(
"NFT Loading Failed:",
error
);


}


}






// Display NFT Cards

function displayNFTs(){



const container =
document.querySelector(".nft-grid");



if(
!container ||
!window.PersiaNexusNFTs
){

return;

}



container.innerHTML = "";



const nfts =
window.PersiaNexusNFTs.nfts;



nfts.forEach(nft => {



const card =
document.createElement("div");



card.className =
"nft-card";



card.innerHTML = `


<h3>

💎 ${nft.name}

</h3>



<h4>

${nft.title}

</h4>



<p>

<strong>ID:</strong>

${nft.id}

</p>



<p>

<strong>Rarity:</strong>

${nft.rarity}

</p>



<p>

<strong>Realm:</strong>

${nft.realm}

</p>



<p>

<strong>Element:</strong>

${nft.element}

</p>




<h4>

Abilities

</h4>



<ul>

${nft.powers.map(power =>

`<li>${power}</li>`

).join("")}

</ul>



<p>

${nft.story}

</p>



<div class="nft-status">


${nft.game_ready ? "🎮 Game Ready" : ""}

<br>

${nft.animation_ready ? "🎬 Animation Ready" : ""}

<br>

${nft.ai_profile_ready ? "🤖 AI Ready" : ""}


</div>



`;



container.appendChild(card);



});



}





// Start NFT System

loadNFTs();
