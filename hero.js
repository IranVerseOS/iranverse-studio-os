// =================================
// IranVerseOs Hero Gallery Engine
// =================================

async function loadHeroes(){

    try{

        const response = await fetch("heroes/heroes.json");

        const data = await response.json();

        window.IranVerseHeroes = data;

        console.log(
            "Hero Database Loaded:",
            data
        );

        displayHeroes();

    }

    catch(error){

        console.error(
            "Hero Loading Failed:",
            error
        );

    }

}




function displayHeroes(){


    const container =
    document.getElementById("hero-container");


    if(
        !container ||
        !window.IranVerseHeroes
    ){

        return;

    }



    container.innerHTML = "";



    IranVerseHeroes.heroes.forEach(hero=>{


        const card =
        document.createElement("div");



        card.className =
        "hero-card";



        card.innerHTML = `


        <div class="hero-avatar">

        ${
            hero.visual?.avatar
            ?
            `<img src="${hero.visual.avatar}">
            `
            :
            "⚔️"
        }

        </div>



        <h2>
        ${hero.name}
        </h2>



        <h4>
        ${hero.title}
        </h4>



        <p>
        <b>World:</b>
        ${hero.world}
        </p>



        <p>
        <b>Class:</b>
        ${hero.class}
        </p>



        <p>
        <b>Element:</b>
        ${hero.element}
        </p>



        <p>
        <b>Rank:</b>
        ${hero.rank}
        </p>



        <p>
        <b>Power:</b>
        ${hero.powers.join(", ")}
        </p>



        `;



        container.appendChild(card);



    });


}



loadHeroes();

// =================================
// IranVerseOs Hero Engine v1.0
// =================================


async function loadHeroes(){

try{


const response =
await fetch("heroes/heroes.json");


const data =
await response.json();



window.IranVerseHeroes =
data;



console.log(
"Hero Database Online:",
data
);



renderHeroes();



}

catch(error){

console.error(
"Hero Database Error:",
error
);


}

}




function renderHeroes(){



const container =
document.getElementById(
"hero-container"
);



if(
!container ||
!window.IranVerseHeroes
){

return;

}




container.innerHTML = "";



IranVerseHeroes.heroes.forEach(hero=>{


const card =
document.createElement("div");



card.className =
"hero-card";




card.innerHTML = `


<div class="hero-avatar">


${
hero.visual && hero.visual.avatar

?

`<img src="${hero.visual.avatar}">
`

:

"⚔️"

}


</div>



<h3>
${hero.name}
</h3>



<h4>
${hero.title}
</h4>



<p>
<b>World:</b>
${hero.world}
</p>


<p>
<b>Rank:</b>
${hero.rank}
</p>



<p>
<b>Element:</b>
${hero.element}
</p>



<p>
<b>Powers:</b>

${hero.powers.join(", ")}

</p>


`;



container.appendChild(card);



});


}



loadHeroes();
