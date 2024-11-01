import React from 'react';
// import { Card, Navbar, Graph } from 'ripple-ui';

import './home-page.css';

import Graph from '../components/Graph/Graph';
import Card from '../components/Card/Card';
function Home() {
    const graphData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55, 40], // Replace with your actual data
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };
    return (
        <div className="home-page">
            <div className="card-container">
                <Card title="User Statistics">
                    <p>Some dynamic user stats</p>
                </Card>
                <Card title="Recent Activities">
                    <p>List of recent activities</p>
                </Card>
            </div>
            <div className="graph-container">
                <Graph type="line" data={graphData} title="Monthly Sales Data" />
            </div>
        </div>
    );
}

export default Home;
