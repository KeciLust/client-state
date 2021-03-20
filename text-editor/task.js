const editor = document.querySelector(`#editor`);
const remove = document.querySelector(`.remove`);
if (editor.value === ``) {
    editor.value = localStorage.editor;
}
editor.addEventListener(`input`, () => {
    localStorage.editor = editor.value;
});
remove.addEventListener(`click`, () => {
    editor.value = ``;
    localStorage.editor = ``;
})