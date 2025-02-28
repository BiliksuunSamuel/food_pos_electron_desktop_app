import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function Flex({ flex, ...others }: IProps) {
  return <Stack flex={flex} {...others} />;
}
