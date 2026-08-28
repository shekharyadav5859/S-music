import { usercheck } from "./likesong.js";
import { userData } from "./user.js";

export function save(element){
    if(usercheck() === false){
        return;
    }
   
let curr = userData.find(v=>v.vist === true);
  if (!curr) {
        return;
    }
if(curr){
  if (curr.save.some(song => song.id === element.id)){
        alert("This song alredy saved");
    }
    else{
        curr.save.push(element);


        
        localStorage.setItem("userData" ,JSON.stringify(userData));
    }
}
}