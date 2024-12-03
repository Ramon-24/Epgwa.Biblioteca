import './style.css';
import './animacion.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <header className='area-header'>
                <section className='area-cadastro'>
                    <h2 className='text-titles'>Cadastre-se aqui</h2>
                    <h4 className='sub-text'>Faça seu cadastrono site, e venha ser aluno da Ep</h4>
                    <button className='area-button' onClick={()=>navigate('/cad_aluno')}> Cadastre-se</button>
                </section>
                <section className='area-login'>
                    <h1 className='text-title'>Login</h1>
                    <h4 className='sub-texts'>Faça seu login no site de emprestimos da Ep biblioteca</h4>
                    <input className='area-text' placeholder='Nome' type="text" />
                    <input className='area-text' placeholder='Curso' type="text" />
                    <input className='area-text' placeholder='Serie' type="number" />
                    <button className='area-buttons' onClick={()=>navigate('/home')}>Fazer Login</button>
                </section>
            </header>
        </div>
    );
};