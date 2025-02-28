import { Stack } from "@mui/material";

interface IProps {
  width?: number;
  height?: number;
}
export default function SizedBox({ width, height }: IProps) {
  return (
    <Stack
      width={(theme) => theme.spacing(width ?? 0)}
      height={(theme) => theme.spacing(height ?? 0)}
    />
  );
}
