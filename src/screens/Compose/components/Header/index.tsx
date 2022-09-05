import styled from "styled-components";
import { NavContext } from '@ionic/react';
import { close, send } from 'ionicons/icons';
import { useContext } from "react";
import { useMutation } from "react-query";

import Icon from "../../../../components/common/Icon";
import { EmailContext } from "../../../../api/context";
import { useEmail } from "../../../../hooks/useEmail";
import { NewEmail } from "../..";

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
`

const Header = () => {
    const { sendEmail } = useEmail()
    const { goBack } = useContext(NavContext)
    const { newEmail, composeNewEmail } = useContext(EmailContext)


    const { mutate: sendNewEmail } = useMutation(["2faLogin"], sendEmail, {
        retry: false,
        onSuccess: () => {
          // TODO: show some notification
          composeNewEmail({ } as NewEmail)
        },
      });

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
            <Icon fontSize={26} onClick={() => sendNewEmail(newEmail)} icon={send} />
        </p>
    </RootContainer>
    )
}

export default Header;