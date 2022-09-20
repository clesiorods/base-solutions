import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


export function ResumeBarChart() {

    const options: ApexOptions = {

        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            }
        },

        plotOptions: {
            bar: {
                columnWidth: '28%'
            }
        },

        fill: {

            opacity: 1
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
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
    }];

    return (


        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={'80%'}
            width={'100%'}
        />

    );
}