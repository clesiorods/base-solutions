import { Link } from "react-router-dom";
import styled from "styled-components";

const TelaLogin = styled.div`
    background-color: #161d31;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: #e6e6e8;

    div#login_illustration {
        width: 67vw;
        display: flex;
        img {
            margin: auto;
            width: 60%;
        }
    }

    div#login_form {
        background-color: #283046;
        width: 33vw;
        min-width: 300px;
        display: flex;
        form#form_login {
            margin: auto;
            width: 70%;
            padding-bottom: 20px;
            /* background-color: #ff00003a; */
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
        display: block;
        overflow-y: auto;
        overflow-x: hidden;
        div#login_illustration {
            width: 100vw;
            min-height: 30vh;
            display: flex;
            img {
                max-width: 70%;
                max-height: 70%;
                margin: 10% auto;
            }
        }
        div#login_form {
            width: 100vw;
            height: 60vh;
            h2 {
                margin-top: -20px;
            }
        }
    }
`;

export function Login() {
    return (
        <TelaLogin>
            <div id="login_illustration">
                <img src={require('../assets/login_illustration.png')} alt="Medalha" />
            </div>
            <div id="login_form">
                <form id="form_login" action="" className="form">
                    <h2>Bem-Vindo ao Solutions</h2>
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
                        <input style={{width: '18px', height: '18px', marginTop: '1px', marginRight: '6px'}} id="remember-me" type="checkbox" className="form-check-input" />
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