
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
    
    // Creare un contatore da 1 a 100
    for (let i = 1; i <= 100; i++) {
        // creare elemento square
        //aggiungo i quadrati al minefield
        // const square = document.createElement("div");
        const square = createNewElement(i);
        
        // aggiungere elemento square al parent minefield
        const minefield = document.getElementById("minefield");
        minefield.append(square);
        
        //add eventlistener onclick
        square.addEventListener("click", function() {
            square.classList.toggle("hold");
        })
    }
})

// create functions
function createNewElement(num){
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerText = num;
    return square;
}