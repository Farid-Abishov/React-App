
const Normal_mode=document.querySelector(".bi-brightness-high");

const Dark_mode=document.querySelector(".bi-moon");

const container=document.querySelector(".cntnt_container")

Dark_mode.addEventListener("click",()=> {
console.log("ok");
document.querySelector("body").style.backgroundColor = "white";
Normal_mode.style.display="inline-block";
Dark_mode.style.display="none";
Normal_mode.style.color="black";
container.style.backgroundColor="white"
}
);

Normal_mode.addEventListener("click",()=>{
document.querySelector("body").style.backgroundColor="#111828"
Normal_mode.style.display="none";
Dark_mode.style.display="inline-block"
container.style.backgroundColor="#111828"
});