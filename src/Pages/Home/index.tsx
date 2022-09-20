import React from 'react';
import { useNavigate } from "react-router-dom"
import bannerImg from '../../assets/banner.png'
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header"; 

import {Container, TextContent, Title, TitleHighLight} from './styles'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    return (
    <>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente 
                    <br/>
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>

                <TextContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id dolorem sapiente esse, perspiciatis quam quisquam, fugit corporis voluptatum sunt, quod laborum quaerat porro! Natus sapiente cumque quasi atque explicabo?
                </TextContent>

                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImg} alt="Imagem Principal" />
            </div>
        </Container>
        
    </>
    )
}

export { Home }