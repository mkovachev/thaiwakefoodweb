import { Button, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { FoodItem } from "../../data";
import { Dialog } from "../../shared";

interface FoodItemRemoveDialogProps {
  foodItem: FoodItem
  open: boolean
  onClose: () => void
  onDelete: (foodItem: FoodItem) => void
}

export const FoodItemRemoveDialog = ({ foodItem, open, onClose, onDelete }: FoodItemRemoveDialogProps) => {
  return (
    <Dialog title='Remove Item' open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Remove this item from favorites
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: '2rem' }}>
        <Button variant='outlined' onClick={onClose}>Cancel</Button>
        <Button onClick={() => onDelete(foodItem)} autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}
