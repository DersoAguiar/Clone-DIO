import React from "react";
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture    
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://img.freepik.com/premium-photo/digital-cyberspace-data-network-connections_24070-1044.jpg?w=2000" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/87333149?s=400&u=6cc522d83ea70d46bf029f3ed6be4b999d1e4a03&v=4"/>
                    <div>
                      <h4>Anderson S Aguiar</h4> 
                      <p>Há 8 minutos</p> 
                    </div>                
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4> 
                    <p>Projeto feito no curso de HTML e CSS no Bootcamp dio do Global Avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4> 
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>  
        </CardContainer>
    )
}

export {Card}