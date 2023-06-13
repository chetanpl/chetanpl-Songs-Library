import React from "react";
import styled from 'styled-components';

const WebFooter = styled.footer`
    width: 100%;
    display:flex;
    justify-content:flex-end;
    margin-top: 100px;
    padding: 0 40px 28px 0;
    box-sizing: border-box;
    position:fixed;
    right:200;
    bottom:0;
`;

const Link = styled.a`
    text-decoration-line: underline;
    color: var(--primary);
    cursor: pointer;
`;

const Footer = () => {

    return (
        <WebFooter>
            <Link>
                Terms and conditions
            </Link>
            <Link style={{marginLeft:'30px'}}>
                Privacy policy
            </Link>
        </WebFooter>
    )
};

export default Footer;