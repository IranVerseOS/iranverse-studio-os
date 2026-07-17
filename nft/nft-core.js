class PersiaNexusNFTCore {


constructor(){

    this.collection =
    "PersiaNexus Eternal Legends";

    this.legends = [];

}



async load(){

    try{


        const response =
        await fetch("nft/legends.json");


        const data =
        await response.json();


        this.legends =
        data.legends;


        console.log(
        "NFT Core Loaded:",
        this.legends
        );


        return this.legends;


    }


    catch(error){


        console.error(
        "NFT Core Error:",
        error
        );


    }


}



getLegend(id){


return this.legends.find(
legend =>
legend.id === id
);


}



getCollection(){

return this.legends;

}



}


const PersiaNFT =
new PersiaNexusNFTCore();


PersiaNFT.load();
