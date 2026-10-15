 async function setup() {
  const noiseImg = await loadImage('noise.jpg'); // permite que a imagem seja "chamada" mais tarde e carregada antes de tudo

 createCanvas(800, 784);
 background(233, 237, 232);

 noStroke(); // vermelho
 fill(238, 36, 0)
 rect (0, 0, 364, 312)

 noStroke(); // azul
 fill(31, 29, 113)
 rect (359, 502, 260, 237)

 noStroke(); // amarelo
 fill(246, 206, 0)
 rect (0, 503, 80, 280)

 stroke(2, 2, 2);
 strokeWeight(15);
 line (364, 0, 356, 784);

 stroke(2, 2, 2);
 strokeWeight(21);
 line (-309, 309, 800, 309);

 stroke(2, 2, 2);
 strokeWeight(20);
 line (-500, 500, 800, 500);

 stroke(2, 2, 2);
 strokeWeight(13);
 line (76, 510, 73, 784);

 stroke(2, 2, 2);
 strokeWeight(15);
 line (358, 741, 619, 741);

 stroke(2, 2, 2);
 strokeWeight(11);
 line (621, 505, 621, 784);
 

 drawingContext.save(); // mesma função de push mas para desenho

 const g = drawingContext.createLinearGradient(0, 784, 0, 500); // coordenadas de onde começa e acaba o primeiro degradê. o 1 valor e 3 são verticais e os restantes horizontais
 g.addColorStop(0, 'rgba(150, 90, 110, 0.2)'); // define a cor no ínicio do degradê e a opacidade                  
 g.addColorStop(1, 'rgba(150, 90, 110, 0)'); // define a cor no fim do degradê e a opacidade

 drawingContext.fillStyle = g; 
 drawingContext.fillRect(0, 500, 800, 384); // comando que faz pintar com degradê

 drawingContext.restore(); // mesma função de pop mas para desenho

 push(); //guarda definições atuais, para o que vem depois não afetar o código anterior
 blendMode(MULTIPLY); // garante que as outras camadas ainda são visíveis
 tint (255,120); // cor e opacidade da imagem
 image (noiseImg, 0, 0, width, height);
 pop(); // termina a função, tudo o que vem depois não é afetado 

 }

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

