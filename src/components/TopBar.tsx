import styled from "styled-components";
import { Icon as NavIcon } from '@iconify/react';


const NavBar = styled.nav`
    position: sticky;
    top: 0px;
    display: flex;
    z-index: 10000;
    width: 100%;
    /* padding: 20px; */
    /* margin-bottom: 24px; */
    
    div.navbar {
        height: 53px;
        background-color: #7367f0;
        border-radius: 6px;
        margin: 0px 2px;
        width: 100%;
        padding: 10px 16px;
        box-shadow: 0px -30px 42px #101628;

        div.side_01 {
            margin-top: -8px;
        }

        div.stile_menu {
            margin-top: 4px;
            display: none;
        }

        div {
            div {
                svg {
                    margin: 4px 6px;
                }
            }
            div.profile {
                display: flex;
                img {
                    margin: -4px 5px 0px 5px;
                    height: 40px;
                    width: 40px;
                    border-radius: 20px;
                }

                div {
                    display: block;
                    margin: 0px 6px;
                    h5 {
                        font-size: 14px;
                        margin-bottom: 2px;
                        text-align: right;
                    }
                    h6 {
                        font-size: 11.4px;
                        text-align: right;
                    }
                }
          }
        }
    }


    @media screen and (max-width: 800px) {

        padding: 0px;
        margin-bottom: 55px;

        div.navbar {

            top: 0;
            position: fixed;
            margin: 0px -26px;
            border-radius: 2px;

            div.stile_menu {
                display: block;
            }

            div {
                div.div_icon {
                    display: none;
                }

                div {
                    div.div_names {
                        display: none !important;
                    }
                }
            }
        }
    }


    @media screen and (min-width: 1400px) {
        div.navbar {
            height: 58px;
            padding-top: 13px;
        }
    }
`;


export function TopBar() {
    return (
        <NavBar>
            <div className="navbar">
                <div className="d-flex flex-row side_01">
                    <div className="stile_menu">
                        <NavIcon style={{ fontSize: '28px' }} className="icon" icon="eva:menu-fill" />
                    </div>
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '22px' }} className="icon" icon="uil:envelope-alt" />
                    </div>
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '21.5px' }} className="icon" icon="uil:comment-alt" />
                    </div>
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '21.5px' }} className="icon" icon="uil:check-square" />
                    </div>
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '21.5px' }} className="icon" icon="uil:calender" />
                    </div>
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '21.5px' }} className="icon" icon="uil:star" />
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '23px' }} className="icon" icon="uil:sun" />
                    </div>
                    <div className="">
                        <NavIcon style={{ fontSize: '22px' }} className="icon" icon="uil:search" />
                    </div>
                    <div className="div_icon">
                        <NavIcon style={{ fontSize: '22px' }} className="icon" icon="uil:shopping-cart" />
                    </div>
                    <div className="">
                        <NavIcon style={{ fontSize: '22px' }} className="icon" icon="uil:bell" />
                    </div>
                    <div className="profile">
                        <div className="div_names">
                            <h5>João Paulo</h5>
                            <h6>admin</h6>
                        </div>
                        <img src={require('./../assets/photo_profile_default.jpg')} alt="Profile" />
                    </div>
                </div>
            </div>
        </NavBar>
    );
}