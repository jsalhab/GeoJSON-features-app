import moxios from 'moxios';
import { getData } from './';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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

const params = {
    minLong: 11.54,
    minLat: 48.14,
    maxLong: 11.543,
    maxLat: 48.145,
}

const initialState = {
    loading: false,
    data: null,
    error: ''
};

describe('get data', () => {
    let store;
    beforeEach(() => {
        moxios.install();
        store = mockStore(initialState);
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('data is returned', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    features: [data],
                    type: "FeatureCollection"
                },
            });
        });

        const expectedState = {
            loading: false,
            data: data,
            error: ''
        }

        return store.dispatch(getData(params))
            .then(() => {
                const actions = store.getState();
                expect(actions).toStrictEqual(expectedState);
            });
    });
});