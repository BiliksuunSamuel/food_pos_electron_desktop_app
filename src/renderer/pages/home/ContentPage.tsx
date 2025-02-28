import {
  alpha,
  Divider,
  Grid2,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { MealCard, SearchInput, SizedBox } from '../../components';
import { WhiteShades } from '../../theme/appColors';
import CustomSelect from '../../components/CustomSelect';

export default function ContentPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState('Hot Dishes');
  return (
    <Stack overflow="auto" spacing={3} padding={(theme) => theme.spacing(2)}>
      {/* header section */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Stack justifyContent="start">
          <Typography color={WhiteShades[500]} variant="h4">
            Jaegar Resto
          </Typography>
          <Typography color={theme.palette.grey[600]} variant="body1">
            Tuesday, 2 Feb 2021
          </Typography>
        </Stack>
        <Stack>
          <SearchInput
            backgroundColor={alpha(theme.palette.grey[100], 0.05)}
            border={`1px solid ${alpha(WhiteShades[500], 0.15)}`}
            style={{ color: WhiteShades[500] }}
            placeholder="Search for food, coffe, etc..."
            iconColor={WhiteShades[500]}
          />
        </Stack>
      </Stack>
      {/* menus section */}
      <Stack>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
        >
          {[
            'Hot Dishes',
            'Cold Dishes',
            'Soup',
            'Grill',
            'Appetizer',
            'Dessert',
          ].map((item) => (
            <Tab
              key={item}
              label={item}
              style={{
                color:
                  activeTab === item
                    ? theme.palette.primary.main
                    : theme.palette.grey[500],
                textTransform: 'capitalize',
              }}
            />
          ))}
        </Tabs>
        <Divider />
      </Stack>
      {/*meals filter section */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack>
          <Typography color={alpha(theme.palette.grey[100], 0.85)} variant="h5">
            Choose Dishes
          </Typography>
        </Stack>
        <Stack>
          <CustomSelect
            style={{
              backgroundColor: alpha('#1F1D2B', 0.45),
              color: WhiteShades[500],
            }}
            defaultValue="Dine In"
            required
          >
            {['Dine In', 'Take Away', 'Delivery'].map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </CustomSelect>
        </Stack>
      </Stack>
      <SizedBox height={4} />
      {/*meals section */}
      <Stack>
        <Grid2 container columnSpacing={3} rowSpacing={8}>
          {[
            {
              title: 'Spicy seasoned seafood noodles',
              price: '$ 2.29',
              image: 'https://source.unsplash.com/1600x900/?food',
            },
            {
              title: 'Salted pasta with mushroom sauce',
              price: '$ 2.69',
              image: 'https://source.unsplash.com/1600x900/?food',
            },
            {
              title: 'Beef dumpling in hot and sour soup',
              price: '$ 2.99',
              image: 'https://source.unsplash.com/1600x900/?food',
            },
            {
              title: 'Healthy noodle with spinach leaf',
              price: '$ 3.29',
              image: 'https://source.unsplash.com/1600x900/?food',
            },
            {
              title: 'Hot spicy fried rice with omelet',
              price: '$ 3.49',
              image: 'https://source.unsplash.com/1600x900/?food',
            },
            {
              title: 'Spicy instant noodle with special omelette',
              price: '$ 3.59',
              image: 'https://source.unsplash.com/1600x900/?food',
            },
          ].map((item) => (
            <MealCard item={item} key={item.title} />
          ))}
        </Grid2>
      </Stack>
    </Stack>
  );
}
