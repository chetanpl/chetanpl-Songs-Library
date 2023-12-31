import { ActionType } from "../actionTypes";
import { Albums } from "../reducers/repositoriesReducers";

interface SearchRepositoriesAction {
    type : ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type :ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload : Albums[]
}

interface SearchRepositoriesErrorAction {
    type : ActionType.SEARCH_REPOSITORIES_ERROR,
    payload : string
}


export type Action = SearchRepositoriesAction | 
SearchRepositoriesSuccessAction | 
 SearchRepositoriesErrorAction;


 