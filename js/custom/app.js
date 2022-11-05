$(document).ready(function () {
  // const name_url = "";
  const name_url = "/shop";
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
                <div class="product-img product-img-2">
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
                    <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                  </div>
                  <h3 class="pro-price">${item.priceText}</h3>
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
                <div class="product-img product-img-2">
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
                  <h3 class="pro-price">${item.priceText}</h3>
                  ${item.description ? item.description : ""}
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
                  <div class="product-img-3 product-img">
                    <a href="">
                      <img src="${item.image}" alt="" />
                    </a>
                  </div>
                  <div class="product-info">
                    <h6 class="product-title">
                      <a href="">${item.name}</a>
                    </h6>
                    <h3 class="pro-price">${item.priceText}</h3>
                  </div>
                </div>`;
  };

  const menus = [
    { id: 1, name: "Giới thiệu", link: "", numberOder: 1 },
    { id: 2, name: "Bảng giá", link: "", numberOder: 2 },
    { id: 3, name: "Sản phẩm", link: "", numberOder: 3 },
    { id: 4, name: "Liên hệ (0965.678.726 - Mrs.Gấm)", link: "", numberOder: 4 },
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
      ],
    },
    {
      id: 3,
      name: "Tôm",
      description: "",
      image: "",
      children: [
        {
          id: 30,
          name: "Tôm Khô",
          description: "",
          image: "",
        },
      ],
    },
    {
      id: 4,
      name: "Chả cá",
      description: "",
      image: "",
      children: [
        {
          id: 40,
          name: "Chả cá",
          description: "",
          image: "",
        },
      ],
    },
  ];

  const products = [
    {
      id: 1,
      name: "KHÔ CHỈ VÀNG 1 NẮNG",
      description: `<p>
      Khô cá chỉ vàng Bến Tre được làm từ cá chỉ vàng xẻ phơi hoàn toàn tự nhiên, thịt có vị ngọt, thơm ngon. Đây là món ăn đặc sản của người dân Bến Tre và cũng là món ăn không thể thiếu trong những dịp lễ tết hay mua làm quà biếu tặng.</p>
      <p>- Xuất xứ: Bến Tre.</p>`,
      numberOder: 1,
      isHot: true,
      price: 190000,
      priceText: "190.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/ca_chi_vang_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 2,
      name: "KHÔ CÁ DỨA 1 NẮNG",
      description: "",
      numberOder: 2,
      isHot: true,
      price: 10_000,
      priceText: "200.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/ca_dua_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 3,
      name: "KHÔ CÁ ĐÙ 1 NẮNG",
      description: "",
      numberOder: 3,
      isHot: true,
      price: 10_000,
      priceText: "180.000 - 190.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/kho_ca_du_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 4,
      name: "KHÔ CÁ LÓC 1 NẮNG",
      description: "",
      numberOder: 4,
      isHot: true,
      price: 10_000,
      priceText: "250.000 - 280.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/kho_ca_loc_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 5,
      name: "KHÔ CÁ ĐUỐI 1 NẮNG",
      description: "",
      numberOder: 5,
      isHot: true,
      price: 10_000,
      priceText: "260.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/ca_duoi_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 6,
      name: "KHÔ CÁ NGÁT 1 NẮNG",
      description: "",
      numberOder: 6,
      isHot: true,
      price: 10_000,
      priceText: "190.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/ca_ngat_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 7,
      name: "KHÔ CÁ LƯỠI TRÂU 1 NẮNG",
      description: "",
      numberOder: 7,
      isHot: true,
      price: 10_000,
      priceText: "190.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/ca_luoi_trau_1_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 8,
      name: "KHÔ CÁ MỐI RÚT XƯƠNG",
      description: "",
      numberOder: 8,
      isHot: false,
      price: 10_000,
      priceText: "170.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/ca_moi_rut_xuong.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 9,
      name: "KHÔ CÁ SẶC",
      description: "",
      numberOder: 9,
      isHot: true,
      price: 10_000,
      priceText: "220.000 - 290.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/kho_ca_sac.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 10,
      name: "KHÔ CÁ THU MẶN",
      description: "",
      numberOder: 10,
      isHot: false,
      price: 10_000,
      priceText: "170.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/kho_ca_thu_man.jpg`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 11,
      name: "TÔM KHÔ",
      description: "",
      numberOder: 11,
      isHot: true,
      price: 10_000,
      priceText: "Tùy loại",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/tom_kho.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 12,
      name: "MỰC KHÔ LOẠI 60 CON",
      description: "",
      numberOder: 12,
      isHot: false,
      price: 10_000,
      priceText: "560.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_60_70_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 13,
      name: "MỰC KHÔ LOẠI 50 CON",
      description: "",
      numberOder: 13,
      isHot: false,
      price: 10_000,
      priceText: "660.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_50_55_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 14,
      name: "MỰC KHÔ LOẠI 30 CON",
      description: "",
      numberOder: 14,
      isHot: false,
      price: 10_000,
      priceText: "760.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_28_30_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 15,
      name: "MỰC KHÔ LOẠI 25 CON",
      description: "",
      numberOder: 15,
      isHot: false,
      price: 10_000,
      priceText: "860.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_25_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 16,
      name: "MỰC KHÔ LOẠI 15-20 CON",
      description: "",
      numberOder: 16,
      isHot: false,
      price: 10_000,
      priceText: "950.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_15_20_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 17,
      name: "MỰC KHÔ LOẠI 12-15 CON",
      description: "",
      numberOder: 17,
      isHot: false,
      price: 10_000,
      priceText: "1.070.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_12_15_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 18,
      name: "MỰC KHÔ LOẠI I (7-10 CON)",
      description: "",
      numberOder: 18,
      isHot: false,
      price: 10_000,
      priceText: "1.080.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_kho_loai_7_10_con.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 19,
      name: "CHẢ CÁ THU PHAN THIẾT",
      description: "",
      numberOder: 19,
      isHot: false,
      price: 10_000,
      priceText: "200.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/cha_ca_phan_thiet.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 20,
      name: "CHẢ CÁ THÁC LÁC SÔNG",
      description: "",
      numberOder: 20,
      isHot: false,
      price: 10_000,
      priceText: "390.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/cha_ca_thac_lac_song.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 21,
      name: "LẠP XƯỞNG",
      description: "",
      numberOder: 21,
      isHot: false,
      price: 10_000,
      priceText: "180.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/lap_xuong.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 22,
      name: "MỰC ỐNG",
      description: "",
      numberOder: 22,
      isHot: false,
      price: 10_000,
      priceText: "280.000-300.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_trung.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 23,
      name: "MỰC NANG",
      description: "",
      numberOder: 23,
      isHot: false,
      price: 10_000,
      priceText: "170.000 - 180.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/muc_nang.png`,
      isActive: true,
      isSale: true,
      guide: "",
      whyChose: "",
      categoryId: 1,
    },
    {
      id: 24,
      name: "BẠCH TUỘC",
      description: "",
      numberOder: 24,
      isHot: false,
      price: 10_000,
      priceText: "230.000 - 240.000 VNĐ/1Kg",
      oldPrice: 15_000,
      oldPrice: "15_000",
      rate: 4,
      image: `${name_url}/images/products/bach_tuoc.png`,
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
      let tmpProducts = products.filter((item) => item.isActive);

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
