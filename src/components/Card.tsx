import styled from "styled-components";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function Card(props: CardProps) {


    const CardStyled = styled.div`

    padding: 2px;

        .card {
            padding: 20px;
            margin-top: 24px;
            min-height: ${(180 * props.height) + ((props.height - 1) * 24)}px;
            border: none;
            border-radius: 5px;
            background-color: #283046;
            transition: .3s all;
    
    
            .card-body {
                height: 100%;
                /* background-color: rgba(150, 156, 166, 0.35); */
            }
    
            .div_chart {
                height: calc(100% - 24px);
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