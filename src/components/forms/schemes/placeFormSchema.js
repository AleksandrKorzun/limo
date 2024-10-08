import { array, object, string } from "yup";

export const placeFormSchema = object({
  type_transfer: string().required("Type of transfer is required").min(1),
  date: string().required("Date is required"),
  time: string().required("Time is required"),
  pick_up_location: string().required("Pick-Up Location is required"),
  drop_off_location: string().required("Drop-Off Location is required"),
  way_points: array().of(string()),
});
