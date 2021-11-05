import React from 'react';
import { generateKey } from "../../utils"
import "./FeaturesTable.css";


const FeaturesTable = ({ data, currentPage, dataLimit }) => {
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const renderCord = (geometry) => {
        if (geometry.type === 'LineString') {
            return geometry.coordinates.map((points, index) => (
                <div className='point' key={generateKey(points, index)}>
                    {points.join(", ")}
                </div>
            ))
        } else {

            return geometry.coordinates.map(points => (
                points.map((p, index) => (
                    <div className='point' key={generateKey(p, index)}>{p.join(", ")}</div>
                ))
            ))
        }
    }

    return (
        <div className="data-container" data-test="features-table">
            {
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Geometry Type</th>
                            <th>Points</th>
                            <th>Properties</th>
                        </tr>
                        {getPaginatedData().map((level1) => (
                            <tr key={level1.id}>
                                <td>{level1.id}</td>
                                <td>{level1.type}</td>
                                <td>
                                    {level1.geometry.type}
                                </td>
                                <td>
                                    {
                                        level1.geometry.coordinates.length > 0 ?
                                            renderCord(level1.geometry) : null
                                    }
                                </td>
                                <td>
                                    <p><b>Name: </b>{level1.properties.name}</p>
                                    <p><b>Officail name: </b>{level1.properties.official_name}</p>
                                    <p><b>Type: </b>{level1.properties.type}</p>
                                    <p><b>User: </b>{level1.properties.user}</p>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default FeaturesTable;