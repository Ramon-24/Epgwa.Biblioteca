import './style.css';
import './animacion.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';

async function verifLog() {
    console.log(inputNome)
}
export default function Login() {
    const inputNome = useRef()
    const inputCurso = useRef()
    const inputSerie = useRef()

    const navigate = useNavigate();

    const verifLog = async () => {
        const nome = inputNome.current.value.trim();
        const curso = inputCurso.current.value.trim();
        const serie = inputSerie.current.value.trim();

        if(!nome|| !curso || !serie) {
            return;
            alert("Preencha seus dados.")
        }

        try{
            const response = await axios.post('http://localhost:3000/login', 
                { nome, curso, serie}, { headers: { "Content-Type": "application/json" }});

            if (response.data.Sucesso) {
                alert(`Seja bem-vindo '${nome}'!`)
                navigate('/home');
            } else {
                alert(response.data.Erro);
            };
        } catch (err) {
            console.error("Erro ao realizar login:", err);
            alert("Erro na conexão do servidor do Ep Biblioteca")
        };
    };

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
                    <input className='area-text' placeholder='Nome' type="text" ref={inputNome} />
                    <input className='area-text' placeholder='Curso' type="text" ref={inputCurso} />
                    <input className='area-text' placeholder='Serie' type="number" ref={inputSerie} />
                    <button className='area-buttons' onClick={verifLog}>Fazer Login</button>
                    {/* <button className='area-buttons' onClick={()=>navigate('/home')}>Fazer Login</button> */}
                </section>
            </header>
        </div>
    );
};