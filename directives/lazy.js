export default {
// <<<<<<< HEAD
  inserted: (el, { arg }) => {
    // =======
    //   bind: (el, { arg }) => {
    // >>>>>>> bugfix/main-page-0.0.5
    function loadImage () {
      if (!el) {
        return false
      }

      // imageElement.addEventListener('load', () => {
      //   setTimeout(() => el.classList.add('loaded'), 100)
      // })
      // imageElement.addEventListener('error', () => console.log('error'))

      if (el.nodeName === `IMG`) {
        el.src = el.dataset.url
      } else if (arg && arg === `bg`) {
        el.style.backgroundImage = `url(${el.dataset.url})`
      }
    }

    function handleIntersect (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return null
        } else {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver () {
      const options = {
        root: null,
        threshold: '0'
      }
      const observer = new IntersectionObserver(handleIntersect, options)

      observer.observe(el)
    }

    if (!window.IntersectionObserver) {
      loadImage()
    } else {
      createObserver()
    }
  }
}
