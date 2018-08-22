
var currentUserName;
var password;

//localStorage.removeItem("user");

$("#login-button").on("click", function () {
    event.preventDefault();
    localStorage.clear();
    currentUserName = $("#username-val").val().trim();
    password = $("#password-val").val().trim();

     console.log(currentUserName);

 

     $.get("/api/authors/" + currentUserName + "/" + password, function (data) {
        if (!data){
            alert("there is no user")
        }
        
        localStorage.setItem("user", data.id)
        console.log(localStorage);
        window.location.href = "../newsfeed";

    });
    
})


//data.Posts