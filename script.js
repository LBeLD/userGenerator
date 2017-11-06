var url = "https://randomuser.me/api/";
var btn = document.getElementById('btn');


window.onload = runFetchAPI();

btn.addEventListener("click", runFetchAPI)

// FUNCTIONS

//FETCH FUNCTION
function runFetchAPI(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError);
}

//HANDLE ERRORS
function handleErrors(response){
  if(!response.ok){
    throw Error(response.status);
  }
  return response;
};

function parseJSON(response){
  return response.json()
    .then(function(parsedData){
      return parsedData.results[0];
    })
}

//UPDATE PROFILE FUNCTION
function updateProfile(data){
  var firstName = data.name.first;
  var lasttName = data.name.last;
  var userName = data.login.username;
  var email = data.email;
  var city = data.location.city;
  var profilePicture = data.picture.medium;

  document.getElementById("fullname").innerText = firstName + " " + lasttName;
  document.getElementById("username").innerText = userName;
  document.getElementById("email").innerText = email;
  document.getElementById("city").innerText = city;
  document.getElementById("avatar").src = profilePicture;
};

//PRINT ERROR FUNCTION
function printError(error){
  console.log(error);
}
