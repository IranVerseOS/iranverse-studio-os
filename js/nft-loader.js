// ======================================
// PersiaNexus NFT Loader
// Version 1.0.0
// ======================================

async function loadNFTs() {

    try {

        const response = await fetch(
            "nft/characters/eternal-legends-characters.json"
        );

        const data = await response.json();

        const container =
            document.getElementById("nft-container");


        if (!container) {
            console.log(
                "NFT container not found"
            );
            return;
        }


        data.characters.forEach(character => {


            const card = document.createElement("div");

            card.className = "nft-card";


            card.innerHTML = `

            <img src="${character.image}"
            alt="${character.name}">


            <h2>
            ${character.name}
            </h2>


            <h3>
            ${character.title}
            </h3>


            <p>
            💎 Rarity:
            ${character.rarity}
            </p>


            <p>
            ⚡ Power:
            ${character.powerLevel}
            </p>


            <p>
            🌍 Element:
            ${character.element}
            </p>


            <button onclick="
            openNFTStory('${character.story}')
            ">
            View Story
            </button>


            `;


            container.appendChild(card);


        });


    }

    catch(error){

        console.error(
            "NFT Loading Error:",
            error
        );

    }

}



async function openNFTStory(file){


    const response =
    await fetch(
        "nft/stories/" + 
        file.split("/").pop()
    );


    const story =
    await response.json();


    console.log(
        story
    );


}



document.addEventListener(
"DOMContentLoaded",
loadNFTs
);
