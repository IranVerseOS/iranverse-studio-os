const PersiaNexusData = {

    async load(file) {

        try {

            const response = await fetch(`data/${file}`);

            if (!response.ok) {
                throw new Error("Data file not found");
            }

            return await response.json();

        } catch (error) {

            console.error(
                "PersiaNexus Data Error:",
                error
            );

            return null;
        }

    },


    async loadAll(){

        return {

            heroes:
            await this.load("heroes.json"),


            nft:
            await this.load("nft.json"),


            worlds:
            await this.load("worlds.json"),


            lore:
            await this.load("lore.json"),


            ai:
            await this.load("ai-config.json"),


            dashboard:
            await this.load("dashboard-config.json")

        };

    }

};


window.PersiaNexusData = PersiaNexusData;


console.log(
    "PersiaNexus Data Loader Initialized"
);
