import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Login from './components/Login';

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <MainContainer />,
			},
			{
				path: 'watch',
				element: <WatchPage />,
			},
			{
				path: 'auth',
				element: <Login />,
			},
			{
				path: '*',
				element: <Navigate to="/" />,
			},
		],
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
