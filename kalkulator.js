// Fungsi untuk menambah matriks A dan B
function addMatrices() {
    // Mengambil nilai input matriks A dan B
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    // Menjumlahkan matriks A dan B
    let result = `
        [${a11 + b11}, ${a12 + b12}] <br>
        [${a21 + b21}, ${a22 + b22}]
    `;

    // Menampilkan hasil
    document.getElementById("result").innerHTML = result;
}

// Fungsi untuk mengurangi matriks A dan B
function subtractMatrices() {
    // Mengambil nilai input matriks A dan B
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    // Mengurangi matriks A dan B
    let result = `
        [${a11 - b11}, ${a12 - b12}] <br>
        [${a21 - b21}, ${a22 - b22}]
    `;

    // Menampilkan hasil
    document.getElementById("result").innerHTML = result;
}

// Fungsi untuk mengalikan matriks A dan B
function multiplyMatrices() {
    // Mengambil nilai input matriks A dan B
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    // Mengalikan matriks A dan B
    let result = `
        [${a11 * b11 + a12 * b21}, ${a11 * b12 + a12 * b22}] <br>
        [${a21 * b11 + a22 * b21}, ${a21 * b12 + a22 * b22}]
    `;

    // Menampilkan hasil
    document.getElementById("result").innerHTML = result;
}