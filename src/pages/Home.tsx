import styled from "styled-components";
import { Card } from "../components/Card";
import { MainFrame } from "../components/MainFrame";
import { Icon as Iconify } from '@iconify/react'; // Unicons
import { BarGraphic } from "../components/BarGraphic";
import { ResumeLineChart } from "../components/ResumeLineChart";
import { ResumeBarChart } from "../components/ResumeBarChart";
import { MockupLineChart } from "../components/DashBoard/MockupLineChart";

const DivIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    div {
        justify-content: center;
        display: flex;
        margin-top: 8px;

        div.wrap_icon {
            height: 48px;
            width: 48px;
            border-radius: 24px;
            padding: 9.5px 9.5px;
        }

        div.sales {
            background-color: #7267f024!important;
            color: #7367f0!important;
        }
        div.customers {
            background-color: #00cfe824!important;
            color: #00cfe8!important;
        }
        div.products {
            background-color: #ea545524!important;
            color: #ea5455!important;
        }
        div.revenue {
            background-color: #28c76f24!important;
            color: #28c76f!important;
        }

        span {
            margin: 0px 8px 0px 12px;

            h5 {
                font-weight: 600;
                font-size: 18px;
                margin: 16px 0px 0px 0px;
                white-space: nowrap;
            }

            h6 {
                font-size: 12px;
                color: #939aac;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 36px;
        
        div {
            justify-content: center;
            margin-top: -10px;
            margin-bottom: -20px;

            div.wrap_icon {
                margin-top: 0px;
            }

            span {
                margin-top: -10px;
            }
        }
    }
`;

const CardResume = styled.div`

    margin: 0px -12px 0px -12px;

    h4 {
        font-size: 14px !important;
        margin-bottom: 4px;
    }
    h3 {
        font-weight: 600;
        font-size: 24px !important;
    }
`;

const YearSelect = styled.select`
    color: #7367F0;
    border-color: #7367F0;
    background-color: #7267f01a;

    :hover {
        background-color: #7267f044;
        color: #9a91ff;
    }
`;



export function Home() {
    return (
        <MainFrame>

            <div className="row">
                <div className="col-md-4">
                    <Card height={1} >
                        <div className="card-header">

                        </div>
                        <div className="card-body">

                        </div>
                    </Card>
                </div>
                <div className="col-md-8">
                    <Card height={1} >
                        <div className="card-header">
                            <h4>
                                Estatísticas
                            </h4>
                            <span className="second_info">
                                Atualizado as 14:55
                            </span>
                        </div>
                        <div className="card-body">
                            <DivIcons>
                                <div className="">
                                    <div className="wrap_icon sales" >
                                        <Iconify style={{ fontSize: '28px' }} className="icon" icon="uil:chart-down" vFlip={true} />
                                    </div>
                                    <span>
                                        <h5>230 mil</h5>
                                        <h6>Vendas</h6>
                                    </span>
                                </div>

                                <div>
                                    <div className="wrap_icon customers" >
                                        <Iconify style={{ fontSize: '28px' }} className="icon" icon="uil:user" />
                                    </div>
                                    <span>
                                        <h5>230 mil</h5>
                                        <h6>Clientes</h6>
                                    </span>
                                </div>

                                <div>
                                    <div className="wrap_icon products" >
                                        <Iconify style={{ fontSize: '28px' }} className="icon" icon="uil:box" />
                                    </div>
                                    <span>
                                        <h5>230 mil</h5>
                                        <h6>Produtos</h6>
                                    </span>
                                </div>

                                <div>
                                    <div className="wrap_icon revenue" >
                                        <Iconify style={{ fontSize: '28px' }} className="icon" icon="uil:dollar-alt" />
                                    </div>
                                    <span>
                                        <h5>230 mil</h5>
                                        <h6>Apurado</h6>
                                    </span>
                                </div>
                            </DivIcons>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <Card height={1} >
                                <div className="card-header">
                                    <CardResume>
                                        <h4>Vendas</h4>
                                        <h3>6 mil</h3>
                                    </CardResume>
                                </div>
                                <div className="card-body">
                                    <div className="chart_div">
                                        <ResumeBarChart></ResumeBarChart>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card height={1} >
                                <div className="card-header">
                                    <CardResume>
                                        <h4>Lucro</h4>
                                        <h3>46 mil</h3>
                                    </CardResume>
                                </div>
                                <div className="card-body">
                                    <div className="chart_div">
                                        <ResumeLineChart></ResumeLineChart>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-12">
                            <Card height={1} >
                                <div className="card-header">

                                </div>
                                <div className="card-body">

                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Card height={2} >
                        <div className="card-header">
                            <h4>
                                Últimos seis meses
                            </h4>
                            <span className="second_info">
                                Atualizado as 14:55
                            </span>
                        </div>
                        <div className="card-body">
                            <div className=" row">
                                <div className="col-md-8">
                                    <BarGraphic></BarGraphic>
                                </div>
                                <div className="col-md-4 text-center">
                                    <YearSelect name="" className="btn" id="">
                                        <option value="">2022</option>
                                        <option value="">2021</option>
                                        <option value="">2020</option>
                                    </YearSelect>
                                    <h4 className="mt-4">R$ 331 mil</h4>
                                    <div className="mr-0 pr-0">
                                        <MockupLineChart></MockupLineChart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <Card height={2.3} >
                        <div className="card-header">

                        </div>
                        <div className="card-body">

                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2.3} >
                        <div className="card-header">

                        </div>
                        <div className="card-body">

                        </div>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Card height={2} >
                        <div className="card-header">

                        </div>
                        <div className="card-body">

                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2} >
                        <div className="card-header">

                        </div>
                        <div className="card-body">

                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2} >
                        <div className="card-header">

                        </div>
                        <div className="card-body">

                        </div>
                    </Card>
                </div>
            </div>
        </MainFrame>
    );
}