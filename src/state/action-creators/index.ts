import axios from 'axios';
import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string, numberOfrecord: number, country: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });
        term = term.replace(' ', '+');
        let endPoint: string = '';
        if (term !== '' && country === '') {
            endPoint = `https://itunes.apple.com/search?term=${term}&limit=${numberOfrecord}`
        }
        else if (term !== '' && country !== '') {
            endPoint = `https://itunes.apple.com/search?term=${term}&limit=${numberOfrecord}&country=${country}`
        }
        try {
            const { data } = await axios.get(endPoint);
            // Added 1 second deley of time to visible shimmer effect only for first time. We can remove settimeout
            numberOfrecord && numberOfrecord === 10 ? setTimeout(() => {
                dispatch({
                    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                    payload: [data]
                })
                return
            }, 1000) :
                dispatch({
                    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                    payload: [data]
                })


        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    }
}
