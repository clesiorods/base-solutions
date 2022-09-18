import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


export function ResumeLineChart() {

    const options: ApexOptions = {
        chart: {
            // height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },

        markers: {
            size: 2.5,
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 1,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: 5,
              sizeOffset: 3
            }
        },

        dataLabels: {
            enabled: false
        },

        tooltip: {
            enabled: false
        },

        stroke: {
            curve: 'straight'
        },


        xaxis: {
            type: 'category',
            position: 'bottom',
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },

        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },

        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        }

    }

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62]
    }];

    return (


        <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={'80%'}
            width={'100%'}
        />

    );
}