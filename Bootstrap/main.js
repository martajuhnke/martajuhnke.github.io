// let przycisk = document.getElementsById("main-btn").onclick = function() {
//     alert(123)
// }




function nazwa(){
    alert(123)
}


// function nazwaJakas() {
//     prompt("tralalalalalla")
// }

let classBtn = document.getElementsByClassName("btn-primary")

for (let i=0; i<classBtn.length; i++) {
    classBtn[i].onclick = nazwa;
    // if (classBtn[i].innerHTML === "Dalej") {
    //     classBtn[i].onclick = nazwaJakas;
    // }
    // classBtn[i].innerHTML = "ssaasasasasasasasa"
}