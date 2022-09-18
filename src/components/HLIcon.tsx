import styled from "styled-components"

type HLProps = {
    children: React.ReactNode;
    bg_color: string,
    icon_color: string
}

export default function HLIcon(props: HLProps) {


    const HLIcon = styled.div`
        background-color: ${props.bg_color};
        height: 48px;
        width: 48px;
        border-radius: 24px;
        padding: 9.5px 9.5px;

        div {
            color: ${props.icon_color} !important;

        }
    `;

    return (
        <HLIcon className="hl_icon">

        </HLIcon>
    )
}