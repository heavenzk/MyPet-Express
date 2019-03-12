$('.bd-example-modal-xl.modal').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget) // Button that triggered the modal
    const pet = button.data('pet') // Extract info from data-* attributes
    const petImage = button.data('petimage') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    console.log("modal triggered")
    const modal = $(this)
    console.log(pet.name)
    modal.find('.modal-title').text(pet.name)
    modal.find('.modal-body img').attr('src', petImage)
    modal.find('.modal-body img').attr('alt', pet.name)
})