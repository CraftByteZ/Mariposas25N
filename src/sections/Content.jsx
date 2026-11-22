import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, Eye, HeartHandshake, Lightbulb, MessageCircle, Phone, ShieldCheck, Smartphone, Wallet } from 'lucide-react'
import { Disclosure, SectionHead } from '../components/Layout'
import { actions, slides, signs, sisters, site, support, timeline } from '../data/content'

export function Hero() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [paused, setPaused] = useState(false)
  const slide = slides[index]
  const [first, second, third] = slide.title

  useEffect(() => {
    if (!playing || paused) return
    const timer = window.setInterval(() => setIndex(current => (current + 1) % slides.length), 8500)
    return () => window.clearInterval(timer)
  }, [playing, paused, index])

  function select(next) {
    setPlaying(false)
    setIndex((next + slides.length) % slides.length)
  }

  return <section className="hero" id="inicio" aria-label="Temas destacados" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={event => { if (!event.target.closest('.playback')) setPlaying(false) }}>
    <div className="hero-images" aria-hidden="true">{slides.map(({ image }, i) => <img key={image} src={image} alt="" className={i === index ? 'active' : ''} />)}</div>
    <div className="wrap hero-body" aria-live={playing ? 'off' : 'polite'}>
      <p className="eyebrow hero-label">{slide.label}</p>
      <h1>{first}<br /><span className="capsule">{second}</span><br />{third}</h1>
      <p className="hero-copy">{slide.description}</p>
      <div className="hero-links"><a className="btn hero-link" href={'#' + slide.link[0]}>{slide.link[1]}</a></div>
    </div>
    <div className="carousel-controls">
      <button type="button" onClick={() => select(index - 1)} aria-label="Tema anterior"><ChevronLeft size={19} /></button>
      {slides.map(({ label }, i) => <button type="button" className="dot" key={label} onClick={() => select(i)} aria-label={label} aria-pressed={i === index}><span /></button>)}
      <button type="button" onClick={() => select(index + 1)} aria-label="Tema siguiente"><ChevronRight size={19} /></button>
      <button type="button" className="playback" onClick={() => setPlaying(current => !current)} aria-label={playing ? 'Pausar carrusel' : 'Reproducir carrusel'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
    </div>
  </section>
}

export function Timeline() {
  return <section className="section history" id="historia"><div className="wrap">
    <SectionHead label="Memoria histórica" title="¿Por qué se conmemora el 25 de noviembre?" />
    <ol className="timeline">{timeline.map(([year, title, text, detail], index) => <li key={year}>
      <details className="event" name="historia" open={index === 0}>
        <summary><span className="year">{year}</span><span>{title}</span><ChevronRight size={19} aria-hidden="true" /></summary>
        <div className="event-body"><p>{text}</p><p>{detail}</p></div>
      </details>
    </li>)}</ol>
  </div></section>
}

const legacies = [
  ['Su hogar como lugar de encuentro', 'Organizarse también exige lugares seguros donde encontrarse.'],
  ['Derecho y resistencia', 'Su trayectoria invita a pensar cómo actuar cuando las instituciones dejan de proteger las libertades.'],
  ['Una activista joven', 'Su historia recuerda que la juventud también tiene un lugar en la defensa de la dignidad.'],
]

export function Sisters() {
  const [index, setIndex] = useState(0)
  const [, name, years, , bio] = sisters[index]
  const [label, legacy] = legacies[index]
  return <section className="section sisters" id="mirabal"><div className="wrap">
    <SectionHead label="Las hermanas Mirabal" title="Tres hermanas, un legado de libertad">Selecciona un retrato para conocer su historia.</SectionHead>
    <div className="sisters-grid">
      <div>
        <div className="portrait-deck" role="group" aria-label="Retratos de las hermanas Mirabal">{sisters.map(([shortName, , dates, image], i) => {
          const position = (i - index + 3) % 3
          return <button className={'portrait slot-' + position} key={shortName} type="button" onClick={() => setIndex(i)} aria-pressed={i === index} aria-controls="biografia">
            <img src={image} alt="" width="240" height="240" loading="lazy" /><span>{shortName}<small>{dates}</small></span>
          </button>
        })}</div>
        <div className="portrait-pills" role="group" aria-label="Seleccionar biografía">{sisters.map(([shortName], i) => <button type="button" key={shortName} aria-pressed={index === i} aria-controls="biografia" onClick={() => setIndex(i)}>{shortName}</button>)}</div>
      </div>
      <article className="card biography" id="biografia" aria-live="polite"><p className="eyebrow">{years}</p><h3>{name}</h3><p>{bio}</p><div className="legacy"><strong>{label}</strong><p>{legacy}</p></div></article>
    </div>
  </div></section>
}

export function Signs() {
  const icons = [Eye, MessageCircle, Wallet, Smartphone]
  return <section className="section" id="pilares"><div className="wrap">
    <SectionHead label="Reconoce las señales" title="La violencia no siempre es visible">Explora cómo distintas formas de violencia pueden aparecer en la vida cotidiana.</SectionHead>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{signs.map(([title, text, example], i) => {
      const Icon = icons[i]
      return <article className="card sign" key={title} data-reveal><span className="icon"><Icon size={23} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><Disclosure label="Ver ejemplo">{example}</Disclosure></article>
    })}</div>
  </div></section>
}

export function Actions() {
  const icons = [HeartHandshake, Lightbulb, ShieldCheck]
  return <section className="section" id="acciones"><div className="wrap">
    <SectionHead label="Qué podemos hacer" title="El cambio también comienza en lo cotidiano" />
    <div className="grid gap-4 md:grid-cols-3">{actions.map(([title, text], i) => {
      const Icon = icons[i]
      return <article className="card" key={title} data-reveal><span className="icon"><Icon size={23} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>
    })}</div>
    <aside className="support" data-reveal><div><p className="eyebrow">Apoyo en República Dominicana</p><h3>{support.title}</h3></div><a className="btn coral" href={support.url}><Phone size={19} aria-hidden="true" />{support.label}</a></aside>
    <p className="reflection">{support.reflection}</p>
  </div></section>
}
