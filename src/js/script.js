// Header onscroll behavior
{
  const header = document.querySelector('#header')
  const home = document.querySelector('#home')

  const handleScroll = () => {
    const headerPositionFromTop = header.getBoundingClientRect().top

    if (headerPositionFromTop <= 0 && !header.classList.contains('section-header--active')) {
      header.classList.add('section-header--active')
    } else if (home.clientHeight - pageYOffset >= header.clientHeight) {
      header.classList.remove('section-header--active')
    }
  }

  window.addEventListener('scroll', handleScroll)
}

// Animate on scroll library
{
  AOS.init({
    once: true
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
