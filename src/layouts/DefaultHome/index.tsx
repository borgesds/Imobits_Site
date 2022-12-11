import { Outlet } from 'react-router-dom'
import { Footers } from '../../components/Footers'
import { Headers } from '../../components/Headers'
import { LayoutContainer } from './styled'

export function DefaultHome() {
  return (
    <LayoutContainer>
      <Headers />

      <Outlet />

      <Footers />
    </LayoutContainer>
  )
}
