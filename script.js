const modal = document.getElementById('modal-container')
modal.addEventListener('click', (e) => {
    openModal()
})

function openModal(){
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}