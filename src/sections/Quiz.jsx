import { useLayoutEffect, useRef, useState } from 'react'
import { Check, RotateCcw, Sparkles } from 'lucide-react'
import { SectionHead } from '../components/Layout'
import { questions } from '../data/content'

export default function Quiz() {
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const heading = useRef(null)
  const moved = useRef(false)
  const complete = index === questions.length
  const [question, options, correct, explanation] = questions[index] || []

  useLayoutEffect(() => {
    if (moved.current) heading.current.focus({ preventScroll: true })
  }, [index])

  function move(next) {
    moved.current = true
    setAnswer(null)
    setIndex(next)
  }

  return (
    <section id="quiz" className="section quiz">
      <div className="wrap">
        <SectionHead label="Pon a prueba tus ideas" title="¿Qué harías en su lugar?" />
        <div className="card quiz-card" data-reveal>
          <div className="quiz-progress">
            <span>{complete ? 'Quiz completado' : `Pregunta ${index + 1} de ${questions.length}`}</span>
            <progress aria-label="Preguntas respondidas" max={questions.length} value={index + Number(answer !== null)} />
          </div>
          <h3 ref={heading} tabIndex={-1}>{complete ? 'Terminaste el quiz' : question}</h3>
          {complete ? <>
            <p>Vuelve a los casos si quieres revisar cómo cambiaría tu respuesta según el contexto.</p>
            <button className="btn primary" type="button" onClick={() => move(0)}><RotateCcw size={17} />Volver a empezar</button>
          </> : <>
            <div className="grid gap-2">
              {options.map((option, optionIndex) => <button className="choice" type="button" key={option} aria-pressed={optionIndex === answer} aria-disabled={answer !== null} onClick={() => { if (answer === null) setAnswer(optionIndex) }}>{option}</button>)}
            </div>
            <div role="status">
              {answer !== null && <div className="feedback">
                {answer === correct ? <Check size={20} /> : <Sparkles size={20} />}
                <div><strong>{answer === correct ? 'Buena elección' : 'Una respuesta más útil'}</strong><p>{answer !== correct && <><b>{options[correct]}</b><br /></>}{explanation}</p></div>
              </div>}
            </div>
            {answer !== null && <button className="btn primary" type="button" onClick={() => move(index + 1)}>{index === questions.length - 1 ? 'Ver reflexión final' : 'Siguiente'}</button>}
          </>}
        </div>
      </div>
    </section>
  )
}
