import axios from 'axios'


export function getProducts() {
    return (
        axios.get('https://fakestoreapi.com/products').then((res) => {
            return res.data
        })
    )
}

export function getProductDetail(id) {
    return (
        axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
            return res.data
        })
    )
}