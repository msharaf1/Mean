str = "This is )a (test) of )}";

function ValidateBraces(str){
    var validBraces = {"()": 0, "{}":0, "[]":0};

    for(var i = 0; i < str.length; i++){
        if(str[i]==="("){
            validBraces = ["()"] +1;
        }else if(str[i]===[")"]){
            validBraces=["()"] -1;
        }
    }console.log(validBraces);
}

ValidateBraces(str);