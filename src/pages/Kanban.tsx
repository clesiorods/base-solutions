import { ContentWrapper } from "../components/ContentWrapper";
import Board from "../components/Kanban/Board";
import { MainFrame } from "../components/MainFrame";


export default function Kanban() {
    return (
        <MainFrame>
            <ContentWrapper height={3}>
                <div className="overflow-x">
                    <Board />
                </div>
            </ContentWrapper>
        </MainFrame>
    )
}