import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

interface LinkProps extends MuiLinkProps {
  to: string;
  disabled?: boolean;
}

export const Link = ({ to, disabled, ...props }: LinkProps) => {

  const handleLinkClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return <MuiLink component={NavLink} to={to} onClick={handleLinkClick} {...props} />
}
