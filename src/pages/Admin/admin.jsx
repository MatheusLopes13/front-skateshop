import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./admin.css"
import foto_1 from "../../images/footer/american-express-removebg-preview (1).png"


function AdminPage() {

    let [nome, setNome] = useState()
    let [valor, setValor] = useState()
    let [tamanho, setTamanho] = useState()
    let [descricao, setDescricao] = useState()
    let [cor, setCor] = useState()
    let [imagem_1, setImagem_1] = useState()
    let [imagem_2, setImagem_2] = useState()
    let [imagem_3, setImagem_3] = useState()
    let [id_categoria, setId_categoria] = useState()
    let [codigo_produto, setCodigo_produto] = useState()

    const [allProducts, setAllProducts] = useState([])



    const product = {
        nome,
        valor,
        tamanho,
        descricao,
        cor,
        imagem_1,
        imagem_2,
        imagem_3,
        id_categoria,
        codigo_produto
    }


    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await api.get('allProducts')
        setAllProducts(response.data)
    }

    const createProduct = async () => {

        try {
            const response = await api.post('product', product);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <form className="form">

                <div >
                    <div>
                        <label>Nome</label>
                        <input value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Valor</label>
                        <input
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Tamanho</label>
                        <input
                            value={tamanho}
                            onChange={e => setTamanho(e.target.value)} />
                    </div>

                    <div>
                        <label>Descrição</label>
                        <input
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </div>

                    <div>
                        <label>Cor </label>
                        <input
                            value={cor}
                            onChange={e => setCor(e.target.value)} />
                    </div>

                    <div>
                        <label>Imagem </label>
                        <input
                            value={imagem_1}
                            onChange={e => setImagem_1(e.target.value)} />
                    </div>

                    <div>
                        <label>Imagem </label>
                        <input
                            value={imagem_2}
                            onChange={e => setImagem_2(e.target.value)} />
                    </div>

                    <div>
                        <label>Imagem </label>
                        <input
                            value={imagem_3}
                            onChange={e => setImagem_3(e.target.value)} />
                    </div>

                    <div>
                        <label>Categoria</label>
                        <input
                            value={id_categoria}
                            onChange={e => setId_categoria(e.target.value)} />
                    </div>

                    <div>
                        <label>Codigo do produto</label>
                        <input
                            value={codigo_produto}
                            onChange={e => setCodigo_produto(e.target.value)} />
                    </div>

                    <button onClick={() => createProduct()}>Enviar</button>
                </div>

            </form>

            <div className="container">

                {
                    allProducts.map((item) => {

                        return (

                            <div key={item.id} className="produto">

                                <img src={foto_1} />
                                <p> {item.nome} </p>
                                <p>{item.valor} </p>
                                <p>{item.tamanho} </p>
                                <p>{item.cor} </p>

                                <form>
                                    <button> Remover Produto</button>
                                </form>
                                <a > editar produto</a>

                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default AdminPage;