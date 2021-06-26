const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
var isDarks = false

function chageColor() {
  var color = document.querySelector(':root')
  if (isDarks) {
    color.style.setProperty('--body-color', 'hsl(0 0% 98%)')
    color.style.setProperty('--title-color', 'hsl(var(--hue) 41% 10%)')
    color.style.setProperty('--base-color', 'hsl(var(--hue) 36% 57%)')
    color.style.setProperty('--color-footer', 'hsl(var(--hue) 36% 57%)')
    color.style.setProperty('--base-color-second', 'hsl(var(--hue) 65% 88%)')
    color.style.setProperty('--text-color', 'hsl(0 0% 46%)')
    isDarks = false
  } else {
    color.style.setProperty('--body-color', '#252525')
    color.style.setProperty('--title-color', '#515bc9')
    color.style.setProperty('--base-color', '#f3f3f3')
    color.style.setProperty('--color-footer', '#252525')
    color.style.setProperty('--base-color-second', '#515bc9')
    color.style.setProperty('--text-color', 'white')
    isDarks = true
    //hsl(0 0% 98%)
  }
}
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
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeigth) {
    //Qual a diferença entre toggle e add ????
    header.classList.add('scroll') //Olhe pelo angulo de quanto o scroll da pagina desceu e ficou maior
  } else {
    header.classList.remove('scroll')
  }
}

//Carousel
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      //Aqui é o tamanho da tela para aparecer corretamente quando for maior que tablet, no caso ele coloca sempre dois ao mesmo tempo na tela
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
footer .brand, footer .social
`,
  { interval: 100 }
)

//Button back-to-top
const backToTop = document.querySelector('.back-to-top')

function backTop() {
  if (window.scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

//Menu ativo conforme a seção visivel na pag (MT TOP)
const sections = document.querySelectorAll('main section[id]') //Todas as tags section que contem id

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backTop()
  activateMenuAtCurrentSection()
})

//Para funcionar esse windows ele necessariamente precisa ser na linha sucetora da variavel ???
//JS é Case-sensitive
