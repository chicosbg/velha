let jogo = [["", "", ""],
["", "", "",],
["", "", "",]];

let jogador = sortear();
let pontosX = -1;
let pontosO = -1;

function sortear() {
    let numeroS = Math.floor(Math.random() * 10) % 2;
    let jogador;
    if (numeroS == 1) {
        jogador = "X";
        document.querySelector('#quemJoga').src = "xis.png";
    } else {
        jogador = "O";
        document.querySelector('#quemJoga').src = "circulo.png";

    }
    return jogador;
}

console.log(jogador);
function jogar(posicao) {
    switch (posicao) {
        case 11:

            if (jogo[0][0] == '') {
                console.log(jogo)
                jogo[0][0] = jogador;
                if (jogador == 'X') {
                    document.querySelector('#img11').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                    console.log(jogador)
                } else {
                    document.querySelector('#img11').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 12:
            if (jogo[0][1] == '') {
                jogo[0][1] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img12').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img12').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 13:
            if (jogo[0][2] == '') {
                jogo[0][2] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img13').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img13').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 21:
            if (jogo[1][0] == '') {
                jogo[1][0] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img21').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img21').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 22:
            if (jogo[1][1] == '') {
                jogo[1][1] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img22').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img22').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 23:
            if (jogo[1][2] == '') {
                jogo[1][2] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img23').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img23').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 31:
            if (jogo[2][0] == '') {
                jogo[2][0] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img31').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img31').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 32:
            if (jogo[2][1] == '') {
                jogo[2][1] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img32').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img32').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
        case 33:
            if (jogo[2][2] == '') {
                jogo[2][2] = jogador;
                if (jogador == "X") {
                    document.querySelector('#img33').src = "xis.png";
                    document.querySelector("#quemJoga").src = "circulo.png";
                    jogador = "O";
                } else {
                    document.querySelector('#img33').src = "circulo.png";
                    document.querySelector("#quemJoga").src = "xis.png";
                    jogador = "X";
                }
            }
            break;
    }
    ganhador()
}

function limpar() {
    document.querySelectorAll('.imgxy').forEach((e) => {
        e.src = "velha.png";
    });
    for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
            jogo[a][b] = "";
        }
    }
    console.log(jogo);
    sortear();
}
document.querySelector('.limpar').onclick = () => limpar();

function soma(jogador) {
    if (jogador == "X") {
        pontosX++;
        document.querySelector('.pontosX').innerHTML = pontosX;
    } else {
        pontosO++;
        document.querySelector('.pontosO').innerHTML = pontosO;
    }
}
soma("X");
soma("O");

function ganhador() {
    let sequenciaX = 0;
    let possibilidades = [
        [00, 01, 02],// vertical
        [11, 21, 31],//horizontal
        [01, 12, 33],// diagonal
    ]
    //ganha na horizontal
    if (jogo[0][0] == "X" && jogo[0][1] == "X" && jogo[0][2] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[0][0] == "O" && jogo[0][1] == "O" && jogo[0][2] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)
    }
    if (jogo[1][0] == "X" && jogo[1][1] == "X" && jogo[1][2] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[1][0] == "O" && jogo[1][1] == "O" && jogo[1][2] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)

    }
    if (jogo[2][0] == "X" && jogo[2][1] == "X" && jogo[2][2] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[2][0] == "O" && jogo[2][1] == "O" && jogo[2][2] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)
    }
    //ganha na vertical
    if (jogo[0][0] == "X" && jogo[1][0] == "X" && jogo[2][0] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[0][0] == "O" && jogo[1][0] == "O" && jogo[2][0] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)
    }
    if (jogo[0][1] == "X" && jogo[1][1] == "X" && jogo[2][1] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[0][1] == "O" && jogo[1][1] == "O" && jogo[2][1] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)

    }
    if (jogo[0][2] == "X" && jogo[1][2] == "X" && jogo[2][2] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[0][2] == "O" && jogo[1][2] == "O" && jogo[2][2] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)
    }

    //ganha na diagonal 1
    if (jogo[0][0] == "X" && jogo[1][1] == "X" && jogo[2][2] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
    if (jogo[0][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == "O") {
        setTimeout(() => {
            alert('Bolinha ganho');
            soma("O");
            limpar();
        }, 15)
    }
    //ganha na diagonal 2
    if (jogo[0][2] == "O" && jogo[1][1] == "O" && jogo[2][0] == "O") {
        setTimeout(() => {
            soma('O');
            limpar();
        }, 15)
    } if (jogo[0][2] == "X" && jogo[1][1] == "X" && jogo[2][0] == "X") {
        setTimeout(() => {
            alert('Xis ganho');
            soma("X");
            limpar();
        }, 15)
    }
}