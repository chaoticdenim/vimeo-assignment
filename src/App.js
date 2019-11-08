import React from 'react';
import Container from 'react-bootstrap/Container'
import PageSection from './components/pageSection'
import SectionLayout from './components/sectionLayout'
import CarouselSection from './components/carouselSection'

function App() {
  const darkGrey = "#353334"
  

  return (
    <Container fluid>
      <SectionLayout>
        <CarouselSection />
      </SectionLayout>
      <PageSection 
        pictureAlignLeft
        imgSrc="https://i.vimeocdn.com/video/595198868_505x160.jpg"
        title="MONSOON III"
        bgColor="white"
        padding="150px 0px"
      />
      <PageSection 
        imgSrc="https://i.vimeocdn.com/video/589972810_530x315.jpg"
        title="BEAMS"
        bgColor={darkGrey}
        padding="150px 0px 20px 0px"
      />
      <PageSection 
        pictureAlignLeft
        imgSrc="https://i.vimeocdn.com/video/590587169_530x315.jpg"
        title="Move 2"
        bgColor={darkGrey}
        gradientBackground
        padding="20px 0px 150px 0px"
      />
    </Container>
  );
}

export default App;