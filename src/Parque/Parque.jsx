import One from "../assets/01.png";
import Two from "../assets/02.png";
import Three from "../assets/03.png";
import Four from "../assets/04.png";
import Five from "../assets/05.png";
import Six from "../assets/06.png";
import greenPoint from "../assets/green-dot.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export function Parque() {

    const { width } = useWindowSize()
    const images = [One, Two, Three, Four, Five, Six]
    const texts = [
        {
            title: "Lazer",
            items: [
                "Praça com Anfiteatro",
                "Pista de Cooper",
                "Academia ao Ar livre",
                "Academia do Idoso",
                "Eco Park"
            ]
        },
        {
            title: "Infraestrutura",
            items: [
                "Wi-fi nas áreas comuns",
                "Monitoramento inteligente",
                "Vias Planejadas",
                "Iluminção 100% LED",
                "Acesso estratégico"
            ]
        },
        {
            title: "Comunidade e Bem-estar",
            items: [
                "Praça de Convivência",
                "Pet Park",
                "Sentimento de Comunidade",
                "Pensado para toda família",
                "Valorização Imobiliáiria"
            ]
        }
    ]

    return (
        <section className={styled.parque}>
            <div className={styled.container}>
                <div className={styled.text}>
                    <span>Estrutura</span>
                    <h2>Conheça o <strong>Parque Linear</strong></h2>
                </div>

                {
                    width > 800 ?
                        <div className={styled.imgList}>
                            <ul>
                                {
                                    images.map((item) => (
                                        <li>
                                            <img src={item} alt="imagens da cidade eco" />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className={styled.imgList}
                        >
                            {/* Remova a <ul> daqui */}
                            {images.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item} alt="imagens da cidade eco" />
                                </SwiperSlide>
                            ))}
                            {/* E remova o </ul> daqui */}
                        </Swiper>
                }

                <div className={styled.textList}>
                    {
                        texts.map((word) => (
                            <div>
                                <h3>{word.title}</h3>
                                <ul>
                                    {word.items.map((item) => (
                                        <li><img src={greenPoint} />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}