var userSelection = Cookies.get('selection');

if(userSelection== 'Arceus'){
    document.getElementById("selection-container").innerHTML = '<img src="images/arceus.jpeg" alt="">';
    document.getElementById("Opponents-container").innerHTML = '<img src="images/picachu.jpeg" alt"">';
    
}



else if(userSelection == 'Raygon'){
    document.getElementById("selection-container").innerHTML = '<img src="images/raygon.jpeg" alt="">';
    document.getElementById("Opponents-container").innerHTML = '<img src="images/dragon.jpeg" alt"">';
}
 else if(userSelection == 'Pokemon'){
     document.getElementById("selection-container").innerHTML = '<img src="images/pokemon5.jpeg" alt="">';
     document.getElementById("Opponents-container").innerHTML = '<img src="images/gengar.jpeg" alt"">';


    }

    var selectscore = document.createElement("h5");
var compscore = document.createElement("h5");

selectscore.innerHTML= selectcurrenthealth + "/" + selectmaximum;
selectscore.setAttribute("id","select-container");

selecthtml.appendChild(selectscore);

compscore.innerHTML= compcurrent_health + "/" + compmaximum;
compscore.setAttribute("id","opponent-container");

comphtml.appendChild(compscore);




    var selectPokemonHP = document.getElementById("selectPokemonHP");
    selectPokemonHP.innerHTML = 50;
    var compPokemonHP = document.getElementById("compPokemonHP");
    compPokemonHP.innerHTML =50;

    var select = {
        pokemon_name : Cookies.get("selectpokemon"),
        current_health : Cookies.get("selectcurrentHealth"),
        maximum:Cookies.get("selectmaximum")
    }
    
    var comp = {
        pokemon_name : Cookies.get("compPokemonHP"),
        current_health : Cookies.get("compcurrentHealth"),
        maximum:Cookies.get("compmaximum")
    }


    

    
    

    function punching(){
        compPokemonHP.innerHTML = compPokemonHP.innerHTML -10; 
        selectPokemonHP.innerHTML = selectPokemonHP.innerHTML - 2;
        

        
    
    function score(){
        var body = document.getElementById("body")
        if(compPokemonHP <= 0) {
        
            document.getElementById("body").innerHTML = "<p> Congrats You are the winner!!! </p>";
        } else if(selectPokemonHP<=0){
            document.getElementById("body").innerHTML= "<p> Sorry Gameover!!! </p>"; 
        }

    }
    }

    function attack(){
        compPokemonHP.innerHTML = compPokemonHP.innerHTML -10;
        selectPokemonHP.innerHTML = selectPokemonHP.innerHTML -15;
        
    }
    function score(){
        var body = document.getElementById("body")
        if(compPokemonHP <= 0) {
        
            document.getElementById("body").innerHTML = "<p> Congrats You are the winner!!! </p>";
        } else if(selectPokemonHP<=0){
            document.getElementById("body").innerHTML= "<p> Sorry Gameover!!! </p>"; 
        }

    }


    function guard(){
        compPokemonHP.innerHTML = compPokemonHP.innerHTML -10;
        selectPokemonHP.innerHTML = selectPokemonHP.innerHTML -15;
        
    }
    function score(){
        var body = document.getElementById("body")
        if(compPokemonHP <= 0) {
        
            document.getElementById("body").innerHTML = "<p> Congrats You are the winner!!! </p>";
        } else if(selectPokemonHP<=0){
            document.getElementById("body").innerHTML= "<p> Sorry Gameover!!! </p>"; 
        }

    }

    function boxing(){
        compPokemonHP.innerHTML = compPokemonHP.innerHTML -10;
        selectPokemonHP.innerHTML = selectPokemonHP.innerHTML -2; 
        
    }
    function score(){
        var body = document.getElementById("body")
        if(compPokemonHP <= 0) {
        
            document.getElementById("body").innerHTML = "<p> Congrats You are the winner!!! </p>";
        } else if(selectPokemonHP<=0){
            document.getElementById("body").innerHTML= "<p> Sorry Gameover!!! </p>"; 
        }

    }







 
    