import { IconButton, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router';


function SocialIconButton({
  icon,
  label,
  to,
  href,
  ...rest
}) {
  const Component = to ? RouterLink : 'a';
  const props = to ? { to } : { href, target: '_blank', rel: 'noopener' };

  return (
    <Tooltip title={label}>
      <IconButton
        component={Component}
        aria-label={label}
        sx={{
          width: 44,
          height: 44,
          bgcolor: 'primary.dark',
          color: '#fff',
          '&:hover': { bgcolor: 'primary.main' },
          '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
        }}
        {...props}
        {...rest}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default SocialIconButton;