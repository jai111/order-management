
import {Routes, Route} from 'react-router-dom'
import { Suspense } from 'react';
import NavBar from "./views/NavBar/NavBar";
import LoginPage from "./views/LoginPage/LoginPage"
import LandingPage from "./views/LandingPage"
import AddCompany from './views/AddCompany/AddCompany';
import AddItem from './views/AddItem/AddItem';
import DownloadOrder from './views/DownloadOrder/DownloadOrder';
import AddUser from './views/AddUser/AddUser'
import DeleteOrder from './views/DeleteOrder/DeleteOrder';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <Routes>
          <Route path="/" element = {<LandingPage/>}/>
          <Route path="/addCompany" element = {<AddCompany/>}/>
          <Route path="/additem" element = {<AddItem/>}/>
          <Route path="/download-order" element = {<DownloadOrder/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/signup" element = {<AddUser/>}/>
          <Route path = "/delete-order" element = {<DeleteOrder/>}/>
        </Routes>
  </Suspense>
  );
}

export default App;
