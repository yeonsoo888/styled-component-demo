import styled from 'styled-components';

const DropBox = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;

    .on + & {
        display: block;
    }
    & li {
        border-bottom: 1px solid #ddd;
        padding: 0.5rem 0;
        cursor: pointer;
        transition: .3s ease;
        &:hover {
            background: #eaeaea;
        }
    }
`;


export default DropBox