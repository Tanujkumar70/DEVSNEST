import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-dNWPTj.png",
                "description": "Hacker123085 TutarialsPoint",
                "content": ". Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102",
                "description": "Hacker123085 TutarialsPoint",
                "content": ". Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://assets.ajio.com/medias/sys_master/root/20210223/5F1Q/60340c1c7cdb8c1f1449b7f6/-473Wx593H-460681794-white-MODEL.jpg",
                "description": "Hacker123085 TutarialsPoints",
                "content": ". Here you can learn web designing, Hacker123085 TutarialsPoints, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK5WSbjMyVXUS8oFT-CF8nQphpPodpu-RLA&usqp=CAU",
                "description": "Hacker123085 TutarialsPoint",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh-MLfSMZtd9PyjRZSXctoA26TfeiikiMQ&usqp=CAU",
                "description": "Hacker123085 TutarialsPoint",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRQ6Omejcb3qm7X_MFnmziYpTqY48LpWUZA&usqp=CAU",
                "description": "Hacker123085 TutarialsPoint",
                "content": ". Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike Shoes 07",
                "src": "https://i.ytimg.com/vi/GxTYR6LXmAw/maxresdefault.jpg",
                "description": "Hacker123085 TutarialsPoint",
                "content": ". Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Nike Shoes 08",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm02MpYH2WzA8jl7guThDeP9odbGSueILQQ&usqp=CAU",
                "description": "Hacker123085 TutarialsPoint",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Nike Shoes 09",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSyKduMfDNC_ZitC-pEFolY2deZk3occTsQ&usqp=CAU",
                "description": "Hacker123085 TutarialsPoint",
                "content": ". Here you can learn web designing, Hacker123085 TutarialsPoint, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
    

        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}