import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
      products: [
        {
          id: 0,
          productPrice: "$25.50",
          productName: "Tour al Nevado de Toluca a cantar Salvame",
          productDescription: "Recuerda los años 2000 con el grupo del momento RBD. Incluye sombrero texano y pandero.",
          productImage: "https://img.culturacolectiva.com/featured/2018/11/15/1542317735674/christopher-uckermann-rbd-salvame-high.png"
        },
        {
          id: 1,
          productPrice: "$99.99",
          productName: "Ab Coaster",
          productDescription: "Construye un abdomen plano, viendo la tele sin salir de casa.",
          productImage: "https://www.exershop.com/wp-content/uploads/2018/04/AB-PS500-1.jpg"
        },
        {
          id: 2,
          productPrice: "$2200.00",
          productName: "Zapatos de Jimmy Choo",
          productDescription: "Zapatos muy caros que solo las mujeres conocen.",
          productImage: "https://http2.mlstatic.com/zapatos-jimmy-choo-seminuevos-talla-5mx-D_NQ_NP_856300-MLM26545925763_122017-Q.jpg"
        },
        {
          id: 3,
          productPrice: "$50.00",
          productName: "Samsung Galaxy S10",
          productDescription: "Un celular caro pero bueno",
          productImage: "https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._SX569_.jpg"
        },
        { id: 4,
          productPrice: "$50.00",
          productName: "Samsung Galaxy S10",
          productDescription: "Un celular caro pero bueno",
          productImage: "https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._SX569_.jpg"
        }
      ]
  }

  deleteCard(index){
    const {products} = this.state;
    products.splice(index,1)
    this.setState({products});
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
        
      </div>
    );
  }
}

export default App;
