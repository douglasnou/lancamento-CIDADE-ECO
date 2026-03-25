import { Formulario } from "../Formulario/Formulario";
import rocket from "./../assets/foguete.svg";
import styled from "./style.module.scss";

export function Lote() {
    return (
        <section className={styled.Lote}>
            <div className={styled.container}>
                <div className={styled.containerLote}>
                    <h2>
                        Garanta seu lote na <br /><span>CIDADE ECO</span>
                    </h2>
                    <p>
                        Preencha o formulário e um especialista entrará em contato para te apresentar as melhores condições de pagamento disponíveis.
                    </p>
                    <div className={styled.rocketBtn}>
                        <img src={rocket} alt="ícone de um foguete" />
                        <div className={styled.rocketText}>
                            <h3>Lotes com alta procura!</h3>
                            <span>Disponibilidade limitada. Garante o seu antes que acabe.</span>
                        </div>
                    </div>
                </div>

                <div className={styled.form}>
                    <Formulario/>
                </div>
            </div>
        </section>
    )
}