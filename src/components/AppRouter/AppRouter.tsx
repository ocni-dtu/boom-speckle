import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Loading } from '@components'
import { AuthPage } from '@pages'

const LoginPage = lazy(() => import('../../pages/LoginPage'))
const ProjectsPage = lazy(() => import('../../pages/ProjectsPage'))
const TablePage = lazy(() => import('../../pages/TablePage'))

export const AppRouter = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/table/:projectId' element={<TablePage />} />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  </Suspense>
)
