import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { AppRouter } from './router';

export default function App() {
  return (
    <ThemeProvider theme={theme()}>
      <AppRouter />
    </ThemeProvider>
  );
}
