async function loadComponent(
    elementId,
    filePath
){

    try{

        const response =
        await fetch(filePath);


        if(!response.ok){

            throw new Error(
                "Component not found"
            );

        }


        const html =
        await response.text();


        document.getElementById(elementId)
        .innerHTML = html;


    }

    catch(error){

        console.error(
            "PersiaNexus Component Error:",
            error
        );

    }

}



window.PersiaNexusComponents = {

    header(){

        loadComponent(
            "header-container",
            "components/header.html"
        );

    }

};



console.log(
    "PersiaNexus Components System Ready"
);
