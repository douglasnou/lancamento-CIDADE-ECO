import logo from "./../assets/logo-cidade-eco.svg";
import bannerEco from "./../assets/banner.png";
import bannerEcoSm from "./../assets/banner-sm.png";
import wpp from "./../assets/whatsapp.svg";
import { useWindowSize } from "react-use";
import styled from "./style.module.scss"

export function Banner() {

    const { width } = useWindowSize();

    return (
        <section className={styled.BannerSection}>
            <div className={styled.container}
                data-aos="fade-up"           // O tipo da animação
                data-aos-delay="300"         // Espera 300ms antes de começar (ótimo para sequências)
                data-aos-duration="1000"     // Duração da animação (1 segundo)
                data-aos-easing="ease-in-out" // Curva de aceleração
                data-aos-once="true">
                <img src={logo} alt="logo da cidade eco" />
                <a className={styled.wppBtn}
                    href="https://api.whatsapp.com/send/?phone=5598991120576&text=Oi!+Quero+garantir+meu+lote+na+Cidade+Eco.+Gostaria+de+mais+informações&type=phone_number&app_absent=0"
                    target="_blank">
                    <img className={styled.wppIcon} src={wpp} alt="logo do whatsapp" />
                    <span>Entrar em contato</span>
                </a>
            </div>
            <div className={styled.containerImg}>
                {
                    width > 1023 ?
                        <img src={bannerEco} alt="banner sobre a cidade eco" />
                        :
                        <img src={bannerEcoSm} alt="banner sobre a cidade eco" />
                }
            </div>
        </section>
    )
}