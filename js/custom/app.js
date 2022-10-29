$(document).ready(function () {
  const getMenuChild = (items) => {
    let html = "";
    items.map((item) => {
      html += `<li><a href="#">${item.name}</a></li>`;
    });
    return `<ul>${html}</ul>`;
  };
  const MenuItem = (item) => {
    return `<li>
              <a href="${item.link}">${item.name}</a>
            </li>`;
  };
  const CategoryItem = (item) => {
    return `<li class="closed"><a href="#">${item.name}</a>
              ${getMenuChild(item.children)}
            </li>`;
  };
  const ProductItem = (item) => {
    return `<div class="col-md-4 col-sm-4 col-xs-12">
              <div class="product-item">
                <div class="product-img">
                  <a href="">
                    <img src="${item.image}" alt="" />
                  </a>
                </div>
                <div class="product-info">
                  <h6 class="product-title">
                    <a href="">${item.name} </a>
                  </h6>
                  <div class="pro-rating">
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star"></i></a>
                    <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                  </div>
                  <h3 class="pro-price">${item.price}</h3>
                  <ul class="action-button">
                    <li>
                      <a href="#" title="Wishlist"><i class="zmdi zmdi-favorite"></i></a>
                    </li>
                    <li>
                      <a href="#" title="Xem thêm"><i
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
                  <a href="">
                    <img src="${item.image}" alt="" />
                  </a>
                </div>
                <div class="product-info">
                  <div class="clearfix">
                    <h6 class="product-title f-left">
                      <a href="">${item.name} </a>
                    </h6>
                    <div class="pro-rating f-right">
                      <a href="#"><i class="zmdi zmdi-star"></i></a>
                      <a href="#"><i class="zmdi zmdi-star"></i></a>
                      <a href="#"><i class="zmdi zmdi-star"></i></a>
                      <a href="#"><i class="zmdi zmdi-star"></i></a>
                      <a href="#"><i class="zmdi zmdi-star-half"></i></a>
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
                      <a href="#" title="Xem thêm"><i
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
                    <a href="">
                      <img src="${item.image}" alt="" />
                    </a>
                  </div>
                  <div class="product-info">
                    <h6 class="product-title">
                      <a href="">${item.name}</a>
                    </h6>
                    <h3 class="pro-price">${item.price}</h3>
                  </div>
                </div>`;
  };

  const menus = [
    { id: 1, name: "Giới thiệu", link: "", numberOder: 1 },
    { id: 2, name: "Bảng giá", link: "", numberOder: 2 },
    { id: 3, name: "Sản phẩm", link: "", numberOder: 3 },
    { id: 4, name: "Liên hệ", link: "", numberOder: 4 },
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
        {
          id: 12,
          name: "Cá gia vị",
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
      children: [
        {
          id: 20,
          name: "Mực Khô",
          description: "",
          image: "",
        },
        {
          id: 21,
          name: "Mực 1 nắng",
          description: "",
          image: "",
        },
      ],
    },
  ];

  const products = [
    {
      id: 1,
      name: "Cá lóc khô",
      description: "",
      numberOder: 1,
      isHot: true,
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
      numberOder: 2,
      isHot: true,
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
      id: 3,
      name: "Cá khoai khô",
      description: "",
      numberOder: 3,
      isHot: true,
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
      numberOder: 4,
      isHot: false,
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
      numberOder: 5,
      isHot: false,
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
      id: 6,
      name: "Cá khoai khô 6",
      description: "",
      numberOder: 6,
      isHot: false,
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
    getProducts: (filter = {}) => {
      let tmpProducts = [...products, ...products, ...products, ...products, ...products, ...products];

      if (filter?.isNumberOrder) {
        tmpProducts = tmpProducts.sort((a, b) => a.orderNumber - b.orderNumber);
      }

      if (filter?.isHot) {
        tmpProducts = tmpProducts.filter((item) => item.isHot).sort((a, b) => (a.orderNumber > b.orderNumber ? 1 : -1));
      }
      return tmpProducts;
    },
    renderHomeProducts: () => {
      const products = App.getProducts({ isNumberOrder: true });
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
      const products = App.getProducts({ isHot: true });
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
