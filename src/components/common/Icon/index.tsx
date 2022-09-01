import { IonIcon } from "@ionic/react";
import styled from "styled-components";

interface IIcon {
    fontSize: number;
}

const Icon = styled(IonIcon)<IIcon>`
    font-size: ${({fontSize}) => fontSize}px
`

export default Icon