import styled from "styled-components";
import { Card } from "../components/Card";
import { MainFrame } from "../components/MainFrame";
import { Icon as Iconify } from '@iconify/react'; // Unicons
import DataTable from "../components/DataTable/DataTable";



const ResumeCard = styled.div`
    h2 {
        font-size: 24px;
        font-weight: 600;
    }
    div.card-header {
        padding: 4px 8px;
    }
    div.card-body {
        margin: -10px 0px;
        padding: 4px 8px 0px 8px;
        p {
            color: #b4b7bd;
        }
        div.wrap_icon {
            margin-top: -26px;
            height: 46px;
            width: 46px;
            border-radius: 26px;
            padding: 11.5px 12.5px;
            background-color: rgba(${(prop) => prop.color}, .15);
            svg {
                color: rgb(${(prop) => prop.color});
            }
        }
    }
`;


export default function Customers() {
    return (
        <MainFrame>
            <div className="row">
                <div className="col-md-3">
                    <Card height={0.6} >
                        <ResumeCard color={'180, 180, 180'} >
                            <div className="card-header">
                                <h2>
                                    4.023
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="">Total</p>
                                    <div className="wrap_icon customers" >
                                        <Iconify style={{ fontSize: '21px' }} className="icon" icon="uil:user" />
                                    </div>
                                </div>
                            </div>
                        </ResumeCard>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card height={0.6} >
                        <ResumeCard color={'80, 180, 80'} >
                            <div className="card-header">
                                <h2>
                                    128
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="">Novos Clientes</p>
                                    <div className="wrap_icon customers" >
                                        <Iconify style={{ fontSize: '21px' }} className="icon" icon="uil:user" />
                                    </div>
                                </div>
                            </div>
                        </ResumeCard>
                    </Card >
                </div >
                <div className="col-md-3">
                    <Card height={0.6} >
                        <ResumeCard color={'80, 80, 255'} >
                            <div className="card-header">
                                <h2>
                                    34
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="">Ativos Semana</p>
                                    <div className="wrap_icon customers" >
                                        <Iconify style={{ fontSize: '21px' }} className="icon" icon="uil:user" />
                                    </div>
                                </div>
                            </div>
                        </ResumeCard>
                    </Card >
                </div >
                <div className="col-md-3">
                    <Card height={0.6} >
                        <ResumeCard color={'255, 80, 80'} >
                            <div className="card-header">
                                <h2>
                                    89
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="">Ativos Mês</p>
                                    <div className="wrap_icon customers" >
                                        <Iconify style={{ fontSize: '21px' }} className="icon" icon="uil:user" />
                                    </div>
                                </div>
                            </div>
                        </ResumeCard>
                    </Card >
                </div >
            </div >
            {/* <div className="row">
                <div className="com-md-12">
                    <Card height={0.6}>
                    </Card>
                </div>
            </div> */}
            <div className="row">
                <div className="com-md-12">
                    <Card height={3}>
                        <DataTable />
                    </Card>
                </div>
            </div>
        </MainFrame >
    );
}