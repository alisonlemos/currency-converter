import srcLogo from '@/assets/logo.svg'
import { Container, Description, Logo, SubTitle, Title } from "./Header.style"

interface HeaderProps {
    title?: string
}

export default function Header(props: HeaderProps) {
    const { title } = props
    return (
        <Container>
            <Logo src={srcLogo} />
            <Description>
                <Title>{title}</Title>
                <SubTitle>Dados de câmbio disponibilizados pela Morningstar.</SubTitle>
            </Description>
        </Container>
    )
}