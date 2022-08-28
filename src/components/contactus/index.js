import { Container, Title, Frame, Text, Footer, SubTitle } from './styles/contactus'

import {SiGithub, SiDiscord, SiFacebook, SiGmail, SiInstagram,SiSlack} from 'react-icons/si'
const ContactUs = () => {
    return (
        <Container id="contactus">
            <Title>
                Contact Us
            </Title>
            <Text>How can we improve our services?</Text>
            <Frame>
                <SiGmail/>
                <SiGithub/>
                <SiDiscord />
                <SiFacebook />
                <SiInstagram />
                <SiSlack/>
                {/* <Button>Send us an Email</Button> */}
            </Frame>
            <Footer>
                <SubTitle>Privacy Policy</SubTitle>
                <SubTitle>Terms of Use</SubTitle>
            </Footer>
        </Container>
    )
}

export default ContactUs