import React from 'react'
import '../Styles/Body.css'


const Principal = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, products, categorias, setAnimate, sectionProductos, sectionInicio}) => {
  
  // Metodo para añadir productos al carrito
  const onAddProduct = product => {
    /* Verificamos si el id del producto coincide con el id de algun 
    producto almacenado en el carrito */
    if(allProducts.find(item => item.id === product.id)){

      const products = allProducts.map(item => item.id === product.id? {...item, quantity: item.quantity + 1} : item);
      
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      animationSum();
      return setAllProducts([...products]);
    }
    /* Si no se cumple la condición agregamos el producto al carrito.
    */
    /* Asignamos a la constante total el nuevo monto sumando el 
    precio por la cantidad del producto agregado */
    setTotal(total + product.price * product.quantity);
    /* Asignamos a la constante countProducts la nueva cantidad 
    sumando la cantidad agregada */
    setCountProducts(countProducts + product.quantity);
    /* Asignamos a la variable allProducts los productos agregados 
    anteriormente mas el nuevo producto */
    setAllProducts([...allProducts, product]);
    /* Llamamos a la funcion animationSum para iniciar una animación 
    */
    animationSum();
  };
  
  /* Funcion para iniciar una animacion */
  function animationSum(){
    /* Asignamos el valor +1 al elemento con id 'animado' */
    document.getElementById('animado').textContent = '+1';
    /* Asignamos un color al elemento con id 'animado' */
    document.getElementById('animado').style.color = "rgb(13, 255, 0)";
    /* Asignamos el valor 1 a la constante animate */
    setAnimate(1)
    /* Con la función setTimeout asignamos un valor nulo al elemento 
    con id 'animado' y el valor 0 a la constante animate luego de 
    haber transcurrido 300ms */
    setTimeout(function(){document.getElementById('animado').textContent = ''
    setAnimate(0)}, 300)
  }

  return (
    // comentario
    <div className="body" >
        {/* Mostramos con el h1 el valor de la constante categoria */}
         <h1 className='title' ref={sectionProductos}>{categorias}</h1>
        
        <div className="fondo"></div>
        <div className="container">
          {/* Comprobamos si products es distinto de nulo. En caso de cumplirse la condicion se muestran los productos. En caso contrario se muestra un mensaje indicando que no se encontraron productos */}
          {/* Aquí ejecutamos un map para mostrar todos los productos que se encuentran cargados en el archivo data.js */}
          {/* Con la constante product vamos añadiendo todos los productos que se encuentran en data.js */}
              {products.length ? products.map(product => (
                // Creamos un div y le añadimos la clase card y el id del producto con product.id
                <div className="card" key={product.id}>
                  {/* Cargamos la imagen con product.urlImage y el nombre del producto en alt con product.nameProduct */}
                  <center>   <img src={product.urlImage} alt={product.nameProduct} /> </center>
                  {/* Mostramos el nombre del producto con product.nameProduct */}
                  <h6>{product.nameProduct}</h6>
                  {/* Mostramos el precio del producto con product.price */}
                  <p>${product.price}</p>
                  {/* Creamos un boton y le añadimos el evento onClick para que cuando se precione ejecute el metodo onAddProduct que 
                  añade el producto al carrito*/}
                  <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                </div>
              )): (
                <div className="productNotFound">
                  <h1>No se encontraron productos en esta categoria</h1>
                </div>
              )}
        </div> 
        <div className="imgn"></div>
    </div>
  );
};

export default Principal
