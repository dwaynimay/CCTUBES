import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';


// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  return (
    <></>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
