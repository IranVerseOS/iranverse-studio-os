// PersiaNexus Data Loader System

const PersiaNexusData = {

    heroes: [],
    worlds: [],
    lore: []

};



// Load JSON File

async function loadJSON(path){

    try{

        const response = await fetch(path);

        if(!response.ok){

            throw new Error(
                "Cannot load: " + path
            );

        }


        return await response.json();


    }
    catch(error){

        console.error(
            "PersiaNexus Data Error:",
            error
        );


        return null;

    }

}




// Initialize Database

async function initializePersiaNexusData(){


    const heroes =
    await loadJSON(
        "data/heroes.json"
    );


    const worlds =
    await loadJSON(
        "data/worlds.json"
    );


    const lore =
    await loadJSON(
        "data/lore.json"
    );



    if(heroes){

        PersiaNexusData.heroes =
        heroes.heroes;

    }



    if(worlds){

        PersiaNexusData.worlds =
        worlds.worlds;

    }



    if(lore){

        PersiaNexusData.lore =
        lore.lore;

    }



    console.log(
        "PersiaNexus Database Loaded",
        PersiaNexusData
    );


}



initializePersiaNexusData();
