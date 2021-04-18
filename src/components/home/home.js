import React ,{useEffect}from 'react';
import { useSelector } from 'react-redux';
import './home.css';
import stats_image from '../../assets/asset1.svg';
import fill_rate from '../../assets/icon1.svg';
import improve_rate from '../../assets/icon2.svg';
import refresh_rate from '../../assets/icon3.svg';
import quick_integration from '../../assets/icon4.svg';
import {SettingFilled} from '@ant-design/icons';
import AppCard from '../app_card/app_card';
import {useDispatch} from 'react-redux';
import {getAllApps} from '../../store/actions/fetchapps';
function Home ()  {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("in app")
        dispatch(getAllApps());
    })
    
    const apps = useSelector((state) => {
        return state.fetchapps.all_apps
    })

    return (
        <div className="home-main">
            <div className="home-left">
                <div className="home-left-up">
                    <p className="app-name">adsoul</p>
                    <img src={stats_image} alt="stats"></img>
                </div>
                <div className="home-left-down">
                    <h1>Revenue Optimization</h1>
                    <div>
                    <img src={fill_rate} alt="icons"></img>
                    <img src={improve_rate} alt="icons"></img>
                    <img src={refresh_rate} alt="icons"></img>
                    <img src={quick_integration} alt="icons"></img>
                </div>
                </div>
            </div>
            <div className="home-right">
                <div className="home-right-up">
                    <h1>Apps </h1>
                    <SettingFilled className="setting-logo"/>
                </div>
                <div className="home-right-down">
                    {
                        apps.map((app) =>{
                            return <AppCard key={app.id} id={app.id} appName={app.appName} publisherName={app.publisherName}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
