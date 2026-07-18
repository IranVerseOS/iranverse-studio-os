async function loadHeroes(){

    const response = await fetch("../data/heroes.json");

    const data = await response.json();


    const container =
    document.getElementById("heroes-container");


    data.heroes.forEach(hero => {


        container.innerHTML += `

        <div class="pn-card">


            <img src="../${hero.nft.image}">


            <div class="card-body">


                <h2>
                ⚔️ ${hero.name}
                </h2>


                <h3>
                ${hero.title}
                </h3>


                <p>
                World:
                ${hero.world}
                </p>


                <p>
                Level:
                ${hero.level}
                </p>


                <p>
                Powers:
                ${hero.powers.join(" - ")}
                </p>


                <p>
                ${hero.story.origin}
                </p>


            </div>


        </div>

        `;


    });


}


loadHeroes();
