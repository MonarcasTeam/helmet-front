import { CerrarSesion } from "./Botones/CerrarSesion.jsx"
import "./estReu.css"

export const ContHead = () => {
  return (
    <div className="headerBox">
      <div className="logoHel">
        <a href="#">
          <img src="/img/logo.png" alt="logo_helmet" className="logoHelmet" />
        </a>
      </div>
      <div className="welcomeU">
        <h2>Bienvenido</h2>
      </div>
      <div className="sesion">
        <CerrarSesion />
      </div>
    </div>
  )
}