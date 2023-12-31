import React from "react";
import "../styles/Product.css";

const Product = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          <div className="row p-2 border rounded bg-white">
            <div className="col-md-3 mt-1">
              <img
                alt=""
                className="img-fluid img-responsive rounded product-image"
                src="https://i.imgur.com/QpjAiHq.jpg"
              />
            </div>
            <div className="col-md-6 mt-1">
              <h5>Quant olap shirts</h5>
              <div className="d-flex flex-row">
                <div className="ratings mr-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <span>310</span>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <span>100% cotton</span>
                <span className="dot"></span>
                <span>Light weight</span>
                <span className="dot"></span>
                <span>
                  Best finish
                  <br />
                </span>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <span>Unique design</span>
                <span className="dot"></span>
                <span>For men</span>
                <span className="dot"></span>
                <span>
                  Casual
                  <br />
                </span>
              </div>
              <p className="text-justify text-truncate para mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
                <br />
                <br />
              </p>
            </div>
            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-row align-items-center">
                <h4 className="mr-1">$13.99</h4>
                <span className="strike-text">$20.99</span>
              </div>
              <h6 className="text-success">Free shipping</h6>
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary btn-sm" type="button">
                  Details
                </button>
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  type="button"
                >
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="row p-2 bg-white border rounded mt-2">
            <div className="col-md-3 mt-1">
              <img
              alt=""
                className="img-fluid img-responsive rounded product-image"
                src="https://i.imgur.com/JvPeqEF.jpg"
              />
            </div>
            <div className="col-md-6 mt-1">
              <h5>Quant trident shirts</h5>
              <div className="d-flex flex-row">
                <div className="ratings mr-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <span>310</span>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <span>100% cotton</span>
                <span className="dot"></span>
                <span>Light weight</span>
                <span className="dot"></span>
                <span>
                  Best finish
                  <br />
                </span>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <span>Unique design</span>
                <span className="dot"></span>
                <span>For men</span>
                <span className="dot"></span>
                <span>
                  Casual
                  <br />
                </span>
              </div>
              <p className="text-justify text-truncate para mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
                <br />
                <br />
              </p>
            </div>
            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-row align-items-center">
                <h4 className="mr-1">$14.99</h4>
                <span className="strike-text">$20.99</span>
              </div>
              <h6 className="text-success">Free shipping</h6>
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-success btn-sm" type="button">
                  Details
                </button>
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  type="button"
                >
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
