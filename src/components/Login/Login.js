import { Container,
        Content, 
        BGImage,
        CTA,
        CTALogo,
        SignUp,
        Description,
        CTALogoTwo } from "./LoginStyled"
import Footer from "../Footer/Footer";

const Login = (props) => {
    return (
        <>
        <Container>
            <Content>
            <CTA>
                <CTALogo src="/images/cta-logo-one.svg"  alt="logo-one"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 26/01/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="logo-two" />
            </CTA>

            <BGImage />
            </Content>
            
        </Container>
        <Footer />
        </>
    );
}

export default Login;