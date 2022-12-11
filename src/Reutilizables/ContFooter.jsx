import React from 'react'

export const ContFooter = () => {
    return (
        <div className="footerBox">
            <div className="repError">
                <a href="#">Reportar error</a>
            </div>
            <div className="monarcas">
                <p>@MonarcasTeam - Helmet - 2022</p>
            </div>
            <div className="menuInf">
                <ul className="menInf">
                    <li><a href="#">Quiénes somos</a></li>
                    <li><a href="#">Sitio web</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}