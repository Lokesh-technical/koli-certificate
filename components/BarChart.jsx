import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const BarChart = () => {
    
    const [chartData, setChartData] = useState({
        datasets:[],
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(()=>{
        setChartData({
            labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ],
            datasets:[
                {
                    label:'Sales $',
                    data:[18127, 22201, 19490, 17938, 21564,6546,11115],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor:'rgb(53, 162, 235, 0.4)'
                },
            ]
        })
        setChartOptions({
            plugins:{
                legend:{
                    position:'top',
                },
                title:{
                    display:true,
                    text:'Daily Revenue'
                },
            },
            maintainAspectRatio: false,
            responsive:true
        })
    },[])

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-gray-900">
        <Bar data={chartData} options={chartOptions}/>
      </div>
    </>
  );
};

export default BarChart;
