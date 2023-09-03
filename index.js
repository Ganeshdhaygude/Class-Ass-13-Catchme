const button=document.getElementById("catchme");
button.addEventListener("mouseover",()=>{
    const top=Math.floor(Math.random()*500);
    const left=Math.floor(Math.random()*800);
    button.style.left=left+"px";
    button.style.top=top+"px";
});