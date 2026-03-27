import solucoes from "../assets/solucoes.svg";
import solucoesDois from "../assets/solucoes-2.svg";
import cardOne from "../assets/s01.svg";
import cardTwo from "../assets/s02.svg";
import cardThree from "../assets/s03.svg";
import click from "../assets/click.svg";
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export function Solucoes() {

    const { width } = useWindowSize();
    const images = [
        cardOne,
        cardTwo,
        cardThree
    ]

    return (
        <section className={styled.solucoes}>
            <div className={styled.container}>
                <h2>Soluções Ambientais</h2>
                <img className={styled.banner} src={solucoes} />
                {
                    width >= 800 ?
                        <img className={styled.banner} src={solucoesDois} />
                        :
                        <ul>
                            {
                                images.map((card) => (
                                    <li>
                                        <img src={card} />
                                    </li>
                                ))
                            }
                        </ul>
                }
                <button>
                    <a href="">
                        <span>clique aqui e um especialista entrará em contato com você</span>
                        <img src={click}/>
                    </a>
                </button>
            </div>
        </section>
    )
}