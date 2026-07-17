async function loadProjectData(){

    try{

        const response =
        await fetch("project-data.json");


        const data =
        await response.json();


        console.log(
            "PersiaNexus Data Loaded",
            data
        );


        updateProgress(
            data.project.overall_progress
        );


        renderSystems(
            data.project.systems
        );


    }

    catch(error){

        console.error(
            "Project Engine Error:",
            error
        );

    }

}




function updateProgress(progress){

    const bar =
    document.querySelector(".fill");


    if(bar){

        bar.style.width =
        progress + "%";


        bar.innerHTML =
        progress + "%";

    }

}




function renderSystems(systems){

    const grid =
    document.querySelector(".grid");


    if(!grid) return;


    grid.innerHTML = "";


    systems.forEach(system=>{


        grid.innerHTML += `


        <div class="card">

        <h3>
        ${system.name}
        </h3>


        <p>
        Status:
        ${system.status}
        </p>


        <div class="small-bar">

        <span style="width:${system.progress}%">

        ${system.progress}%

        </span>

        </div>


        </div>


        `;


    });


}



loadProjectData();
