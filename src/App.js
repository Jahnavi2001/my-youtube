import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header.js";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage/>,
      },
      {
        path: '*',
        element: <Navigate to='/'/>
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
