import { IRouteProps } from '../interface';
import { RiHome2Line } from 'react-icons/ri';
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5';
import { LuChartPie } from 'react-icons/lu';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiDiscount1 } from 'react-icons/ci';
import {
  CalculatorPage,
  ContentPage,
  DashboardPage,
  MessagesPage,
  NotificationsPage,
  SettingsPage,
} from '../pages/home';

export const homeRoutes: IRouteProps[] = [
  {
    title: 'Home',
    route: '/',
    Icon: RiHome2Line,
    Page: ContentPage,
  },
  {
    title: 'Calculator',
    route: '/calculator',
    Icon: CiDiscount1,
    Page: CalculatorPage,
  },
  {
    title: 'Dashboard',
    route: '/dashboard',
    Icon: LuChartPie,
    Page: DashboardPage,
  },
  {
    title: 'Messages',
    route: '/messages',
    Icon: HiOutlineEnvelope,
    Page: MessagesPage,
  },
  {
    title: 'Notifications',
    route: '/notifications',
    Icon: IoNotificationsOutline,
    Page: NotificationsPage,
  },
  {
    title: 'Settings',
    route: '/settings',
    Icon: IoSettingsOutline,
    Page: SettingsPage,
  },
];
