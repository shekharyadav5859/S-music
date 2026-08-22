

export let userData = JSON.parse(localStorage.getItem("userData")) || [];
export function user() {
    let right = document.querySelector(".right");
    let user = document.querySelector("#user");
    let bottom = document.querySelector(".music-player");

    //usermainbox
    user.addEventListener("click", () => {
//

bottom.style.display = "none";

    // Right content  blur 
    right.classList.add("blurcontent");
        let userdiv = document.createElement("div");
        userdiv.classList.add("user");

        // Remove button
        let remove = document.createElement("div");
        remove.classList.add("remove");
        remove.innerText = "×";

        remove.addEventListener("click", () => {
            userdiv.remove();
            right.classList.remove("blurcontent");
            bottom.style.display="flex";
        });

        userdiv.appendChild(remove);

       
        // User image / first letter
        let imguser = document.createElement("div");
        imguser.classList.add("imguser");
        imguser.innerText = "?";

       

       // Username
let userName = document.createElement("input");
userName.id = "Name";
userName.type = "text";
userName.classList.add("username");
userName.placeholder = "Username";

// Password
let userPass = document.createElement("input");
userPass.id = "Pass";
userPass.type = "password";
userPass.classList.add("userpass");
userPass.placeholder = "Password";

//Login Button
let login = document.createElement("button");
login.classList.add("login");
login.innerText = "Login";

// singup buttom
let button = document.createElement("button");
button.id = "but";
button.classList.add("button");
button.innerText = "SingUp";



//alertText
let alerttext = document.createElement("button");
alerttext.classList.add("alerttext");
alerttext.innerText = "If you haven't registered yet, please sign up. Otherwise, log in.";


// localStorage 
//let userData = JSON.parse(localStorage.getItem("userData")) || [];
//localStorage.removeItem("userData");


//hover effect on button of singup
button.addEventListener("mouseenter", () => {
 login.style.filter = "blur(3px)";
alerttext.innerText = "You haven't registered yet. Please sign up first.";
});
button.addEventListener("mouseleave", () => {
 login.style.filter = "blur(0)";
 alerttext.innerText = "If you haven't registered yet, please sign up. Otherwise, log in.";
});


// Hover effect of login button
login.addEventListener("mouseenter", () => {
   button.style.filter = "blur(3px)";
alerttext.innerText ="Please click the Login button first, then enter your username.";
});

login.addEventListener("mouseleave", () => {
 button.style.filter = "blur(0)";
alerttext.innerText = "If you haven't registered yet, please sign up. Otherwise, log in.";
});





// button click wroking
button.addEventListener("click", () => {
 let name = userName.value.trim();
 let pass = userPass.value;
//  username already registered
    let existingUser = userData.find(
        (u) => u.userName === name
    );
    if (existingUser) {
        userName.value = "";
        userPass.value = "";
        alerttext.innerText ="This username is already registered. Please login.";
         return;
        }
if (name === "" || pass === "") {
        return;
    }
 // First letter
    imguser.innerText = name.charAt(0).toUpperCase();
 // New user object
    let newUser = {
        id: userData.length + 1,
        userName: name,
        Password: pass,
        vist: true ,
        like:[],
        playlist:[],
        library:[]
         

    };
    // Array push
    userData.push(newUser);
    console.log(userData);
    // localStorage me save
    localStorage.setItem("userData", JSON.stringify(userData));

    
    //userlogo change
 let logo =document.querySelector(".ri-user-3-line");
 logo.style.color = "green";
 
   let messge = document.createElement("button");
   messge.classList.add("messge");
 
   messge.innerText ="Successfully Signed Up!";
   userdiv.appendChild(messge);
 
   //maintextchanga
   imguser.innerText = name.charAt(0).toUpperCase();

let maintext = document.querySelector("#maintext");
maintext.innerText = imguser.innerText;

    // Inputs hide
    userName.style.display = "none";
    userPass.style.display = "none";
    button.style.display = "none";
    alerttext.style.display = "none";

});
       





//login click working
login.addEventListener("click" ,()=>{
 let name = userName.value.trim();
 let pass = userPass.value;
 if (name === "" || pass === "") {
        alerttext.innerText = "Please enter username and password.";
        return;
    }
let user = userData.find((u)=>{
return u.Password ==pass && u.userName == name;
})  

console.log(user);
  if (user) {
  alerttext.innerText = "Login successful!";
// ProfileName
 maintext.innerText = user.userName.charAt(0).toUpperCase();
 // First letter
 imguser.innerText =user.userName.charAt(0).toUpperCase();
 login.style.backgroundColor = "green";

 //userlogo change
 let logo =document.querySelector(".ri-user-3-line");
 logo.style.color = "green";
            userdiv.style.display = "none";
            right.classList.remove("blurcontent");
            bottom.style.display="flex";
//console.log(userData);

    } else {
 
        alerttext.innerText =
            "Invalid username or password.";
    }

})




        userdiv.appendChild(imguser);
        userdiv.appendChild(userName);
        userdiv.appendChild(userPass);
        userdiv.appendChild(login);
        userdiv.appendChild(button);
        
        userdiv.appendChild(alerttext);

        right.appendChild(userdiv);
    });
}