function draw_dot(image_data, x, y, color) {
    var index 
    index = 4 * (x + (y * canvasKita.width))
    image_data.data[index] = color.r;
    image_data.data[index+1] = color.g;
    image_data.data[index+2] = color.b;
    image_data.data[index+3] = 255;
}


function lingkaran_polar(imageDataTemp, xc, yc, radius, color) {
    for (var theta = 0; theta < Math.PI * 2; theta += 0.01) {
        x = xc + radius * Math.cos(theta);
        y = yc + radius * Math.sin(theta);

        draw_dot(imageDataTemp, Math.ceil(x), Math.ceil(y), color);
    }
}

function arrow(imageData, x, y, color) {
    for(let i = 0; i<30; i++) {
        draw_dot(imageData, x+35+i, y, color);
    }
    for(let i = 0; i<5; i++) {
        draw_dot(imageData, x+65-i, y-i, color);
        draw_dot(imageData, x+65-i, y+i, color);
    }
}

function draw_grass() {
    const startY = canvasKita.height - GRASS_HEIGHT; 

    ctx.fillStyle = GRASS_COLOR_DARK;
    ctx.fillRect(0, startY, canvasKita.width, GRASS_HEIGHT);

    for (let x = 0; x < canvasKita.width; x += GRASS_TRIANGLE_BASE / 2) { 
        ctx.beginPath();
        let randomHeight = GRASS_TRIANGLE_HEIGHT + (Math.random() * 10 - 5);
        let currentGrassColor = (Math.floor(x / (GRASS_TRIANGLE_BASE * 2)) % 2 === 0) ? GRASS_COLOR_DARK : GRASS_COLOR_LIGHT;
            
        ctx.moveTo(x, startY); 
        ctx.lineTo(x + GRASS_TRIANGLE_BASE / 2, startY - randomHeight); 
        ctx.lineTo(x + GRASS_TRIANGLE_BASE, startY);
        ctx.closePath();
        ctx.fillStyle = currentGrassColor;
        ctx.fill();
        ctx.strokeStyle = currentGrassColor; 
        ctx.stroke();
    }
}
