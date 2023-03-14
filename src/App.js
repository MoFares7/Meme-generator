import './App.css';
import Meme from './components/Body/Meme';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';

//  <Meme />
function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
    </div>
  );
}

export default App;
