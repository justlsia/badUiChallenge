// Sélectionner l'élément contenant la vidéo
const videoContainer = document.querySelector('.video-container');

// Ajouter un événement "mouseover" sur le conteneur de la vidéo
videoContainer.addEventListener('mouseover', () => {
    videoContainer.style.setProperty('--random-x', Math.random());
    videoContainer.style.setProperty('--random-y', Math.random());
});

// Ajout d'un événement "mousemove" sur tout le document
document.body.addEventListener('mousemove', (e) => {
    // Création d'un nouvel élément <div> pour l'effet de "flash"
    const flashEffect = document.createElement('div');
    
    // Positionnement absolu du flash à l'endroit où la souris se déplace
    flashEffect.style.position = 'absolute';
    flashEffect.style.top = `${e.clientY}px`; 
    flashEffect.style.left = `${e.clientX}px`; 
    
    // Configuration des dimensions et du style du flash
    flashEffect.style.width = '20px'; 
    flashEffect.style.height = '20px'; 
    flashEffect.style.backgroundColor = 'red'; 
    flashEffect.style.borderRadius = '50%'; 
    flashEffect.style.pointerEvents = 'none'; 
    flashEffect.style.animation = 'flash 0.3s'; 

    // Ajouter le flash à l'élément body pour qu'il s'affiche à l'écran
    document.body.appendChild(flashEffect);

    // Supprime l'élément flash après 300 millisecondes pour éviter de surcharger le dom
    setTimeout(() => flashEffect.remove(), 300);
});
