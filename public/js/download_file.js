function downloadFile() {
    // L'URL de votre fichier à télécharger
    const fileUrl = '/files/Bertrand_Tang_CV.pdf';

    // Créez un élément d'ancrage (a) avec l'attribut download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Bertrand_Tang_CV';

    // Ajoutez l'élément d'ancrage à la page
    document.body.appendChild(link);

    // Déclenchez le clic sur l'élément d'ancrage pour démarrer le téléchargement
    link.click();

    // Supprimez l'élément d'ancrage de la page une fois le téléchargement terminé
    document.body.removeChild(link);
}
