import { DrawerProps, Stack } from '@mui/material';
import resources from '../resources';
import { SidebarRouteButton } from '../components';
import { homeRoutes } from '../routes/homeRoutes';

interface IProps extends DrawerProps {
  width?: number;
}
export default function Sidebar({ width = 100, ...others }: IProps) {
  return (
    <Stack
      variant="permanent"
      sx={{
        width,
        height: '100vh',
        backgroundColor: '#1F1D2B',
        borderStyle: 'none',
        boxShadow: 'none',
        '& .MuiDrawer-paper': {
          boxShadow: 'none',
          borderRight: 'none',
          padding: 0,
        },
        padding: 0,
      }}
      {...others}
    >
      <Stack
        sx={{
          backgroundColor: '#1F1D2B',
          width,
          height: '100vh',
          justifyContent: 'start',
          alignItems: 'start',
        }}
        width="100%"
        spacing={4}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="80px"
        >
          <Stack width="70px" height="65px">
            <img className="img" src={resources.logo} alt="logo" />
          </Stack>
        </Stack>
        <Stack
          padding={0}
          spacing={2}
          paddingY={2}
          alignItems="center"
          width="100%"
          paddingLeft={0.5}
          justifyContent="start"
        >
          {homeRoutes.map((route) => (
            <SidebarRouteButton route={route} key={route.title} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
