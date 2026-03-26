import adv from "../assets/advantages.png";
import styled from "./style.module.scss";

export function Escolha() {
    return (
        <section className={styled.escolha}>
            <div className={styled.container}>
                <div className={styled.textContainer}>
                    <span>Por que escolher?</span>
                    <h2>Muito além de um <italic>loteamento</italic></h2>
                </div>
            </div>
            <img src={adv} alt="explicações sobre as vantagens da cidade eco" />
        </section>
    )
}