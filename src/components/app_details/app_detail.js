import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './app_detail.css';
import {Button, Table} from 'antd';
import "antd/dist/antd.css";
import {ArrowLeftOutlined} from '@ant-design/icons'


const App_detail = () => {
  const History = useHistory();
  const Location = useLocation();
    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
        },
        {
          title: 'Revenue',
          dataIndex: 'revenue',
        },
        {
          title: 'Ad Requests',
          dataIndex: 'adRequest',
        },
        {
          title: 'Ad Responses',
          dataIndex: 'adResponse',
        },
        {
            title: 'Impressions',
            dataIndex: 'impressions',
        },
        {
            title: 'Clicks',
            dataIndex: 'clicks',
        }
      ];
      
      const data = useSelector((state) => {
        return state.fetchapps.all_apps
    })

    // const appName = useSelector((state) => {
    //   return state.fetchapps.selected_app_name
    // })

    // const publisherName = useSelector((state) => {
    //   return state.selected_app_publisher
    // })

    return (
        <div className="app-details-main">
            <div className="header">
                <p className="app-name">adsoul</p>
            </div>
            <div className="detail-section">
                <div className="name-section">
                    <Button onClick={()=> History.push('/')} className="" icon={<ArrowLeftOutlined />}/>
                    <div className="profile-section"></div>
                    <div>
                        <h1>{Location.state.appName}</h1>
                        <h6>{Location.state.publisherName}</h6>
                    </div>
                </div>
                <Table className="details-table" columns={columns} dataSource={data}  />
            </div>
        </div>
    )
}

export default App_detail
