import CloseIcon from '@mui/icons-material/Close'
import { Dialog as MuiDialog, DialogProps as MuiDialogProps, DialogTitle as MuiDialogTitle, IconButton, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface DialogProps extends MuiDialogProps {
  children: ReactNode
  title: string
  open: boolean
  onClose?: (reason?: unknown) => void
};

export const Dialog = ({ children, title, open = false, onClose, ...rest }: DialogProps) => {

  if (!open) return null;

  return (
    <MuiDialog
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      onClose={(e, reason) => reason !== 'backdropClick' && onClose && onClose(reason)}
      open={open}
      scroll="body"
      aria-labelledby="modal-dialog-title"
      {...rest}>
      <DialogTitle>
        <Typography variant="h2" component="span">{title}</Typography>
        <IconButton aria-label="close" color="error" size="large" onClick={() => onClose && onClose('CLOSE')}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </DialogTitle>
      {children}
    </MuiDialog>
  );
}

const DialogTitle = styled(MuiDialogTitle)((theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
}))