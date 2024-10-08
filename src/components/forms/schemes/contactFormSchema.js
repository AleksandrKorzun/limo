import { array, object, string } from "yup";

export const contactFormSchema = object({
  first_name: string().required("First name is required").min(3),
  second_name: string(),
  time: string().required("Time is required"),
  pick_up_location: string().required("Pick-Up Location is required"),
  drop_off_location: string().required("Drop-Off Location is required"),
  way_points: array().of(string()),
});
