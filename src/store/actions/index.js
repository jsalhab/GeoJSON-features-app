import osmtogeojson from "osmtogeojson";
import axios from "axios";
import {
  START_GETTING_DATA,
  GET_DATA,
  GET_DATA_FAILD,
  RESET_DATA,
} from "./types";

export const getData = (data) => async (dispatch, getState) => {
  const { minLong, minLat, maxLong, maxLat } = data;
  const params = { bbox: `${minLong},${minLat},${maxLong},${maxLat}` };
  try {
    dispatch({ type: START_GETTING_DATA });
    const response = await axios.get(
      `https://api.openstreetmap.org/api/0.6/map`,
      { params }
    );
    const parsedData = osmtogeojson(response.data);
    dispatch({ type: GET_DATA, payload: parsedData });
  } catch (error) {
    dispatch({ type: GET_DATA_FAILD, payload: "Something went wrong" });
  }
};

export const resetData = () => {
  return {
    type: RESET_DATA,
  };
};
