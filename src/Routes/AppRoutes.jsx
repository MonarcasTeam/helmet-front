import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Accidentabilidad } from '../Administrador/Accidentabilidad'
import { ActClientes } from '../Administrador/ActClientes'
import { ActClientesDetail1 } from '../Administrador/ActClientesDetail1'
import { AdmPagosDetail1 } from '../Administrador/AdmPagosDetail1'
import { AdmPagosDetail2 } from '../Administrador/AdmPagosDetail2'
import { AdmPagosMain } from '../Administrador/AdmPagosMain'
import { ClientAdmMain } from '../Administrador/ClientAdmMain'
import { ClientAdmS } from '../Administrador/ClientAdmS'
import { HelmetHomeAdm } from '../Administrador/HelmetHomeAdm'
import { RendimientoDet1 } from '../Administrador/RendimientoDet1'
import { RendimientoMain } from '../Administrador/RendimientoMain'
import { ReportesMain } from '../Administrador/ReportesMain'
import { UsersAdmMain } from '../Administrador/UsersAdmMain'
import { UsersAdmS } from '../Administrador/UsersAdmS'
import { UsersDetailAdm } from '../Administrador/UsersDetailAdm'
import { LogSesion } from '../Auth/LogSesion'
import { HelmetHomeCli } from '../Cliente/HelmetHomeCli'
import { AccClienteF } from '../Cliente/AccClienteF'
import { AccClienteS } from '../Cliente/AccClienteS'
import { AccClienteT } from '../Cliente/AccClienteT'
import { HelmetContext } from '../Context/HelmetContext'
import { ActClientesDetaill } from '../Profesional/ActClientesDetaill'
import { HelmetHomePro } from '../Profesional/HelmetHomePro'
import { ListClientes } from '../Profesional/ListClientes'
import { ReporteCli } from '../Profesional/ReporteCli'
import { ReporteNew } from '../Profesional/ReporteNew'
import { ReportesCli } from '../Profesional/ReportesCli'
import { RepProfesionalF } from '../Profesional/RepProfesionalF'
import { RepProfesionalS } from '../Profesional/RepProfesionalS'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHead } from '../Reutilizables/ContHead'
import { MenuAdm } from '../Reutilizables/Menus/MenuAdm';
import { MenuCliente } from '../Reutilizables/Menus/MenuCliente'
import { MenuProf } from '../Reutilizables/Menus/MenuProf'
import { ProtectedRoute } from '../Routes/ProtectedRoute';
import { ReportClientes } from '../Cliente/ReportClientes'
import { ReporteClientesS } from '../Cliente/ReporteClientesS'
import { SolicitudClienteF } from '../Cliente/SolicitudClienteF'
import { SolicitudClienteS } from '../Cliente/SolicitudClienteS'
import { SubCliente } from '../Administrador/SubCliente'
import { SoliClientesF } from '../Administrador/SoliClientesF'
import { SoliClienteS } from '../Administrador/SoliClienteS'
import { ActividadNew } from '../Profesional/ActividadNew'
import { ClientAdmDetail } from '../Administrador/ClientAdmDetail'
import { ReportClientesAdm } from '../Administrador/ReportClientesAdm'
import { UsersDetailAdm2 } from '../Administrador/UsersDetailAdm2'
import { UsersDetailAdm3 } from '../Administrador/UsersDetailAdm3'
import { RendimientoDet2 } from '../Administrador/RendimientoDet2'

