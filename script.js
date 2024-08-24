console.log("toast notification");

let button =document.querySelector("#button");
let toasts=document.querySelector("#toasts");

let messages=["message one","message two" ,"message three"];

let types=["success" , "error" ,"info"];

let getRandomMessage=()=>{
   return messages[Math.floor(Math.random()*messages.length)];
}
let getRandomType=()=>{
    return types[Math.floor(Math.random()*types.length)];
}
const createNotification=(message=null, type=null)=>{
     const notif= document.createElement("div");
     notif.classList.add("toast");
     notif.classList.add(type?type:getRandomType());
     notif.innerText=message?message:getRandomMessage();
     toasts.appendChild(notif);
    setTimeout(()=>notif.remove(),3000) ;
}

button.addEventListener("click",()=>{
    createNotification();
});