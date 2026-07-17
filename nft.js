// =======================================
// PersiaNexus NFT Engine v2.0
// Genesis Collection System
// =======================================


console.log("💎 PersiaNexus NFT Engine v2 Activated");



async function loadNFTs(){


try{


const response = await fetch("nft/nft.json");


const data = await response.json();


window.PersiaNexusNFTCollection = data;



console.log(
"NFT Collection Loaded:",
data.collection
);



renderNFTCollection();



}

catch(error){


console.error(
"NFT Engine Error:",
error
);


}


}






function renderNFTCollection(){



const container =
document.querySelector(".nft-grid");



if(!container) return;



container.innerHTML = "";



const collection =
window.PersiaNexusNFTCollection.nfts;



collection.forEach(nft => {



const card =
document.createElement("div");



card.className =
"nft-card premium";



card.innerHTML = `



<div class="nft-image">

<img 
src="${nft.image}"
alt="${nft.name}"
onerror="this.style.display='none'"
>

</div>



<div class="nft-content">


<h2>

⚔ ${nft.name}

</h2>



<h3>

${nft.title}

</h3>



<div class="nft-badge">

${nft.rarity}

</div>



<p>

<strong>Collection:</strong>

PersiaNexus Genesis

</p>



<p>

<strong>ID:</strong>

${nft.id}

</p>



<p>

<strong>Realm:</strong>

${nft.realm}

</p>



<p>

<strong>Element:</strong>

${nft.element}

</p>



<p>

<strong>Class:</strong>

${nft.class}

</p>



<p>

<strong>Power Score:</strong>

${nft.power_score}

</p>



<p>

<strong>Level:</strong>

${nft.level}

</p>





<h4>
Attributes
</h4>



<ul>

<li>
Strength:
${nft.attributes.strength}
</li>


<li>
Intelligence:
${nft.attributes.intelligence}
</li>


<li>
Energy:
${nft.attributes.energy}
</li>


<li>
Spirit:
${nft.attributes.spirit}
</li>


<li>
Defense:
${nft.attributes.defense}
</li>


</ul>





<p class="nft-story">

${nft.story}

</p>




<div class="nft-status">


${nft.nft_status.mint}

<br>


${nft.nft_status.game_ready ? "🎮 Game Ready" : ""}

<br>


${nft.nft_status.animation_ready ? "🎬 Animation Ready" : ""}

<br>


${nft.nft_status.ai_profile_ready ? "🤖 AI Ready" : ""}


</div>



</div>



`;



container.appendChild(card);



});



}






loadNFTs();
