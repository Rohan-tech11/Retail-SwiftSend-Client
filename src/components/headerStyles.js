import { styled } from '@mui/material/styles';

export const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  padding: '10px 20px',
  color: '#fff',
  transition: '0.5s',
  '&:hover': {
    color: '#ffc0c0',
  },
}));

export const Logo = styled('img')({
  height: '30px',
});

export const Title = styled('a')(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'none',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const MobileTitle = styled('a')(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'flex',
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MobileLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const DesktopLogo = styled('div')(({ theme }) => ({
  display: 'none',
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const MenuBox = styled('div')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MenuItemsBox = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'none',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));
