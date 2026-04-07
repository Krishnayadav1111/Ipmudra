import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B1F4B',
      light: '#1a3a7a',
      dark: '#060f26',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#C9A84C',
      light: '#e0c070',
      dark: '#a07830',
      contrastText: '#0B1F4B',
    },
    background: {
      default: '#F8F6F1',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#4a4a6a',
    },
    divider: 'rgba(11,31,75,0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.12em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(11,31,75,0.08)',
    '0px 4px 16px rgba(11,31,75,0.10)',
    '0px 8px 24px rgba(11,31,75,0.12)',
    '0px 12px 32px rgba(11,31,75,0.14)',
    '0px 16px 40px rgba(11,31,75,0.16)',
    '0px 20px 48px rgba(11,31,75,0.18)',
    '0px 24px 56px rgba(11,31,75,0.20)',
    '0px 28px 64px rgba(11,31,75,0.22)',
    '0px 32px 72px rgba(11,31,75,0.24)',
    '0px 36px 80px rgba(11,31,75,0.26)',
    '0px 40px 88px rgba(11,31,75,0.28)',
    '0px 44px 96px rgba(11,31,75,0.30)',
    '0px 48px 104px rgba(11,31,75,0.32)',
    '0px 52px 112px rgba(11,31,75,0.34)',
    '0px 56px 120px rgba(11,31,75,0.36)',
    '0px 60px 128px rgba(11,31,75,0.38)',
    '0px 64px 136px rgba(11,31,75,0.40)',
    '0px 68px 144px rgba(11,31,75,0.42)',
    '0px 72px 152px rgba(11,31,75,0.44)',
    '0px 76px 160px rgba(11,31,75,0.46)',
    '0px 80px 168px rgba(11,31,75,0.48)',
    '0px 84px 176px rgba(11,31,75,0.50)',
    '0px 88px 184px rgba(11,31,75,0.52)',
    '0px 92px 192px rgba(11,31,75,0.54)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          scrollBehavior: 'smooth',
        },
        '::-webkit-scrollbar': {
          width: '6px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#0B1F4B',
          borderRadius: '3px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 28,
          paddingRight: 28,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 16px rgba(11,31,75,0.20)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0B1F4B 0%, #1a3a7a 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1a3a7a 0%, #0B1F4B 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #C9A84C 0%, #e0c070 100%)',
          color: '#0B1F4B',
          '&:hover': {
            background: 'linear-gradient(135deg, #a07830 0%, #C9A84C 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(11,31,75,0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 32px rgba(11,31,75,0.16)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            '&.Mui-focused fieldset': {
              borderColor: '#C9A84C',
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#C9A84C',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(11,31,75,0.1)',
        },
      },
    },
  },
});

export default theme;
