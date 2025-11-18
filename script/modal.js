const studie = ['Mon titre', 'Le contenue de mon texte'];
const role = [];
const locatio = [];
const experience = [];

const modal = document.getElementById('modal');

function ShowModal(content) {
  modal.classList.add('active');
  document.body.classList.add('no-scroll');

  document.getElementById('title').innerHTML = content[0];
  document.getElementById('content').innerHTML = content[1];
}

function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

// optionnel : fermer en cliquant à l’extérieur
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
