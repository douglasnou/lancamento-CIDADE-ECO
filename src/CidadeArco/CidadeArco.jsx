import arco from "../assets/cidade-eco-arco.png";
import arcoSm from "../assets/cidade-eco-arco-sm.png";
import zap from "../assets/whatsapp.svg";
import { useWindowSize } from "react-use";
import styled from "./style.module.scss";

export function CidadeArco() {

    const { width } = useWindowSize();

    return (
        <section className={styled.arco}>
            <div className={styled.container}>
                <div className={styled.containerText}>
                    <p>
                        A <strong>CIDADE ECO</strong> é um ecossistema urbano planejado com parque linear, modernidade, infraestrutura inteligente e <strong>tudo que sua família precisa para viver com qualidade.</strong>
                    </p>
                    <button>
                        <a href="https://api.whatsapp.com/send/?phone=5598991120576&text=Oi!+Quero+garantir+meu+lote+na+Cidade+Eco.+Gostaria+de+mais+informações&type=phone_number&app_absent=0"
                            target="_blank">
                            <img src={zap} alt="logo do whatsapp" />
                            <span>Falar no whatsApp</span>
                        </a>
                    </button>
                </div>
                {
                    width >= 800 ?
                        <img src={arco} alt="arco da cidade eco" />
                        :
                        <img src={arcoSm} alt="arco da cidade eco" />
                }
            </div>
        </section>
    )
}