export let userData = [];

export function user() {
 
    let right = document.querySelector(".right");
    let user = document.querySelector("#user");

    user.addEventListener("click", () => {

        let userdiv = document.createElement("div");
        userdiv.classList.add("user");

        // Remove button
        let remove = document.createElement("div");
        remove.classList.add("remove");
        remove.innerText = "+";

        remove.addEventListener("click", () => {
            userdiv.remove();
        });

        userdiv.appendChild(remove);

        // User image / first letter
        let imguser = document.createElement("div");
        imguser.classList.add("imguser");
        imguser.innerText = "?";

        // Username
        let userName = document.createElement("input");
        userName.type = "text";
        userName.classList.add("username");
        userName.placeholder = "Username";

        // Password
        let userPass = document.createElement("input");
        userPass.type = "password";
        userPass.classList.add("userpass");
        userPass.placeholder = "Password";

        // Button
        let button = document.createElement("button");
        button.classList.add("button");
        button.innerText = "Submit";

        button.addEventListener("click", () => {

            let name = userName.value.trim();
            let pass = userPass.value;

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
                vist: true
            };


            // Array me add
            userData.push(newUser);
            // Inputs hide
            userName.style.display = "none";
            userPass.style.display = "none";
            button.style.display = "none";
        });

        userdiv.appendChild(imguser);
        userdiv.appendChild(userName);
        userdiv.appendChild(userPass);
        userdiv.appendChild(button);

        right.appendChild(userdiv);
    });
}