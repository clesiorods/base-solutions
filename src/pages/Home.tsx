
import { Card } from "../components/Card";
import { MainFrame } from "../components/MainFrame";



export function Home() {
    return (
        <MainFrame>

            <div className="row">
                <div className="col-md-4">
                    <Card height={1} >
                        div
                    </Card>
                </div>
                <div className="col-md-8">
                    <Card height={1} >
                        div
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <Card height={1} >
                                div
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card height={1} >
                                div
                            </Card>
                        </div>
                        <div className="col-md-12">
                            <Card height={1} >
                                div
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Card height={2} >
                        div
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <Card height={2.3} >
                        div
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2.3} >
                        div
                    </Card>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                    <Card height={2} >
                        div
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2} >
                        div
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2} >
                        div
                    </Card>
                </div>
            </div>
        </MainFrame>
    );
}