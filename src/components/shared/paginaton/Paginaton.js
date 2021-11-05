import React, { useState } from 'react';
import FeaturesTable from '../../features-table/FeaturesTable';
import "./Pagination.css";

const Pagination = ({ data, pageLimit, dataLimit }) => {
    const [pages, setPages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };




    return (
        <div>

            {
                data ? <div><FeaturesTable data={data} currentPage={currentPage} dataLimit={dataLimit} />
                    <div className="pagination">
                        <button
                            onClick={goToPreviousPage}
                            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            <span>&laquo;</span>
                        </button>
                        {getPaginationGroup().map((item, index) => (
                            <button
                                key={index}
                                onClick={changePage}
                                className={`paginationItem ${currentPage === item ? 'active' : null}`}
                            >
                                <span>{item}</span>
                            </button>
                        ))}
                        <button
                            onClick={goToNextPage}
                            className={`next ${currentPage === pages ? 'disabled' : ''}`}
                        >
                            <span>&raquo;</span>
                        </button>
                    </div></div> : null
            }
        </div>
    );
};

export default Pagination;
