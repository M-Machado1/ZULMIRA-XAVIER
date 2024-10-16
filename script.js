const modalEventos = document.querySelector('#btnEventos')
modalEventos.addEventListener('click', () => {
    openModal('eventos')
})

function openModal(alvo){
    const modal = document.querySelector(`#modal-container-${alvo}`)

    modal.classList.toggle('esconder')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == `modal-container-${alvo}` || e.target.id == "fechar"){
            modal.classList.toggle('esconder')
            localStorage.fechaModal = `modal-container-${alvo}`
        }
    })
}