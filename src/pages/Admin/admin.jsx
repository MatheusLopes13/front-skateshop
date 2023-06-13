import React, { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import "./admin.css"
import foto_1 from "../../images/footer/american-express-removebg-preview (1).png"


function AdminPage() {
    let [id , setId] = useState()
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


    useEffect(() => {
        getProducts()
    }, [])


    function editProduct(obj) {

        setId(obj.id)
        setNome(obj.nome)
        setValor(obj.valor)
        setTamanho(obj.tamanho)
        setDescricao(obj.descricao)
        setCor(obj.cor)
        setImagem_1(obj.imagem_1)
        setImagem_2(obj.imagem_2)
        setImagem_3(obj.imagem_3)
        setId_categoria(obj.id_categoria)
        setCodigo_produto(obj.codigo_produto)
        
    }

    function clearInput() {
        
        setNome('')
        setValor('')
        setTamanho('')
        setDescricao('')
        setCor('')
        setImagem_1('')
        setImagem_2('')
        setImagem_3('')
        setId_categoria('')
        setCodigo_produto('')
    }


    const product = {
        id,
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


    const getProducts = async () => {
        const response = await api.get('allProducts')
        setAllProducts(response.data)
    }

    const createProduct = async () => {

        try {
            const response = await api.post('product', product);
            getProducts()

        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (Id) => {
        const response = await api.delete(`delete/${Id}`);
        getProducts()
    }

    const updateProduct = async (obj) => {
        const response = await api.put(`update/${obj.id}`, product)
        getProducts()
    }

    return (
        <>

            <button onClick={clearInput} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                adicionar
            </button>

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

                                <button onClick={() => editProduct(item)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                   editar
                                </button>

                                <button  type="button" onClick={() => deleteProduct(item.id)}> Remover Produto</button>


                            </div>
                        )
                    })
                }

            </div>

            {/* modal adicionar */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar Produto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

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


                                </div>

                            </form>

                        </div>
                        <div class="modal-footer">
                            <button onClick={() => createProduct()} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal editar */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Produto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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


                            </div>

                        </div>
                        <div class="modal-footer">
                            <button onClick={() => updateProduct(product) } type="button" class="btn btn-secondary" data-bs-dismiss="modal">Confirmar Alterações</button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdminPage;