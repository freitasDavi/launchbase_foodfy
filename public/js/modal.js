const modalOverlay = document.querySelector('.modal_overlay')
const receitas = document.querySelectorAll('.receita')

for(let receita of receitas) {
    receita.addEventListener("click", function() {
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.close_modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})