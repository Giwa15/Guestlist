function checkingGuestList() {

    var guestList = ["Tara", "Zino", "Favour", "Olori"] ;

var guestName = prompt("What is your name?")


if( guestList.includes(guestName)) {

    document.getElementById("invitation").innerHTML =  guestName + " welcome to the party";

}
else {

document.getElementById("invitation").innerHTML =  guestName + 
    " you are not invited  to the party, see you Later";
}


}
