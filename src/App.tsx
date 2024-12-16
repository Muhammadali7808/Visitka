import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Login } from "./pages/Login";
import { RoutData } from "./Router/router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          {RoutData.map(({ component: Element1, id, path }) => (
            <Route
              index={path ? false : true}
              path={path}
              key={id}
              element={<Element1 />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
