import React from "react";
import Usefetch from "./Usefetch";

const Component = () => {
    // accessing data from Usefetch

    const { data } = Usefetch('https://fakestoreapi.com/products');

    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
                {data && data.map((item) => (
                    <div key={item.id} className="card mb-3" style={{ width: '18rem'}}>
                        <img className="card-img-top" style={{height:'190px'}} src={item.image} alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Price: ${item.price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component;
