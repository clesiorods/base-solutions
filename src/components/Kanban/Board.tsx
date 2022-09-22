import styled from "styled-components"
import List from "./List";
import { loadLists } from "../../services/apiKanban";

const Container = styled.div`
    display: flex;
    padding: 30px 0;
    height: calc(100% - 80px);
`;

const lists = loadLists();

export default function Board() {
    return(
        <Container>
            {lists.map((list) => {
                return <List key={list.title} data={list} />
            })}
        </Container>
    )
}