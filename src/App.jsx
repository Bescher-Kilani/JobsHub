import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider, Router,
} from 'react-router-dom'
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';



const App = () => {
    const addJob = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
            </Route>
        )
    );

  return <RouterProvider router={router} />
};

export default App;
