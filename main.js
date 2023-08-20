let g1 = document.querySelector("#one")
let g2 = document.querySelector("#two")
let g3 = document.querySelector("#three")

let btn = document.querySelector("#btn")
let dall = document.querySelector("#dall")
let box = document.querySelector("#box")


btn.addEventListener("click", () => {

  animateGlass()
  remove()
  rn()

})









let animateGlass = () => {
  gsap.to(g1, {
    x: 240,
    duration: 0.3,
    repeat: 5,
  })

  gsap.to(g3, {
    x: -240,
    duration: 0.3,
    repeat: 5,
  })
}


let remove = () => {
  gsap.to(dall, {
    transform: "scaleX(-1) ",
    repeat: 1,
    duration: 1,
    display: "none",

  })

  btn.style.display = "none"

}


let rn = () => {
  let numberGen = Math.floor(Math.random() * 3)

  setTimeout(() => {

    box.addEventListener("click", (e) => {

      if (Number(e.target.alt) == numberGen) {
        alert("true")
        location.reload()
      }
      else {
        alert("false")
        location.reload()
      }






    })


  }, 2000)





}