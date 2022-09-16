import Botao from '../Botao'
import CampoTexto from './CampoTexto'
import './TelaLogin.css'


const TelaLogin = (props) => {
    return (
    
    <section>
            <div className='container-flex'>
            <div className='blue-triangle'></div>
            <form className='square'>
                    <img src="./imagens/Logo.png" alt="Logo" />
                    <hr className='logo-hr'></hr>
                    <CampoTexto  placeholder="Digite o seu login" />
                    <CampoTexto  placeholder="Digite a sua senha" />
                    <Botao>
                      Entrar
                     </Botao>
                    </form>
                <div className='green-triangle'></div>
            </div>

        </section>
    )
}

export default TelaLogin