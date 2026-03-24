import LogoCidadeEco from "./../assets/logo-bg.svg";
import styled from "./style.module.scss";

export function Sobre() {

    return (
        <section className={styled.Sobre} data-aos="fade-up">
            <div className={styled.container}>
                <img src={LogoCidadeEco} alt="logo da cidade eco" />

                <p>
                    A Cidade ECO é um projeto inspirado no conceito de Smart Cities, com infraestrutura inteligente, espaços planejados e tudo pensado para o seu dia a dia ser mais fácil, seguro e confortável.
                </p>
                <p>
                    <strong>Viva em uma cidade pensada para você!</strong>
                </p>
            </div>
        </section>
    )
}