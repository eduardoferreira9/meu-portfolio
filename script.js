document.addEventListener("DOMContentLoaded", main);

function main() {
    /* Animações */
    var items = document.querySelectorAll("[data-anima]"); // Seleciona todos os elementos com atributo data-anima
    
    function animeScroll() {
        let windowTop = window.pageYOffset + window.innerHeight * 0.9; // Calcula a posição da tela com um offset
    
        items.forEach((element) => {
            // Adiciona a classe 'animate' se o elemento estiver visível na tela
            if (windowTop > element.offsetTop) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate");
            }
        });
    }
    
    animeScroll(); // Executa a animação ao carregar a página
    
    window.addEventListener("scroll", function() {
        animeScroll(); // Atualiza a animação ao rolar a página
    });

    /* Mostrar mais sobre projetos */
    const projetos = document.getElementsByClassName('projetos-caixa-m'); // Seleciona os projetos
    
    for (const projeto of projetos) {
        projeto.addEventListener("click", (event) => {
            const dados = event.target.parentElement; // Obtém o elemento pai do projeto clicado
            const nome = dados.getElementsByClassName('dado-nome')[0].innerText; // Nome do projeto
            const img = dados.getElementsByClassName('dado-img')[0].innerText; // Imagem do projeto
            const desc = dados.getElementsByClassName('dado-desc')[0].innerText; // Descrição do projeto
            const codigo = dados.getElementsByClassName('dado-codigo')[0].innerText; // URL do código
            const projetoUrl = dados.getElementsByClassName('dado-projeto')[0].innerText; // URL do projeto
            console.log(codigo, projetoUrl); // Exibe os URLs no console
            
            let div = document.createElement('div'); // Cria uma nova div para os detalhes do projeto
            div.innerHTML = `
            <div class="detalhes-content">
                <h2 class="detalhes-titulo">${nome}</h2>
                <span id="fexar" class="material-symbols-outlined">close</span>
                <div class="detalhes-infos card carregando">
                    <div class="img">
                        <img src="../static/${img}" alt="${nome}">
                    </div>
                    <div class="detalhes-desc-btn card carregando">
                        <p class="detalhes-desc detalhes-txt">${desc}</p>
                        <div class="detalhes-btns">
                            <a class="detalhes-txt" href="${codigo}" target="_blank" rel="noopener noreferrer">Ver códigos</a>
                            <a class="detalhes-txt" href="${projetoUrl}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
            div.classList.add('detalhes'); // Adiciona a classe 'detalhes' à nova div
            document.getElementsByTagName('main')[0].appendChild(div); // Adiciona a div ao elemento <main>
            
            const cardImg = div.querySelector('.img > img'); // Seleciona a imagem dentro da div
            cardImg.onload = () => {
                // Remove a classe 'carregando' quando a imagem estiver carregada
                div.getElementsByClassName('card')[0].classList.remove('carregando');
                div.getElementsByClassName('card')[1].classList.remove('carregando');
            }
            
            document.body.style.overflowY = 'hidden'; // Remove a rolagem vertical da página
            
            const fexar = document.getElementById('fexar'); // Seleciona o botão de fechar
            fexar.addEventListener("click", () => {
                div.remove(); // Remove a div de detalhes ao clicar em fechar
                document.body.style.overflowY = 'scroll'; // Restaura a rolagem vertical da página
            });
        });
    }
}


