import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


import logistics1 from "../../assets/Aboutpage/Logistics1.png";
import gc_icon from "../../assets/Aboutpage/gc-icon.svg";
import logistic from "../../assets/Aboutpage/Logistics.png";
import team1 from "../../assets/Aboutpage/team-1.png";
import team2 from "../../assets/Aboutpage/team-2.png";
import team3 from "../../assets/Aboutpage/team-3.png";
import team4 from "../../assets/Aboutpage/team-4.png";

const PageBannerArea = styled('div')({
  position: 'relative',
  height: '200px',
  width: '100%',
});

const BannerContent = styled('div')({
  width: '100%',
  position: 'absolute',
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto',
  left: '50%',
  transform: 'translate(-50%, 0)',
  padding: '0 16px',
  '& p': {
    color: '#ff6813',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '30px',
    marginTop: '32px',
    marginBottom: '12px',
  },
  '& h2': {
    color: '#333',
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '54px',
    letterSpacing: '0.54px',
    paddingBottom: '24px',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '134px',
      height: '4px',
      background: '#ff6813',
      left: '50%',
      bottom: 0,
      transform: 'translate(-50%, 0)',
    },
  },
});

const LogisticsArea = styled(Box)({
  padding: '10px 0',
  textAlign: 'left',
});

const SectionTitle = styled(Typography)({
  fontSize: '2.5rem',
  marginBottom: '20px',
});

const SectionTitleOrange = styled(SectionTitle)({
  color: '#F0EBE3',
  padding:'10px 0px'
});

const Text = styled(Typography)({
  fontSize: '1.1rem',
  color: '#F0EBE3',
  lineHeight: 1.6,
});

const LogisticsImg = styled('img')({
  maxWidth: '100%',
  height: '600px',
  display: 'block',
  margin: '0px auto 0px auto',
});


const LogisticImg = styled('img')({
  maxWidth: '100%',
  height: '525px',
  display: 'block',
  margin: '0px auto 0px auto',
});



const GoalsCollection = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  '& li': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    marginTop: '5px',
  },
});

const GcIcon = styled('img')({
  width: '40px',
  marginRight: '15px',
});

const TeamArea = styled(Box)({
  padding: '50px 0',
});

const Row = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  margin: '0 60px',
});

const ColLg3 = styled('div')({
  flex: '0 0 calc(25% - 30px)',
  maxWidth: 'calc(25% - 30px)',
  padding: '0 15px',
  marginBottom: '30px',
});

const SingleTeam = styled('div')({
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const TeamImg = styled('a')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const TeamContent = styled('div')({
  padding: '20px',
  textAlign: 'center',
});

const TeamName = styled('a')({
  fontWeight: 'bold',
  color: '#333',
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: '#ff9900',
  },
});

const TeamText = styled(Typography)({
  color: '#666',
  marginTop: '5px',
  marginBottom: 0,
});



const GoalsCollectionItem = styled('li')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  '& img': {
    maxWidth: '30px',
    marginRight: '10px',
  },
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ede3dc',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  margin:'0px 50px',
  textAlign: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',

}));

const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: '#292929',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  margin:'20px 50px 0px 50px',
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',

}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: '#292929',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  margin:'0px 50px 0px 50px',
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',

}));





