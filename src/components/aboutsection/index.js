import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TopLine, Heading, SubHeading, TextWrapper, BtnWrap, ImgWrap, Img} from './styles/aboutsection'
import { Button } from '../GlobalButton/buttonElement'

export default function AboutSection({aboutSection, img}){
    return (
        <>
            <InfoContainer id = {aboutSection.id} Bg={aboutSection.Bg}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{aboutSection.topline}</TopLine>
                                <Heading>{aboutSection.headLine}</Heading>
                                <SubHeading>{aboutSection.description}</SubHeading>
                            </TextWrapper>
                            <BtnWrap>
                                <Button to='home'>{aboutSection.buttonLabel}</Button>
                            </BtnWrap>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt='about'/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}