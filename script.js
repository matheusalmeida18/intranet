document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        events: [{
                title: 'Semana de Provas',
                start: '2024-09-30',
                end: '2024-10-04',
            },
            {
                title: '',
                start: '',
                end: '',
            }
            // Adicione mais eventos conforme necessário
        ]
    });

    calendar.render();
    // Função para atualizar o relógio e a data
    function updateClock() {
        const clockTime = document.getElementById('clock-time');
        const clockDate = document.getElementById('clock-date');

        // Obtém a hora atual
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        // Formata a data
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const year = now.getFullYear();

        // Atualiza os elementos com a hora e a data formatadas
        clockTime.textContent = `${hours}:${minutes}:${seconds}`;
        clockDate.textContent = `${day}/${month}/${year}`;
    }

    // Atualiza o relógio a cada segundo
    setInterval(updateClock, 1000);

    // Chama a função ao carregar a página
    updateClock();
})