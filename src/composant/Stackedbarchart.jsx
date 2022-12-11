import React from "react"
import Chart from "react-apexcharts"

export default function Stackedbarchart(){
    return(
        <React.Fragment>
            <div>
                <Chart
                type="bar"
                width={1500}
                height={940}
                series={[
                    {
                        name: "Economic violence",
                        data: [3.2, 1, 0, 1, 0, 1.04],
                        color: 'rgb(214, 231, 244)'
                    },
                    {
                        name: "Psychological violence",
                        data: [9.7, 1, 2, 1, 0, 2.74],
                        color: 'rgb(134, 182, 222)'
                    },
                    {
                        name: "Physical assault",
                        data: [19.4, 28.4, 5.6, 1, 2, 11.28],
                        color: 'rgb(48, 121, 178)'
                    },
                    {
                        name: "Sexual assault/rape",
                        data: [3.2, 5.9, 3.5, 14.7, 11.5, 7.76],
                        color: 'rgb(1, 86, 126)'
                    },
                    {
                        name: "Feminicide",
                        data: [29, 51.9, 38.9, 62.2, 50, 46.4],
                        color: 'rgb(53, 188, 191)'
                    },
                    {
                        name: "Family violence",
                        data: [35.5, 11.8, 50, 20.1, 24, 28.28],
                        color: 'rgb(144, 246, 215)'
                    },
                    {
                        name: "Torture",
                        data: [0, 0, 0, 0, 12.5, 2.5],
                        color: 'rgb(22, 48, 67)'
                    }
                ]}

                options={{
                    title: {
                        text: "Number of incidents on women by type of violence in the world",
                        style:{
                            fontSize: "25px",
                        }
                    },
                    chart: {
                        stacked: true,
                    },
                    xaxis: {
                        categories: [2014, 2015, 2016, 2017, 2018, "Merge"]
                    },
                    yaxis: {
                        title:{
                            text: "Percent of incidents",
                            style:{
                                fontSize: "20px",   
                            }
                        }
                    },
                    legend: {
                        position: "right",
                        offsetY: 40
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        shared: true,
                        intersect: false,
                        y: {
                            formatter: function (y) {
                                if(typeof y !== "undefined"){
                                    return y.toFixed(0) + " incidents";
                                }
                                return y;
                            }
                        }
                    }
                }}
                
                />
            </div>
        </React.Fragment>
    )
}