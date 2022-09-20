import React from 'react';
import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { UserInfo } from "../../Components/UserInfo"; 

import {Container, Title, TitleHighLight, Column} from './styles'

const Feed = () => {
    return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>               
                <UserInfo percentual={80} name="Derso" image="https://avatars.githubusercontent.com/u/87333149?s=400&u=6cc522d83ea70d46bf029f3ed6be4b999d1e4a03&v=4" />
                <UserInfo percentual={70} name="Derso" image="https://avatars.githubusercontent.com/u/87333149?s=400&u=6cc522d83ea70d46bf029f3ed6be4b999d1e4a03&v=4" />
                <UserInfo percentual={60} name="Derso" image="https://avatars.githubusercontent.com/u/87333149?s=400&u=6cc522d83ea70d46bf029f3ed6be4b999d1e4a03&v=4" />
                <UserInfo percentual={50} name="Derso" image="https://avatars.githubusercontent.com/u/87333149?s=400&u=6cc522d83ea70d46bf029f3ed6be4b999d1e4a03&v=4" />
                <UserInfo percentual={40} name="Derso" image="https://avatars.githubusercontent.com/u/87333149?s=400&u=6cc522d83ea70d46bf029f3ed6be4b999d1e4a03&v=4" />
            </Column>
           
        </Container>        
    </>
    )
}

export { Feed }