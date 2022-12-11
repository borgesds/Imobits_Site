import { Routes, Route } from 'react-router-dom'
import { DefaultHome } from './layouts/DefaultHome'
import { DefaultRegistration } from './layouts/DefaultRegistration'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home/components'

import { Registration } from './pages/Registration/components'
import { CustomerRegistration } from './pages/Registration/CustomerRegistration'
import { SearchProperties } from './pages/SearchProperties'
import { Services } from './pages/Services'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultHome />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/searchproperties" element={<SearchProperties />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/registration" element={<DefaultRegistration />}>
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/registration/customerregistration"
          element={<CustomerRegistration />}
        />
      </Route>
    </Routes>
  )
}
