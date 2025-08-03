import { hideAlert, showAlert } from "../../redux/features/alertSlice";
import type { AppDispatch } from "../../redux/store";


export const showTimedAlert = (
  message: string,
  type: 'success' | 'error' | 'info',
  duration = 3000
) => (dispatch: AppDispatch) => {
  dispatch(showAlert({ message, type }));

  setTimeout(() => {
    dispatch(hideAlert());
  }, duration);
};
