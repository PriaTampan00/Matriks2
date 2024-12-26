// Fungsi untuk menampilkan hasil sebagai tabel
function displayAsTable(matrix) {
    let tableHTML = `
        <table>
            <tr>
                <td>${matrix[0][0]}</td>
                <td>${matrix[0][1]}</td>
            </tr>
            <tr>
                <td>${matrix[1][0]}</td>
                <td>${matrix[1][1]}</td>
            </tr>
        </table>
    `;
    return tableHTML;
}

// Fungsi untuk menambah matriks
function addMatrices() {
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    let result = [
        [a11 + b11, a12 + b12],
        [a21 + b21, a22 + b22]
    ];

    document.getElementById("result").innerHTML = displayAsTable(result);
}

// Fungsi untuk mengurangi matriks
function subtractMatrices() {
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    let result = [
        [a11 - b11, a12 - b12],
        [a21 - b21, a22 - b22]
    ];

    document.getElementById("result").innerHTML = displayAsTable(result);
}

// Fungsi untuk mengalikan matriks
function multiplyMatrices() {
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    let result = [
        [
            a11 * b11 + a12 * b21,
            a11 * b12 + a12 * b22
        ],
        [
            a21 * b11 + a22 * b21,
            a21 * b12 + a22 * b22
        ]
    ];

    document.getElementById("result").innerHTML = displayAsTable(result);
}
