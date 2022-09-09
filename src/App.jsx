import AppRouter from './components/router/AppRouter';
import Background from './assets/bg-texture.png'


const App = () => {
  return (
    <div className='App' style={{backgroundImage: `url(${Background})`}}>
      <AppRouter />
    </div>
  );
}

export default App;
