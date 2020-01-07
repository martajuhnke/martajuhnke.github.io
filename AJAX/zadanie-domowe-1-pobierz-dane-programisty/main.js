
let przycisk = document.getElementById("przycisk");
console.log(przycisk);

function getData() {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then(response => {
    console.log(response);
          let div = document.createElement("div");
            div.id = "dane-programisty";
            div.innerHTML = response.imie + " " + response.nazwisko + " " + response.zawod + " " + response.firma;
            
            console.log(div);
            document.body.appendChild(div);

                     
    });

}
przycisk.addEventListener("click", getData);

 
