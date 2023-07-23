

const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);



let icon = $(".icon");

icon.onclick = function () {
    let navbar = $("#navbar");

    if (navbar.className === "nav-list") {
        navbar.className += " reponsive";
    } else {
        navbar.className = "nav-list";
    }
}


// =====================

const btnPrev = $(".prev");
const btnNext = $(".next");

const App = {
    definedVariable: htmls = '',
    data: {
        navs: [
            { id: 1, name: 'Home', slug: 'home', is_home: 1, created_at: '2023' },
            { id: 2, name: 'About', slug: 'about', is_home: 1, created_at: '2023' },
            { id: 3, name: 'Sevice', slug: 'sevice', is_home: 1, created_at: '2023' },
            { id: 4, name: 'Product', slug: 'product', is_home: 1, created_at: '2023' },
            { id: 5, name: 'Contact', slug: 'contact', is_home: 1, created_at: '2023' },
        ],

        familys: [
            { id: 1, name: 'Giga', slug: 'giga', prices: 195.000, price_sale: 200.000,phm: 300.000,img: 'https://fpt.vn/assets/images/fpt-logo.svg', describe: "Phu hop ca nhan ho gia dinh",user: 'dieplv',phone: '0961.232.585', created_at: '2023' },
            { id: 2, name: 'Sky', slug: 'sky', prices: 225.000, price_sale: 200.000,phm: 300.000,img: 'https://fpt.vn/assets/images/fpt-logo.svg', describe: "Phu hop ca nhan ho gia dinh",user: 'dieplv',phone: '0961.232.585', created_at: '2023' },
            { id: 3, name: 'Meta', slug: 'meta', prices: 325.000, price_sale: 200.000,phm: 300.000,img: 'https://fpt.vn/assets/images/fpt-logo.svg', describe: "Phu hop ca nhan ho gia dinh",user: 'dieplv',phone: '0961.232.585', created_at: '2023' },
            { id: 4, name: 'Supper100', slug: 'giga', prices: 170.000, price_sale: 200.000,phm: 300.000,img: 'https://fpt.vn/assets/images/fpt-logo.svg',describe: "Phu hop ca nhan ho gia dinh",user: 'dieplv',phone: '0961.232.585', created_at: '2023' },

        ],
        evens: [
            { id: 1, name: 'Bộ Tài chính băn khoăn báo cáo tiền công đức của chùa Yên Tử', 
            slug: 'Bộ Tài chính băn khoăn báo cáo tiền công đức của chùa Yên Tử',
             desc_ribe: 'Nghi vấn các di tích kiểm đếm thiếu tiền công đức được Bộ Tài chính đặt ra khi Yên Tử - nơi mỗi năm đón 2 triệu lượt khách - thu 4 tỷ còn Chùa Ba Vàng "không báo cáo".',
             category: 'Kinh doanh',img: "img (2).jpg" , created_at: '2023' },

             { id: 2, name: 'Huỳnh Trần Ý Nhi đăng quang Miss World Vietnam 2023', 
             slug: 'Huỳnh Trần Ý Nhi đăng quang Miss World Vietnam 2023',
              desc_ribe: 'BÌNH ĐỊNHNgười đẹp chủ nhà Huỳnh Trần Ý Nhi, 21 tuổi, đăng quang Miss World Vietnam 2023, tối 22/7. 24',
              category: 'Kinh doanh',img: "img (1).jpg", created_at: '2023' },

              { id: 3, name: 'Tranh cãi về "chứng cứ ngoại phạm" của cựu cục phó Trần Hùng', 
            slug: 'Tranh cãi về "chứng cứ ngoại phạm" của cựu cục phó Trần Hùng',
             desc_ribe: 'HÀ NỘILuật sư cho rằng cột sóng định vị khoảng thời gian bị cáo buộc nhận tiền thì ông Trần Hùng đang ở nhà, song VKS khẳng định có đủ chứng cứ để truy tố.',
             category: 'Kinh doanh',img: "img (3).jpg", created_at: '2023' },

             { id: 4, name: 'Trung Quốc kiếm gần 30 tỷ USD từ xuất khẩu thiết bị điện mặt trời', 
            slug: 'Trung Quốc kiếm gần 30 tỷ USD từ xuất khẩu thiết bị điện mặt trời',
             desc_ribe: 'Xuất khẩu các sản phẩm quang điện của Trung Quốc đạt hơn 29 tỷ USD trong nửa đầu năm 2023 nhờ nhu cầu mạnh mẽ ...',
             category: 'Kinh doanh',img: "img (4).jpg", created_at: '2023' },

             { id: 5, name: '"Ăn chia"và phẩm giá', 
            slug: ' "Ăn chia" và phẩm giá',
             desc_ribe: 'Xã hội đề cao phẩm giá sẽ hình thành nên những công chức không nhầm lẫn tiền hối lộ thành quà cảm ơn.',
             category: 'Van Hoa & loi song',img: "img (5).jpg", created_at: '2023' },

             { id: 6, name: "Quyền tự quyết 'rút bảo hiểm'", 
            slug: "Quyền tự quyết 'rút bảo hiểm'",
             desc_ribe: "Bảo hiểm xã hội không phải là ngân hàng; cho phép rút bảo hiểm một lần không hẳn là điều tốt.",
             category: 'Goc Nhin',img: "img (6).jpg", created_at: '2023' },

             
        ],
    },
    // handel event
    currentSlidesIndex: 1,
    
    handleEvent: function() {

        window.onscroll = function() {
            onscrollScreen();
        }

        const navtop = $("#navTop");
        const sticky = navtop.offsetTop;

        function onscrollScreen() {
            if(window.pageYOffset < sticky){
                navtop.classList.add("sticky");
            } else {
                navtop.classList.remove("sticky");
            }
        }

        // common function slides
        const screenWidth = $("#product-list").offsetWidth;
        let slideIndex = 0;
        showSlides(slideIndex);
      
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

    //    button next ane prev
        btnPrev.onclick = function(n) {
            plusSlides(-1)
            console.log(-1);
        }
        btnNext.onclick = function(n) {
            plusSlides(1)
            console.log(1)
        }
        // slides
        function showSlides(n) {
            const slideCarts = $$("#product-list li");
            const items = $$(".item");
       
            if(n > slideCarts.length){slideIndex = 1}
            if(n < 1){slideIndex = slideCarts.length};

            for(let i = 0; i < slideCarts.length; i++) {
                if(screenWidth < 800) {
                    slideCarts[i].style.display = 'none';
                }
            }
            slideIndex++;

            if(slideIndex > items.length){slideIndex = 1}
            
            for(let j = 0; j < items.length; j++) {
                items[j].className = items[j].className.replace(" active", "");
            }

            slideCarts[slideIndex-1].style.display = "block";
            slideCarts[slideIndex-1].className += " active";

            setTimeout(showSlides, 2500);
       
        }

        // Devide
        listIndex = 0;
        postNew();
        
        function postNew() {
            const lists = $$("#even>h2")
            lists.forEach(function(list){
                list.style.display = 'none';
            })

            listIndex++;
            
            if(listIndex > lists.length){listIndex = 1}
            lists[listIndex-1].style.display = "block";
            
            setTimeout(postNew, 5000)
        }


    },
    // Render html
    render: function () {
        // Render navs
        this.htmls = this.data.navs.map(function(nav){
            return `
                <li><a href="">${nav.name}</a></li>
            `
        })
        $(".nav-list").innerHTML = this.htmls.join("");
        // Render Products
        this.htmls = this.data.familys.map(function (family) {
            return `
                        <li class="item">
                        <img src="${family.img}" alt="">
                        <a href="">
                        <h3>${family.name}</h3>
                        </a>
                        <h1>${family.prices}.000</h1>
                        <p>
                            * Phù hợp cá nhân hộ gia đình nhỏ <br>
                            * Khách hàng trả trước 6 tháng tặng 1 tháng <br>
                            * Khách hàng trả trước 12 tháng tặng 2 tháng <br>
                            * Phí hòa mạng ${family.phm}k <br>
                            * Giảm tiền mặt lên đến ${family.price_sale}k tùy gói <br>
                        </p>
                        <a href="tel:+">
                            <button class="btn-call">${family.phone}</button>
                        </a>
                    </li>
                `
        
        })
        $("#product-list").innerHTML = this.htmls.join("");

        // Render even Device
        this.htmls = this.data.evens.map(function(even, index){
    
            return `
                  <h2>
                    <img src="./img/${even.img}" alt="">
                    <a href="">
                        <h3>${even.name}</h3>
                        <p>${even.desc_ribe}</p>
                    </a>
                    <span id="link">${even.category}</span>
                  </h2>
            `
        }) 
        $("#even").innerHTML = this.htmls.join("");

        // Render fake new
        this.htmls = this.data.evens.map(function(even){
    
            return `
                    <li>
                    <img src="./img/${even.img}" alt="">
                    <a href="">
                        <h5>${even.name}</h5>
                        <p>${even.desc_ribe}</p>
                        <span id="link">${even.category}</span>
                    </a>
                </li>

            `
        })
         $("#img-list").innerHTML = this.htmls.join("");
        //=========
    },

    stats: function () {
        this.render()
        this.handleEvent()
    }
}

App.stats();