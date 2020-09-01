

function select(userSelection){
    Cookies.set("selection",userSelection);
    window.open("battle.html","_self")



    Cookies.set("selectcurrentHealth","50");
    Cookies.set("compcurrentHealth","50");
    Cookies.set("selectmaximum","50");
    Cookies.set("compmaximum","50");

    window.open("battle.html")

}
