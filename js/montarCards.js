import { games } from "./objetos.js";

const gridCards = document.querySelector("#grid-cards");
games.forEach(game => {
    gridCards.innerHTML += `
                <div class="my-card col-md-6 col-lg-4 col-xl-3 my-2 py-4 text-center">
                    <a href="" class="text-decoration-none">
                    <div class="my-card">
                        <img src="${game.imagem}" class="card-img-top" alt="${game.nome}">
                        <div class="card-body card-game-details w-100">
                            <h3 class="color-blue-300">${game.nome}</h3>
                            <p class="text-light">${game.plataformas}</p>
                            <p class="fw-bolder text-light">R$${game.preco}.00</p>
                        </div>
                    </div>
                    </a>
                </div>`
})