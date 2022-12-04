import { useState } from 'react'
import './LoginInitialHome.css'

export function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className={'wrapInput'}>
        <input
          className={email !== '' ? 'hasVal input' : 'input'}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={'focusInput'} data-placeholder="E-mail"></span>
      </div>

      <div className={'wrapInput'}>
        <input
          className={password !== '' ? 'hasVal input' : 'input'}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={'focusInput'} data-placeholder="Password"></span>
      </div>

      <div className={'containerLoginFormBtn'}>
        <button className={'loginFormBtn'}>Login</button>
      </div>
      <div className={'textCenter'}>
        <p className={'text1'}>Não possui conta?</p>

        <a className={'text2'} href="#">
          Criar conta.
        </a>
      </div>

      <div className={'textCenter'}>
        <p className={'text1'}>Esqueceu a senha?</p>

        <a className={'text2'} href="#">
          Clique aqui.
        </a>
      </div>
    </>
  )
}
