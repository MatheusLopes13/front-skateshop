
let carrinho = []


const utils = {
    setCarrinho: (item) => {
        carrinho.push(item)
        
    },

    deleteProduct: (id) => {
     const productCard = carrinho.findIndex((product) => {
        return product.id == id
       })
       carrinho.splice(productCard, 1) 
       
    },
          

    getCarrinho: () => {
      return   [...carrinho];
        
    }


 
}

export default utils