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
