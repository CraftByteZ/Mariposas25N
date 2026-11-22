import { useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navigation, site } from '../data/content'

function Brand() {
  return <a className="brand" href="#inicio"><img src="/mariposa.svg" width="34" height="34" alt="" />{site.name}</a>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const menu = useRef(null)
  return (
    <header onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menu.current.focus()
      }
    }}>
      <div className="wrap bar">
        <Brand />
        <button ref={menu} className="menu" type="button" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="navigation" className={open ? 'open' : ''} aria-label="Principal">
          {navigation.map(([id, label]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}

export function SectionHead({ label, title, children }) {
  return <div className="section-head" data-reveal><p className="eyebrow">{label}</p><h2>{title}</h2>{children && <p className="intro">{children}</p>}</div>
}

export function Disclosure({ label, children }) {
  return <details><summary>{label}<ChevronDown size={17} aria-hidden="true" /></summary><p>{children}</p></details>
}

export function Footer() {
  return <footer><div className="wrap footer-row">
    <div><Brand /><p>{site.course}</p>{site.team.length > 0 && <p>{site.team.join(', ')}</p>}</div>
    <a href="#acciones">Consulta recursos de apoyo</a>
  </div></footer>
}
