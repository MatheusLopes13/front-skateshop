let carrinho = []
const utils = {
    setCarrinho: (item) => {
        carrinho.push(item)
    },
        
    
    getCarrinho: () => {
        return [...carrinho]
    }
 


}

export default utils