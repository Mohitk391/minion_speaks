var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#input-user");
var userOutput = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function convertedURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    alert("something wrong with the server, please try again after some time.");
    return "error is: "+error;
}

function clickEventHandler(){
    fetch(convertedURL(userInput.value))
                        .then(response => response.json())
                        .then(json =>{
                            var translatedText = json.contents.translated;
                            userOutput.innerText = translatedText;})
                        .catch(errorHandler);

    
}


btnTranslate.addEventListener("click", clickEventHandler);

    

