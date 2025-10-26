function createIdentity() {
    var identitas = 
    [
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ];

    return identitas;
}

function multi(m1, m2){
    var hasil = [
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ];

    for (var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            for(var k=0; k<3; k++){
                hasil[i][k] += m1[i][j] + m2[j][k]
            }
        }
    }

    return hasil;
}
