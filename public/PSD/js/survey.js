$("#new-user").on("click", function () {

  event.preventDefault();
  var nameInput = $("#user-name").val().trim();
  var actualName = $("#name").val().trim();
  var emailInput = $("#email").val().trim();
  var imagLink = $("#img-link").val().trim();
  var birthdayInput = $("#birthday").val().trim();
  var gender = $("#sex").val().trim();
  var userPass = $("#password").val().trim();
  var cfpass = $("#pass-conf").val().trim();
 
  if (!(userPass === cfpass)) {
    alert("Passwords Don't Match!!");
 
  } else {
 
    var userNameObject = {
      realName: actualName,
      name: nameInput,
      email: emailInput,
      profileImage: imagLink,
      birthday: birthdayInput,
      sex: gender,
      password: userPass,
      passCon: cfpass
 
    };
 
    console.log(userNameObject);
 
    // Don't do anything if the name fields hasn't been filled out
    if (nameInput = "") {
      console.log("there is no name")
    }
    upsertNewUser(userNameObject);
  }
 });



function upsertNewUser(newUserData) {
  console.log(newUserData);
  console.log(newUserData.username)
  $.get("/api/authors/checkId/" + currentUserName, function (data) {
    // console.log(data + "dataaaa")
    console.log(data);
    if (!data){
      $.post("/api/authors", newUserData)
      .then(function(res){
        window.location.href = "/login"
      })
    }
    else if (data.name == newUserData.username){
      alert("yo bro you cant use that username")
    }

  
  })
}


