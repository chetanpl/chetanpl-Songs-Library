import { Action } from "../actions";
import { ActionType } from "../actionTypes";

export type AlbumType=[{
    artistName:string,
    collectionId:string,
    collectionName:string,
    kind:string,
    trackName:string
}]
export type Albums= {
    resultCount:number,
    results:AlbumType
   
}

interface RepositoriesState {
    loading : boolean;
    error : string | null;
    data : Albums[]
}


const initialState = {
    loading : false,
    error:null,
    data : []
}


const reducer = (state : RepositoriesState = initialState,action : Action ) : RepositoriesState => {
    switch(action.type){
        case ActionType.SEARCH_REPOSITORIES :
            return {loading:true,error:null,data:[]};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading:false,error:null,data:action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR :
            return {loading:false,error:action.payload,data:[]};
        default:
            return state;
    }
}

export default reducer;