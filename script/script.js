// Creare un contatore da 1 a 100
for (let i = 1; i <= 100; i++) {
    // creare elemento square
    //aggiungo i quadrati al minefield
    const square = document.createElement("div");
    square.classList.add("square");
    
    // aggiungere elemento square al parent minefield
    const minefield = document.getElementById("minefield");
    minefield.append(square);
    square.innerText = ([i]);

    square.addEventListener("click", function() {
        square.classList.toggle("hold");
    })
}

