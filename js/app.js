function select(userSelection){
    Cookies.set("selection",userSelection);
    window.open("battle.html","_self")

} 




function select2(userSelection){
    Cookies.set("selection",userSelection);
    window.open("battle.html","_self")

} 

function select3(userSelection){
    Cookies.set("selection",userSelection);
    window.open("battle.html","_self")

}
function game(compPokemonHP){
Cookies.set("compokemon",compPokemonHP);
    Cookies.set("selectcurrentHealth","50");
    Cookies.set("compcurrentHealth","50");
    Cookies.set("selectmaximum","50");
    Cookies.set("compmaximum","50");

    window.open("battle.html")

}
