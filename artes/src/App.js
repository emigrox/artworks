import './App.css';
import Portal from './Portal';
import Header from './Header';
import Principal from './Principal';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
       <p>aca hay tristesa no mas</p>
      </header>
      <div>
      <Header/>
      </div>
      <div>
      <Portal/>
      </div>
      <div>
      <Principal/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
   
  );
}



export default App;
