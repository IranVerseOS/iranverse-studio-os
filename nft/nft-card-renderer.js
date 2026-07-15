class NFTCardRenderer {

    constructor(container){
        this.container = container;
    }


    createCard(nft){

        return `
        <div class="nft-card">

            <div class="nft-rarity">
                ${nft.rarity}
            </div>

            <h2>
                ${nft.name}
            </h2>

            <p>
                ${nft.title}
            </p>

            <div class="nft-info">

                <span>
                Class: ${nft.class}
                </span>

                <span>
                Element: ${nft.element}
                </span>

                <span>
                Power: ${nft.power}
                </span>

            </div>

        </div>
        `;

    }


    render(nfts){

        this.container.innerHTML = "";

        nfts.forEach(nft => {

            this.container.innerHTML += 
            this.createCard(nft);

        });

    }

}
