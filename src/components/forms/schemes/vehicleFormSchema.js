import { array, object, string } from "yup";

export const vehicleFormSchema = object({
  passengers: string().required("Type of transfer is required").min(1),
  suitcase: string().required("Date is required"),
  child_seat: string().required("Time is required"),
  pick_up_location: string().required("Pick-Up Location is required"),
  type: string().required("Drop-Off Location is required"),
});
