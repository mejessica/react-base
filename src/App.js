import Paragrafo from './components/paragrafo/paragrafo'
import Button from './components/button/button'
import './App.css';

function App() {
  return (
    <div className='div'>
    <Paragrafo color='#684e77'>
      <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
    </Paragrafo>

    <Button label='Saiba mais' color='#095b5b'/>
    <Button label='Pesquisar outra coisa' color='#8daec3'/>
    </div>
  );
}

export default App;
