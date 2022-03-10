import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuratTugasAction } from "../../../store/action/perjadinAction";

const ListSuratTugas = () => {
  const dispatch = useDispatch();
  const { perjadin } = useSelector((state) => state.perjadinReducer);

  useEffect(() => {
    dispatch(getSuratTugasAction());
  }, [dispatch]);

  return (
    <div>
      {perjadin.map((item, index) => (
        <div key={index}>
          <p>{item.kode_rka}</p>
        </div>
      ))}
    </div>
  );
};

export default ListSuratTugas;
