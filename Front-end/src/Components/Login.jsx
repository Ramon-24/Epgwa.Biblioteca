import './style.css';

export default function Login() {
    return (
        <div>
            <header className='area-header'>
                <section className='area-cadastro'>
                    <h2 className='text-titles'>Cadastre-se aqui</h2>
                    <h4 className='sub-text'>Faça seu cadastrono site, e venha ser aluno da Ep</h4>
                    <button className='area-button'>Cadastre-se</button>
                </section>
                <section className='area-login'>
                    <h1 className='text-title'>Login</h1>
                    <h4 className='sub-texts'>Faça seu login no site de emprestimos da Ep biblioteca</h4>
                    <input className='area-text' name='Nome' type="text" />
                    <input className='area-text' name='Curso' type="text" />
                    <input className='area-text' name='Serie' type="text" />
                    <button className='area-buttons'>Fazer login</button>
                </section>
            </header>
        </div>
    );
};