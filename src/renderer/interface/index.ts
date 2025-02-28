import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';
import { IconType } from 'react-icons';

export interface IRouteProps {
  title: string;
  route?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType;
  Page: React.FC;
}
