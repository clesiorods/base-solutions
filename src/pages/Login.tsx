import { Link } from "react-router-dom";
import styled from "styled-components";

const TelaLogin = styled.div`
    background-color: #161d31;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: #e6e6e8;

    header {
        z-index: 10;
        position: fixed;
        padding: 16px 20px;
        display: flex;
        justify-content: start;
        h2.brand-text {
            font-size: 24px;
            font-weight: 600;
            color: rgb(115,103,240);
            padding-left: 14px;
        }
        img#logo {
            height: 24px;
            margin: 0px;
            width: unset;
        }
    }

    div#login_illustration {
        width: 100vw;
        display: flex;
        flex-direction: column;
        img {
            margin: auto;
            width: 55%;
            opacity: .4;
            filter: blur(8px);
            -webkit-filter: blur(8px);
        }
    }

    div#login_form {
        position: absolute;
        background-color: #181d2aa8;
        width: 100%;
        height: 100%;
        display: flex;
        
        form#form_login {
            box-shadow: 1px 1px 30px #14161bc0;
            margin: auto;
            width: 400px;
            padding: 60px 30px 80px;
            background-color: #283046;
            border-radius: 8px;

            :hover {
                box-shadow: 1px 1px 15px #14161be9;
            }

            h2 {
                color: #d0d2d6;
                font-size: 1.72rem;
                text-align: center;
            }
            input {
                background-color: rgba(0,0,0,0.05);
                border-color: #414857;
                color: #ffffff;
            }
            div.form-group {
                label {
                    margin-top: 20px;
                    margin-bottom: 4px;
                }
                span#span_forget_password {
                    color: #7367f0;
                    margin-top: 20px;
                    :hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
            button {
                background: linear-gradient(118deg,#7b70f6,#695ee1e5);
                color: white;
                white-space: nowrap;
            }
        }
    }

    @media screen and (max-width: 800px) {
        div#login_illustration {
            width: 100vw;
            img {
                width: 90%;
            }
        }
        form#form_login {
            max-width: 90vw;
        }
    }
`;

export function Login() {
    return (
        <TelaLogin>
            <header>
                <img id="logo" src={require('../assets/logo.png')} alt="Logo" />
                <h2 className="brand-text mb-0">Solutions</h2>
            </header>
            <div id="login_illustration">
                <img src={require('../assets/login_illustration.png')} alt="Medalha" />
            </div>
            <div id="login_form">
                <form id="form_login" action="" className="form">
                    <h2>Bem-Vindo ao <br /> Solutions <span style={{ fontSize: '22px' }}>👋</span></h2>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input placeholder="exemplo@exemplo.com" className="form-control" type="email" />
                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="">Senha</label>
                            <span id="span_forget_password" >Esqueceu a sua senha?</span>
                        </div>
                        <input placeholder="senha" className="form-control" type="password" />
                    </div>
                    <div className="form-check mb-1 mt-2">
                        <input style={{ width: '18px', height: '18px', marginTop: '1px', marginRight: '6px' }} id="remember-me" type="checkbox" className="form-check-input" />
                        <label htmlFor="remember-me" className="form-check-label form-label">Lembrar minha senha</label>
                    </div>
                    <Link to="/resumo">
                        <button className="btn mt-3 w-100">Entrar</button>
                    </Link>
                </form>
            </div>
        </TelaLogin>
    );
}