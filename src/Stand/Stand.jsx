import StandVendas from "../assets/stand-vendas.png";
import StandVendasSm from "../assets/stand-vendas-sm.png";
import StandOne from "../assets/stand-01.png";
import StandTwo from "../assets/stand-02.png";
import StandThree from "../assets/stand-03.png";
import StandFour from "../assets/stand-04.png";
import { useWindowSize } from "react-use";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from "./style.module.scss";


export function Stand() {
    const { width } = useWindowSize()
    const carroussel = [
        StandOne,
        StandTwo,
        StandThree,
        StandFour
    ]

    return (
        <section className={styled.stand}>
            <div className={styled.container}>
                {
                    width >= 800 ?
                        <img className={styled.banner} src={StandVendas} alt="banner de stand de vendas" />
                        :
                        <img className={styled.banner} src={StandVendasSm} alt="banner de stand de vendas" />
                }
                <div className={styled.subContainer}>
                    <div className={styled.sub}>
                        <div className={styled.text}>
                            <h2><strong>Stand</strong> de Vendas</h2>
                            <p>
                                Foi concebido como um espaço único, possuindo um <strong>modelo de construção inovador</strong>, unindo planejamento e uma experiência imersiva.
                            </p>
                            <p>
                                O ambiente contará com espaço amplo para recepção, área de atendimento, mesas comerciais e exposição de maquetes, oferecendo conforto e acolhimento aos visitantes.
                            </p>
                            <p className={styled.white}>
                                Um marco, este será o <strong>primeiro stand</strong> com modelo de construção sustentável da Eco Urbanismo, com uso de energia solar, biodigestores e soluções ambientais agregadas.
                            </p>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className={styled.slide}
                            >
                                {
                                    carroussel.map((image)=>(
                                        <SwiperSlide className={styled.item}>
                                            <img src={image} alt="Stands de vendas" />
                                        </SwiperSlide>
                                    ))
                                }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}