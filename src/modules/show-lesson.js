const listElements = document.querySelectorAll('.container_list-element');
const lessonElements =document.querySelectorAll('.container-lessons');

export function showLesson() {
  listElements.forEach((el, index) => {
    el.addEventListener('click', () => {
      lessonElements.forEach((lessonEl) => {
        lessonEl.classList.add("none-content");
      });

      lessonElements[index].classList.remove("none-content");
    });
  });
}

