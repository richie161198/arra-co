import { useEffect } from 'react'
import './FluidBackground.css'

export default function FluidBackground() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/webgl-fluid.js'
    script.async = false
    document.body.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <div className="fluid-background" aria-hidden>
      <canvas className="fluid-background__canvas" />
    </div>
  )
}
