let particles =[];
let canvasContext;

//Particle:
//    -color
//    -x
//    -y
//    -velocity x
//    -velocity y
//    -timer
function createParticle(){
    let particle = {};
    particle.color = "white";

    //random number between 200 and 300
    particle.x = Math.random() * 100 + 200;  //  * (max + min)
    //random number between 200 and 300
    particle.y = Math.random() * 100 + 200;

    //random number between -10 and 10
    particle.velocity_x = Math.random() * 10 + Math.random() * -10;
    particle.velocity_y = Math.random() * 10 + Math.random() * -10;
    
    //random number between 2 and 5
    particle.timer = Math.random() * 3 + 2;
}

function loop(){
    //move particles
    for(let i = 0; i < particles.length; i++){
        let particle = particles[i];
        particle.x += particle.velocity_x;
        particle.y += particle.velocity_y;
        
        particle.timer -= 0.10;
        if (particle.timer < 0){
            //reset the particle
            particles[i] = createParticle();
        }
    }

    canvasContext.fillStyle = "black"; //setting the color.
    canvasContext.fillRect(0, 0, 500, 500); //filling the square.

    //draw particles
    for(let i = 0; i < particles.length; i++){
        let particle = particles[i];
        canvasContext.fillStyle = particle.color;
        canvasContext.fillRect(particle.x, particle.y, 5, 5);
    }
    window.requestAnimationFrame(loop());
}

window.addEventListener("load", function(){
    let canvasElement = document.querySelector("#visualization");
    canvasElement.width = 500;
    canvasElement.height = 500;
    canvasContext = canvasElement.getContext("2d");

    for(let i = 0; i < 500; i++){
        let particle = createParticle();
        particles.push(particle);
    }

    canvasContext.fillStyle = "black"; //setting the color.
    canvasContext.fillRect(0, 0, 500, 500); //filling the square.

    this.window.requestAnimationFrame(loop(){

    });
});