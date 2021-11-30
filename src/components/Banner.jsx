import React from 'react'
import { Container, ImageBanner, BePartSection, Title, Text, BoxButtons, JoinBtn, LoginBtn } from '../styles/components/BannerStyles'

export default () => {
  return (
    <Container>
      <ImageBanner />
      <BePartSection>
        <Title>
          BE PART OF THE REVOLUTION IN COLLECTIBLES
        </Title>
        <Text>
          Players Lounge celebrates some of the most legendary footballers through digital collectibles & unique fan experiences.
        </Text>
        <BoxButtons>
          <JoinBtn>
            Join now
          </JoinBtn>
          <LoginBtn>
            Log In
          </LoginBtn>
        </BoxButtons>
      </BePartSection>
    </Container>
  )
}
