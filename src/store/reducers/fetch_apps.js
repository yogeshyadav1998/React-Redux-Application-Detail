const initialState = {
    all_apps: [],
    selected_app_details: null,
    selected_app_name: null,
    selected_app_publisher: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_ALL_APPS':
            console.log("in reducer");
                return {
                    ...state,
                    all_apps: action.payload
                };
        case 'FETCH_SELECTED_APP':
                return {
                    ...state,
                    selected_app: action.payload.data,
                    selected_app_name: action.payload.appName,
                    selected_app_publisher: action.payload.publisherName
                };
        case 'FETCH_WITH_NAME':
                return state;
        case 'FETCH_SIMILAR':
                return state;
        default:
            return state;
    }
}

export default reducer;