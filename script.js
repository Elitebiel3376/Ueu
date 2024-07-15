document.addEventListener('DOMContentLoaded', function() {
    const m3uForm = document.getElementById('m3uForm');

    m3uForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const m3uUrl = document.getElementById('m3u').value.trim();
        if (m3uUrl) {
            // Lógica para processar o link M3U
            processM3U(m3uUrl);
        }
    });

    function processM3U(m3uUrl) {
        // Aqui você pode implementar a lógica para processar o link M3U
        // Exemplo: carregar dados de canais, filmes, séries, etc.
        console.log('Link M3U processado:', m3uUrl);
        // Redirecionar para a tela principal ou outra ação necessária
        window.location.href = 'tela.html'; // Exemplo de redirecionamento
    }
});