export const AppRoutes = () => {

  const { user } = useContext(HelmetContext);
  const { status } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'not-authenticated', [status]);

  const nav = useNavigate();

  useEffect(() => {
    if (isAuthenticating) {
      nav('/auth');
    }
  }, []);

  return (
    <div>

      {
        (user.active == true) && <ContHead />
      }

      {
        (user.active == true && user.role == "ROLE_ADMIN") ? <MenuAdm /> : ""
      }
      {
        (user.active == true && user.role == "ROLE_PROFESSIONAL") ? <MenuProf /> : ""
      }
      {
        (user.active == true && user.role == "ROLE_CUSTOMER") ? <MenuCliente /> : ""
      }

      <Routes>

        {/* rutas para login */}
        <Route path="/auth" element={<LogSesion />} />

        {/* rutas para administrador */}

        <Route path="/admin" element={
          <ProtectedRoute user={user}>
            <HelmetHomeAdm />
          </ProtectedRoute>
        } />

        <Route path="/admin/NewUser" element={
          <ProtectedRoute user={user}>
            <UsersAdmS />
          </ProtectedRoute>
        } />

        <Route path="/admin/listUsers" element={
          <ProtectedRoute user={user}>
            <UsersAdmMain />
          </ProtectedRoute>
        } />

        <Route path="/admin/detailUsers" element={
          <ProtectedRoute user={user}>
            <UsersDetailAdm />
          </ProtectedRoute>
        } />

        <Route path="/admin/detailUsers2" element={
          <ProtectedRoute user={user}>
            <UsersDetailAdm2 />
          </ProtectedRoute>
        } />

        <Route path="/admin/detailUsers3" element={
          <ProtectedRoute user={user}>
            <UsersDetailAdm3 />
          </ProtectedRoute>
        } />

        <Route path="/admin/NewClient" element={
          <ProtectedRoute user={user}>
            <ClientAdmS />
          </ProtectedRoute>
        } />

        <Route path="/admin/listClient" element={
          <ProtectedRoute user={user}>
            <ClientAdmMain />
          </ProtectedRoute>
        } />

        <Route path="/admin/clientDetail" element={
          <ProtectedRoute user={user}>
            <ClientAdmDetail />
          </ProtectedRoute>
        } />

        <Route path="/admin/SubCliente" element={
          <ProtectedRoute user={user}>
            <SubCliente />
          </ProtectedRoute>
        } />

        <Route path="/admin/PagosMain" element={
          <ProtectedRoute user={user}>
            <AdmPagosMain />
          </ProtectedRoute>
        } />

        <Route path="/admin/PagoDetail" element={
          <ProtectedRoute user={user}>
            <AdmPagosDetail1 />
          </ProtectedRoute>
        } />

        <Route path="/admin/PagoDetail2" element={
          <ProtectedRoute user={user}>
            <AdmPagosDetail2 />
          </ProtectedRoute>
        } />

        <Route path="/admin/BackPago" element={
          <ProtectedRoute user={user}>
            <AdmPagosMain />
          </ProtectedRoute>
        } />

        <Route path="/admin/accidentabilidad" element={
          <ProtectedRoute user={user}>
            <Accidentabilidad />
          </ProtectedRoute>
        } />

        <Route path="/admin/actividades" element={
          <ProtectedRoute user={user}>
            <ActClientes />
          </ProtectedRoute>
        } />

        <Route path="/admin/ActClientesDetail1" element={
          <ProtectedRoute user={user}>
            <ActClientesDetail1 />
          </ProtectedRoute>
        } />

        <Route path="/admin/BackAct" element={
          <ProtectedRoute user={user}>
            <ActClientes />
          </ProtectedRoute>
        } />

        <Route path="/admin/SoliClienteF" element={
          <ProtectedRoute user={user}>
            <SoliClientesF />
          </ProtectedRoute>
        } />

        <Route path="/admin/SoliClienteS" element={
          <ProtectedRoute user={user}>
            <SoliClienteS />
          </ProtectedRoute>
        } />

        <Route path="/admin/ReportesMain" element={
          <ProtectedRoute user={user}>
            <ReportesMain />
          </ProtectedRoute>
        } />

        <Route path="/admin/ReportesCliAdm" element={
          <ProtectedRoute user={user}>
            <ReportClientesAdm />
          </ProtectedRoute>
        } />

        <Route path="/admin/RendimientoMain" element={
          <ProtectedRoute user={user}>
            <RendimientoMain />
          </ProtectedRoute>
        } />

        <Route path="/admin/RendimientoDet1" element={
          <ProtectedRoute user={user}>
            <RendimientoDet1 />
          </ProtectedRoute>
        } />

        <Route path="/admin/RendimientoDet2" element={
          <ProtectedRoute user={user}>
            <RendimientoDet2 />
          </ProtectedRoute>
        } />


        {/* rutas para clientes */}

        <Route path="/cli" element={
          <ProtectedRoute user={user}>
            <HelmetHomeCli />
          </ProtectedRoute>
        } />

        <Route path='/cli/AccCli' element={
          <ProtectedRoute user={user}>
            <AccClienteF />
          </ProtectedRoute>
        } />

        <Route path='/cli/NewAcc' element={
          <ProtectedRoute user={user}>
            <AccClienteS />
          </ProtectedRoute>
        } />


        <Route path='/cli/AccDetalle' element={
          <ProtectedRoute user={user}>
            <AccClienteT />
          </ProtectedRoute>
        } />

        <Route path='/cli/ReportClientes' element={
          <ProtectedRoute user={user}>
            <ReportClientes />
          </ProtectedRoute>
        } />

        <Route path='/cli/ReportClientesS' element={
          <ProtectedRoute user={user}>
            <ReporteClientesS />
          </ProtectedRoute>
        } />

        <Route path='/cli/SolicitudClienteF' element={
          <ProtectedRoute user={user}>
            <SolicitudClienteF />
          </ProtectedRoute>
        } />

        <Route path='/cli/NewSolicitud' element={
          <ProtectedRoute user={user}>
            <SolicitudClienteS />
          </ProtectedRoute>
        } />

        {/* rutas para profesionales */}

        {
          (user.role == 'ROLE_PROFESSIONAL') && <Route path="/prof" element={
            <ProtectedRoute user={user}>
              <HelmetHomePro />
            </ProtectedRoute>
          } />
        }

        <Route path='/prof/accProfS' element={
          <ProtectedRoute user={user}>
            <RepProfesionalS />
          </ProtectedRoute>
        } />

        <Route path='/prof/AccProf' element={
          <ProtectedRoute user={user}>
            <RepProfesionalF />
          </ProtectedRoute>
        } />

        <Route path='/prof/ListClientes' element={
          <ProtectedRoute user={user}>
            <ListClientes />
          </ProtectedRoute>
        } />

        <Route path='/prof/NewActividad' element={
          <ProtectedRoute user={user}>
            <ActividadNew />
          </ProtectedRoute>
        } />

        <Route path='/prof/ActClientes' element={
          <ProtectedRoute user={user}>
            <ActClientesDetaill />
          </ProtectedRoute>
        } />

        <Route path='/prof/RepCli' element={
          <ProtectedRoute user={user}>
            <ReportesCli />
          </ProtectedRoute>
        } />

        <Route path='/prof/NewReport' element={
          <ProtectedRoute user={user}>
            <ReporteNew />
          </ProtectedRoute>
        } />

        <Route path='/prof/ReportCliente' element={
          <ProtectedRoute user={user}>
            <ReporteCli />
          </ProtectedRoute>
        } />

      </Routes>

      {
        (user.active == true) && <ContFooter />
      }

    </div>
  )
}
