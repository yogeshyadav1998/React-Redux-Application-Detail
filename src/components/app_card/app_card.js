import React from 'react';
import './app_card.css';
import {Button} from 'antd';
import {useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {ArrowRightOutlined} from '@ant-design/icons'
import {getSelectedApp} from '../../store/actions/fetchapps';
const App_card = (props) => {
    const History = useHistory();
    const dispatch = useDispatch();
    
    const fetchSelectedApp = () =>{
        console.log(props.id)
        dispatch(getSelectedApp(props.id));
        History.push( {pathname: '/app-details', state:{appName:props.appName, publisherName:props.publisherName}})
    }

    return (
        <div className="appcard-main">
            <div className="app-name-section">
                <div className="profile-section"></div>
                <div>
                    <h1>{props.appName}</h1>
                    <h6>{props.publisherName}</h6>
                </div>
                <Button onClick={fetchSelectedApp}  icon={<ArrowRightOutlined />}></Button>
            </div>
            <div className="app-info-section">
                <div className="info" >
                    <p className="info-name">Revenue</p>
                    <p className="info-value">$100</p>
                </div>
                <div className="info">
                    <p className="info-name">Ad requests</p>
                    <p className="info-value">100M</p>
                </div>
                <div className="info">
                    <p className="info-name">Ad response</p>
                    <p className="info-value">50M</p>
                </div>
                <div className="info">
                    <p className="info-name">Impressions</p>
                    <p className="info-value">40M</p>
                </div>
            </div>
        </div>
    )
}

export default App_card
