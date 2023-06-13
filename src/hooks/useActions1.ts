import { useAppDispatch } from "../state";

import { bindActionCreators } from "redux";

import { actionCreators } from "../state";

export const useActions = () => {
    const dispatch = useAppDispatch();

    bindActionCreators(actionCreators,dispatch);
    //{searchRepositories : dispatch(sea)}
}