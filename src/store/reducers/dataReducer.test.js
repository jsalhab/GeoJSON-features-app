import {
    GET_DATA,
    GET_DATA_FAILD
} from "../actions/types";
import dataReducer from "./dataReducer";


const data = [
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
];

const initialState = {
    loading: false,
    data: null,
    error: ''
};

describe('data reducer', () => {
    it('returns the initial state', () => {
        expect(dataReducer(undefined, {})).toStrictEqual(initialState);
    });

    it('handles successful get data', () => {
        const action = { type: GET_DATA, payload: data };
        const expectedState = { data: data, loading: false, error: '' };
        expect(dataReducer(undefined, action)).toEqual(expectedState);
    });

    it('handles get data failure', () => {
        const action = { type: GET_DATA_FAILD, payload: 'Something went wrong' };
        const expectedState = { data: null, loading: false, error: 'Something went wrong' };
        expect(dataReducer(undefined, action)).toEqual(expectedState);
    });
})