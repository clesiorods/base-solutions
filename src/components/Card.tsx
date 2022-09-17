import styled from "styled-components";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function Card(props: CardProps) {


    const CardStyled = styled.div`

        padding: 2px;

        .card {
            padding: 14px 20px;
            margin-top: 24px;
            min-height: ${(180 * props.height) + ((props.height - 1) * 24)}px;
            border: none;
            border-radius: 5px;
            background-color: #283046;
            transition: .3s all;
            
            .card-header {
                display: flex;
                justify-content: space-between;
                background: none;
                border: none;

                h4 {
                    margin-top: -2px;
                    font-size: 18px;
                }

                span {
                    color: #949db4;
                    font-size: 12px;
                }
            }
    
    
            .card-body {
                height: 100%;
                /* background-color: rgba(150, 156, 166, 0.35); */
            }
    
        }
    `;


    return (
        <CardStyled>
            <div className="card">
                {props.children}
            </div>
        </CardStyled>
    );
}