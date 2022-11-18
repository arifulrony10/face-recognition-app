import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css'
const App = () => {
	return (
		<div>
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm />
			{/*<FaceRecognition /> */}
		</div>
	);
};

export default App;
