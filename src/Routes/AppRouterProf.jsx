import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetHomePro } from '../Profesional/HelmetHomePro'
import { RepProfesionalF } from '../Profesional/RepProfesionalF'
import { RepProfesionalS } from '../Profesional/RepProfesionalS'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHead } from '../Reutilizables/ContHead'
import { MenuProf } from '../Reutilizables/Menus/MenuProf'

export const AppRouterProf = () => {

  return (
    <div>
      <ContHead />

      <MenuProf />

      <Routes path="/">
        <Route index element={<HelmetHomePro/>} />
        <Route path='/accProfS' element={<RepProfesionalS />} />
        <Route path='/AccProf' element={<RepProfesionalF />} />
        <Route path='/backP' element={<RepProfesionalF />} />
      </Routes>

      <ContFooter />
    </div>
  )
}