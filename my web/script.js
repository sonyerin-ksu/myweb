document.addEventListener('DOMContentLoaded', () => {
    // 기존 필터링 버튼 로직은 주석 처리하거나 제거하세요.
    // const filterButtons = document.querySelectorAll('.filter-btn');
    // ... (기존 필터링 로직) ...

    const categoryThumbnails = document.querySelectorAll('.category-thumbnail');

    categoryThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            const categoryToExpand = event.currentTarget.dataset.expandCategory;
            const targetContent = document.getElementById(`${categoryToExpand}-content`);

            if (targetContent) {
                // 현재 확장된 카테고리를 찾아서 축소 (선택 사항: 하나만 열리도록)
                document.querySelectorAll('.category-content.expanded').forEach(expandedContent => {
                    if (expandedContent !== targetContent) { // 클릭된 것 외의 다른 열린 카테고리
                        expandedContent.classList.remove('expanded');
                        expandedContent.classList.add('hidden');
                        // 해당 카테고리의 header에 'active' 클래스 제거
                        expandedContent.closest('.portfolio-category').querySelector('.category-header').classList.remove('active');
                    }
                });

                // 클릭된 카테고리 콘텐츠 토글
                targetContent.classList.toggle('hidden');
                targetContent.classList.toggle('expanded');

                // 카테고리 헤더에 'active' 클래스 토글 (스타일링 용)
                const categoryHeader = event.currentTarget.closest('.category-header');
                if (categoryHeader) {
                    categoryHeader.classList.toggle('active');
                }
            }
        });
    });
});