function calcul() {
    let nb1:number = parseInt((document.querySelector("#nombre1")as HTMLInputElement).value)
    let nb2:number = parseInt((document.querySelector("#nombre2")as HTMLInputElement).value)
    return nb1+nb2
}

document.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(calcul());
    
})