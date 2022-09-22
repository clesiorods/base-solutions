import { Icon } from "@iconify/react";
import styled from "styled-components"
import Card from "./Card";


interface listProps {
    data: any
}



export default function List(props: listProps) {

    const Container = styled.div`

    padding:  0px 30px 0px 0px;
    height: 100%;
    flex: 0 0 290px;
    opacity: ${props.data.done};

    & + div {
        /* border-left: 1px solid rgba(255, 255, 255, .06); */
    }

    header {

        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        color: white;

        h2 {
            font-size: 16px;
            font-weight: 500;
            padding: 0 10px;
        }

        button {
            /* background-color: #00c814;
            border-color: #00c814; */
            color: #696a6e;
            width: 20px;
            padding-left: 0px;
            :hover {
                color: white;
            }
        }

    }
    
    ul {
        padding-left: 0px;
        margin-top: 12px;
    }
`;
    return (
        <Container >
            <header>
                <h2>{props.data.title}</h2>
                {
                    props.data.creatable && (
                        <button className="btn">
                            <Icon style={{ fontSize: '20px' }} className="icon" icon="uil:ellipsis-v" />
                        </button>

                    )
                }
            </header>
            <ul>
                {
                    props.data.cards.map((card: any) => {
                        return <Card badgeColor={"red"} key={card.id} data={card} />
                    })
                }
            </ul>
        </Container>
    )
}