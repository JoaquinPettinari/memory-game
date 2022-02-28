import { Typography } from '@mui/material';
import { ErrorTextProps } from '../../../../interfaces'
const ErrorText = ({ error }:ErrorTextProps) => {
  if (error) {
    return <Typography color="red">{error}</Typography>;
  }
  return <div />;
};

export { ErrorText };
