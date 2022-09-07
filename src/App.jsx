import WebsiteNavbar from './components/navbar/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Publications from './components/publications/Publications'
import Contacts from './components/contacts/Contacts'
import NotFoundError from './components/errors/NotFound'

const App = () => {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/publications' element={<Publications/>}/>
        <Route exact path='/contacts' element={<Contacts/>}/>
        <Route path="*" element={<NotFoundError/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
