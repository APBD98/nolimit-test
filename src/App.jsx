import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import LineGraph from './components/line/LineChart'
import PieC from './components/pie/PieChart'





function App() {
  const [datas, setDatas] = useState([])
  const [desc, setDesc] = useState([])
  const [range, setRange] = useState(8)
  useEffect(() => {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then((res) => {
      setDatas(res.data.data.sort((a,b) => a.Year - b.Year))
      setDesc(res.data.source[0].annotations)
    })
  },[])
  console.log(datas)
  const slice = datas.slice(0,range)

  const handleOption = (e) => {
    setRange(e.target.value)
  }
  return (
    <div className='w-full min-h-[800px] bg-white'>
      <div className='w-1/2 h-[150px] mx-auto pt-5'>
        <h1 className='text-center'>{desc.dataset_name}</h1>
        <div className='w-full min-h-[100px] border-2 border-gray-800 mt-5 p-5 text-sm'>
          <p>Desc: {desc.source_description}</p>
          <p>Topic: {desc.topic}</p>
          <p>Subtopic: {desc.subtopic}</p>
          <p className='text-sm underline text-opacity-50'>Source: {desc.source_name}</p>
        </div>
        <div className='text-center mt-5'>
          <select name="range" id="range" onChange={handleOption} className='border-2 border-gray-900 p-2 rounded-md'>
            <option value={8}>All</option>
            <option value={6}>2013-2018</option>
            <option value={4}>2013-2016</option>
          </select>
        </div>
      </div>
      <div className='w-full min-h-[400px] mt-28 grid grid-cols-1 place-items-center md:grid-cols-2'>
        <div>
          <LineGraph
            datas={slice}
            Year="Year"
            Population="Population"/>
        </div>
        <div className='-mt-10'>
          <PieC data={slice}/>
        </div>        
      </div>
    </div>
  )
}

export default App
