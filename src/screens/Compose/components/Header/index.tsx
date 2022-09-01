import styled from "styled-components";
import { NavContext } from '@ionic/react';
import { close, send } from 'ionicons/icons';
import { useContext } from "react";
import Icon from "../../../../components/common/Icon";

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
`

const Header = () => {
    const { goBack } = useContext(NavContext)
    return (
        <RootContainer>
        <p style={{
            padding: 0,
            margin: 0,
        }}>
            <Icon fontSize={40} onClick={() => goBack()} icon={close} />
        </p>
        <p style={{
            padding: 0,
            margin: 0,
        }}>
            <Icon fontSize={26} onClick={() => goBack()} icon={send} />
        </p>
    </RootContainer>
    )
}

export default Header;