import styled from "styled-components";
import { IonIcon, NavContext } from '@ionic/react';
import { close } from 'ionicons/icons';
import { useContext } from "react";

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    justifyContent: center;
    padding: 10px;
`

const CloseIcon = styled(IonIcon)`
    font-size: 40px;
`


const Header = () => {
    const { goBack } = useContext(NavContext)
    return (
        <RootContainer>
        <p style={{
            padding: 0,
            margin: 0,
        }}>
            <CloseIcon onClick={() => goBack()} icon={close} />
        </p>
    </RootContainer>
    )
}

export default Header;