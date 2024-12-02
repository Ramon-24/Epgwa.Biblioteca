import './style.css';

export default function Cadastro() {
    return (
        <div>
            <header className='area-header'>
                <section className='area-cadastro'>
                    <h2 className='text-titles'>Venha login aqui</h2>
                    <h4 className='sub-text'>Faça seu login no site, e entre em sua conta Ep</h4>
                    <button className='area-button'>Login-se</button>
                </section>
                <section className='area-login'>
                    <h1 className='text-title'>Cadastre-se</h1>
                    <h4 className='sub-texts'>Faça o cadastro no site de emprestimos da Ep biblioteca</h4>
                    <input className='text-cad' name='Nome' type="text" />
                    <input className='text-cad' name='Endereco' type="text" />
                    <input className='text-cad' name='Telefone' type="text" />
                    <input className='text-cad' name='Curso' type="text" />
                    <input className='text-cad' name='Ano' type="text" />
                    <input className='text-cad' name='Serie' type="text" />
                    <button className='area-buttons'>Cadastrar</button>
                </section>
            </header>
        </div>
    );
};