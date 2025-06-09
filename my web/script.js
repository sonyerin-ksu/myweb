// script.js 파일

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuItems = document.querySelectorAll('.overlay-nav .menu-item'); // 메뉴 항목들

    // 햄버거 버튼 클릭 시 메뉴 열기
    hamburgerBtn.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // 메뉴 열렸을 때 스크롤 방지
    });

    // 닫기 버튼 클릭 시 메뉴 닫기
    closeBtn.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // 메뉴 닫혔을 때 스크롤 허용
    });

    // 메뉴 항목 클릭 시 메뉴 닫기 (새 페이지로 이동하거나 스크롤 후 닫기)
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 이제 카테고리 배너 클릭 시 상세 페이지로 이동하므로
    // HTML의 <a> 태그의 기본 동작을 사용합니다.
    // 따라서, 이 script.js 파일에는 카테고리 배너와 관련된 별도의 JavaScript 코드가 필요 없습니다.
    // 이 파일은 비워두거나, 다른 전역적으로 필요한 스크립트만 포함하면 됩니다.
});