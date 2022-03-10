import { GET_PERJADIN } from "./type";
import { BASE_URL, PATH } from "../../config/api";
import axios from "axios";

export const getSuratTugasAction = () => (dispatch) => {
  axios
    .get(BASE_URL.URL + PATH.SURAT_TUGAS_PERJADIN, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      const { status, data, message, meta } = res.data;
      if (status === "success") {
        dispatch({ type: GET_PERJADIN, payload: data });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
