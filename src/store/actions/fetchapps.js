import * as api from '../apis';

export const getAllApps = () => async (dispatch) =>{
    try{
        console.log("in action");
        const response = await api.fetch_all_apps();
        console.log(response.data)
        dispatch({
            type: 'FETCH_ALL_APPS',
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
    }
}

export const getSelectedApp = (appId) => async (dispatch) =>{
    try{
        console.log("in action");
        const response = await api.fetch_selected_app_details(appId);
        console.log(response.data)
        dispatch({
            type: 'FETCH_ALL_APPS',
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
    }
}