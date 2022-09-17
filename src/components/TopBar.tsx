import styled from "styled-components";
import { Icon as NavIcon } from '@iconify/react';


const NavBar = styled.nav`
    position: sticky;
    top: 0px;
    display: flex;
    z-index: 50;
    width: 100%;
    /* padding: 20px; */
    /* margin-bottom: 24px; */
    
    div.navbar {
        height: 62px;
        background-color: #7367f0;
        border-radius: 8px;
        width: 100%;
        padding: 16px;
        box-shadow: 0px -30px 42px #101628;
    }
`;


export function TopBar() {
    return (
        <NavBar>
            <div className="navbar">
                <div className="d-flex flex-row">
                    <div className="m-1">
                        <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:envelope-alt" />
                    </div>
                    <div className="m-1">
                        <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:comment-alt" />
                    </div>
                    <div className="m-1">
                        <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:check-square" />
                    </div>
                    <div className="m-1">
                        <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:calender" />
                    </div>
                    <div className="m-1">
                        <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:star" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </NavBar>
    );
}