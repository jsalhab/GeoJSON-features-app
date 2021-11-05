import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import { getData } from "../../store/actions";
import "./CoordinatesForm.css";

const CoordinatesForm = ({ getData, loading, error }) => {

    const initialValues = {
        minLong: 11.54,
        minLat: 48.14,
        maxLong: 11.543,
        maxLat: 48.145,
    };

    // const initialValues = {
    //     minLong: '',
    //     minLat: '',
    //     maxLong: '',
    //     maxLat: '',
    // };

    const handleSubmit = (data) => {
        getData(data);
    }

    const validationSchema = () => {
        {
            return Yup.object().shape({
                minLong: Yup.number()
                    .required('minimum longitude is required')
                    .max(180, 'The value can not be more than 180')
                    .min(-180, 'The value can not be less than -180'),
                minLat: Yup.number()
                    .required('minimum latitude is required')
                    .max(90, 'The value can not be more than 90')
                    .min(-90, 'The value can not be less than -90'),
                maxLong: Yup.number()
                    .required('maximum longitude is required')
                    .max(180, 'The value can not be more than 180')
                    .min(-180, 'The value can not be less than -180'),
                maxLat: Yup.number()
                    .required('maximum latitude is required')
                    .max(90, 'The value can not be more than 90')
                    .min(-90, 'The value can not be less than -90'),
            });
        }
    }

    return (
        <div className="container" data-test="coordinates-form">
            <h2>Coordinates</h2>
            {error && <div className="error-message">{error}</div>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ resetForm, isSubmitting }) => (
                    <Form>
                        <div className="input-warpper">
                            <label htmlFor="minLong">Minimum longitude</label>
                            <Field id="minLong" name="minLong" type="number" className="input" />
                            <ErrorMessage
                                name="minLong"
                                component="div"
                                className="error-message"
                            />
                        </div>

                        <div className="input-warpper">
                            <label htmlFor="minLat">Minimum latitude</label>
                            <Field id="minLat" name="minLat" type="number" className="input" />
                            <ErrorMessage
                                name="minLat"
                                component="div"
                                className="error-message"
                            />
                        </div>

                        <div className="input-warpper">
                            <label htmlFor="maxLong">Maximum longitude</label>
                            <Field id="maxLong" name="maxLong" type="number" className="input" />
                            <ErrorMessage
                                name="maxLong"
                                component="div"
                                className="error-message"
                            />
                        </div>

                        <div className="input-warpper">
                            <label htmlFor="maxLat">Maximum latitude</label>
                            <Field id="maxLat" name="maxLat" type="number" className="input" />
                            <ErrorMessage
                                name="maxLat"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="input-warpper">
                            <button
                                type="button"
                                onClick={resetForm}
                                className="btn reset-btn"
                            >
                                RESET
                            </button>
                            <button name='jum' className={`btn submit-btn ${loading ? 'disabled' : ''}`} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.map.loading,
        error: state.map.error,
    };
};

export default connect(mapStateToProps, { getData })(CoordinatesForm);