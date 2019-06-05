import styled from 'styled-components';

const Notification = styled.div`
    background: ${({theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    position: absolute;
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 90vw;
    width: fit-content;
    text-align: center;
    padding: 5px 15px;
    border-radius: 15px;
    z-index: 9999;

    ${({ theme }) => theme.mq.medium} {
        background: ${({theme }) => theme.grey};
    }
`;


export default Notification;