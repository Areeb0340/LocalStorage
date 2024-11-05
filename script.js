


function setUser() {
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;


    let userData = {name: userName, email:userEmail, password:userPassword};

    let users = JSON.parse(localStorage.getItem('user'));

    if (users) {

        for (let i = 0; i < users.length; i++) {
            if (user[i].email==userEmail) {

                alert('Email already exist');
                return;
                
            }
            
        }
        
    }

    if (users) {
        users.push(userData)
        localStorage.setItem('users', JSON.stringify(users))
        
    }else{
        localStorage.setItem('users', JSON.stringify([userData]))
    }
    
}

function checkUser() {
    let userEmail = document.getElementById('inputEmail').value;
    let userPass = document.getElementById('inputPass').value;
    let allUsers = JSON.parse(localStorage.getItem('users'));

    let notMached = true;
for (let i = 0; i < allUsers.length; i++) {

    
    if (allUsers[i].email==userEmail) {

          notMached = false;
            if(userPass == allUsers[i].password){
                alert("Success")
                window.location.href = "./welcom.html"
            }else{
                alert("Invalid Password")
            }
            break;
        }
    }

    if(notMached){
        alert("Email Did not Matched");
    }
}
        
    