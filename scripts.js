// Navigation functions
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            loadContent(link.getAttribute('href').substring(1));
        });
    });
});

function loadContent(section) {
    const content = document.getElementById('content');
    
    if (section === 'home') {
        content.innerHTML = `<h1>Welcome to Sử Ký Đất Việt</h1>
            <p>Explore the history and characters that shaped our nation.</p>`;
    } else if (section === 'character-library') {
        content.innerHTML = `<h1>Thư Viện Nhân Vật</h1>
            <ul class="character-list">
                <li onclick="loadCharacter('haibatrung')">Hai Bà Trưng</li>
                <li onclick="loadCharacter('ngquyen')">Ngô Quyền</li>
            </ul>`;
    }
    // Add more sections as needed
}

function loadCharacter(id) {
    const content = document.getElementById('content');
    if (id === 'haibatrung') {
        content.innerHTML = `<h2>Hai Bà Trưng</h2>
            <p>Hai Bà Trưng, chị là Trưng Trắc và em là Trưng Nhị, con gái của Lạc tướng Mê Linh...</p>`;
    }
    // Additional character data handling
}
