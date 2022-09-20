import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";


export function BarGraphic() {

    const DivChart = styled.div`
        margin-top: -54px;
        margin-bottom: -40px;
    `;

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'bar'
        },

        grid: {
            show: true,
            borderColor: '#ffffff',
            strokeDashArray: 0,
            position: 'back',
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
            row: {
                colors: undefined,
                opacity: 1
            },
            column: {
                colors: undefined,
                opacity: 1
            }

        },

        plotOptions: {
            bar: {
                columnWidth: '30%'
            }
        },

        colors: ['#00E396'],

        dataLabels: {
            enabled: false
        },


        legend: {
            position: 'top',
            fontFamily: 'Montserrat, Helvetica sans-seri',
            fontSize: '16px',
            offsetX: 100,
            offsetY: 0,
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
                fillColors: ['#00E396', '#775DD0'],
                radius: 6
            },
            labels: {
                colors: ['#ffffff', '#ffffff'],
                useSeriesColors: false
            },
        },


        xaxis: {
            type: 'category',
            position: 'bottom',
            labels: {
                show: true,
                style: {
                    colors: [
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                    ],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 300,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: 0,
                format: undefined,
                formatter: undefined,
                datetimeUTC: true,
                datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yy",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                },
            },
            axisBorder: {
                show: true,
                color: '#78909C',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#78909C',
                height: 6,
                offsetX: 0,
                offsetY: 0
            },

            title: {
                text: undefined,
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: undefined,
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-title',
                },
            },
            crosshairs: {
                show: true,
                width: 1,
                position: 'back',
                opacity: 0.9,
                stroke: {
                    color: '#b6b6b6',
                    width: 0,
                    dashArray: 0,
                },
                fill: {
                    type: 'solid',
                    color: '#B1B9C4',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 1,
                    opacity: 0.4,
                },
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,

            },
        },


        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: [
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                        '#B4B7BD',
                    ],
                    fontSize: '12px',
                    fontFamily: 'Montserrat, Helvetica sans-seri',
                    fontWeight: 300,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: 0,
                formatter: undefined,
            }
        }
    }

    const series = [
        {
            name: 'Actual',
            data: [
                {
                    x: '2011',
                    y: 1292,
                    goals: [
                        {
                            name: 'Expected',
                            value: 1400,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2012',
                    y: 4432,
                    goals: [
                        {
                            name: 'Expected',
                            value: 5400,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2013',
                    y: 5423,
                    goals: [
                        {
                            name: 'Expected',
                            value: 5200,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2014',
                    y: 6653,
                    goals: [
                        {
                            name: 'Expected',
                            value: 6500,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2015',
                    y: 8133,
                    goals: [
                        {
                            name: 'Expected',
                            value: 6600,
                            strokeHeight: 5,
                            // strokeWidth: 0,
                            // strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2016',
                    y: 7132,
                    goals: [
                        {
                            name: 'Expected',
                            value: 7500,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2017',
                    y: 7332,
                    goals: [
                        {
                            name: 'Expected',
                            value: 8700,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2018',
                    y: 6553,
                    goals: [
                        {
                            name: 'Expected',
                            value: 7300,
                            strokeHeight: 5,
                            // strokeDashArray: 2,
                            strokeColor: '#775DD0'
                        }
                    ]
                }
            ]
        }
    ];

    return (

        <DivChart>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={'358px'}
                width={'100%'}
            />
        </DivChart>

    );
}