import { games } from "./objetos.js";

const gridCards = document.querySelector("#grid-cards");
games.forEach(game => {
    gridCards.innerHTML += `
                <div class="card col-md-6 col-lg-4">
                    <a href="" class="text-decoration-none">
                        <img src="${game.imagem}" class="card-img-top" alt="${game.nome}">
                        <div class="card-body">
                        <h5 class="color-blue-300">${game.nome}</h5>
                        <div class="d-flex justify-content-between">
                            <p class="text-light">${game.plataformas}</p>
                            <p class="fw-bolder text-light">R$${game.preco}.00</p>
                        </div>
                        </div>
                    </a>
                </div>`
})