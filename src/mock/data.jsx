const products = [
    {
        id:'01',
        name:'random 1',
        price: 150,
        category:'paletas',
        description:'skmdlksdlkandaslkdsnaslkdnlsk',
        img:'../img/Bästa Padelracket Dam 2024 - Bäst i test - Padelrabatten_nu',
        stock:7
    },
    {
        id:'02',
        name:'random 2',
        price: 200,
        category:'paletas',
        description:'skmdlksdlkandaslkdsnaslkdnlsk',
        img:'Bullpadel - Raquete de Padel de Criança Hack JR 23',
        stock:3
    },
    {
        id:'03',
        name:'random 3',
        price: 350,
        category:'paletas',
        description:'skmdlksdlkandaslkdsnaslkdnlsk',
        img:'../img/Cross It Pro EDT 2024 Padel Racquet',
        stock:6
    },
    {
        id:'04',
        name:'random 4',
        price: 499,
        category:'paletas',
        description:'skmdlksdlkandaslkdsnaslkdnlsk',
        img:'../img/Dunlop Sports Dunlop Pro Padel, 3-Ball can, Yellow.jpeg',
        stock:5
    },

]

// creamos la promesa y exportamos 
export const getProducts = () =>{
    let error= false
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if (!error) {
                resolve(products)
            } else {
                reject('hubo un error, intente mas tarde')
            }
        },5000)

    })
}

// un item

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            // version harcodeada
            //resolve(products[2])   
            //version dinamica
            let prod = products.find((item)=> item.id === id) 
            resolve(prod)       
        }, 3000)
    })
}  






