// Afficher des alertes toutes les 3 lettres saisies
function annoyingAlerts(inputField) {
    let charCount = 0; 

    inputField.addEventListener('input', (event) => {
        charCount++; 
        if (charCount % 3 === 0) { 
            alert("Format incorrect !");
        }
    });
}

// Champs du formulaire ciblés
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

// Ajouter les alertes 
annoyingAlerts(nameField);
annoyingAlerts(emailField);
annoyingAlerts(passwordField);

// Remonter en haut toutes les 5 secondes
function scrollToTopEvery5Seconds() {
    setInterval(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 5000);
}

// Activer le défilement automatique
scrollToTopEvery5Seconds();

// Grossir l'image au survol
const annoyingImage = document.getElementById('annoyingImage');
annoyingImage.addEventListener('mouseenter', () => {
    annoyingImage.classList.add('enlarged'); 
    setTimeout(() => {
        annoyingImage.classList.remove('enlarged'); 
    }, 4000);
});