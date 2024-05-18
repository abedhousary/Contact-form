let forminputs = document.querySelectorAll("input[type='text']");
let radios = document.querySelectorAll("input[type='radio']");
let checbox = document.querySelectorAll("input[type='checkbox']");
let submitbnt = document.querySelector(".submit");
let messagebox = document.querySelector(".message-box");
let form = document.querySelector(".container");
let errormsgs = document.querySelectorAll(".error");
let isValid = false

submitbnt.onclick = () => {

    forminputs.forEach((e) => {
        let errorToShow = document.querySelector(`#${e.name}`);
        if (e.value == "") {
            errorToShow.style.display = "block"
        } else {
            errorToShow.style.display = "none"
        }
        isValid = true
    })

    radios.forEach((e) => {
        let errorToShow = document.querySelector(`#${e.name}`);
        if (!e.checked) {
            errorToShow.style.display = "block"

        } else {
            errorToShow.style.display = "none"

        }

    })

    checbox.forEach((e) => {
        let errorToShow = document.querySelector(`#${e.name}`);
        if (!e.checked) {
            errorToShow.style.display = "block"

        } else {
            errorToShow.style.display = "none"
        }

    })

    let lenofmsgs = errormsgs.length
    let counter = 0
    errormsgs.forEach((e) => {
        if (e.style.display != "block") {
            counter += 1
        }
    })
    if (counter == lenofmsgs) {

        messagebox.style.display = "flex";
        form.style.display = "none";
    }

}