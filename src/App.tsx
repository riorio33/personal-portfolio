import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/AppFrame/Home";
import AppFrame from "./pages/AppFrame";
import "./styles/index.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppFrame />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
