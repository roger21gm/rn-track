import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => (name, location) => {
    console.log('uee');
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    {
        fetchTracks,
        createTrack
    },
    [],
);
