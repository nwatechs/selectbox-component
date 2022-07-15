const selectContainer = document.querySelector('.select-container')
const selectContainerBtn = document.querySelector('.select-container button')
const selectContainerBtnValue = document.querySelector('.select-container button .value')
const options = document.querySelectorAll('.option')

selectContainerBtn.onclick = () => {
    selectContainer.classList.toggle('open')
}

options.forEach(opt => {
    opt.onclick = () => {
        selectContainer.classList.toggle('open')
        selectContainerBtnValue.innerText = opt.innerText
    }
})