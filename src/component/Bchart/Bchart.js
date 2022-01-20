import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 3000,
        wv: 2800,
        yz: 3500,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
        wv: 1800,
        yz: 2500,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
        wv: 2500,
        yz: 2800,
    },
    {
        name: 'April',
        uv: 2780,
        pv: 3908,
        amt: 2000,
        wv: 2400,
        yz: 3500,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
        wv: 2300,
        yz: 3200,
    },
    {
        name: 'June',
        uv: 2390,
        pv: 3800,
        amt: 2500,
        wv: 3500,
        yz: 3000,
    },
    {
        name: 'July',
        uv: 3490,
        pv: 4300,
        amt: 2100,
        wv: 2399,
        yz: 2800,
    },
];
const Bchart = () => {
    return (
        <div>
            <div width="50%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="rgba(255, 99, 132, 0.2)" />
                    <Bar dataKey="uv" stackId="a" fill="rgba(255, 206, 86, 0.2)" />
                    <Bar dataKey="wv" stackId="a" fill="rgba(54, 162, 235, 0.2)" />
                    <Bar dataKey="yz" stackId="a" fill="rgba(54, 162, 235, 0.2)" />
                </BarChart>
            </div>
        </div>
    );
};

export default Bchart;