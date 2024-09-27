import Footer from "./pages/Footer";
import "./App.css";
import NavBar from "./components/NavBar";
import { RouterProvider } from "react-router-dom";
import router from "./components/routeMe";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

// const App = () => {
//   return <RouterProvider router={router} />;
// };

export default App;
