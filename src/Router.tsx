import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home/components'

import { Registration } from './pages/Registration/components'
import { SearchProperties } from './pages/SearchProperties'
import { Services } from './pages/Services'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/searchproperties" element={<SearchProperties />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/registration">
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  )
}
