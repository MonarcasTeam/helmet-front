// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { HelmetHomeAdm } from '../Administrador/HelmetHomeAdm'
// import { UsersAdmF } from '../Administrador/UsersAdmF'
// import { UsersAdmS } from '../Administrador/UsersAdmS'
// import { UsersAdmT } from '../Administrador/UsersAdmT'
// import { ContFooter } from '../Reutilizables/ContFooter'
// import { ContHead } from '../Reutilizables/ContHead'
// import { MenuAdm } from '../Reutilizables/Menus/MenuAdm'
// import { UsersAdmMain } from '../Administrador/UsersAdmMain'
// import { UsersDetailAdm } from '../Administrador/UsersDetailAdm'
// import { UsersDetailSaved } from '../Administrador/UsersDetailSaved'
// import { AdmPagosMain } from '../Administrador/AdmPagosMain'
// import { AdmPagosDetail1 } from '../Administrador/AdmPagosDetail1'
// import { AdmPagosDetail2 } from '../Administrador/AdmPagosDetail2'

// export const AppRouterAdm = () => {

//   return (
//     <div>
//       <ContHead />

//       <MenuAdm />

//       <Routes>
//         <Route path="/admin" element={<HelmetHomeAdm />} />
//         <Route path='/admin/AccAdm' element={<UsersAdmF />} />
//         <Route path='/admin/NewUser' element={<UsersAdmS />} />
//         <Route path='/admin/saveNewUser' element={<UsersAdmT />} />
//         <Route path="/admin/listUsers" element={<UsersAdmMain />} />
//         <Route path="/admin/detailUsers" element={<UsersDetailAdm />} />
//         <Route path="/admin/saveDetailUser" element={<UsersDetailSaved />} />
//         <Route path="/admin/PagosMain" element={<AdmPagosMain />} />
//         <Route path="/admin/PagoDetail1" element={<AdmPagosDetail1 />} />
//         <Route path="/admin/PagoDetail2" element={<AdmPagosDetail2 />} />
//       </Routes>

//       <ContFooter />
//     </div>
//   )
// }