import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InlineForm = styled.div`
    display: flex;
    gap: .75rem;
`;

export const MessageError = styled.small`
    color: red;
    ${mixins.text_xs}
`;