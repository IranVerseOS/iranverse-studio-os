/*
=====================================
 PersiaNexus NFT Detail Generator
 Version 1.0
=====================================
*/


async function loadNFTDetail(id){


const response =
await fetch(
"nft/characters/eternal-legends-characters.json"
);


const data =
await response.json();



const nft =
data.characters.find(
item => item.id === id
);



if(!nft){

console.log("NFT Not Found");

return;

}



document.getElementById("nft-name").innerHTML =
nft.persianName;



document.getElementById("nft-title").innerHTML =
nft.title;



document.getElementById("nft-image").src =
nft.image;



document.getElementById("nft-rarity").innerHTML =
"💎 "+nft.rarity;



document.getElementById("nft-power").innerHTML =
"⚡ Power "+nft.powerLevel;



document.getElementById("nft-type").innerHTML =
nft.type;



}
