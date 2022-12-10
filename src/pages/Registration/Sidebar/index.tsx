import { HouseLine } from 'phosphor-react'
import { Cover, Profile, SidebarRegistration } from './styles'
import imob from '../../../assets/img/imob.jpg'

export function Sidebar() {
  return (
    <SidebarRegistration>
      <Cover>
        <p>Seja Bem - Vindo</p>
      </Cover>
      <Profile>
        <img src={imob} alt="" />

        <strong>André Fonseca Borges</strong>
        <span>Developer</span>
      </Profile>

      <footer>
        <a href="#">
          Home page
          <div>
            <HouseLine size={25} />
          </div>
        </a>
      </footer>
    </SidebarRegistration>
  )
}
