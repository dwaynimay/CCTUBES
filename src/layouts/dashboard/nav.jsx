import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'src/routes/hooks';
import { useResponsive } from 'src/hooks/use-responsive';

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <></>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
   <></>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
