// Переключение вкладок
function switchTab(tabId) {
    // Скрываем все вкладки
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    // Убираем активный класс у кнопок
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });

    // Показываем нужную
    document.getElementById('tab-' + tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Закрытие интерфейса
function closeUI() {
    if (typeof cef !== 'undefined') {
        cef.emit('atools:closeMenu');
    }
}

// Отправка команды в игру
function doAction(type) {
    const id = document.getElementById('target-id').value;
    if (!id && type !== 'global') return alert("Введите ID игрока!");
    
    if (typeof cef !== 'undefined') {
        cef.emit('atools:manualAction', type, id);
    } else {
        console.log(`Action: ${type} on ID: ${id}`);
    }
}

// Просто для красоты — обновляем время
setInterval(() => {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString();
}, 1000);