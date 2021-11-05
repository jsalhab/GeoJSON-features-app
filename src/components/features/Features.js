import React from 'react';
import Pagination from "../shared/paginaton/Paginaton"
import { connect } from "react-redux";
import './Features.css';

const Features = ({ data }) => {
    return (
        data && data.features.length > 0 ?
            <div>
                <div className="warpper">
                    <h2>GeoJSON Features</h2>
                    <Pagination
                        data={data.features}
                        title="Posts"
                        pageLimit={5}
                        dataLimit={5}
                    />
                </div>
            </div>
            :
            <div className='warning-message'>There is no data accroding to the values you entered</div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.map.data,
    };
};

export default connect(mapStateToProps)(Features)