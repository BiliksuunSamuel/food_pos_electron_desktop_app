import { alpha, IconButton, Stack, StackProps, useTheme } from '@mui/material';
import { IRouteProps } from '../interface';
import { useLocation } from 'react-router-dom';
import { BackgroundShades } from '../theme/appColors';

interface IProps extends StackProps {
  route: IRouteProps;
}
export default function SidebarRouteButton({ route, ...others }: IProps) {
  const theme = useTheme();
  const location = useLocation();
  const isActive = route.route === location.pathname;
  return (
    <Stack
      sx={{
        background: isActive ? BackgroundShades[500] : 'transparent',
        padding: theme.spacing(1.5),
        borderRadius: '15px 0 0 15px',
      }}
    >
      <IconButton
        sx={{
          borderRadius: theme.spacing(1.25),
          width: '65px',
          height: '65px',
          background: isActive
            ? alpha(theme.palette.primary.main, 0.65)
            : 'transparent',
          color: isActive
            ? theme.palette.common.white
            : theme.palette.primary.main,
          '&:hover': {
            background: isActive
              ? alpha(theme.palette.primary.main, 0.85)
              : 'transparent',
            color: isActive
              ? theme.palette.common.white
              : theme.palette.primary.dark,
          },
        }}
      >
        <route.Icon size={theme.spacing(3.5)} />
      </IconButton>
    </Stack>
  );
}
