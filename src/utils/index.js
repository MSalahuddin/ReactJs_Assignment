import moment from 'moment';

class utils {
    sortingChart(data) {
        
        let objectKeys = Object.keys(data)
        let chartData = []
        objectKeys.map(val => {
            let chartValues = []
            data[val].map(item => {
                let obj = {
                    x: `${moment(item.x).format('MMM')} ${moment(item.x).format('DD')}`,
                    y: item.y,
                }
                if (chartValues.length === 15) {
                    chartValues.shift()
                } else {
                    chartValues.push(obj)
                }
            })
            let singleChart = {
                id: `${val}`,
                color: `hsl(${val === 'Open' ? 266 :
                    val === 'High' ? 340 :
                        val === 'Low' ? 297 :
                            val === 'Close' ? 115 : 306} , 70%, 50%)`,
                data: chartValues,
            }
            chartData.push(singleChart)
        })
        return chartData
    }

}

export default new utils();
