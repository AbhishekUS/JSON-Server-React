import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const ProductList = () => {
  //const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [show, setShow] = useState(false);
  const { data: products } = useFetch(url);
  //console.log(products);
  // eslint-disable-next-line no-lone-blocks
  {
    /*useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [url]);*/
  }

  return (
    <section>
      <div
        className="filter"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setUrl("http://localhost:8000/products")}
        >
          All
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock Only
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() =>
            setUrl("http://localhost:8000/products?in_stock=false")
          }
        >
          Stock Out
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setUrl("http://localhost:8000/products?_sort=price")}
        >
          Price
        </button>
        <button style={{ marginRight: "10px" }} onClick={() => setShow(!show)}>
          {show ? "Show Tasks" : "Hide Tasks"}
        </button>
      </div>

      {show ||
        (products &&
          products.map((product) => (
            <div className="card" key={product.id}>
              <p className="id">{product.id}</p>
              <p className="name">{product.name}</p>
              <p className="info">
                <span>${product.price}</span>
                <span className={product.in_stock ? "instock" : "unavailable"}>
                  {product.in_stock ? "In Stock" : "Unavailable"}
                </span>
              </p>
            </div>
          )))}
    </section>
  );
};
export default ProductList;

/*
In the provided code, `show` is a state variable that is managed by the `useState` hook. It is used to control the visibility of some tasks or elements in the user interface.

Here's how `show` is used in the component:

```jsx
const [show, setShow] = useState(false);
```

This line of code initializes the `show` state variable with an initial value of `false`. The second element in the array, `setShow`, is a function that allows you to update the value of `show`.

Later in the component, `show` is used in the following ways:

1. In the button's `onClick` handler:

```jsx
<button style={{ marginRight: "10px" }} onClick={() => setShow(!show)}>
  {show ? "Show Tasks" : "Hide Tasks"}
</button>
```

When this button is clicked, it calls the `setShow` function with the current value of `show` negated (i.e., it toggles the value of `show`). This means if `show` is `true`, it becomes `false`, and if `show` is `false`, it becomes `true`.

2. In the conditional rendering of tasks:

```jsx
{show ||
  (products &&
    products.map((product) => (
      // ...
    )))}
```

This line checks if `show` is `true`. If it is, it will render the tasks. If `show` is `false`, it will only render the tasks if `products` is available (i.e., not `null` or `undefined`). This means tasks will be shown when `show` is `true` or if there are products available.

In summary, `show` is a boolean state variable that controls whether certain tasks or elements are displayed in the user interface. It can be toggled by clicking a button with the text "Show Tasks" when `show` is `true`, or "Hide Tasks" when `show` is `false`.
*/
