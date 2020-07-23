export default ({
  inserted (el, { arg }, vnode) {
    function loadImage () {
      if (!el) {
        return false
      }

      if (arg) {
        const eventName = 'loadImage'
        if (vnode.componentInstance) {
          vnode.componentInstance.$emit(eventName, { detail: arg }) // use {detail:} to be uniform
        } else {
          vnode.elm.dispatchEvent(new CustomEvent(eventName, { detail: arg }))
        }

        return
      }

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
})
