import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";

import { api } from '../../services/api';

import { 
Container, 
Wrapper,
Column,
Row,
Title,
TitleLogin,
SubTitleLogin,
PoliticaPrivacidade,
Cadastrado,
Login
} from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  }).required();


const Cadastro = () => {  
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });    

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1) {
                navigate('/feed');
            } else {
                alert('Email ou senha inválido');
            }
        }catch{
            alert('Houve um erro, tente novamente.');
        }
    }    

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>                    
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>                
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    name="name" 
                    control={control}                   
                    placeholder="Nome Completo" 
                    leftIcon={<MdPerson />} 
                    />
                    <Input 
                    name="email"
                    errorMessage={errors?.email?.message}
                    control={control} 
                    placeholder="E-mail" 
                    leftIcon={<MdEmail />} 
                    />
                    <Input 
                    name="password"
                    errorMessage={errors?.password?.message}
                    control={control} 
                    placeholder="Senha" 
                    type="password" 
                    leftIcon={<MdLock />}
                    />
                    <Button title="Criar minha conta" variant="secondary"  type="submit"/>
                    
                </form>     
                <PoliticaPrivacidade>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas dee Privacidade e os Termos de Uso da DIO.
                </PoliticaPrivacidade>    
                <Row>                    
                    <Cadastrado>Já tenho cadastro.</Cadastrado>

                    <Login>
                        <a href='/login'>Fazer login</a>
                    </Login>
                </Row>
            </Wrapper>
                
            </Column>
        </Container>
        
    </>
    )
}

export { Cadastro }