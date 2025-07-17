import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import('./pages/Home'))
const JoinUs = lazy(() => import('./pages/JoinUs'))
const JobApplication = lazy(() => import('./pages/JobApplication'))
// const Signup = lazy(() => import('./pages/signup/Signup'))
// const AppLayout = lazy(() => import('./components/appLayout/AppLayout'))
// const Account = lazy(() => import('./pages/accounts/Account'))



const App = () => {
  return (
    <main className="font-sans">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/joinUs/:id" element={<JobApplication />} />
      </Routes>
    </Router>
    </main>
  )
}

export default App
