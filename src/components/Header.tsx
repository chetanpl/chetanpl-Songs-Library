import React from "react";
import styled from 'styled-components';
import logo from '../Assets/images/logo.png';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 80px;
    width: 100%;
    padding: 16px 24px;
    background: var(--white);
    color: var(--secondary);
    box-shadow: 0px 8px 24px -10px rgba(0, 0, 0, 0.24);
    z-index: 2;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left:0;
    background-color: gray;
`;

const InputContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 4px 4px 16px; 
    height: 48px;
    width: 50%; 
    box-sizing: border-box;
    input[type="text"], textarea {
    background-color : #d1d1d1; 
    font-size:18px;
    font-family:sans-serif;
    font-weight:500;
    border-radius:10px;
}
`;

const InputField = styled.input`
    border: none;
    outline: none;
    color: var(--secondary);

    ::placeholder { 
        color: var(--secondary);
    }
    width: 34%;
    color: var(--secondary);
    background: none;
    border: 2px solid #ddd;
    transition: border-color 0.3s ease;
    height: 33px;
    &&:hover{
        background:#fff;
       box-shadow:2px #97B1BF;
       color:#000;
    }
`;

const ButtonSubmit = styled.button`
    cursor: pointer;
    font-size: 24px;
    background-color: #c2c7d2;;
    border: none;
    padding: 5px;
    width: 159px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    border-radius:10px;


 &&:hover{
   background:var(--white);
   box-shadow:2px #97B1BF;
   color:#000;
}

 &&:after {
    content: "";
    background: #f1c40f;
    display: block;
    position: absolute;
    padding-top: 25%;
    padding-left: 0%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
}

&&:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
  `
const Header = ({ word, setWord,countryName,setCountryName}: any): React.ReactElement => {
    return (    
        <Navbar>
            <img src={logo} alt="logo" />
            <InputContainer>
                    <InputField type="text" value={word} onChange={e => setWord(e.target.value)} placeholder="Search by name..." />
                    <InputField type="text" value={countryName} onChange={e => setCountryName(e.target.value)} placeholder="Search by Country Code..." />
                    <ButtonSubmit type="submit">Submit</ButtonSubmit>
                </InputContainer>
        </Navbar>
    )
};

export default Header;
