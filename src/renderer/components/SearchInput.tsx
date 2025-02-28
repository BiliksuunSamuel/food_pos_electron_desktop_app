import { InputBase, InputBaseProps, Paper } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { BlackShades } from '../theme/appColors';
interface IProps extends InputBaseProps {
  border?: any;
  backgroundColor?: any;
  minWidth?: any;
  height?: any;
  iconColor?: any;
}

export default function SearchInput({
  border,
  backgroundColor,
  minWidth,
  iconColor,
  height,
  ...others
}: IProps) {
  return (
    <Paper
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.85, 2),
        minWidth: minWidth ?? '240px',
        borderRadius: theme.spacing(1),
        backgroundColor: backgroundColor ?? theme.palette.grey[50],
        borderStyle: 'none',
        fontSize: theme.spacing(2.5),
        border: border,
        height: height ?? '35px',
      })}
      variant="outlined"
    >
      <CiSearch color={iconColor ?? BlackShades[500]} />
      <InputBase
        sx={(theme) => ({ ml: 1, flex: 1, fontSize: theme.spacing(1.5) })}
        placeholder="Search"
        type="search"
        {...others}
      />
    </Paper>
  );
}
