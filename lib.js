function draw_dot(image_data, x, y, color) {
    var index 
    index = 4 * (x + (y * canvasKita.width))
    image_data.data[index] = color.r;
    image_data.data[index+1] = color.g;
    image_data.data[index+2] = color.b;
    image_data.data[index+3] = 255;
}

function ddaLine(imageData, x1, y1, x2, y2, color) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    if (Math.abs(dx) > Math.abs(dy)) {
        if (x2 > x1) {
            let y = y1;
            for (let x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                draw_dot(imageData, Math.ceil(x), Math.ceil(y), color);
            }
        }
        else {
            let y = y1;
            for (let x = x1; x >= x2; x--) {
                y = y + dy / Math.abs(dx);
                draw_dot(imageData, Math.ceil(x), Math.ceil(y), color);
            }
        }

    }
    else {
        if (y2 > y1) {
            let x = x1;
            for (let y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                draw_dot(imageData, Math.ceil(x), Math.ceil(y), color);
            }
        }
        else {
            let x = x1;
            for (let y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                draw_dot(imageData, Math.ceil(x), Math.ceil(y), color);
            }
        }
    }
}

function polyLine(imageData, point_array, color) {
    let point = point_array[0];

    ddaLine(imageData, point.x, point.y, 150, 100, {r:255, g:0, b:0});


    for (let i = 1; i < point_array.length; i++) {
        let point_2 = point_array[i];

        ddaLine(imageData, point.x, point.y, point_2.x, point_2.y, color);
        point = point_2
    }
}

function polygon(imageData, point_array, color) {
    let point = point_array[0];


    for (let i = 1; i < point_array.length; i++) {
        let point_2 = point_array[i];

        ddaLine(imageData, point.x, point.y, point_2.x, point_2.y, color);
        point = point_2
    }
    ddaLine(imageData, point.x, point.y, point_array[0].x, point_array[0].y, color);

}


function lingkaran_polar(imageDataTemp, xc, yc, radius, color) {
    for (var theta = 0; theta < Math.PI * 2; theta += 0.01) {
        x = xc + radius * Math.cos(theta);
        y = yc + radius * Math.sin(theta);

        gbr_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), color);
    }
}

function ellipse_polar(imageDataTemp, xc, yc, radiusX, radiusY, color) {
    for (var theta = 0; theta < Math.PI * 2; theta += 0.01) {
        x = xc + radiusX * Math.cos(theta);
        y = yc + radiusY * Math.sin(theta);

        gbr_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), color);
    }
}

function gbr_lingkaran(imageDataTemp, xc, yc, radius, color) {
    for (let x = xc - radius; x < xc + radius; x++) {
        let y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x-xc), 2));
        draw_dot(imageDataTemp, Math.ceil(x), Math.ceil(y), color);

        y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x-xc), 2));
        draw_dot(imageDataTemp, Math.ceil(x), Math.ceil(y), color);
    }
    for (let x = xc - radius; x < xc + radius; x++) {
        let y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x-xc), 2));
        draw_dot(imageDataTemp, Math.ceil(x), Math.ceil(y), color);

        y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x-xc), 2));
        draw_dot(imageDataTemp, Math.ceil(x), Math.ceil(y), color);
    }
}

function floodFillNaive(imageData, canvas, x, y, toFlood, color) {
    var index = 4 * (x + y * canvas.width);

    var r1 = imageData.data[index];
    var g1 = imageData.data[index+1];
    var b1 = imageData.data[index+2];

    var tumpukan = [];
    tumpukan.push({x : x0, y : y0});

    while (tumpukan.length > 0) {
        
    }

    if ((r1 == toFlood.r) && (g1 == toFlood.g) && (b1 == toFlood.b)) {
        imageData.data[index] = color.r;
        imageData.data[index+1] = color.g;
        imageData.data[index+2] = color.b;
        imageData.data[index+3] = 255;

        floodFillNaive(imageData, canvas, x+1, y, toFlood, color);
        floodFillNaive(imageData, canvas, x, y+1, toFlood, color);
        floodFillNaive(imageData, canvas, x-1, y, toFlood, color);
        floodFillNaive(imageData, canvas, x, y-1, toFlood, color);
    }
}
