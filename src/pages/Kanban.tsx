import styled from "styled-components";
import { CardLight } from "../components/CardLight";
import Board from "../components/Kanban/Board";
import { MainFrame } from "../components/MainFrame";


export default function Kanban() {
    return (
        <MainFrame>
            <CardLight height={3}>
                <div className="overflow-x">
                    <Board />
                </div>
            </CardLight>
        </MainFrame>
    )
}