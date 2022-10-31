
const submit = document.querySelector(".submit")
const errorIcon = document.querySelector(".errorIcon")
const errorMessege = document.querySelector(".errmsg")
const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e) {
    e.preventDefault()
    const inputValue = input.value.trim();
    console.log(inputValue);

    if (inputValue === "" || (!isMail(inputValue))) {
        errorMessege.style.display = "block"
        errorIcon.style.display = "block"

    } else {
        errorMessege.style.display = "none"
        errorIcon.style.display = "none"
    }
}

function isMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    } else {
        return false
    }
}