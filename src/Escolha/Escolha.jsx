import { useWindowSize } from "react-use";
import adv from "../assets/advantages.png";
import cityOne from "../assets/c01.svg";
import cityTwo from "../assets/c02.svg";
import cityThree from "../assets/c03.svg";
import cityFour from "../assets/c04.svg";
import cityFive from "../assets/c05.svg";
import citySix from "../assets/c06.svg";
import styled from "./style.module.scss";

export function Escolha() {

    const { width } = useWindowSize();
    const images = [
        cityOne,
        cityTwo,
        cityThree,
        cityFour,
        cityFive,
        citySix
    ]

    return (
        <section className={styled.escolha}>
            <div className={styled.container}>
                <div className={styled.textContainer}>
                    <span>Por que escolher?</span>
                    <h2>Muito além de um <italic>loteamento</italic></h2>
                </div>
            </div>
            {
                width > 800 ?
                    <img src={adv} alt="explicações sobre as vantagens da cidade eco" />
                    :

                    <ul className={styled.imgList}>
                        {
                            images.map((item) => (
                                <li><img src={item} /></li>
                            ))
                        }
                    </ul>
            }
        </section >
    )
}