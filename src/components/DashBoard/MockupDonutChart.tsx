import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";


export function MockupDonutChart() {

    const DivChart = styled.div`
        margin: -50px 0px -30px -20px;
    `;

    const options: ApexOptions = {
        chart: {
            width: 380,
            type: 'donut'
        },
        stroke: {
            width: 0,
        },

        tooltip: {
            enabled: false
        },

        legend: {
            show: false
        },

        dataLabels: {
            enabled: false
        },

        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        total: {
                            showAlways: false,
                            show: true,
                            color: '#b9bdc7',
                            fontFamily: 'Montserrat, Helvetica sans-serif',
                        },
                        value: {
                            color: '#b9bdc7',
                            offsetY: 0,
                            fontFamily: 'Montserrat, Helvetica sans-serif',
                            fontWeight: 600,
                            fontSize: '26px'
                        }
                    }
                }
            }
        },
    }


    const series = [44, 55, 41];

    return (

        <DivChart>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={'150px'}
                width={'160px'}
            />
        </DivChart>

    );
}