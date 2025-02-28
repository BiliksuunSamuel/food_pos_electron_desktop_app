import {
  alpha,
  Grid2,
  Grid2Props,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { WhiteShades } from '../theme/appColors';

interface IProps extends Grid2Props {
  item: {
    title: string;
    price: string;
    image: string;
  };
}
export default function MealCard({ item, ...others }: IProps) {
  const theme = useTheme();
  return (
    <Grid2
      size={{
        xs: 6,
        sm: 4,
        md: 3,
        lg: 3,
      }}
    >
      <Stack
        sx={{
          borderRadius: theme.spacing(1.5),
          backgroundColor: alpha('#1F1D2B', 0.45),
          padding: theme.spacing(1.5),
          position: 'relative',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            height: '150px',
            width: '150px',
            borderRadius: '100%',
            position: 'absolute',
            top: '-40px',
            bgcolor: alpha('#1F1D2B', 0.45),
            zIndex: 1,
            backfaceVisibility: 'hidden',
            overflow: 'hidden',
          }}
        >
          <img
            alt="meal-image"
            className="imag"
            src="https://www.eatingwell.com/thmb/_dcl_kYA_7joK4AvvI8SQ0A-x7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-ingredient-lemon-chicken-pasta-050aed8a61094a069f5d7597cff98509.jpg"
          />
        </Stack>
        <Stack padding={theme.spacing(2, 1)} spacing={2} marginTop="90px">
          <Typography
            textAlign="center"
            color={WhiteShades[500]}
            variant="body1"
          >
            {item.title}
          </Typography>
          <Typography
            textAlign="center"
            color={theme.palette.grey[500]}
            variant="body1"
            fontSize={theme.spacing(2.5)}
          >
            {item.price}
          </Typography>
          <Typography
            variant="body1"
            color={alpha(theme.palette.grey[200], 0.45)}
            textAlign="center"
          >
            22 Bowls Available
          </Typography>
        </Stack>
      </Stack>
    </Grid2>
  );
}
