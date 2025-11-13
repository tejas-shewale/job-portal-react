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

function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/onbording",
          element: <Onbording />
        },
        {
          path: "/jobs",
          element: <JobListing />
        },
        {
          path: "/job/:id",
          element: <JobPage />
        },
        {
          path: "/post-job",
          element: <PostJob />
        },
        {
          path: "/saved-jobs",
          element: <SavedJob />
        },
        {
          path: "/my-jobs",
          element: <MyJobs  />
        },
       
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
