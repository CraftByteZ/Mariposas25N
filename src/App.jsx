import { useEffect } from 'react'
import { Footer, Header } from './components/Layout'
import { Actions, Hero, Signs, Sisters, Timeline } from './sections/Content'
import Quiz from './sections/Quiz'

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <>
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <Header />
    <main id="contenido" tabIndex={-1}><Hero /><Timeline /><Sisters /><Signs /><Quiz /><Actions /></main>
    <Footer />
  </>
}
