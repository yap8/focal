// Header onscroll behavior
{
  const header = document.querySelector('#header')
  const home = document.querySelector('#home')

  const handleScroll = () => {
    if (window.innerWidth > 1280) {
      const headerPositionFromTop = header.getBoundingClientRect().top
  
      if (headerPositionFromTop <= 0 && !header.classList.contains('section-header--active')) {
        header.classList.add('section-header--active')
      } else if (home.clientHeight - pageYOffset >= header.clientHeight) {
        header.classList.remove('section-header--active')
      }
    }
  }

  window.addEventListener('scroll', handleScroll)
}

// Animate on scroll library
{
  AOS.init({
    once: true,
    offset: 180
  }) 
}

// Progress bar dynamic fill
{
  const progressBars = document.querySelectorAll('.skills-progress__item-bar-done')
  
  document.addEventListener('aos:in', ({ detail }) => {
    if (detail.classList.contains('section-skills__inner')) {
      progressBars.forEach(progressBar => {
        const progressBarValue = +progressBar.textContent.replace('%', '')
    
        progressBar.style.maxWidth = `${progressBarValue}%`
      })
    }
  })
}

// Carousel
{
  // My own plugin
  Siema.prototype.addPagination = function() {
    const buttonsWrapper = this.selector.parentElement.querySelector('.testimonials-carousel__buttons')

    const buttons = this.innerElements.map((element, i) => {
      const button = document.createElement('button');
      const className = i === 0 ? 'testimonials-carousel__buttons-button testimonials-carousel__buttons-button--active' : 'testimonials-carousel__buttons-button'

      button.className = className
      
      button.addEventListener('click', () => this.goTo(i))
      
      return button
    })

    buttons.forEach(button => {
      buttonsWrapper.appendChild(button)
    })
  }

  Siema.prototype.activateDots = function(buttons, index) {
    Array.from(buttons).forEach(button => button.classList.remove('testimonials-carousel__buttons-button--active'))
    buttons[index].classList.add('testimonials-carousel__buttons-button--active')
  }

  // Initialization
  const carousel = new Siema({
    selector: '.testimonials-carousel__list',
    onChange: function() {
      const buttons = this.selector.parentElement.querySelector('.testimonials-carousel__buttons').children
      this.activateDots(buttons, this.currentSlide)
    }
  })

  carousel.addPagination();
}

// Burger menu
{
  const button = document.querySelector('#nav-toggle-button')
  const menu = document.querySelector('#nav-menu')
  const menuButtons = menu.querySelectorAll('a')

  const toggleShowMenu = () => menu.classList.toggle('nav__list--mobile-hidden')

  menuButtons.forEach(button => {
    button.addEventListener('click', toggleShowMenu)
  })

  button.addEventListener('click', toggleShowMenu)
}