export default function About() {
  return (
    <div>
      <Container>
        <PageBannerArea>
          <BannerContent>
            <Typography component="p">About Us</Typography>
            <Typography component="h2">Who we are</Typography>
          </BannerContent>
        </PageBannerArea>
      </Container>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid xs={12}>
          <Item>  
          <Typography variant="h3" data-aos-anchor-placement="top-center" style={{ color: '#292929',fontWeight: 'bold' }}>
          Streamlining Logistics,{' '}
              <Typography component="span" variant="h3" style={{ color: '#ff6813',fontWeight: 'bold' }}>
              Ensuring Success
              </Typography>
            </Typography>

        <Typography sx={{ py: '30px', fontSize: '16px' }}>
          Welcome to SwiftSend service, your trusted partner in logistics. We are a team of experienced professionals
          who are passionate about helping businesses streamline their supply chain operations and optimize their logistics processes.
          Our transportation services include ground, air, and ocean freight, as well as intermodal and expedited shipping options.
          We leverage our carrier network and technology to provide you with the most cost-effective and efficient transportation solutions.
        </Typography>
        </Item>
        </Grid>
        <Grid xs={6}>
          <LogisticsImg src={logistics1} alt="logistics" />
        </Grid>
        <Grid xs={6}>
          <Item1 >          
            <SectionTitleOrange>Our Goals</SectionTitleOrange>
          <Text>
          Welcome to SwiftSend service, your trusted partner in logistics. We are a team of experienced professionals
          who are passionate about helping businesses streamline their supply chain operations and optimize their logistics processes.
          Our transportation services include ground, air, and ocean freight, as well as intermodal and expedited shipping options.
          We leverage our carrier network and technology to provide you with the most cost-effective and efficient transportation solutions.
        </Text> <br />
        <GoalsCollection>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Transportation assistance</Typography>
            </GoalsCollectionItem>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Biggest sea cargo company</Typography>
            </GoalsCollectionItem>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Ship everywhere</Typography>
            </GoalsCollectionItem>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Unlimited packages sizes</Typography>
            </GoalsCollectionItem>
          </GoalsCollection>
        </Item1>
        </Grid>

        <Grid xs={6}>
          <Item2 >          
            <SectionTitleOrange>Our Services</SectionTitleOrange>
          <Text>
          At SwiftSend, we pride ourselves on offering a comprehensive suite of services designed to cater to the diverse needs of our clients. With our user-friendly platform, multiple clients can register and create their various services, providing a seamless experience for both businesses and end-users.
        
        Gone are the days of juggling multiple platforms and providers. With SwiftSend, businesses can centralize their logistics operations and manage services from renowned carriers such as Canada Post, FedEx, DHL, and more, all within a single portal. 
        </Text> <br />
        <GoalsCollection>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Streamlined Service Management</Typography>
            </GoalsCollectionItem>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Flexible Ordering Options</Typography>
            </GoalsCollectionItem>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Seamless User Experience</Typography>
            </GoalsCollectionItem>
            <GoalsCollectionItem>
              <GcIcon src={gc_icon} alt="gc" />
              <Typography>Dedicated Support</Typography>
            </GoalsCollectionItem>
          </GoalsCollection>
        </Item2>
        </Grid>
        <Grid xs={6}>
        <LogisticImg src={logistic} alt="logistics" />

        </Grid>


      </Grid>
    </Box>



      <TeamArea id="team">
        <Row>
          <SectionTitle>Our Dedicated Team</SectionTitle>
        </Row>
        <Row>
          <ColLg3>
            <SingleTeam>
              <TeamImg href="#">
                <img src={team1} alt="team" />
              </TeamImg>
              <TeamContent>
                <TeamName href="#">Brooklyn Simmons</TeamName>
                <TeamText>Web Developer</TeamText>
              </TeamContent>
            </SingleTeam>
          </ColLg3>
          <ColLg3>
            <SingleTeam>
              <TeamImg href="#">
                <img src={team2} alt="team" />
              </TeamImg>
              <TeamContent>
                <TeamName href="#">Jenny Wilson</TeamName>
                <TeamText>Web Developer</TeamText>
              </TeamContent>
            </SingleTeam>
          </ColLg3>
          <ColLg3>
            <SingleTeam>
              <TeamImg href="#">
                <img src={team3} alt="team" />
              </TeamImg>
              <TeamContent>
                <TeamName href="#">Courtney Henry</TeamName>
                <TeamText>Web Developer</TeamText>
              </TeamContent>
            </SingleTeam>
          </ColLg3>
          <ColLg3>
            <SingleTeam>
              <TeamImg href="#">
                <img src={team4} alt="team" />
              </TeamImg>
              <TeamContent>
                <TeamName href="#">Dianne Russell</TeamName>
                <TeamText>Web Developer</TeamText>
              </TeamContent>
            </SingleTeam>
          </ColLg3>
        </Row>
      </TeamArea>
    </div>
  );
}


