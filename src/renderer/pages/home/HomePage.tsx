import { alpha, Stack } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../sections';

export default function HomePage() {
  const [openSidebar] = useState(true);
  return (
    <Stack>
      <Stack direction="row" alignItems="start" justifyContent="start">
        <Sidebar open={openSidebar} />
        <Stack
          bgcolor={alpha('#393C49', 1)}
          height="100vh"
          paddingLeft={openSidebar ? '0px' : 0}
          width="100%"
          marginLeft={-0.25}
          overflow="hidden"
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
}
