import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectInfo from './pages/ProjectInfo';


const Home = lazy(() => import('./pages/Home'))
const JoinUs = lazy(() => import('./pages/JoinUs'))
const JobApplication = lazy(() => import('./pages/JobApplication'))
const OurWork = lazy(() => import('./pages/OurWork'))
// const AppLayout = lazy(() => import('./components/appLayout/AppLayout'))
// const Account = lazy(() => import('./pages/accounts/Account'))



const App = () => {
  return (
    <main className="font-sans">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/ourWork" element={<OurWork />} />
        <Route path="/ourWork/:id" element={<ProjectInfo />} />
        <Route path="/joinUs/:id" element={<JobApplication />} />
      </Routes>
    </Router>
    </main>
  )
}

export default App
