import heroBgImage from "../../assets/Homepage/hero-1-bg.jpg";
import Logistics from "../../assets/Homepage/help.png";
import helpOneImage from "../../assets/Homepage/help-1.svg";
import helpTwoImage from "../../assets/Homepage/help-2.svg";
import clientOneImage from "../../assets/Homepage/cli-1.png";
import clientTwoImage from "../../assets/Homepage/cli-2.png";
import clientThreeImage from "../../assets/Homepage/cli-3.png";
import clientFourImage from "../../assets/Homepage/cli-4.png";
import clientFiveImage from "../../assets/Homepage/cli-5.png";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Hero = styled('div')(({ theme }) => ({
  position: 'relative',
  color: '#fff',
  textAlign: 'center',
  margin: '20px 0',
  height: '10vh',
}));

const HeroArea = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#fff',
}));

const HeroContent = styled('div')({
  margin: '0 auto',
});

const HeroButtonBox = styled('div')({
  marginTop: '20px',
});

const CustomButton = styled(Button)(({ theme }) => ({
  display: 'inline-block',
  padding: '8px 20px',
  fontSize: '16px',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  margin: '20px 0',
  backgroundColor: '#ff6813',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e05700',
    color: 'black',
  },
}));

const ImageTextSection = styled('section')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const HelpImage = styled('div')({
  maxWidth: '100%',
  height: '550px',
  '& img': {
    maxWidth: '100%',
    height: '100%',
  },
});

const TextContainer = styled(Container)(({ theme }) => ({
  maxWidth: '600px',
  flex: 1,
  margin: '20px',
  backgroundColor: '#292929',
  borderRadius: '5px',
  height: '38vh',
  padding: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const HelpCollections = styled('ul')({
  listStyle: 'none',
  padding: 0,
  marginTop: '10px',
  '& li': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
});

const HelpIcon = styled('div')({
  maxWidth: '30px',
  marginRight: '10px',
  '& img': {
    maxWidth: '100%',
  },
});

const ClientSection = styled('div')(({ theme }) => ({
  padding: '50px 0',
  textAlign: 'center',
}));

const ClientWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '20px',
  '& img': {
    maxWidth: '10%',
    height: 'auto',
    margin: '10px',
  },
});

export default function Homepage() {
  return (
    <div>
      <Hero>
        <HeroArea>
          <HeroContent>
            <Typography variant="h3" data-aos-anchor-placement="top-center" style={{ color: '#292929',fontWeight: 'bold' }}>
              Logistic Delivery{' '}
              <Typography component="span" variant="h3" style={{ color: '#ff6813',fontWeight: 'bold' }}>
                Around The World
              </Typography>
            </Typography>
          </HeroContent>
        </HeroArea>
      </Hero>

      <ImageTextSection>
        <HelpImage>
          <img src={Logistics} alt="Logistics" />
        </HelpImage>
        <TextContainer maxWidth="sm">
          <Typography variant="h5" color="white">
            How We Help Businesses Across The World.
          </Typography>
          <Typography variant="body1" color="white">
            To become a digital logistics company, you&apos;ll need to invest in
            the latest technology. This includes transportation management
            systems (TMS), warehouse management systems (WMS), and other
            software that can help you streamline your operations, reduce costs,
            and improve customer service.
          </Typography>
          <HelpCollections>
            <li>
              <HelpIcon>
                <img src={helpOneImage} alt="help" />
              </HelpIcon>
              <Typography variant="body1" color="white">Ultimate Data Protection</Typography>
            </li>
            <li>
              <HelpIcon>
                <img src={helpTwoImage} alt="help" />
              </HelpIcon>
              <Typography variant="body1" color="white">Easy and Quick Customer service</Typography>
            </li>
          </HelpCollections>
          <HeroButtonBox data-aos="fade-up" data-aos-anchor-placement="top-center">
            <CustomButton href="/about" disableRipple>About Us</CustomButton>
          </HeroButtonBox>
        </TextContainer>
      </ImageTextSection>

      <ClientSection id="client">
        <Typography variant="h5" data-aos="fade-up" data-aos-anchor-placement="top-center" style={{ color: '#292929' }}>
          Trusted by 100+ growing partners take our services
        </Typography>
        <ClientWrapper>
          <img src={clientOneImage} alt="client" data-aos="fade-up" data-aos-anchor-placement="top-center" />
          <img src={clientTwoImage} alt="client" data-aos="fade-up" data-aos-anchor-placement="top-center" />
          <img src={clientThreeImage} alt="client" data-aos="fade-up" data-aos-anchor-placement="top-center" />
          <img src={clientFourImage} alt="client" data-aos="fade-up" data-aos-anchor-placement="top-center" />
          <img src={clientFiveImage} alt="client" data-aos="fade-up" data-aos-anchor-placement="top-center" />
        </ClientWrapper>
      </ClientSection>
    </div>
  );
}
