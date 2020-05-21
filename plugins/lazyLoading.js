import Vue from 'vue'

Vue.directive('lazy', {
  inserted: (el) => {
    function loadImage () {
      if (el.nodeName !== 'IMG') {
        return false
      }

      const imageElement = el

      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100)
        })
        imageElement.addEventListener('error', () => console.log('error'))
        imageElement.src = imageElement.dataset.url
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
})
