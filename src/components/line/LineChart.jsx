import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

export default function LineGraph(props) {
  return (
    <LineChart
        width={500}
        height={300}
        data={props.datas}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
        }}
  >
        <CartesianGrid strokeDasharray={'1'} />
        <XAxis 
            dataKey={props.Year}
            padding={{left:20}}/>
        <YAxis 
            type='number' 
            domain={[300000000, 330000000]} 
            width={100} 
            padding={{bottom:20}}
            tickFormatter={(value) => new Intl.NumberFormat('en').format(value)}/>
        <Tooltip  formatter={(value) => new Intl.NumberFormat('en').format(value)} />
        <Legend />
        <Line type="monotone" dataKey={props.Population} stroke="#8884d8" activeDot={{ r: 8 }} />
        
    </LineChart>
  )
}
