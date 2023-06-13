import styled from 'styled-components';

const Icon = styled.div`
    display:flex;
    align-items: center;
`;

const Svg = ({ src }:any) => {
    
    return (
        <Icon dangerouslySetInnerHTML={{ __html: src }} />
    )
};

export default Svg;