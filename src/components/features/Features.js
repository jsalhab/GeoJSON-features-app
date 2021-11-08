import React from "react";
import Pagination from "../shared/paginaton/Paginaton";
import { connect } from "react-redux";
import "./Features.css";
import { useHistory } from "react-router-dom";
import { resetData } from "../../store/actions";

const Features = ({ data, resetData }) => {
  const history = useHistory();

  const routeChange = () => {
    resetData();
    history.push("/");
  };

  return data && data.features.length > 0 ? (
    <div>
      <button className="back-btn" onClick={routeChange}>
        Back to Homepage
      </button>
      <div className="features-container">
        <h2>GeoJSON Features</h2>
        <Pagination
          data={data.features}
          title="Posts"
          pageLimit={5}
          dataLimit={5}
        />
      </div>
    </div>
  ) : (
    <div className="warning-message">
      There is no data accroding to the values you entered
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.map.data,
  };
};

export default connect(mapStateToProps, { resetData })(Features);
