// 0 Significa Aire
// 1 Significa Pared
// 2 Significa Player Jugador
// 3 Significa Premios

      let mapa = [
        [1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      ];

      // Definimos objetos
      const TAMANO_PARED = 5;
      const ALTO_PARED = 3;

      let muro;
      let premio;

      const paredes = document.querySelector("#paredes");
      let premios = document.querySelector("#premios");

      const scoreEl = document.querySelector("#score");

      for (let x = 0; x < mapa.length; x += 1) {
        for (let z = 0; z < mapa[x].length; z += 1) {
          let posicion =
            (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            " " +
            (z - mapa.length / 2) * TAMANO_PARED;
          if (mapa[x][z] == 0) {
            // Aire
            continue;
          } else if (mapa[x][z] == 1) {
            // Pared
            muro = document.createElement("a-box");
            paredes.appendChild(muro);
            muro.setAttribute("material", "src: #pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
          } else if (mapa[x][z] == 2) {
            // Player
            document
              .querySelector("#jugador")
              .setAttribute("position", posicion);
          } else if (mapa[x][z] == 3) {
            premio = document.createElement("a-sphere");
            premios.appendChild(premio);
            premio.setAttribute("position", posicion);
            premio.setAttribute("class", "premio");
            premio.setAttribute("color", "tomato");
            premio.setAttribute("radius", "0.3");
          }
        }
      }

      premios = Array.from(document.querySelectorAll("#premios"));
      let score = premios.length;

      scoreEl.setAttribute("value", "Encontra " + score + " Premios");
      scoreEl.setAttribute("color", "#881166");

      premios.forEach(function (premio) {
        premio.addEventListener("click", function () {

          premio.setAttribute("visible", "false");
          score = score - 1;
          scoreEl.setAttribute("value", "Encontra " + score + " Premio");

          if (score <= 0) {
            scoreEl.setAttribute("value", "Ya tenes todos los premios");
          }
        });
      });