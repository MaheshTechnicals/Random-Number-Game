let g1 = document.querySelector("#one")
let g2 = document.querySelector("#two")
let g3 = document.querySelector("#three")

let btn = document.querySelector("#btn")


btn.addEventListener("click", () => {

  animateGlass()

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