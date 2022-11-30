// Creare un contatore da 1 a 100
for (let i = 1; i <= 100; i++) {
    //aggiungo tanti quadrati al minefield
    // creare elemento square
    const square = document.createElement("div");
    square.classList.add("square");
    
    // aggiungere elemento square al parent minefield
    const minefield = document.getElementById("minefield");
    minefield.append(square)
}