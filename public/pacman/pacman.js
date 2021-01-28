
        let mundo = [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
            [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 3, 2],
            [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2],
            [2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2],
            [2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2],
            [2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 3, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2],
            [2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
            [2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2],
            [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2],
            [2, 3, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ];


        let mundo2 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,1,1,1,3,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2],
        ];


        let monedas = 0;

        const x = 1;
        const y = 1;


        for (const fila of mundo) {
            for (const columna of fila) {
                if(columna == 1){
                    monedas++; 
                }
            }
        }

        document.getElementById("monedas").innerHTML = monedas;

        let pacman = {
            x: x,
            y: y,
            direccion: 0,
            vidas: 8
        }

        document.getElementById("vidas").innerHTML = pacman.vidas;

        let fantasma1 = {
            id: "fantasma",
            x: mundo[0].length - 2,
            y: mundo.length - 2,
            direccion: getRandomInt(1,4)
        }

        let fantasma2 = {
            id: "fantasma2",
            x: mundo[0].length - 2,
            y: 1,
            direccion: getRandomInt(1,4)
        }

        let fantasma3 = {
            id: "fantasma3",
            x: 1,
            y: mundo.length - 2,
            direccion: getRandomInt(1,4)
        }


        let fantasma4 = {
            id: "fantasma4",
            x: 10,
            y: 6,
            direccion: getRandomInt(1,4)
        }

        let score = 0;

        function mostrarMundo() {
            let salida = "";
            for (fila of mundo) {
                salida += "\n<div class='row'>\n";
                for (columna of fila) {
                    let clase = '';
                    switch (columna) {
                        case 0: clase = "vacio"; break;
                        case 1: clase = "coin"; break;
                        case 2: clase = "brick"; break;
                        case 3: clase = "cereza"; break;
                    }
                    salida += "<div class='" + clase + "'></div>";
                }
                salida += "\n</div>\n";
            }
            
            document.getElementById("world").innerHTML = salida;
        }

        //retorna true si puede pacman seguir. 
        function sistemaColicion(x, y) {
            return (mundo[y][x] != 2);
        }

        function verificaAlimento(alimento, puntaje) {
            if (mundo[pacman.y][pacman.x] == alimento) {
                mundo[pacman.y][pacman.x] = 0;
                score += puntaje;
                
                document.getElementById("score").innerHTML=score;
                
                if(alimento == 1){
                    monedas--;
                    document.getElementById("monedas").innerHTML = monedas;
                }

                mostrarMundo();
            }
           
        }

        function mostrarPacman(mira) {

            verificaAlimento(1, 10); //moneda
            verificaAlimento(3, 50); //cereza

            document.getElementById("pacman").style.top = (pacman.y * 30) + "px";
            document.getElementById("pacman").style.left = (pacman.x * 30) + "px";
            document.getElementById("pacman").style.transform = "rotate(" + (90 * mira) + "deg)";

        }

        function mostrarFantasma(ghost) {

            document.getElementById(ghost.id).style.top = (ghost.y * 30) + "px";
            document.getElementById(ghost.id).style.left = (ghost.x * 30) + "px";

            if ((ghost.y == pacman.y) && (ghost.x == pacman.x)) {
                pacman.vidas--;
                pacman.x = x;
                pacman.y = y;
                pacman.direccion = 0;
                document.getElementById("vidas").innerHTML = pacman.vidas;
            }

        }

        function moverFantasma(ghost) {

            let direccion = azar(ghost.direccion);

            switch (ghost.direccion) {
                case 2:
                    if (sistemaColicion(ghost.x - 1, ghost.y))
                        ghost.x--;
                    else
                        ghost.direccion = direccion;
                    break;

                case 3:
                    if (sistemaColicion(ghost.x, ghost.y - 1))
                        ghost.y--;
                    else
                        ghost.direccion = direccion;
                    break;
                case 4:
                    if (sistemaColicion(ghost.x + 1, ghost.y))
                        ghost.x++;
                    else
                        ghost.direccion = direccion;
                    break;
                case 1:
                    if (sistemaColicion(ghost.x, ghost.y + 1))
                        ghost.y++;
                    else
                        ghost.direccion = direccion;
                    break;
            }
            mostrarFantasma(ghost);
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function azar(numero) {

            let nuevoNumero = numero;

            while (numero == nuevoNumero) {
                nuevoNumero = getRandomInt(1, 4);
            }

            return nuevoNumero;
        }


        function moverPacman(){

            switch (pacman.direccion) {
                case 2:
                    if (sistemaColicion(pacman.x - 1, pacman.y)) {
                        pacman.x--;
                    }
                    break;
                case 3:
                    if (sistemaColicion(pacman.x, pacman.y - 1)) {
                        pacman.y--;
                    }
                    break;
                case 4:
                    if (sistemaColicion(pacman.x + 1, pacman.y)) {
                        pacman.x++;
                    }
                    break;
                case 1:
                    if (sistemaColicion(pacman.x, pacman.y + 1)) {
                        pacman.y++;
                    }
                    break;
            }
            mostrarPacman(pacman.direccion);

        }

        function traducirTecla(tecla){

            let salida;

            switch (tecla) {
                case 1: salida = 40; break;
                case 2: salida = 37; break;
                case 3: salida = 38; break;
                case 4: salida = 39; break;
            }

            return salida;
        }

        document.onkeydown = function (e) { 
           
           switch (e.keyCode) {
                case 37: pacman.direccion = 2; break;
                case 38: pacman.direccion = 3; break;
                case 39: pacman.direccion = 4; break;
                case 40: pacman.direccion = 1; break;
            }

        }

        mostrarMundo();
        mostrarPacman();
        mostrarFantasma(fantasma1);
        mostrarFantasma(fantasma2);
        mostrarFantasma(fantasma3);
        mostrarFantasma(fantasma4);


        setInterval(function () {
            moverFantasma(fantasma1);
            moverFantasma(fantasma2);
            moverFantasma(fantasma3);
            moverFantasma(fantasma4);

            moverPacman();

        }, 500);



        if (1==1 && 1==2 && 4==4){
            console.log("HOLA");
        }

        if(1==1){
            if(1==2){
                if (4==4){
                    console.log("HOLA");
                }
            }
        }
        
        if (1==1 || 1==2 || 4==4){
            console.log("HOLA");
        }