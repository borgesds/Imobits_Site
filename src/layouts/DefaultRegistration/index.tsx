import { Outlet } from 'react-router-dom'
import { HeaderRegistration } from '../../pages/Registration/components/Header'
import { Sidebar } from '../../pages/Registration/components/Sidebar'
import { Wrapper } from './styles'

export function DefaultRegistration() {
  return (
    <>
      <HeaderRegistration />

      <Wrapper>
        <Sidebar />

        <Outlet />
      </Wrapper>
    </>
  )
}
