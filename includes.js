// Wspólne komponenty strony: nawigacja i stopka.
// Pliki navbar.html oraz footer.html muszą znajdować się w tym samym folderze.
async function loadSharedComponent(file, placeholderId) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Nie udało się wczytać ${file}: ${response.status}`);
        placeholder.outerHTML = await response.text();
    } catch (error) {
        console.error(error);
        placeholder.remove(); // brak pliku = brak danego elementu na stronie
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSharedComponent('navbar.html', 'navbar-placeholder');
    loadSharedComponent('footer.html', 'footer-placeholder');
});
