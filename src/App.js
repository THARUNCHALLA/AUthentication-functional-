import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
//import About from './components/About';
import Navbar from './components/Navbar';
import Successfully from "./components/Successfully"
import Projects from "./components/Projects"
import NotFound from './components/NotFound';
import NewProjects from './components/NewProjets';
import Users from './components/Users';
import UserData from "./components/UserData"
import FeaturedProject from './components/FeaturedProject';
import { Route,Routes } from 'react-router-dom';
import LanguageContext from './Context/LanguageContaxt';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';
import PrivateRoute from "./components/ProtectedRoute"
import './App.css';

const LazyAbout = React.lazy(()=> import('./components/About'))


function App() {
  const [user,setUser]=useState("")
  const login=(username)=>{
    setUser(username)
  }
const logout=()=>{
  setUser(null)
}

  return (
    <LanguageContext.Provider value={{user,login,logout}}>
    <Navbar/>
   <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/About" element={<React.Suspense fallback="Loading...."><LazyAbout/></React.Suspense>}/>
    <Route path="/Contact" Component={Contact}/>
    <Route path="/Successfully" Component={Successfully}/>
    <Route path='/Projects' Component={Projects}>
    <Route index Component={NewProjects}/>
      <Route path='NewProjects' Component={NewProjects}/>
      <Route path='FeaturedProjects' Component={FeaturedProject}/>
    </Route>
    <Route path='/Users' element={<PrivateRoute><Users/></PrivateRoute>}/>
    <Route path='/Login' Component={Login}/>
    <Route path='/Logout' Component={Logout}/>
    <Route path='/Users/:id' Component={UserData}/>
    <Route path="*" Component={NotFound}/>
    </Routes>
    </LanguageContext.Provider>
  );
}

export default App;
