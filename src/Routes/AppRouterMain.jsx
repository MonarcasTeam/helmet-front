import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LogSesion } from '../Auth/LogSesion'
import { AppRouterCli } from './AppRouterCli'
import { AppRouterProf } from './AppRouterProf'

export const AppRouterMain = () => {
    return (
        <div>
            <Routes>
                <Route path='/clienteM' element={<AppRouterCli />} />
                <Route path='/profesional' element={<AppRouterProf />} />
            </Routes>
        </div>
    )
}
