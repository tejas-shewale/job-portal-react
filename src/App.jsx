import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onbording from "./pages/Onbording"
import JobListing from "./pages/JobListing"
import JobPage from "./pages/Job"
import PostJob from "./pages/PostJob"
import SavedJob from "./pages/savedJob"
import MyJobs from "./pages/MyJobs"
import { ThemeProvider } from "./components/theme-provider"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children: [
        {path: "/",element:  <LandingPage />},
        {path: "/onbording",element: (<ProtectedRoute><Onbording /></ProtectedRoute>)},
        {path: "/jobs", element: (<ProtectedRoute><JobListing /></ProtectedRoute>)},
        {path: "/job/:id", element: (<ProtectedRoute><JobPage /></ProtectedRoute>)},
        {path: "/post-job",element:( <ProtectedRoute><PostJob /></ProtectedRoute>)},
        {path: "/saved-jobs",element: (<ProtectedRoute><SavedJob /></ProtectedRoute>)},
        {path: "/my-jobs",element: (<ProtectedRoute><MyJobs  /></ProtectedRoute>)},
       
      ]
    }
  ])

  return <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
}

export default App
