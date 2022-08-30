import styled from "styled-components";
import { IonIcon, NavContext } from '@ionic/react';
import { close, send } from 'ionicons/icons';
import { useContext } from "react";

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
`

const Icon = styled(IonIcon)`
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
            <Icon onClick={() => goBack()} icon={close} />
        </p>
        <p style={{
            padding: 0,
            margin: 0,
        }}>
            <Icon onClick={() => goBack()} icon={send} />
        </p>
    </RootContainer>
    )
}

export default Header;