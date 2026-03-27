import ParqueBannerImg from "../assets/parque-banner.png";
import ParqueBannerImgSM from "../assets/parque-banner-sm.png";
import Arvore from "../assets/tree.svg";
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export function ParqueBanner() {

    const { width } = useWindowSize();

    return (
        <section className={styled.parqueBanner}>
            <div className={styled.container}>
                {
                    width > 800 ?
                    <img src={ParqueBannerImg}/>
                    :
                    <img src={ParqueBannerImgSM}/>
                }
            </div>
            <button className={styled.btn}>
                <a href="https://api.whatsapp.com/send/?phone=5598991120576&text=Oi!+Quero+garantir+meu+lote+na+Cidade+Eco.+Gostaria+de+mais+informações&type=phone_number&app_absent=0"
                target="_blank">
                    <img src={Arvore} alt="emoji de árvore" />
                    <span>Quero morar pertinho do Parque</span>
                </a>
            </button>
        </section>
    )
}