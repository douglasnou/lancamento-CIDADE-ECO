import LocalOne from "../assets/mapa.png";
import LocalTwo from "../assets/mapa-2.png";
import Maranhao from "../assets/maranhao.png";
import Ecovilles from "../assets/ecovilles.png";
import prancheta from "../assets/prancheta.svg";
import zap from "../assets/whatsapp.svg";
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export function Localizacao() {
    const { width } = useWindowSize();
    return (
        <section className={styled.localizacao}>
            <div className={styled.container}>
                <div className={styled.text}>
                    <h2><strong>Localização privilegiada</strong> em Pedreiras</h2>
                    <p>
                        <strong>Na entrada da cidade,</strong> com fácil acesso e grande visibilidade.
                    </p>
                    <p>
                        Próximo ao Mix Mateus e Center Valley Shopping.
                    </p>
                </div>

                <div className={styled.mapas}>
                    <img src={LocalOne} />
                    <img src={LocalTwo} />
                </div>

                <div className={styled.maranhao}>
                    <img className={styled.mapaMa} src={Maranhao} alt="mapa do Maranhão" />
                    <div>
                        <h3>Quem está por trás da Cidade ECO?</h3>
                        <p>
                            A <strong>Eco Urbanismo</strong> é pioneira na construção de bairros planejados no Maranhão. Com 18 anos de experiência e mais de 6, 5 mil clientes, a empresa se destaca por projetos que unem planejamento, valorização urbana e qualidade de vida real.
                        </p>
                        <p>
                            A <span>Cidade Eco Pedreiras</span> é mais um capítulo dessa história de transformar cidades e melhorar a vida das pessoas.
                        </p>
                        <img className={styled.ecos} src={Ecovilles} alt="logos dos ecovilles" />
                    </div>
                </div>

                <div className={styled.footer}>
                    <h3>
                        Pronto para dar o <span>próximo passo?</span>
                    </h3>
                    <p>
                        Fale com um especialista agora e descubra as melhores condições para <span>garantir seu lote na Cidade ECO Pedreiras.</span>
                    </p>
                    <div className={styled.buttons}>
                        <button className={styled.verde}>
                            <a href="#formulario">
                                <img src={prancheta} alt="" />
                                <span>
                                    Preencher o formulário
                                </span>
                            </a>
                        </button>
                        <button className={styled.branco}>
                            <a href="https://api.whatsapp.com/send/?phone=5598991120576&text=Oi!+Quero+garantir+meu+lote+na+Cidade+Eco.+Gostaria+de+mais+informações&type=phone_number&app_absent=0"
                                target="_blank">
                                <img src={zap} alt="" />
                                <span>
                                    Chamar no WhatsApp
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}