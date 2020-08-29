import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const Chart = ({ ChartData }) => {
    console.log(ChartData,'///////////////////')
    if(ChartData){
        let data = [
            {
              "id": "Open",
              "color": "hsl(71, 70%, 50%)",
              "data": ChartData.Open
            },
            {
                "id": "High",
                "color": "hsl(71, 70%, 50%)",
                "data": ChartData.High
            },
            {
                "id": "Low",
                "color": "hsl(71, 70%, 50%)",
                "data": ChartData.Low
            },
            {
                "id": "Close",
                "color": "hsl(71, 70%, 50%)",
                "data": ChartData.Close
            },
            {
                "id": "Volume",
                "color": "hsl(71, 70%, 50%)",
                "data": ChartData.Volume
            },
        ]
        return (
            <div className="col-12 px-0" style={{ height: 300 }}>
                        <ResponsiveLine
                            data={data}
                            margin={{ top: 32, right: 18, bottom: 32, left: 48 }}
                            xScale={{ type: 'point' }}
                            yScale={{
                                type: 'linear',
                                min: 'auto',
                                max:  'auto',
                                stacked: true,
                                reverse: false,
                            }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                orient: 'bottom',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'transportation',
                                legendOffset: 36,
                                legendPosition: 'middle'
                            }}
                            axisLeft={{
                                    orient: 'left',
                                    tickSize: 0,
                                    tickPadding: 15,
                                    tickRotation: 0,
                                    legendPosition: 'middle',
                                }}
                            colors={['#1EA3DC']}
                            enablePoints={false}
                            useMesh={true}
                        />
                    </div>
        )
    }else{
        return null
    }
   
}



export default Chart;
