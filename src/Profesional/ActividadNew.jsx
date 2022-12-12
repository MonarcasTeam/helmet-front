import React, { useState } from 'react'
import { Input, InputNumber, TimePicker } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { DatePicker, } from 'antd';
import { MenuActividad } from '../Reutilizables/Botones/MenuActividad';
import { FormControl, MenuItem, Select } from '@mui/material';
import { HomeButtonProf } from '../Reutilizables/Botones/HomeButtonProf';

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

// fecha y hora actuales
var today = new Date();

// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return now;
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />;
}

// selector de combobox
export const ActividadNew = () => {

    const [showForm, setShowForm] = useState(0)
    const onChangeSelect = (e) => {
        const value = e.target.value;
        console.log(value);
        setShowForm(value);
    }
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <h3>Nueva actividad</h3>
                </div>
                <table className="nuevoRep">
                    <tr>
                        <td><b>Tipo de actividad :</b></td>
                        <td>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={showForm}
                                    onChange={onChangeSelect}
                                    sx={{ m: 4 }}
                                    style={{
                                        width: 150,
                                        height: 35,
                                        marginRight: 20,
                                        fontSize: 15,
                                    }}
                                >
                                    <MenuItem value={1}>Asesoria</MenuItem>
                                    <MenuItem value={2}>Capacitación</MenuItem>
                                    <MenuItem value={3}>Implementacion</MenuItem>
                                    <MenuItem value={4}>Multa</MenuItem>
                                    <MenuItem value={5}>Visita</MenuItem>
                                </Select>
                            </FormControl>
                        </td>
                        <td><b>Fecha y hora :</b></td>
                        <td>
                            {/* Insertar fecha y hora de sistema */}
                            <BlueDatePicker />
                        </td>
                    </tr>
                </table>
                {
                    //Contenido Asesoria
                    (showForm == 1) &&

                    <table className="nuevaActividad">
                        <tr>
                            <td><b>Fecha :</b></td>
                            <td><DatePicker onChange={onChange} /></td>
                        </tr>
                        <br />
                        <tr>
                            <td><b>Motivo :</b></td>
                            <td><Input placeholder="Uso extintores" className="inputDefectoB" /></td>
                        </tr>

                    </table>
                }

                {
                    //Contenido Capacitación
                    (showForm == 2) &&

                    <table className="nuevaActividad">
                        <tr>
                            <td><b>Fecha :</b></td>
                            <td><DatePicker onChange={onChange} /></td>
                            <td><b>Hora :</b></td>
                            <td><TimePicker onChange={onChange} /></td>
                        </tr>
                        <br />
                        <tr>
                            <td><b>Asunto :</b></td>
                            <td><Input placeholder="Uso extintores" className="inputDefectoB" /></td>
                            <td><b>Asistentes :</b></td>
                            <td><InputNumber min={10} max={30} defaultValue={10} onChange={onChange} /></td>
                        </tr>
                        <br />
                        <tr className='asdf'>
                            <td><b>Lugar :</b></td>
                            <td><Input placeholder="Bodega 7" className="inputDefectoB" /></td>
                            <td><b>Materiales :</b></td>
                            <td><Input placeholder="Extintores" className="inputDefectoB" /></td>
                        </tr>
                    </table>
                }

                {
                    //Contenido Implementación
                    (showForm == 3) &&

                    <table className="nuevaActividad">
                        <tr>
                            <td><b>Fecha :</b></td>
                            <td><DatePicker onChange={onChange} /></td>
                        </tr>
                        <br />
                        <tr>
                            <td><b>Motivo :</b></td>
                            <td><Input placeholder="Uso extintores" className="inputDefectoB" /></td>
                        </tr>

                    </table>
                }

                {
                    //Contenido Multas
                    (showForm == 4) &&

                    <table className="nuevaActividad">
                        <tr>
                            <td><b>Fecha emisión :</b></td>
                            <td><DatePicker onChange={onChange} /></td>
                            <td><b>Fecha de pago :</b></td>
                            <td><DatePicker onChange={onChange} /></td>
                            <td><b>Valor (CLP):</b></td>
                            <td><InputNumber
                                defaultValue={1000}
                                style={{
                                    width: 100,
                                }}
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            /></td>
                        </tr>
                        <br />
                        <tr>
                            <td><b>Motivo :</b></td>
                            <td><Input
                                placeholder="Uso extintores"
                                className="inputDefectoB"
                                style={{
                                    width: 260,
                                }} /></td>

                            <td><b>Estado de pago :</b></td>
                            <td><FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={showForm}
                                    onChange={onChangeSelect}
                                    style={{
                                        width: 150,
                                        height: 35,
                                        fontSize: 15,
                                    }}
                                >
                                    <MenuItem value="Pendiente">Pendiente</MenuItem>
                                    <MenuItem value="Al día">Al día</MenuItem>
                                </Select>
                            </FormControl></td>
                        </tr>
                    </table>
                }

                {
                    //Contenido Asesoria
                    (showForm == 5) &&

                    <table className="nuevaActividad">
                        <tr>
                            <td><b>Fecha visita :</b></td>
                            <td><DatePicker 
                            onChange={onChange}
                            style={{
                                marginRight: 300,
                            }}
                            /></td>
                        </tr>

                    </table>
                }

                <div className="buttons">
                    <MenuActividad />
                </div>
                <div className="homeB">
                    <HomeButtonProf />
                </div>
            </div>
        </div >
    )
}
