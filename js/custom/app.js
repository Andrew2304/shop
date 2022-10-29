$(document).ready(function () {
  const getMenuChild = (items) => {
    return `<ul>
            ${items.map((item) => `<li><a href="#">${item.name}</a></li>`)}
        </ul>`;
  };

  const MenuItem = (item) => {
    return `<li>
              <a href="${item.link}">${item.name}</a>
            </li>`;
  };
  const CategoryItem = (item) => {
    return `<li class="closed"><a href="#">${item.name}</a>
              <ul>
                ${getMenuChild(item.children)}
              </ul>
            </li>`;
  };
  const ProductItem = (item) => {
    return `<div class="col-md-4 col-sm-4 col-xs-12">
              <div class="product-item">
                <div class="product-img">
                  <a href="single-product.html">
                    <img src="${item.image}" alt="" />
                  </a>
                </div>
                <div class="product-info">
                  <h6 class="product-title">
                    <a href="single-product.html">${item.name} </a>
                  </h6>
                  <div class="pro-rating">
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                    <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                  </div>
                  <h3 class="pro-price">${item.price}</h3>
                  <ul class="action-button">
                    <li>
                      <a href="#" title="Wishlist"><i class="zmdi zmdi-favorite"></i></a>
                    </li>
                    <li>
                      <a href="#" data-toggle="modal" data-target="#productModal" title="Xem thêm"><i
                          class="zmdi zmdi-zoom-in"></i></a>
                    </li>
                    <li>
                      <a href="#" title="Compare"><i class="zmdi zmdi-refresh"></i></a>
                    </li>
                    <li>
                      <a href="#" title="Add to cart"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
  };
  const ProductItem2 = (item) => {
    return `<div class="col-md-12">
                        <div class="shop-list product-item">
                          <div class="product-img">
                            <a href="single-product.html">
                              <img src="${item.image}" alt="" />
                            </a>
                          </div>
                          <div class="product-info">
                            <div class="clearfix">
                              <h6 class="product-title f-left">
                                <a href="single-product.html">${item.name} </a>
                              </h6>
                              <div class="pro-rating f-right">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                            </div>
                            <h6 class="brand-name mb-30">Brand Name</h6>
                            <h3 class="pro-price">${item.price}</h3>
                            <p>${item.description}</p>
                            <ul class="action-button">
                              <li>
                                <a href="#" title="Wishlist"><i class="zmdi zmdi-favorite"></i></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#productModal" title="Xem thêm"><i
                                    class="zmdi zmdi-zoom-in"></i></a>
                              </li>
                              <li>
                                <a href="#" title="Compare"><i class="zmdi zmdi-refresh"></i></a>
                              </li>
                              <li>
                                <a href="#" title="Add to cart"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>`;
  };
  const ProductItem3 = (item) => {
    return `<div class="product-item">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img src="${item.image}" alt="" />
                    </a>
                  </div>
                  <div class="product-info">
                    <h6 class="product-title">
                      <a href="single-product.html">${item.name}</a>
                    </h6>
                    <h3 class="pro-price">${item.price}</h3>
                  </div>
                </div>`;
  };
  const CardItem = () => {
    return `<div class="total-cart-in">
                      <div class="cart-toggler">
                        <a href="#">
                          <span class="cart-quantity">02</span><br>
                          <span class="cart-icon">
                            <i class="zmdi zmdi-shopping-cart-plus"></i>
                          </span>
                        </a>
                      </div>
                      <ul>
                        <li>
                          <div class="top-cart-inner your-cart">
                            <h5 class="text-capitalize">Your Cart</h5>
                          </div>
                        </li>
                        <li>
                          <div class="total-cart-pro">
                            <!-- single-cart -->
                            <div class="single-cart clearfix">
                              <div class="cart-img f-left">
                                <a href="#">
                                  <img src="img/cart/1.jpg" alt="Cart Product" />
                                </a>
                                <div class="del-icon">
                                  <a href="#">
                                    <i class="zmdi zmdi-close"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="cart-info f-left">
                                <h6 class="text-capitalize">
                                  <a href="#">Dummy Product Name</a>
                                </h6>
                                <p>
                                  <span>Brand <strong>:</strong></span>Brand Name
                                </p>
                                <p>
                                  <span>Model <strong>:</strong></span>Grand s2
                                </p>
                                <p>
                                  <span>Color <strong>:</strong></span>Black, White
                                </p>
                              </div>
                            </div>
                            <!-- single-cart -->
                            <div class="single-cart clearfix">
                              <div class="cart-img f-left">
                                <a href="#">
                                  <img src="img/cart/1.jpg" alt="Cart Product" />
                                </a>
                                <div class="del-icon">
                                  <a href="#">
                                    <i class="zmdi zmdi-close"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="cart-info f-left">
                                <h6 class="text-capitalize">
                                  <a href="#">Dummy Product Name</a>
                                </h6>
                                <p>
                                  <span>Brand <strong>:</strong></span>Brand Name
                                </p>
                                <p>
                                  <span>Model <strong>:</strong></span>Grand s2
                                </p>
                                <p>
                                  <span>Color <strong>:</strong></span>Black, White
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="top-cart-inner subtotal">
                            <h4 class="text-uppercase g-font-2">
                              Total =
                              <span>$ 500.00</span>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div class="top-cart-inner view-cart">
                            <h4 class="text-uppercase">
                              <a href="#">View cart</a>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div class="top-cart-inner check-out">
                            <h4 class="text-uppercase">
                              <a href="#">Check out</a>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>`;
  };

  const menus = [
    { id: 1, name: "Giới thiệu", link: "about.html", numberOder: 1 },
    { id: 2, name: "Bảng giá", link: "price.html", numberOder: 2 },
    { id: 3, name: "Sản phẩm", link: "", numberOder: 3 },
    { id: 4, name: "Liên hệ", link: "contact.html", numberOder: 4 },
  ];
  const categories = [
    {
      id: 1,
      name: "Cá",
      description: "",
      image: "",
      children: [
        {
          id: 10,
          name: "Cá Khô",
          description: "",
          image: "",
        },
        {
          id: 11,
          name: "Cá tẩm gia vị",
          description: "",
          image: "",
        },
      ],
    },
    {
      id: 2,
      name: "Mực",
      description: "",
      image: "",
      children: [],
    },
  ];

  const products = [
    {
      id: 1,
      name: "Cá lóc khô",
      description: "",
      price: 10_000,
      priceText: "10_000",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: "https://haisankhanhhoa.vn/cms-content/uploads/thumbs/ca-kho/kho-ca-chi-vang-hskh-md.jpg",
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Cá chỉ vàng",
      description: "",
      price: 10_000,
      priceText: "10_000",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: "https://haisankhanhhoa.vn/cms-content/uploads/thumbs/ca-com-dac-biet_hskh-md.jpg",
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 3,
      name: "Cá khoai khô",
      description: "",
      price: 10_000,
      priceText: "10_000",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: "https://haisankhanhhoa.vn/cms-content/uploads/thumbs/ca-kho/ca-khoai-kho-hskh-seafood-md.jpg",
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 4,
      name: "Cá khoai khô",
      description: "",
      price: 10_000,
      priceText: "10_000",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: "https://haisankhanhhoa.vn/cms-content/uploads/thumbs/ca-com-dac-biet_hskh-md.jpg",
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 5,
      name: "Cá khoai khô",
      description: "",
      price: 10_000,
      priceText: "10_000",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: "https://haisankhanhhoa.vn/cms-content/uploads/thumbs/ca-kho/kho-ca-duoi_hskh-md.jpg",
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 6,
      name: "Cá khoai khô",
      description: "",
      price: 10_000,
      priceText: "10_000",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: "https://haisankhanhhoa.vn/cms-content/uploads/thumbs/ca-com-dac-biet_hskh-md.jpg",
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
  ];

  const App = {
    init: () => {
      App.renderMenu();
      App.renderHomeCategories();
      App.renderHomeProducts();
      App.renderHotProducts();
    },
    getProducts: () => {
      return products;
    },
    renderHomeProducts: () => {
      const products = App.getProducts();
      App.renderProducts(products);
    },
    renderProducts: (products) => {
      let htmlProducts = "";
      let htmlProducts2 = "";
      products.map((item) => {
        htmlProducts += ProductItem(item);
        htmlProducts2 += ProductItem2(item);
      });
      $("#js-products").html(htmlProducts);
      $("#js-products2").html(htmlProducts2);
    },
    renderHotProducts: () => {
      let htmlProducts = "";
      products.map((item) => {
        htmlProducts += ProductItem3(item);
      });
      $("#js-products3").html(htmlProducts);
    },
    renderMenu: () => {
      let htmlMenus = "";
      menus.map((item) => {
        htmlMenus += MenuItem(item);
      });
      $("#js-menus").html(htmlMenus);
    },
    renderHomeCategories: () => {
      let htmlCategories = "";
      categories.map((item) => {
        htmlCategories += CategoryItem(item);
      });
      $("#js-categories").html(htmlCategories);
    },
  };

  App.init();
});
