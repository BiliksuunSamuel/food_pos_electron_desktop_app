import {
  FilledSelectProps,
  FormControl,
  InputLabel,
  Select,
  alpha,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import SizedBox from './SizedBox';

interface IProps extends Omit<FilledSelectProps, 'variant'> {
  label?: string;
  children: ReactNode;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  height?: number;
}

export default function CustomSelect({
  label,
  height,
  children,
  ...props
}: IProps) {
  const theme = useTheme();
  return (
    <FormControl style={{ marginTop: label ? 8 : 0 }} fullWidth>
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 400,
            fontSize: theme.spacing(2.5),
            marginBottom: -0.5,
            fontFamily: 'Arial',
            color: alpha(theme.palette.common.black, 0.8),
            marginLeft: '-10px',
          })}
          shrink
        >
          {label}
          {props.required && (
            <span style={{ color: 'red', marginLeft: 2 }}>*</span>
          )}
        </InputLabel>
      )}
      {label && <SizedBox height={2} />}
      <Select
        size="small"
        sx={{
          minWidth: 100,
          borderRadius: theme.spacing(1),
          padding: theme.spacing(0.85, 0.5),
          border: `1px solid ${alpha(theme.palette.grey[100], 0.05)}`,
          height: height,
        }}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  );
}
