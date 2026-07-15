class NFTDataConnector {


    constructor(source){

        this.source = source;

    }


    async load(){

        try {

            const response = await fetch(this.source);

            const data = await response.json();

            return data.guardians;

        }

        catch(error){

            console.error(
                "NFT Data Loading Error:",
                error
            );

            return [];

        }

    }



    transform(character){

        return {

            id: character.id,

            name: character.name,

            title: character.role,

            rarity:
            character.traits?.rarity || "Unknown",

            class:
            character.traits?.class || "Unknown",

            element:
            character.traits?.element || character.core,

            power:
            character.traits?.special || "Unknown"

        };

    }



    async getNFTData(){

        const characters = await this.load();


        return characters.map(character => {

            return this.transform(character);

        });

    }

}
