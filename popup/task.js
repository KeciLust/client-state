const modal = document.querySelector(`#subscribe-modal`);
const closeModal = document.querySelector(`.modal__close`);

function getCookie(name) {
    const cookie = document.cookie.split(`; `);
    for (const c of cookie) {
        const [key, value] = c.split(`=`);
        if (key === name) {
            return value;
        }
    }
    return;
}

function modalActive() {
    if (getCookie(`modal`) !== `false`) {
        modal.classList.add(`modal_active`);
        
        closeModal.addEventListener(`click`, () => {
            modal.classList.remove(`modal_active`);
            document.cookie = `modal=false`;

        });
    }
}
modalActive();