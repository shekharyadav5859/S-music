
export function setting(){
let right = document.querySelector(".right")
let setting = document.querySelector("#setting");

setting.addEventListener("click" ,()=>{
    let settingdiv = document.createElement("div");
    settingdiv.classList.add("setting");
    
  // remove
  
  let remove = document.createElement("div");
  remove.classList.add("remove");

  settingdiv.appendChild(remove); 


  //user
  let user = document.createElement("div");
  let plususer = document.createElement("h");
  
  user.classList.add("user");
 
  
// first time user
let checkuser = false;
user.addEventListener("click",()=>{
  if(!checkuser){
  plususer.innerText = "+";

let entry = document.createElement("div");
entry.classList.add("entry");


settingdiv.appendChild(entry);


  }

})

user.appendChild(plususer);



  settingdiv.appendChild(user);







// right in put setting box
    right.appendChild(settingdiv);

})




}