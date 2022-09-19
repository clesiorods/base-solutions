import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


export function MockupLineChart() {

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

        legend: {
            show: false
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
        data: [10, 41, 35, 51, 35, 70, 55, 60],
    },
    {
        name: "Desktops",
        data: [0, 31, 25, 41, 15, 50, 65, 40]
    }];

    return (


        <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={'120%'}
            width={'100%'}
        />

    );
}