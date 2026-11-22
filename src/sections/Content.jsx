import { useState } from 'react'
import { Eye, HeartHandshake, Lightbulb, MessageCircle, Phone, ShieldCheck, Smartphone, Wallet } from 'lucide-react'
import { Disclosure, SectionHead } from '../components/Layout'
import { actions, hero, signs, sisters, site, support, timeline } from '../data/content'

export function Hero() {
  const [first, second, third, fourth] = hero.title
  return <section className="hero" id="inicio"><div className="wrap hero-body">
    <p className="eyebrow"><span aria-hidden="true">✦</span> {site.motto}</p>
    <h1>{first}<br /><span className="capsule">{second}</span><br /><span className="hero-last">{third} <span className="capsule">{fourth}</span></span></h1>
    <p className="hero-copy">{hero.description}</p>
    <div className="hero-links"><a className="btn coral" href="#historia">Conocer por qué se conmemora</a><a className="btn outline" href="#mirabal">Las Hermanas Mirabal</a></div>
  </div></section>
}

export function Timeline() {
  return <section className="section" id="historia"><div className="wrap">
    <SectionHead label="El origen del 25N" title="¿Por qué se conmemora el 25 de noviembre?" />
    <ol className="timeline">{timeline.map(([year, title, text, detail]) => <li key={year} data-reveal>
      <div className="card"><span className="year">{year}</span><h3>{title}</h3><p>{text}</p><Disclosure label="Leer más">{detail}</Disclosure></div>
    </li>)}</ol>
  </div></section>
}

export function Sisters() {
  const [index, setIndex] = useState(0)
  const [, name, years, , bio] = sisters[index]
  return <section className="section sisters" id="mirabal"><div className="wrap">
    <SectionHead label="Las hermanas Mirabal" title="Tres hermanas, un legado de libertad" />
    <div className="sisters-grid" data-reveal>
      <div className="portrait-grid" role="group" aria-label="Elige una hermana">{sisters.map(([label, , , img], i) => <button className="portrait" type="button" key={label} aria-pressed={index === i} aria-controls="biografia" onClick={() => setIndex(i)}>
        <img src={img} width="240" height="240" alt="" loading="lazy" /><span>{label}</span>
      </button>)}</div>
      <article className="card biography" id="biografia" aria-live="polite"><p className="eyebrow">{years}</p><h3>{name}</h3><p>{bio}</p></article>
    </div>
  </div></section>
}

export function Signs() {
  const icons = [Eye, MessageCircle, Wallet, Smartphone]
  return <section className="section" id="pilares"><div className="wrap">
    <SectionHead label="Reconoce las señales" title="La violencia no siempre es visible">El control, la intimidación y las restricciones económicas también pueden limitar la libertad de una persona.</SectionHead>
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
