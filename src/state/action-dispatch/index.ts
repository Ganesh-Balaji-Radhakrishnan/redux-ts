import { ActionType } from "../action-types/action-types";
import { Action } from "../actions";
import axios from 'axios'
import { Dispatch } from "redux";

export const searchRepositories = (term:string) => {
    return async (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params : {
                    text: term
                }
            })

            const names = data.objects.map((item:any)=>item.package.name)

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        }
        catch (err){
            if (err instanceof Error) {
                dispatch({
                  type: ActionType.SEARCH_REPOSITORIES_ERROR,
                  payload: err.message,
                });
        }
    }
    }
}