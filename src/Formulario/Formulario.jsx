import { useState } from 'react';
import lock from "./../assets/cadeado.svg";
import ring from "./../assets/sino.svg";
import styled from './style.module.scss';

export function Formulario() {
    const [nome, setNome] = useState('');
    const [investimento, setInvestimento] = useState('');

    const handleSendWhatsApp = (e) => {
        e.preventDefault();
        
        // Mensagem base que você solicitou
        const mensagem = `Olá! Tudo bem? Sou ${nome} e fiquei interessado(a) na Cidade ECO Pedreiras. Estou buscando ${investimento} e queria saber mais detalhes.`;
        
        // Codifica a mensagem para URL
        const msgEncoded = encodeURIComponent(mensagem);
        const url = `https://wa.me/5598985243214?text=${msgEncoded}`;
        
        window.open(url, '_blank');
    };

    return (
        <section className={styled.formSection}>
            <div className={styled.container}>
                <h2>Quero conhecer a Cidade ECO</h2>
                <p>Preencha seus dados e receba atendimento exclusivo</p>
                
                <form onSubmit={handleSendWhatsApp} className={styled.formContainer}>
                    <div className={styled.inputGroup}>
                        <label htmlFor="nome">Seu nome completo</label>
                        <input 
                            type="text" 
                            id="nome" 
                            placeholder="Ex: Maria Amélia" 
                            required 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className={styled.inputGroup}>
                        <label htmlFor="investimento">Seu principal interesse</label>
                        <select 
                            id="investimento" 
                            required 
                            value={investimento}
                            onChange={(e) => setInvestimento(e.target.value)}
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            <option value="Moradia para minha família">Moradia para minha família</option>
                            <option value="Investimento/Valorização">Investimento/Valorização</option>
                            <option value="Construir minha casa própria">Construir minha casa própria</option>
                            <option value="Outro objetivo">Outro objetivo</option>
                        </select>
                    </div>

                    <button type="submit" className={styled.btnSubmit}>
                        <img src={ring} alt="ícone de sino" />
                        Quero garantir meu lote
                    </button>
                </form>
                <div>
                    <img src={lock} alt="ícone de cadeado"/>
                    Seus dados estão seguros
                </div>
            </div>
        </section>
    );
}