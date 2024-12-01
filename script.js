const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
    if(input.value.trim() === ""){
        alert("Write Any Task To Add")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<span>${input.value}</span> <img src="/close.png">`;
        ul.appendChild(li);
    }
    input.value = "";
})

ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
    }
})