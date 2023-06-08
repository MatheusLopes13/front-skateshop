import React, { useState } from "react";
import './header.css'
import aviao from '../../images/header/logo-aviao.png'
import 'bootstrap/dist/js/bootstrap.bundle'


const Header = () => {

    let [search, setSearch] = useState()

    return (
        <>
            <header>

                <div className="menu-1">
                    <ul>
                        <li>
                            <a href="../tenis">Tênis</a>
                        </li>
                        <li>
                            <a href="../roupas">Roupas</a>
                        </li>
                        <li>
                            <a href="">Skate</a>
                        </li>

                        <li>
                            <a href="/admin">Admin</a>
                        </li>

                    </ul>
                </div>

                <a href="/">
                    <img className="aviao-img menu-2" src={aviao} alt="imagem  aviao" />
                </a>

                <div className="menu-3">

                    <form action="../search" method="GET">
                        <div className="pesquisar">
                            <button className="buttonSearch" type="submit">
                                <i className="fa-solid fa-magnifying-glass destaque"></i>
                            </button>

                            <input
                                className="input-pesquisar"
                                type="text"
                                name="keywords"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </form>

                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-cart-shopping destaque"></i>
                    </a>


                    <div className="dropdown iniciais">
                        <p className="margin-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                        </p>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="">Perfil</a></li>
                            <li><a className="dropdown-item" href="">Meus Pedidos</a></li>
                            <li><a className="dropdown-item" href="">Sair</a></li>

                        </ul>
                    </div>


                    <a href="/login">
                        <i className="fa-solid fa-user destaque"></i>
                    </a>

                </div>

            </header>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Meu Carrinho</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div >
                                <div className="titulo">
                                    <p className="meu-carrinho">MEU CARRINHO</p>
                                    <div className="box">

                                        <p>
                                            produto
                                        </p>

                                        <p>
                                            subtotal
                                        </p>
                                    </div>
                                </div>





                                <div className="produto-carrinho">
                                    <div className="display-flex">
                                        <img src={aviao} />
                                        <div>
                                            <p> nome </p>

                                            <p> cor </p>

                                            <p>quantidadeporoduto</p>
                                        </div>

                                    </div>

                                    <div className="display-flex">
                                        <p>R$  </p>
                                        <p>X</p>
                                    </div>
                                </div>


                            </div>

                            <div className="subtotal">
                                <p>SUBTOTAL</p>
                                <p>R$ 000,00</p>
                            </div>

                            <div className="frete">
                                <p>FRETE:</p>
                                <p>R$ 000,00</p>
                            </div>

                            <div className="total">
                                <p>TOTAL:</p>
                                <p id="valor-total">R$ 000,00</p>
                            </div>

                            <div className="total">
                                <a href="../home.ejs">Ver mais produtos</a>

                                <a href="../pagamento.ejs">
                                    <button className="button-finalizar">
                                        Finalizar compra
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>

        </>
    )

}

export default Header