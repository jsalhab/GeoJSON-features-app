import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../shared/modal/Modal";
import CoordinatesForm from '../coordinates/CoordinatesForm';
import './Home.css';


const Home = ({ data, loading }) => {
    const [showModal, setShowModal] = useState(false);
    let history = useHistory();

    const openModal = () => {
        setShowModal(true);
    };

    const hideModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (data && !loading) {
            setShowModal(false);
            history.push("/features");
        }
    }, [data, loading])

    return (
        <div>
            {showModal && (
                <Modal show={showModal} handleClose={hideModal}>
                    <CoordinatesForm handleClose={hideModal} />
                </Modal>
            )}
            <div className="btn-wrapper">
                <div className="center">
                    <button className="click-me-btn" data-test="click-me-button" onClick={() => openModal(true)}> <span>Click here to get GeoJSON features</span></button>
                </div>

            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        loading: state.map.loading,
        data: state.map.data,
    };
};

export default connect(mapStateToProps)(Home)
