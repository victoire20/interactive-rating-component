/**
 * Met à jour l'affichage après sélection d'une note.
 *
 * @param {string | number} vote - Valeur du vote sélectionné.
 * Affiche "thank you" card et insère la note dans le texte.
 */
export default function getRatingVote(vote) {
    document.getElementById("rating__card").style.display = 'none'
    document.getElementById("thank__you__card").style.display = 'block'
    document.querySelector('.rate__choose').textContent = vote
}