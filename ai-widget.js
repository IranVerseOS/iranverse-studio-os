function createAIWidget(){

const widget = document.createElement("div");

widget.innerHTML = `

<div id="ai-button">
🧠
</div>

<div id="ai-panel">

<h3>IranVerse AI Nexus</h3>

<p>
Founder Companion is ready.
</p>

<input 
type="text"
placeholder="Ask AI..."
>

<button>
Send
</button>

</div>

`;

document.body.appendChild(widget);

}


document.addEventListener(
"DOMContentLoaded",
()=>{

createAIWidget();


const button = document.getElementById("ai-button");

const panel = document.getElementById("ai-panel");


button.onclick = function(){

if(panel.style.display === "block"){

panel.style.display="none";

}

else{

panel.style.display="block";

}

};


}
);
