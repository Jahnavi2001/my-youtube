import { auth } from '../utils/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
	const handleLogin = () => {
		const provider = new GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
		signInWithPopup(auth, provider)
			.then((result) => {})
			.catch((error) => {});
	};

	return (
		<div className="w-2/6 bg-black bg-opacity-80 text-white py-8 mx-auto flex flex-col items-center mt-48 gap-8">
			<div className="text-xl font-bold">My Youtube Clone</div>
			<div>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
					alt="youtube-logo"
					className="h-28"
				/>
			</div>
			<div>
				<button
					onClick={handleLogin}
					className="bg-white text-black rounded-lg px-4 py-2 w-full"
				>
					Login with Google
				</button>
			</div>
		</div>
	);
};

export default Login;
