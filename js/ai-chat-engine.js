/*
=====================================
 PersiaNexus AI Chat Engine
 Version 1.0
=====================================
*/


function sendAIMessage(){


const input =
document.getElementById(
"ai-command"
);


const chat =
document.getElementById(
"ai-chat"
);



const question =
input.value;



if(!question) return;



chat.innerHTML += `

<p>
👤 Founder:
${question}
</p>

`;



let answer =
generateAIAnswer(question);



chat.innerHTML += `

<p>
🧠 AI Nexus:
${answer}
</p>

`;



input.value="";

}




function generateAIAnswer(question){


let q =
question.toLowerCase();



if(
q.includes("رستم")
){

return `

رستم یکی از نگهبانان اصلی PersiaNexus است.
قدرت او از انرژی باستانی جنگجویان ایران سرچشمه می‌گیرد.

`;

}



if(
q.includes("پروژه") ||
q.includes("وضعیت")
){

return `

PersiaNexus در حال توسعه است.
سیستم‌های Core، NFT، Marketplace و AI Nexus فعال هستند.

`;

}



if(
q.includes("هدف")
){

return `

هدف PersiaNexus ساخت یک جهان سینمایی ترکیبی از اسطوره‌های ایرانی، هوش مصنوعی و فناوری آینده است.

`;

}



return `

فرمان دریافت شد.
AI Nexus در حال تحلیل اطلاعات پروژه است.

`;



}
