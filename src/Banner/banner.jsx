import logo from "./../assets/logo-cidade-eco.svg";
import bannerEco from "./../assets/banner.png";
import bannerEcoSm from "./../assets/banner-sm.png";
import wpp from "./../assets/whatsapp.svg";
import { useWindowSize } from "react-use";
import styled from "./style.module.scss"

export function Banner () {

    const {width} = useWindowSize();

    return(
        <section className={styled.BannerSection}>
        <div className={styled.container}>
            <img src={logo} alt="logo da cidade eco" />
            <a className={styled.wppBtn}>
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