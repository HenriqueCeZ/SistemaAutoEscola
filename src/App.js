import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import BgCarImage from './assets/car-g511136ac0_1920.jpg'
import GlobalStyle from './components/GlobalStyle';
import Heading from './components/Heading';

function App() {
  return (
    <>
    <GlobalStyle/>
      <Hero  image={BgCarImage}>
        <Heading> 
        <h1>
         Ganhe sua <strong>liberdade</strong><br />
         para ir e vir
         </h1>
         </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
       
        
         


      </Hero>
    
    </>
  );
}

export default App;
