import './style.css';
import './animacion.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';

export default function Configuracao (){
    const inputTombo = useRef();
    const inputNome = useRef();
    const inputAutor = useRef();
    const inputAno_publicacao = useRef();
    const inputSinopse = useRef();

    const navigate = useNavigate();

    const cadastra_livros = async () => {
        const Tombo = inputTombo.current.value.trim();
        const Nome = inputNome.current.value.trim();
        const Autor = inputAutor.current.value.trim();
        const Ano_publicacao = inputAno_publicacao.current.value.trim();
        const Sinopse = inputSinopse.current.value.trim();

        if (!Tombo || !Nome || !Autor || !Ano_publicacao || !Sinopse) {
            return;
            alert("Preencha os campus!");
        }
        try{
            const response = await axios.post('http://localhost:3000/cad_livro', {
                Tombo, Nome, Autor, Ano_publicacao, Sinopse
            });

            if (response.data.Erro) {
                alert(response.data.Erro);
            } else {
                alert("Livro cadastrado com sucesso!");
                navigate('/home');
            }
        }catch (err) {
            console.error("Erro no cadastro do livro", err);
            alert("Erro ao conectar ao servidor!")
        };
    };

    return(
        <header className='area-header'>
            <section className="area-d">
                <input className='min-text' type="text" placeholder='Digite suas pesquisas de livros' /> 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="searchr" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>
                <div className='guia'>
                    <svg onClick={()=>navigate('/home')} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="houser" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg>
                    <svg onClick={()=>navigate('/emprestimos')} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bookmarkr" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg>
                    <svg onClick={()=>navigate('/atraso')} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>
                    <div className='guia-principal'>
                        <svg onClick={()=>navigate('/config')} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="gears" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></svg>
                    </div>
                </div>
                <div className='linha'></div>


                <main className='inputCad-livros'>
                    <h1 className='text-title'>Cadastre os livros</h1>
                    {/* <h4 className='sub-texts'>Faça o cadastro no site de emprestimos da Ep biblioteca</h4> */}
                    <input className='text-cad' placeholder='Tombo' type="number" ref={inputTombo} />
                    <input className='text-cad' placeholder='Nome da obra' type="text" ref={inputNome} />
                    <input className='text-cad' placeholder='Autor da obra' type='text' ref={inputAutor} />
                    <input className='text-cad' placeholder='Ano de publicação' type="number" ref={inputAno_publicacao} />
                    <input className='text-cad' placeholder='Sinopse' type="text" ref={inputSinopse} />
                    <button className='button' onClick={cadastra_livros} >Cadastrar</button>
                </main>


            </section>  
        </header>
    )
}