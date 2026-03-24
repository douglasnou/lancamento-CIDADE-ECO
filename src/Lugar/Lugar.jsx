import LugarImg from "./../assets/lugar.png";
import LugarSm from "./../assets/lugar-sm.png";
import { useWindowSize } from "react-use";
import styled from "./style.module.scss";

export function Lugar() {

    const { width } = useWindowSize();

    return (
        <section className={styled.Lugar}>
            {
                width > 1023 ?
                <img src={LugarImg} alt="pessoas na praça" />
                :
                <img src={LugarSm} alt="pessoas na praça" />
            }
        </section>
    )
}