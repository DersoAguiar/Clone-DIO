import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div `
    max-width: 300px;
`

export const Column = styled.div `
    flex: 1;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 7px;
`

export const Title = styled.h2 `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
`

export const TitleLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
   
    margin-bottom: 20px;
    line-height: 44px;    
`

export const SubTitleLogin = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;    
    margin-bottom: 35px;
    line-height: 25px;
    
`
export const PoliticaPrivacidade = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;    
    margin-top: 35px;
    line-height: 25px;  
`

export const Cadastrado = styled.p `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;    
    line-height: 19px;
    color: #FFF;    
`

export const Login = styled.p `
    a {
        text-decoration: none;
        margin-left: 4px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;    
        line-height: 19px;
        color: rgba(35, 221, 122, 1); 
    }
    
    a:hover {
        text-decoration: underline;
        transition: transform .5s;
    }
`