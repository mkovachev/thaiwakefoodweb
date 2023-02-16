import { Close } from '@mui/icons-material';
import { Alert, AlertColor, IconButton, Snackbar, SnackbarCloseReason, styled } from '@mui/material';
import { createContext, useContext, useState } from 'react';

export interface ToastOptions {
  type: AlertColor;
}

export type OpenToastFunc = (message?: string, options?: ToastOptions | undefined) => void;

interface IToastContext {
  openToast: OpenToastFunc;
  closeToast: () => void;
}
const ToastContext = createContext<IToastContext>({} as IToastContext);
export const useToast = () => useContext(ToastContext);


const SnackbarToast = styled(Snackbar)(({ theme }) => ({
  minWidth: '60%',
  '.MuiAlert-message': {
    fontSize: '.875rem'
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: 100
  }
}))

interface ToastProviderProps {
  children?: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<AlertColor>('error');

  const openToast: OpenToastFunc = (message = 'Something went wrong...', options) => {
    setMessage(message)
    if (options) setType(options.type)

    setIsActive(true);
  }

  const closeToast = () => {
    setIsActive(false);
    setMessage('');
  }

  const handleClose = (event: Event | React.SyntheticEvent, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeToast();
  };

  return (
    <ToastContext.Provider value={{
      openToast,
      closeToast
    }}>
      {children}

      <SnackbarToast
        open={isActive}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>
        <Alert
          action={
            <IconButton
              id="toast-close-button"
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => { closeToast() }}
            >
              <Close fontSize="small" />
            </IconButton>
          }
          severity={type} sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </SnackbarToast>
    </ToastContext.Provider >
  );
}
