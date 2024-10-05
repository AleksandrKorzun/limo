import { array, object, string } from "yup";

export const placeFormSchema = object({
  typeTransport: string().required("Type of transfer is required").min(1),
  date: string().required("Date is required"),
  time: string().required("Time is required"),
  pickUpLocation: string().required("Pick-Up Location is required"),
  dropOffLocation: string().required("Drop-Off Location is required"),
  wayPoints: array().of(string()),
});
