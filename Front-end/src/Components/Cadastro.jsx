import './style.css';
import './animacion.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const navigate = useNavigate();
    return (
        <div>
            <header className='area-header'>
                <section className='area-de-cadastro'>
                    <h2 className='text-titles'>Venha login aqui</h2>
                    <h4 className='sub-text'>Faça seu login no site, e entre em sua conta Ep</h4>
                    <button className='area-button' onClick={()=>navigate('/')}>Login-se</button>
                </section>
                <section className='area-de-login'>
                    <h1 className='text-title'>Cadastre-se</h1>
                    <h4 className='sub-texts'>Faça o cadastro no site de emprestimos da Ep biblioteca</h4>
                    <input className='text-cad' placeholder='Nome' type="text" />
                    <input className='text-cad' placeholder='Endereco' type="text" />
                    <input className='text-cad' placeholder='Telefone' type='tel' />
                    <input className='text-cad' placeholder='Curso' type="text" />
                    <input className='text-cad' placeholder='Ano' type="number" />
                    <input className='text-cad' placeholder='Serie' type="number" />
                    <button className='button' onClick={()=>navigate('/home')} >Cadastrar</button>
                </section>
            </header>
        </div>
    );
};