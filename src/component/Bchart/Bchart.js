import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 7,
        pv: 2,
        amt: 3,
        wv: 2,
        yz: 3,
    },
    {
        name: 'Feb',
        uv: 3,
        pv: 1,
        amt: 2,
        wv: 1,
        yz: 2,
    },
    {
        name: 'Mar',
        uv: 2,
        pv: 6,
        amt: 2,
        wv: 2,
        yz: 2,
    },
    {
        name: 'April',
        uv: 2,
        pv: 3,
        amt: 4,
        wv: 5,
        yz: 6,
    },
    {
        name: 'May',
        uv: 3,
        pv: 4,
        amt: 2,
        wv: 7,
        yz: 5,
    },
    {
        name: 'June',
        uv: 6,
        pv: 3,
        amt: 5,
        wv: 4,
        yz: 7,
    },
    {
        name: 'July',
        uv: 3,
        pv: 4,
        amt: 2,
        wv: 5,
        yz: 6,
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