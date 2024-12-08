import './style.css';
import './animacion.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';


export default function Cadastro() {
    const inputNome = useRef();
    const inputEndereco = useRef();
    const inputTelefone = useRef();
    const inputCurso = useRef();
    const inputAno = useRef();
    const inputSerie = useRef();

    const navigate = useNavigate();

    const cadastra_alunos = async () => {
        const Nome = inputNome.current.value.trim();
        const Endereco = inputEndereco.current.value.trim();
        const Telefone = inputTelefone.current.value.trim();
        const Curso = inputCurso.current.value.trim();
        const Ano = inputAno.current.value.trim();
        const Serie = inputSerie.current.value.trim();

        if (!Nome || !Endereco || !Telefone || !Curso || !Ano || !Serie) {
            return;
            alert("Preencha os campus!");
        }
        try{
            const response = await axios.post('http://localhost:3000/cad_aluno', {
                Nome, Endereco, Telefone, Curso, Ano, Serie
            });

            if (response.data.Erro) {
                alert(response.data.Erro);
            } else {
                alert("Aluno cadastrado com sucesso!");
                navigate('/home');
            }
        }catch (err) {
            console.error("Erro no cadastro do aluno", error);
            alert("Erro ao conectar ao servidor!")
        };
    };


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
                    <input className='text-cad' placeholder='Nome' type="text" ref={inputNome} />
                    <input className='text-cad' placeholder='Endereco' type="text" ref={inputEndereco} />
                    <input className='text-cad' placeholder='Telefone' type='tel' ref={inputTelefone} />
                    <input className='text-cad' placeholder='Curso' type="text" ref={inputCurso} />
                    <input className='text-cad' placeholder='Ano' type="number" ref={inputAno} />
                    <input className='text-cad' placeholder='Serie' type="number" ref={inputSerie} />
                    <button className='button' onClick={cadastra_alunos} >Cadastrar</button>
                    {/* <button className='button' onClick={()=>navigate('/home')} >Cadastrar</button> */}
                </section>
            </header>
        </div>
    );
};