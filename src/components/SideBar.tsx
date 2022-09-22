import { Icon as NavIcon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";



const Nav = styled.nav`
    background-color: #283046;
    height: 100vh;
    width: 308px;
    transition: .3s all;
    padding: 16px;

    img.main_logo {
        height: 24px;
    }


    div.nav_header {
        margin: 8px;
    }

    div.div_logo {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        width: 100px;
    }


    h2.brand-text {
        animation: fadein .3s cubic-bezier(.25,.8,.25,1) 0s 1 normal forwards;
        font-size: 20.3px;
        font-weight: 600;
        color: rgb(115,103,240);
        padding-left: 14px;
    }
    

    ul {
        margin-top: 24px;
        list-style: none;
        font-size: 15px;
        padding: 0px;

        li {
            padding: 8px 14px;
            border-radius: 5px;
            margin-top: 4px;
            cursor: pointer;
            transform: .3s all;
            
        }

        .menu_section {
            font-size: 10px;
        }

        svg {
            margin-right: 8px;
            margin-top: -5px;
        }


        .active {
            li {
                background: linear-gradient(118deg,#7367f0,rgba(115,103,240,.7));
               box-shadow: rgba(115, 103, 240, .7) 0px 0px 10px 1px;
            }

            span {
                color: white !important;
            }
        }

    }


    a {
        text-decoration: none;
        color: #d8d8d8;
        cursor: pointer;
    }


    .div_menu {
        /* margin: 24px 16px; */
    }


    @media screen and (max-width: 1200px) {
        width: 70px;
        /* padding-top: 15px; */

        div {
            div.div_logo {
                margin-left: -6px;

                h2 {
                    opacity: 0;
                }
            }

            div#pin_icon {
                display: none;
            }
        }


        .div_menu {
            margin: 0px 0px;
            display: flex;
            justify-content: center;
        }

        .icon {
            margin: 5px 0px !important;
            font-size: 24px !important;
        }


        .nav_text {
            display: none;
        }

        ul {

            margin-top: 0px;

            li {
                /* margin: 12px; */
                text-align: center;

                span.menu_section {
                    display: none;
                }
            }

            .active {
                li {
                    box-shadow: none;
                }
            }

        }
    }


    @media screen and (max-width: 800px) {
        width: 0px;
        display: none;
    }


    @media screen and (min-width: 1400px) {
        padding: 20px;

        img.main_logo {
            height: 26px;
        }

        h2.brand-text {
            font-size: 24px;
            font-weight: 600;
        }

        ul {
            margin-top: 24px;
            list-style: none;
            padding: 0px;
            
            li {
                font-size: 16px;
                padding: 8px 18px;
                border-radius: 5px;
                margin-top: 4px;
                cursor: pointer;
                transform: .3s all;

                svg {
                    font-size: 21px !important;
                }
            }

            .menu_section {
                font-size: 10px;
            }




            .active {
                li {
                    background: linear-gradient(118deg,#7367f0,rgba(115,103,240,.7));
                box-shadow: rgba(115, 103, 240, .7) 0px 0px 10px 1px;
                }

                span {
                    color: white !important;
                }
            }

        }


        a {
            text-decoration: none;
            color: #d8d8d8;
            cursor: pointer;
        }


        .div_menu {
            /* margin: 24px 16px; */
        }
    }
    
`;

export function SideBar() {

    return (
        <Nav>
            <div className="nav nav_header navbar-nav flex-row justify-content-between">
                <div className='div_logo'>
                    <span className="brand-logo">
                        <img className='main_logo' src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/logo.f03f8d4d.svg" alt="logo" />
                    </span>
                    <h2 className="brand-text mb-0">Solutions</h2>
                </div>
                <div id="pin_icon">
                    <NavIcon style={{ fontSize: '15px' }} className="icon mt-2" icon="akar-icons:pin" />
                </div>
            </div>

            <div className="div_menu" >
                <ul className="">

                    <li>
                        <span className='menu_section'>
                            VENDAS
                        </span>
                    </li>

                    <NavLink data-bs-toggle="" to="/resumo" aria-expanded="true" aria-controls="sidebarDashboards" className=" ">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:home-alt" />
                            <span className=" nav_text"> Resumo </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/financeiro" aria-expanded="false" aria-controls="sidebarCrm" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:usd-square" />
                            <span className='nav_text'> Financeiro </span>
                        </li>
                    </NavLink>

                    <NavLink to="/kanban" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:minus-path" />
                            <span className='nav_text'> Kanban </span>
                        </li>
                    </NavLink>

                    <NavLink to="/crm" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:graph-bar" />
                            <span className='nav_text'> Gráficos </span>
                        </li>
                    </NavLink>


                    <NavLink to="calendar" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:calender" />
                            <span className='nav_text'> Calendário </span>
                        </li>
                    </NavLink>

                    <NavLink to="apps-chat.html" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:comments-alt" />
                            <span className='nav_text'> Chat </span>
                        </li>
                    </NavLink>

                    <li>
                        <span className='menu_section'>
                            APPS
                        </span>
                    </li>

                    <NavLink data-bs-toggle="" to="/sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:tachometer-fast" />
                            <span className='nav_text'> CRM </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:store" />
                            <span className='nav_text'> E-commerce </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:clipboard-alt" />
                            <span className='nav_text'> Tabelas </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil:location-point" />
                            <span className='nav_text'> Mapas </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '20px' }} className="icon" icon="uil-folder-plus" />
                            <span className='nav_text'> Multinível </span>
                        </li>
                    </NavLink>
                </ul>
            </div>

        </Nav>
    );
}