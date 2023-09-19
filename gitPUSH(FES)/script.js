//scroll reveal
ScrollReveal().reveal('.card', { easing: "ease-in" });

//for loading spinner
window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
});



//pop up window
const openModalButtons= document.querySelectorAll('[data-modal-target]');
const closeModalButtons= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');

openModalButtons.forEach(button =>{
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals= document.querySelectorAll('.modal.active')
  modals.forEach(modal =>{
    closeModal(modal)
  })
})


closeModalButtons.forEach(button =>{
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal){
  if (modal==null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal){
  if (modal==null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//popup window attempt two

$('#edit').on('click', function(){
  $('body').addClass('active-modal');
  $('.box-modal').addClass('modal-show');
});

$('.overlay').on('click', function(){
  $('body').removeClass('active-modal');
  $('.box-modal').removeClass('modal-show');
})