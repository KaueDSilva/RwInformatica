const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //Aqui está a magia com o .classlist.toggle ele troca a class do pai a variavel nav, porem ainda preciso estudar mais para entender melhor como isso rolou.
  })
}

const links = document.querySelectorAll('nav .menu ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
} //Duvida esses for não irão ficar rodando sempre ??? Afinal ele só faz algo quando o usuario clicar e ele não tem horario nem tempo para clicar

//Na hora que o scroll passar do final do header
const header = document.querySelector('#header') //Usar variaveis de forma inteligente para pegar as informações que quer utilizar na sua logica.
const navHeigth = header.offsetHeight

//Criando um avendo na janela atual ...
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeigth) {
    //Qual a diferença entre toggle e add ????
    header.classList.add('scroll') //Olhe pelo angulo de quanto o scroll da pagina desceu e ficou maior
  } else {
    header.classList.remove('scroll')
  }
})

//Carousel
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//ScrollReveal = Mostra os elementos quando scrolla a pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

//O bom de usar a crase é que ele te deixar pular linha na string
scrollReveal.reveal(
  `#home .text, #home .image,
#about .text, #about .image,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .link
`,
  { interval: 100 }
)

//Button back-to-top

const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})

//Para funcionar esse windows ele necessariamente precisa ser na linha sucetora da variavel ???
//JS é Case-sensitive
