import { Icon } from "@iconify/react";
import styled from "styled-components"


const List = styled.div`
    /* position: relative; */
    background-color: #283046;
    border-radius: .428rem;
    margin-bottom: 12px;
    padding: 0px 15px 15px 15px;
    width: 100%;
    cursor: grab;

    .content {
        p {
            font-weight: 500;
            line-height: 20px;
            color: #B9BDC7;
        }
        img {
            width: 100%;
            border-radius: .228rem;
        }
    }


    header {
    }

    .foot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        div {

            svg {
                margin-right: 6px;
                color: #ffffff54;
                cursor: pointer;

                :hover {
                    color: white;
                }
            }
            
            img {
                width: 32px;
                height: 32px;
                border-radius: 16px;
                margin-left: -12px;
                border: 2px solid #283046;
            }
        }
    }

    
`;


export default function Task(props) {

    const Label = styled.span`
        font-size: 12px;
        border-radius: 9px;
        display: inline-block;
        background: ${(props.data.labels[0])}1d;
        color: ${(props.data.labels[0])};
    `;

    return (
        <List>
            <header>
                {
                    props.data.labels.map((label) => {
                        return <Label className="badge" key={label} color={label} >#tag</Label>
                    })
                }

            </header>
            <div className="content">
                <p>
                    {props.data.content}

                </p>
                {props.data.img && <img src={require('./../../assets/picole.jpg')} alt="Avatar" />}
            </div>

            <div className="foot">
                <div>
                    <Icon style={{ fontSize: '16' }} className="icon" icon="uil:link" />
                    <Icon style={{ fontSize: '16' }} className="icon" icon="uil:paperclip" />

                </div>
                <div className="">
                    {props.data.user && <img src={require('./../../assets/photo_profile_default.jpg')} alt="Avatar" />}
                    {props.data.user && <img src={require('./../../assets/photo_profile_default.jpg')} alt="Avatar" />}
                    {props.data.user && <img src={require('./../../assets/photo_profile_default.jpg')} alt="Avatar" />}
                </div>
            </div>
        </List>
    )
}