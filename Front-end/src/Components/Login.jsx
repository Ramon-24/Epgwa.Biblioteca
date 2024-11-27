import './style.css';

export default function Login() {
    return (
        <div>
            <header className='area-header'>
                <section className='area-cadastro'>
                    <h2>Ainda não fez seu cadastro</h2>
                    <h4>Faça seu cadastrono site, e venha ser aluno da Ep</h4>
                    <button className='area-button'>Cadastre-se</button>
                </section>
                <section className='area-login'>
                    <h1>Login</h1>
                    <h4>Faça seu login no site de emprestimos da Ep biblioteca</h4>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Fazer login</button>
                </section>
            </header>
        </div>
    );
};