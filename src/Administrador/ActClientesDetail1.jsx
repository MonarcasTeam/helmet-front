import React, { useState } from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import Button from 'react-bootstrap/Button';
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin';
import { BackButtonAct } from '../Reutilizables/Botones/BackButtonAct';
import { ModalVisitas } from '../Reutilizables/Modals/ModalVisitas';
import { ModalCapa } from '../Reutilizables/Modals/ModalCapa';
import { ModalAse } from '../Reutilizables/Modals/ModalAse';
import { ModalLlama } from '../Reutilizables/Modals/ModalLlama';
import { ModalImp } from '../Reutilizables/Modals/ModalImp';
import { ModalAcc } from '../Reutilizables/Modals/ModalAcc';
import { ModalMulta } from '../Reutilizables/Modals/ModalMulta';
import { ModalInf } from '../Reutilizables/Modals/ModalInf';

export const ActClientesDetail1 = () => {

    const [stateVisitas, setStateVisitas] = useState(false);

    const showVisitas = () => {
        // setTimeout( () => {
        setStateVisitas(true);
        // }, 5000 );  
    }

    const [stateCapa, setStateCapa] = useState(false);

    const showCapa = () => {
        // setTimeout( () => {
        setStateCapa(true);
        // }, 5000 );  
    }

    const [stateAse, setStateAse] = useState(false);

    const showAse = () => {
        // setTimeout( () => {
        setStateAse(true);
        // }, 5000 );  
    }

    const [stateLlama, setStateLlama] = useState(false);

    const showLlama = () => {
        // setTimeout( () => {
        setStateLlama(true);
        // }, 5000 );  
    }

    const [stateImp, setStateImp] = useState(false);

    const showImp = () => {
        // setTimeout( () => {
        setStateImp(true);
        // }, 5000 );  
    }

    const [stateAcc, setStateAcc] = useState(false);

    const showAcc = () => {
        // setTimeout( () => {
        setStateAcc(true);
        // }, 5000 );  
    }

    const [stateMulta, setStateMulta] = useState(false);

    const showMulta = () => {
        // setTimeout( () => {
        setStateMulta(true);
        // }, 5000 );  
    }

    const [stateInf, setStateInf] = useState(false);

    const showInf = () => {
        // setTimeout( () => {
        setStateInf(true);
        // }, 5000 );  
    }

    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="codEmpresa">
                    <h2>Empresa #100001</h2>
                </div>
                <table className="pagoDetail">
                    <tr>
                        <td><b>Empresa :</b></td>
                        <td>Mercadolibre CL</td>
                        <td><b>Profesional a cargo :</b></td>
                        <td>Verónica Proboste</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Rut empresa :</b></td>
                        <td>11.111.111-1</td>
                    </tr>
                    <br />
                    <br />



                    <tr className="buttonsAct">
                        {/* sólo botones popup modal */}
                        <td><Button onClick={showVisitas} className="buttonsAct" variant="success">Visitas</Button></td>
                        <td><Button onClick={showCapa} className="buttonsAct" variant="success">Capacitaciones</Button></td>
                        <td><Button onClick={showAse} className="buttonsAct" variant="success">Asesorías</Button></td>
                        <td><Button onClick={showLlama} className="buttonsAct" variant="success">Llamados</Button></td>



                    </tr>
                    <br />
                    <tr className="buttonsAct">
                        <td><Button onClick={showImp} className="buttonsAct" variant="success">Implementaciones</Button></td>
                        <td><Button onClick={showAcc} className="buttonsAct" variant="success">Accidentes</Button></td>
                        <td><Button onClick={showMulta} className="buttonsAct" variant="outline-sucess" disabled>Multas</Button></td>
                        <td><Button onClick={showInf} className="buttonsAct" variant="success">Informes</Button></td>
                    </tr>


                    {
                        (stateVisitas) ? <ModalVisitas setStateVisitas={setStateVisitas} /> : ""
                    }
                    {
                        (stateCapa) ? <ModalCapa setStateCapa={setStateCapa} /> : ""
                    }
                    {
                        (stateAse) ? <ModalAse setStateAse={setStateAse} /> : ""
                    }
                    {
                        (stateLlama) ? <ModalLlama setStateLlama={setStateLlama} /> : ""
                    }
                    {
                        (stateImp) ? <ModalImp setStateImp={setStateImp} /> : ""
                    }
                    {
                        (stateAcc) ? <ModalAcc setStateAcc={setStateAcc} /> : ""
                    }
                    {
                        (stateMulta) ? <ModalMulta setStateMulta={setStateMulta} /> : ""
                    }
                    {
                        (stateInf) ? <ModalInf setStateInf={setStateInf} /> : ""
                    }

                </table>
                <div className="SetButtonsPago">
                    <div className="buttonsPago">
                        <BackButtonAct />
                    </div>
                    <div className="homePago">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}