# Descrição decisões tomadas

Para reproduzir a obra, comecei por colocar a imagem original no Illustrator, para conseguir medir com precisão as posições e dimensões de cada elemento. Com essas medidas, criei o canvas com o tamanho certo e defini a cor de fundo. 

Escrevi todo o código dentro de uma função async porque precisava de carregar a textura de ruído, e carregar uma imagem demora. Sem esperar, o programa tentava desenhá-la antes de estar pronta. Com async consegui usar o await antes de loadImage, que faz o programa parar até a imagem estar carregada. Guardei a imagem na constante noiseImg para a poder usar só no fim do código, quando a textura é aplicada por cima de tudo. 

Usei a constante noiseImg para guardar a imagem de textura, visto que a imagem é carregada numa linha mas só é usada no final do código, precisei de lhe dar um nome para a poder chamar mais tarde. 

Os retângulos foram desenhados sem contorno (noStroke) e preenchidos com as cores da pintura (vermelho, azul e amarelo). As linhas pretas foram desenhadas à parte, com stroke e diferentes valores de strokeWeight, uma vez que na obra original a espessura varia de linha para linha. 

Para o degradê, criei a constante g, que guarda o nome e as coordenadas onde o gradiente começa e termina. Com g.addColorStop, defini a cor das posições 0 e 1 (inicial e final, respetivamente) para um rosa acinzentado semelhante ao da pintura, com baixa opacidade na posição 0 e opacidade nula na posição 1, para que a transição fosse suave. De seguida, drawingContext.fillRect pintou a área do degradê, e drawingContext.restore repôs as definições anteriores, para que não afetassem os elementos seguintes. Por fim, utilizei push e pop para isolar a aplicação da textura. Com blendMode, a imagem mistura-se com as camadas inferiores em vez de as cobrir, e com tint controlei a sua opacidade. 
