document.addEventListener("DOMContentLoaded", function() {
    // Получаем все ссылки в оглавлении
    var tocLinks = document.querySelectorAll("#toc a");

    // Добавляем обработчик событий для каждой ссылки
    tocLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Отменяем стандартное поведение ссылки
            event.preventDefault();
            
            // Получаем id главы или подглавы, к которой нужно перейти
            var targetId = this.getAttribute("href").substring(1);
            
            // Показываем только выбранную главу или подглаву, скрываем остальные
            var chapters = document.querySelectorAll("main article");
            chapters.forEach(function(chapter) {
                if (chapter.id === targetId) {
                    chapter.style.display = "block";
                } else {
                    chapter.style.display = "none";
                }
            });

            // Находим следующий элемент списка подглав после нажатия на ссылку главы
            var subsections = this.nextElementSibling;
            
            // Показываем или скрываем список подглав в зависимости от текущего состояния
            if (subsections && subsections.tagName === 'UL') {
                if (subsections.style.display === "none") {
                    subsections.style.display = "block";
                } else {
                    subsections.style.display = "none";
                }
            }
        });
    });

    // Показываем первую главу по умолчанию при загрузке страницы
    var defaultChapter = document.querySelector("main article");
    defaultChapter.style.display = "block";
});
