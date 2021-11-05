import { shallow } from 'enzyme';
import { findByTestAttr } from "../../test/testUtils";
import FeaturesTable from '../components/features-table/FeaturesTable';

const defaultProps = {
    data: [
        {
            type: "Feature",
            id: "relation/54387",

            properties: {

                user: "Rainero",

                name: "Neuhausen-Nymphenburg",

                official_name: "Stadtbezirk 9 Neuhausen-Nymphenburg",

                type: "boundary",

            },

            geometry: {
                type: "Polygon",
                coordinates: [
                    [

                        [
                            11.5409784,
                            48.1446785
                        ],
                        [
                            11.5413634,
                            48.1450666
                        ]
                    ]
                ]
            }
        }
    ],
    currentPage: 1,
    dataLimit: 5
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<FeaturesTable {...setupProps} />)
};

test("renders Features Table Component without error", () => {
    const wrapper = setup();
    const featuresTableComponent = findByTestAttr(wrapper, "features-table");
    expect(featuresTableComponent.length).toBe(1);
});

