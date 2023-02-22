import { FoodItem } from "../../data"
import { Dialog } from "../../shared";
import { FoodItemDetails } from "./FoodItemDetails"


interface FoodItemDialogProps {
  foodItem: FoodItem
  open?: boolean;
  onClose: () => void
}

export const FoodItemDialog = ({ foodItem, open, onClose }: FoodItemDialogProps) => {
  const isEdit = !!foodItem.id

  return (
    <Dialog
      title={`${isEdit ? 'Edit' : 'Add'} FoodItem`}
      open={open || false}
      onClose={onClose}>
      <FoodItemDetails foodItem={foodItem} />
    </Dialog >
  )
}