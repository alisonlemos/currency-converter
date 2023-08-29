import srcLogo from '@/assets/logo.svg'
import { Container, Description, Logo, SubTitle, Title } from "./Header.style";

export default function Header() {
    return (
        <Container>
            <Logo src={srcLogo} />
            <Description>
                <Title>14 de janeiro 2021    |     21:00 UTC</Title>
                <SubTitle>Dados de câmbio disponibilizados pela Morningstar.</SubTitle>
            </Description>
        </Container>
    )
}