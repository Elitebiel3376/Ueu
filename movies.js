document.addEventListener('DOMContentLoaded', function() {
    const moviesList = document.getElementById('movies-list');

    // Aqui você pode implementar a lógica para carregar os filmes a partir do link M3U
    // Exemplo simples:
    const moviesData = [
        { title: 'Filme 1', poster: 'assets/movie-1.jpg' },
        { title: 'Filme 2', poster: 'assets/movie-2.jpg' },
        { title: 'Filme 3', poster: 'assets/movie-3.jpg' }
        // Adicione mais filmes conforme necessário
    ];

    showMovies();

    function showMovies() {
        moviesData.forEach(item => {
            const element = document.createElement('div');
            element.innerHTML = `<img src="${item.poster}" alt="${item.title}">
                                <p>${item.title}</p>`;
            moviesList.appendChild(element);
        });
    }
});

function goToHome() {
    window.location.href = 'tela.html'; // Voltar para a tela principal
}