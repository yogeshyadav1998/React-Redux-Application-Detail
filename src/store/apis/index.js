import axios from 'axios';

export const fetch_all_apps = () => axios.get('https://api.npoint.io/54d09df281f91e8c146f');

export const fetch_selected_app_details = (app_id) =>axios.get('https://api.npoint.io/d734975d2aee62d197ef/'+ app_id);