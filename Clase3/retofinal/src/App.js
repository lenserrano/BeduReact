import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
      products: [
        {
          
          productPrice: "$25.50",
          productName: "Tour al Nevado de Toluca a cantar Salvame",
          productDescription: "Recuerda los años 2000 con el grupo del momento RBD. Incluye sombrero texano y pandero.",
          productImage: "https://img.culturacolectiva.com/featured/2018/11/15/1542317735674/christopher-uckermann-rbd-salvame-high.png"
        },
        {
          
          productPrice: "$99.99",
          productName: "Ab Coaster",
          productDescription: "Construye un abdomen plano, viendo la tele sin salir de casa.",
          productImage: "https://www.exershop.com/wp-content/uploads/2018/04/AB-PS500-1.jpg"
        },
        {
          
          productPrice: "$2200.00",
          productName: "Zapatos de Jimmy Choo",
          productDescription: "Zapatos muy caros que solo las mujeres conocen.",
          productImage: "https://http2.mlstatic.com/zapatos-jimmy-choo-seminuevos-talla-5mx-D_NQ_NP_856300-MLM26545925763_122017-Q.jpg"
        },
        {
          
          productPrice: "$50.00",
          productName: "Samsung Galaxy S10",
          productDescription: "Un celular caro pero bueno",
          productImage: "https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._SX569_.jpg"
        },
        { 
          productPrice: "$50.00",
          productName: "Samsung Galaxy S10",
          productDescription: "Un celular caro pero bueno",
          productImage: "https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._SX569_.jpg"
        },
        
      ],
      product : {}
  }

  deleteCard(index){
    const {products} = this.state;
    products.splice(index,1)
    this.setState({products});
  }
  onChangeName(event){
    const {product} = this.state;
    product.productName = event.target.value;
    this.setState({product});
  }
  onChangePrice(event){
    const {product} = this.state;
    product.productPrice = event.target.value;
    this.setState({product});
  }
  onChangeImage(event){
    const {product} = this.state;
    product.productImage = event.target.value;
    this.setState({product});
  }
  onChangeDescription(event){
    const {product} = this.state;
    product.productDescription = event.target.value;
    this.setState({product});
  }
  newProduct(event){
    event.preventDefault();
    const { products, product} = this.state;
    //const {productName, productPrice, productImage, productDescription} = this.state;
    products.push(product);
    this.setState({products})
    
  }

  render(){
   const { products } = this.state;

    return (
      <div className="container">
        {
          products.map((product, index) => {
            const { productImage, productDescription, productName, productPrice, id } = product;
            
            return (
              <figure className="snip1171">
                <img src={ productImage } alt="sample71"/>
                <div className="price">{ productPrice }</div>
                <figcaption>
                  <h3>{id} { productName }</h3>
                  <p>{ productDescription }</p>
                  <a onClick = {() => this.deleteCard(index)}>Delete Card</a>
                </figcaption>
              </figure>
            );
          })
        }
        <form className="form" onSubmit={e => this.newProduct(e)}>
            <input type="text" placeholder="Name" onChange ={e => this.onChangeName(e)}/>
            <input type="text" placeholder="Price" onChange ={e => this.onChangePrice(e)}/>
            <input type="text" placeholder="Image" onChange ={e => this.onChangeImage(e)}/>
            <input type="text" placeholder="Description" onChange ={e => this.onChangeDescription(e)}/>
            <button type="submit" id="login-button">Create Card</button>
        </form>
      </div>
    );
  }
}

export default App;
