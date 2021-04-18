import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEye} from '@fortawesome/free-solid-svg-icons'
import './css/sitewideStyles.css'

import Home from './components/pages/home'
import Portfolio from './components/pages/portfolio'
import Resume from './components/pages/resume'
import Contact from './components/pages/contact'
import LoginPage from './components/pages/login'
import AdminPage from './components/pages/adminPages/admin'
import SecureRoute from './components/shared/secureRoute'
import Footer from './components/shared/footer'
import Error from './components/shared/error'

library.add(fab, faArrowRight, faEye)

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/contact' component={Contact}/>  
          <Route path='/login' component={LoginPage}/>
          <SecureRoute path='/admin'>
            <AdminPage />
          </SecureRoute>      
          <Route component={Error}/>
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
