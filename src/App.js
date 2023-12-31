import Saudacao from './components/Saudacao';
import Estado from './components/Estado';
import Pai from './components/Pai';
import Evento from './components/Evento';
import MousePosition from './components/MousePosition';
import Logo from './assets/logo.png'
import Contador from './components/Contator';
import Lista from './components/Lista';

function App() {
    return (
        <div>
            <Saudacao nome="Lucas" />
            <Estado />
            <Pai nome="João" sobrenome="Silva" />
            <Evento />
            <MousePosition/>

            {/* Imagem em public */}
            <img src='/logo192.png' alt='logo'/>

            {/* Imagem em src */}
            <img src={Logo} alt='logo2'/>

            <Contador/>
            <Lista/>
        </div>
    )
}

export default App