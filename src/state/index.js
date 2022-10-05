import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState} = createGlobalState({
    searchTerm: ''
});

export {useGlobalState, setGlobalState};