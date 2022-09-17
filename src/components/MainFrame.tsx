import styled from "styled-components";
import { Content } from "./Content";
import { SideBar } from "./SideBar";


type FrameProps = {
    children: React.ReactNode;
};

const Div = styled.div`
    display: flex;
    color: #6c757d;
`;


export function MainFrame(props: FrameProps) {
    return (
        <Div>
            <SideBar />
            <Content>
                {props.children}
            </Content>
        </Div>
    );
}