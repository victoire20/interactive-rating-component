import getRatingVote from "./functions/vote.js"

/**
 * Sélectionne tous les boutons de rating.
 * @type {NodeListOf<HTMLButtonElement>}
 */
const ratingBtn = document.querySelectorAll('.rating__btn_item')

/**
 * Ajoute un listener sur chaque bouton de rating
 * pour activer celui cliqué et désactiver tous les autres.
 */
ratingBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        ratingBtn.forEach(b => b.classList.remove('active'))        
        e.target.classList.add('active')
    });
});

/**
 * Écoute le clic sur le bouton d'envoi de la note.
 * Si une note est sélectionnée, exécute getRatingVote().
 */
document.querySelector('.card__btn').addEventListener('click', () => {
    /** 
     * @type {HTMLElement | null} 
     * Bouton actuellement actif (note sélectionnée)
     */
    const vote = document.querySelector('.active')
    if (vote) {
        getRatingVote(vote.dataset.id)
    }
})

