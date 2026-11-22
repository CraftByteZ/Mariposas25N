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
  const [question, correct, explanation] = questions[index] || []

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
        <SectionHead label="Pon a prueba tus ideas" title="¿Mito o realidad?" />
        <div className="card quiz-card" data-reveal>
          <div className="quiz-progress">
            <span>{complete ? 'Quiz completado' : `Pregunta ${index + 1} de ${questions.length}`}</span>
            <progress aria-label="Preguntas respondidas" max={questions.length} value={index + Number(answer !== null)} />
          </div>
          <h3 ref={heading} tabIndex={-1}>{complete ? 'El respeto se practica cada día' : question}</h3>
          {complete ? <>
            <p>Reconocer el control, respetar la autonomía de otras personas y escuchar sin juzgar son formas de prevenir la violencia.</p>
            <button className="btn primary" type="button" onClick={() => move(0)}><RotateCcw size={17} />Volver a empezar</button>
          </> : <>
            <div className="grid grid-cols-2 gap-3">
              {['Mito', 'Realidad'].map(option => <button className="choice" type="button" key={option} aria-pressed={option === answer} aria-disabled={answer !== null} onClick={() => { if (answer === null) setAnswer(option) }}>{option}</button>)}
            </div>
            <div role="status">
              {answer !== null && <div className="feedback">
                {answer === correct ? <Check size={20} /> : <Sparkles size={20} />}
                <div><strong>{answer === correct ? '¡Correcto! ' : 'La respuesta es '}{correct}.</strong><p>{explanation}</p></div>
              </div>}
            </div>
            {answer !== null && <button className="btn primary" type="button" onClick={() => move(index + 1)}>{index === questions.length - 1 ? 'Ver reflexión final' : 'Siguiente'}</button>}
          </>}
        </div>
      </div>
    </section>
  )
}
