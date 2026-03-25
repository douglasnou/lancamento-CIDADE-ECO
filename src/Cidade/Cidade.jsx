import cidade from "./../assets/smart-city.png";
import cidadeSm from "./../assets/smart-city-sm.png";
import sobreCidade from "./../assets/sobre-cidade.png";
import { useWindowSize } from "react-use";
import styled from "./styled.module.scss";

export function Cidade() {

    const { width } = useWindowSize();

    return (
        <section className={styled.cidade}>
            {
                width > 800 ?
                    <div className={styled.container}>
                        <img className={styled.banner} src={cidade} alt="banner de cidade" />
                        <div className={styled.textContainer}>
                            <img className={styled.text} src={sobreCidade} />
                        </div>
                    </div>
                    :
                    <div className={styled.container}>
                        <img className={styled.banner} src={cidadeSm} alt="banner de cidade" />
                        <div className={styled.textContainer}>
                            <p className={styled.text}>
                                Uma Smart City é um <strong>modelo de planejamento urbano</strong> que utiliza inovação, tecnologia e sustentabilidade para tornar a vida das pessoas mais prática, eficiente e organizada.<br/>

                                <br/>Esse conceito integra infraestrutura, mobilidade, gestão de recursos e serviços para criar cidades mais funcionais, seguras e preparadas para o futuro.<br/>

                                <br/>Na prática, isso significa mais qualidade de vida, melhor uso dos espaços, redução de desperdícios e soluções que facilitam o dia a dia da população.
                            </p>
                        </div>
                    </div>
            }
        </section>
    )
}