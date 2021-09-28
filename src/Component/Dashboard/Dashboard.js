import React from 'react';
import './Dashboard.css';
const Dashboard = (props) => {
    console.log(props.img);
    return (
        <div>
            <img src={props.img}></img>
        </div>
    );
};

export default Dashboard;