import { createTheme } from '@mui/material';
import { ThemeMode } from '../types';
import {
  BlackShades,
  PrimaryShades,
  TextWhite,
  WhiteShades,
} from './appColors';

export default (mode: ThemeMode = 'light') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: PrimaryShades[500],
        dark: PrimaryShades[700],
        light: PrimaryShades[300],
      },
      secondary: {
        main: PrimaryShades[500],
        dark: PrimaryShades[700],
        light: PrimaryShades[300],
      },
      common: {
        white: WhiteShades[500],
        black: BlackShades[500],
      },
      grey: {
        50: TextWhite[100],
        100: TextWhite[200],
        200: TextWhite[300],
        300: TextWhite[400],
        400: TextWhite[500],
        500: TextWhite[600],
        600: TextWhite[700],
        700: TextWhite[800],
        800: TextWhite[900],
        900: TextWhite[900],
      },
    },
  });
