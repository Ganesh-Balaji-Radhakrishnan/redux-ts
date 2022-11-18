import { ActionType } from "../action-types/action-types";
import { Action } from "../actions";

const searchRepositories = (term:string) => {
    return async (dispatch:any) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {}
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