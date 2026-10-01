/* =================================================
   DOGBI PRODUCT DATA
================================================= */

const products = [
    {
        id: 1,
        breed: "말티푸",
        happiness: "92%",
        anger: "8%",
        price: 9900000,
        image: "images/dog01.png",
        detailImage: "images/dog01-detail.png",
        description: "사람을 좋아하고 애교가 많으며, 새로운 환경에서도 비교적 빠르게 적응하는 성격입니다."
    },
    {
        id: 2,
        breed: "치와와",
        happiness: "78%",
        anger: "22%",
        price: 8500000,
        image: "images/dog02.png",
        detailImage: "images/dog02-detail.png",
        description: "작지만 당당하며 주인에 대한 충성심과 표현력이 풍부한 개성 있는 친구입니다."
    },
    {
        id: 3,
        breed: "푸들",
        happiness: "94%",
        anger: "6%",
        price: 5900000,
        image: "images/dog03.png",
        detailImage: "images/dog03-detail.png",
        description: "지능이 매우 높고 영리하며 활동적인 성격으로 누구와도 잘 어울립니다."
    },
    {
        id: 4,
        breed: "말티즈",
        happiness: "89%",
        anger: "11%",
        price: 7200000,
        image: "images/dog04.png",
        detailImage: "images/dog04-detail.png",
        description: "부드럽고 하얀 털과 상냥한 성품으로 오랜 시간 사랑받아온 반려견입니다."
    },
    {
        id: 5,
        breed: "오스트레일리안 셰퍼드",
        happiness: "90%",
        anger: "10%",
        price: 7600000,
        image: "images/dog05.png",
        detailImage: "images/dog05-detail.png",
        description: "에너지가 넘치고 학습 능력이 뛰어나 교감과 야외 활동에 적합합니다."
    },
    {
        id: 6,
        breed: "믹스견",
        happiness: "92%",
        anger: "8%",
        price: 8900000,
        image: "images/dog06.png",
        detailImage: "images/dog06-detail.png",
        description: "세상에 단 하나뿐인 특별한 매력과 건강한 체력을 자랑하는 친구입니다."
    },
    {
        id: 7,
        breed: "셰틀랜드 쉽독",
        happiness: "91%",
        anger: "9%",
        price: 6400000,
        image: "images/dog07.png",
        detailImage: "images/dog07-detail.png",
        description: "우아한 외모와 다정하고 총명한 성격으로 깊은 유대감을 선사합니다."
    },
    {
        id: 8,
        breed: "재패니즈 스피츠",
        happiness: "87%",
        anger: "13%",
        price: 5100000,
        image: "images/dog08.png",
        detailImage: "images/dog08-detail.png",
        description: "순백의 털과 밝은 미소로 보는 이들에게 항상 기쁨을 주는 존재입니다."
    },
    {
        id: 9,
        breed: "보더 콜리",
        happiness: "85%",
        anger: "15%",
        price: 6300000,
        image: "images/dog09.png",
        detailImage: "images/dog09-detail.png",
        description: "명석한 두뇌와 놀라운 집중력으로 깊은 교감을 이루는 친구입니다."
    },
    {
        id: 10,
        breed: "웰시 코기",
        happiness: "88%",
        anger: "12%",
        price: 7700000,
        image: "images/dog10.png",
        detailImage: "images/dog10-detail.png",
        description: "짧은 다리와 유쾌한 움직임으로 언제나 주변을 밝게 만듭니다."
    },
    {
        id: 11,
        breed: "프렌치 불독",
        happiness: "89%",
        anger: "11%",
        price: 6600000,
        image: "images/dog11.png",
        detailImage: "images/dog11-detail.png",
        description: "느긋하면서도 애교 넘치는 성격으로 다정한 매력을 지녔습니다."
    },
    {
        id: 12,
        breed: "진돗개",
        happiness: "82%",
        anger: "18%",
        price: 5400000,
        image: "images/dog12.png",
        detailImage: "images/dog12-detail.png",
        description: "용맹함과 지혜로움, 그리고 평생 한 주인만을 바라보는 깊은 충성심을 자랑합니다."
    },
    {
        id: 13,
        breed: "잭 러셀 테리어 믹스",
        happiness: "80%",
        anger: "20%",
        price: 7200000,
        image: "images/dog13.png",
        detailImage: "images/dog13-detail.png",
        description: "지치지 않는 체력과 호기심으로 매일을 생동감 있게 채워줍니다."
    },
    {
        id: 14,
        breed: "요크셔 테리어",
        happiness: "87%",
        anger: "13%",
        price: 8000000,
        image: "images/dog14.png",
        detailImage: "images/dog14-detail.png",
        description: "비단결 같은 털과 똑부러지는 성격으로 당당함을 보여주는 친구입니다."
    },
    {
        id: 15,
        breed: "골든 리트리버",
        happiness: "97%",
        anger: "3%",
        price: 8500000,
        image: "images/dog15.png",
        detailImage: "images/dog15-detail.png",
        description: "천사 같은 온순함과 넓은 마음으로 온 가족의 안식처가 되어줍니다."
    },
    {
        id: 16,
        breed: "장모 치와와",
        happiness: "81%",
        anger: "19%",
        price: 7300000,
        image: "images/dog16.png",
        detailImage: "images/dog16-detail.png",
        description: "풍성한 털과 커다란 눈망울로 깊은 인상을 남기는 아기자기한 친구입니다."
    }
];


/* =================================================
   STATE
================================================= */

let selectedProduct = null;
let quantity = 1;
let bag = [];


/* =================================================
   RENDER PRODUCTS
================================================= */

function renderProducts() {

    const grid = document.getElementById("product-grid");

    if (!grid) return;

    grid.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.breed}"
                    onerror="this.style.opacity='0.2'"
                >

                <div class="product-number">
                    DOG No.${String(product.id).padStart(3, "0")}
                </div>

            </div>

            <div class="product-info">

                <div class="product-name">
                    ${product.breed}
                </div>

                <div class="product-price">
                    ₩${product.price.toLocaleString()}
                </div>

            </div>
        `;

        card.addEventListener(
            "click",
            () => openProduct(product.id)
        );

        grid.appendChild(card);

    });

}


/* =================================================
   OPEN PRODUCT
================================================= */

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    selectedProduct = product;

    quantity = 1;


    const setText = (elementId, value) => {

        const element =
            document.getElementById(elementId);

        if (element) {
            element.innerText = value;
        }

    };


    setText(
        "quantity",
        quantity
    );

    setText(
        "detail-number",
        `DOG No.${String(product.id).padStart(3, "0")}`
    );

    setText(
        "detail-name",
        product.breed
    );

    setText(
        "detail-happiness",
        product.happiness
    );

    setText(
        "detail-anger",
        product.anger
    );

    setText(
        "detail-description",
        product.description
    );

    setText(
        "detail-price",
        `₩${product.price.toLocaleString()}`
    );


    const detailImage =
        document.getElementById(
            "detail-image"
        );

    if (detailImage) {

        detailImage.src =
            product.image;

        detailImage.alt =
            product.breed;

    }


    const extraImage =
        document.getElementById(
            "detail-extra-image"
        );

    if (extraImage) {

        extraImage.src = "";

        extraImage.style.opacity =
            "1";

        extraImage.dataset.fallbackApplied =
            "false";

        extraImage.alt =
            `${product.breed} 추가 이미지`;

    }


    const extraModal =
        document.getElementById(
            "detail-extra-image-modal"
        );

    if (extraModal) {

        extraModal.style.display =
            "none";

        extraModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    const productModal =
        document.getElementById(
            "product-modal"
        );

    if (productModal) {

        productModal.style.display =
            "block";

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   CLOSE PRODUCT
================================================= */

function closeProduct() {

    const modal =
        document.getElementById(
            "product-modal"
        );

    if (modal) {

        modal.style.display =
            "none";

    }

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   PRODUCT QUANTITY
================================================= */

function changeQuantity(amount) {

    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }


    const element =
        document.getElementById(
            "quantity"
        );

    if (element) {

        element.innerText =
            quantity;

    }

}


/* =================================================
   EXTRA PRODUCT IMAGE
================================================= */

function openDetailExtraImage() {

    if (!selectedProduct) return;


    const modal =
        document.getElementById(
            "detail-extra-image-modal"
        );

    const image =
        document.getElementById(
            "detail-extra-image"
        );


    if (!modal || !image) return;


    image.dataset.fallbackApplied =
        "false";

    image.style.opacity =
        "1";

    image.alt =
        `${selectedProduct.breed} 추가 이미지`;


    image.onerror =
        function () {

            if (
                this.dataset.fallbackApplied !==
                "true"
            ) {

                this.dataset.fallbackApplied =
                    "true";

                this.src =
                    selectedProduct.image;

            } else {

                this.style.opacity =
                    "0.35";

            }

        };


    image.src =
        selectedProduct.detailImage ||
        selectedProduct.image;


    modal.style.display =
        "flex";

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


function closeDetailExtraImage() {

    const modal =
        document.getElementById(
            "detail-extra-image-modal"
        );

    if (modal) {

        modal.style.display =
            "none";

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    const productModal =
        document.getElementById(
            "product-modal"
        );


    const productIsOpen =
        productModal &&
        getComputedStyle(
            productModal
        ).display !== "none";


    if (productIsOpen) {

        document.body.classList.add(
            "no-scroll"
        );

    } else {

        document.body.classList.remove(
            "no-scroll"
        );

    }

}


/* =================================================
   ADD TO BAG
================================================= */

function addToBag() {

    if (!selectedProduct)
        return;


    const existing =
        bag.find(
            item =>
                item.id ===
                selectedProduct.id
        );


    if (existing) {

        existing.quantity +=
            quantity;

    } else {

        bag.push({

            ...selectedProduct,

            quantity:
                quantity

        });

    }


    updateBag();

    closeProduct();

}


/* =================================================
   REMOVE FROM BAG
================================================= */

function removeFromBag(id) {

    bag =
        bag.filter(
            item =>
                item.id !== id
        );

    updateBag();

}


/* =================================================
   BAG QUANTITY
================================================= */

function changeBagQuantity(
    id,
    amount
) {

    const item =
        bag.find(
            i => i.id === id
        );

    if (!item) return;


    item.quantity +=
        amount;


    if (
        item.quantity <= 0
    ) {

        removeFromBag(id);

    } else {

        updateBag();

    }

}


/* =================================================
   UPDATE BAG
================================================= */

function updateBag() {

    const container =
        document.getElementById(
            "bag-items"
        );

    if (!container)
        return;


    container.innerHTML =
        "";


    let total = 0;
    let count = 0;


    if (bag.length === 0) {

        container.innerHTML = `

            <div class="empty-bag">

                <p>
                    YOUR BAG IS EMPTY.
                </p>

            </div>

        `;

    } else {

        bag.forEach(item => {

            total +=
                item.price *
                item.quantity;

            count +=
                item.quantity;


            container.innerHTML += `

                <div class="bag-item">


                    <img
                        src="${item.image}"
                        alt="${item.breed}"
                    >


                    <div class="bag-item-info">


                        <strong>
                            ${item.breed}
                        </strong>


                        <p>
                            DOG No.${String(item.id).padStart(3, "0")}
                        </p>


                        <div
                            class="bag-qty-controls"
                            style="
                                display:flex;
                                align-items:center;
                                gap:8px;
                                margin:6px 0;
                            "
                        >


                            <button
                                type="button"
                                class="bag-qty-btn"
                                onclick="changeBagQuantity(${item.id}, -1)"
                                style="
                                    width:24px;
                                    height:24px;
                                    border:1px solid #ccc;
                                    background:#fff;
                                    cursor:pointer;
                                    font-weight:bold;
                                "
                            >
                                -
                            </button>


                            <span class="bag-qty-num">
                                ${item.quantity}
                            </span>


                            <button
                                type="button"
                                class="bag-qty-btn"
                                onclick="changeBagQuantity(${item.id}, 1)"
                                style="
                                    width:24px;
                                    height:24px;
                                    border:1px solid #ccc;
                                    background:#fff;
                                    cursor:pointer;
                                    font-weight:bold;
                                "
                            >
                                +
                            </button>


                        </div>


                        <p>
                            ₩${(
                                item.price *
                                item.quantity
                            ).toLocaleString()}
                        </p>


                    </div>


                    <button
                        class="bag-remove-button"
                        onclick="removeFromBag(${item.id})"
                        aria-label="삭제"
                    >
                        &times;
                    </button>


                </div>

            `;

        });

    }


    const bagCount =
        document.getElementById(
            "bag-count"
        );

    if (bagCount) {

        bagCount.innerText =
            count;

    }


    const totalPrice =
        document.getElementById(
            "bag-total-price"
        );

    if (totalPrice) {

        totalPrice.innerText =
            `₩${total.toLocaleString()}`;

    }


    const actionButton =
        document.querySelector(
            ".checkout-button"
        );


    if (actionButton) {

        if (
            bag.length === 0
        ) {

            actionButton.innerText =
                "쇼핑 계속하기";

            actionButton.onclick =
                continueShopping;

        } else {

            actionButton.innerText =
                "CHECKOUT";

            actionButton.onclick =
                cannotPurchase;

        }

    }

}


/* =================================================
   CONTINUE SHOPPING
================================================= */

function continueShopping() {

    closeBag();


    const collection =
        document.getElementById(
            "collection"
        );


    if (collection) {

        collection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =================================================
   BAG
================================================= */

function openBag() {

    updateBag();


    const modal =
        document.getElementById(
            "bag-modal"
        );


    if (modal) {

        modal.style.display =
            "block";

    }


    document.body.classList.add(
        "no-scroll"
    );

}


function closeBag() {

    const modal =
        document.getElementById(
            "bag-modal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   PURCHASE MESSAGE
================================================= */

function cannotPurchase() {

    closeProduct();

    closeBag();


    const modal =
        document.getElementById(
            "purchase-modal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }


    document.body.classList.add(
        "no-scroll"
    );

}


function closePurchase() {

    const modal =
        document.getElementById(
            "purchase-modal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   NEXT
================================================= */

function openPurchaseExplanation() {

    const purchase =
        document.getElementById(
            "purchase-modal"
        );

    const explanation =
        document.getElementById(
            "purchase-explanation-modal"
        );


    if (purchase) {

        purchase.style.display =
            "none";

    }


    if (explanation) {

        explanation.style.display =
            "block";

        explanation.scrollTop =
            0;

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   BACK
================================================= */

function backToPurchaseMessage() {

    const explanation =
        document.getElementById(
            "purchase-explanation-modal"
        );

    const purchase =
        document.getElementById(
            "purchase-modal"
        );


    if (explanation) {

        explanation.style.display =
            "none";

    }


    if (purchase) {

        purchase.style.display =
            "flex";

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   CLOSE EXPLANATION
================================================= */

function closePurchaseExplanation() {

    const explanation =
        document.getElementById(
            "purchase-explanation-modal"
        );


    if (explanation) {

        explanation.style.display =
            "none";

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   안내창
================================================= */

let dogbiWelcomeClosed =
    false;


function createWelcomeNotice() {

    if (
        document.getElementById(
            "dogbi-welcome-notice"
        )
    ) {

        return;

    }


    const notice =
        document.createElement(
            "div"
        );


    notice.id =
        "dogbi-welcome-notice";


    notice.setAttribute(
        "aria-hidden",
        "true"
    );


    notice.style.cssText = `

        position:fixed;

        inset:0;

        z-index:10000;

        display:none;

        align-items:center;

        justify-content:center;

        padding:
            20px;

        overflow:hidden;

        text-align:center;

        cursor:pointer;

        background:
            rgba(
                255,
                255,
                255,
                0.12
            );

        -webkit-backdrop-filter:
            blur(5px);

        backdrop-filter:
            blur(5px);

    `;


    notice.innerHTML = `


        <!--
            뒤의 사이트는 그대로 보이고
            가운데만 살짝 밝게
        -->

        <div
            style="
                position:absolute;

                left:50%;
                top:50%;

                transform:
                    translate(-50%,-50%);

                width:min(900px,140vw);
                height:min(600px,90vh);

                pointer-events:none;

                background:
                    radial-gradient(
                        ellipse at center,

                        rgba(
                            255,
                            255,
                            255,
                            0.98
                        ) 0%,

                        rgba(
                            255,
                            255,
                            255,
                            0.92
                        ) 28%,

                        rgba(
                            255,
                            255,
                            255,
                            0.65
                        ) 47%,

                        rgba(
                            255,
                            255,
                            255,
                            0.25
                        ) 68%,

                        rgba(
                            255,
                            255,
                            255,
                            0
                        ) 84%
                    );

                filter:
                    blur(18px);

                -webkit-filter:
                    blur(18px);
            "
        ></div>


        <!-- 안내 내용 -->

        <div
            style="
                position:relative;

                z-index:2;

                width:min(92vw,700px);

                padding:
                    40px 20px 42px;

                color:#171513;

                pointer-events:none;

                font-family:
                    -apple-system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    Roboto,
                    Arial,
                    sans-serif;
            "
        >


            <!-- X -->

            <button
                id="dogbi-welcome-close"
                type="button"
                aria-label="닫기"

                style="
                    position:fixed;

                    top:
                        max(
                            14px,
                            env(safe-area-inset-top)
                        );

                    right:
                        max(
                            14px,
                            env(safe-area-inset-right)
                        );

                    z-index:5;

                    width:46px;
                    height:46px;

                    padding:0;

                    border:
                        1px solid
                        rgba(
                            23,
                            21,
                            19,
                            0.35
                        );

                    border-radius:50%;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.72
                        );

                    color:#11100E;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Arial,
                        sans-serif;

                    font-size:29px;

                    font-weight:300;

                    line-height:1;

                    cursor:pointer;

                    pointer-events:auto;
                "
            >
                &times;
            </button>


            <!-- 작은 영문 -->

            <p
                style="
                    margin:
                        0 0 20px;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Arial,
                        sans-serif;

                    font-size:9px;

                    line-height:1.4;

                    letter-spacing:2.6px;

                    font-weight:600;

                    color:#4C4741;

                    text-shadow:
                        0 1px 0 #FFFFFF;
                "
            >
                DOGBI 
            </p>


            <!-- 큰 글씨 -->
            <!-- 홈페이지 hero h1과 같은 계열 -->

            <h2
                style="
                    margin:0;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Arial,
                        sans-serif;

                    font-size:
                        clamp(
                            23px,
                            6.3vw,
                            40px
                        );

                    line-height:
                        1.48;

                    letter-spacing:
                        -1.5px;

                    font-weight:
                        700;

                    color:
                        #27231F;

                    text-shadow:
                        0 1px 0 #FFFFFF,
                        0 2px 18px
                        rgba(
                            255,
                            255,
                            255,
                            1
                        );
                "
            >

                본 사이트는 가상의 회사 <br>
	   DOGBI를 설정하여 만든 <br> 
	시뮬레이션 사이트입니다.

            </h2>


            <!-- 구분선 -->

            <div
                style="
                    width:42px;

                    height:1px;

                    margin:
                        25px auto 22px;

                    background:
                        rgba(
                            23,
                            21,
                            19,
                            0.48
                        );
                "
            ></div>


            <!-- 작은 글씨 -->
            <!-- 홈페이지 hero-description과 같은 계열 -->

            <p
                style="
                    margin:0;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Arial,
                        sans-serif;

                    font-size:
                        clamp(
                            13.5px,
                            3.8vw,
                            17px
                        );

                    line-height:
                        1.9;

                    letter-spacing:
                        0;

                    font-weight:
                        400;

                    color:
                        #27231F;

                    text-shadow:
                        0 1px 0 #FFFFFF,
                        0 2px 15px
                        rgba(
                            255,
                            255,
                            255,
                            1
                        );
                "
            >

                실제 상품을 판매하는 사이트는 아닙니다.<br>
                강아지를 하나씩 살펴보면서<br>
                품종과 정보, 가격을 확인해 보세요.

            </p>


            <!-- 참여 문장 -->

            <p
                style="
                    margin:
                        20px 0 0;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Arial,
                        sans-serif;

                    font-size:
                        clamp(
                            13.5px,
                            3.8vw,
                            17px
                        );

                    line-height:
                        1.9;

                    letter-spacing:
                        0;

                    font-weight:
                        400;

                    color:
                        #27231F;

                    text-shadow:
                        0 1px 0 #FFFFFF,
                        0 2px 15px
                        rgba(
                            255,
                            255,
                            255,
                            1
                        );
                "
            >

                마음에 드는 강아지를 골라 <br>
	"ADD TO BAG"으로 장바구니에 담아보거나  <br>
	"BUY NOW"를 눌러 바로 구매를 진행해 보세요.

            </p>


        </div>

    `;


    document.body.appendChild(
        notice
    );


    /*
        안내창 아무 곳이나 클릭
        → 닫기
    */

    notice.addEventListener(
        "click",
        function() {

            if (
                !dogbiWelcomeClosed
            ) {

                closeWelcomeNotice();

            }

        }
    );


    /*
        X 버튼
    */

    const closeButton =
        document.getElementById(
            "dogbi-welcome-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                closeWelcomeNotice();

            }
        );

    }

}


/* =================================================
   OPEN 안내창
================================================= */

function openWelcomeNotice() {

    createWelcomeNotice();


    const notice =
        document.getElementById(
            "dogbi-welcome-notice"
        );


    if (!notice)
        return;


    dogbiWelcomeClosed =
        false;


    notice.style.display =
        "flex";


    notice.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   CLOSE 안내창
================================================= */

function closeWelcomeNotice() {

    const notice =
        document.getElementById(
            "dogbi-welcome-notice"
        );


    if (!notice)
        return;


    dogbiWelcomeClosed =
        true;


    notice.style.display =
        "none";


    notice.setAttribute(
        "aria-hidden",
        "true"
    );


    const modalIds = [

        "product-modal",

        "bag-modal",

        "purchase-modal",

        "purchase-explanation-modal",

        "detail-extra-image-modal"

    ];


    const anotherModalIsOpen =
        modalIds.some(id => {

            const element =
                document.getElementById(
                    id
                );


            if (!element)
                return false;


            return (
                getComputedStyle(
                    element
                ).display !==
                "none"
            );

        });


    if (anotherModalIsOpen) {

        document.body.classList.add(
            "no-scroll"
        );

    } else {

        document.body.classList.remove(
            "no-scroll"
        );

    }

}


/* =================================================
   MODAL OUTSIDE CLICK
================================================= */

window.addEventListener(
    "click",
    function(event) {

        const productModal =
            document.getElementById(
                "product-modal"
            );


        const bagModal =
            document.getElementById(
                "bag-modal"
            );


        if (
            event.target ===
            productModal
        ) {

            closeProduct();

        }


        if (
            event.target ===
            bagModal
        ) {

            closeBag();

        }

    }
);


/* =================================================
   ESC
================================================= */

window.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        closeWelcomeNotice();

        closeDetailExtraImage();

        closeProduct();

        closeBag();

        closePurchase();

        closePurchaseExplanation();

    }
);


/* =================================================
   INIT
================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        renderProducts();

        updateBag();


        /*
            페이지에 새로 들어오면
            안내창 표시
        */

        openWelcomeNotice();


        /*
            QR로 특정 강아지 접속
        */

        openProductFromQR();


        /*
            작품설명창 CLOSE
        */

        const explanationCloseBtns =
            document.querySelectorAll(
                "#purchase-explanation-modal .close, " +
                "#purchase-explanation-modal .close-btn, " +
                "#purchase-explanation-modal .modal-close"
            );


        explanationCloseBtns.forEach(
            btn => {

                btn.addEventListener(
                    "click",
                    closePurchaseExplanation
                );

            }
        );

    }
);


/* =================================================
   QR
================================================= */

function openProductFromQR() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const dog =
        parseInt(
            params.get("dog")
        );


    if (!dog)
        return;


    const product =
        products.find(
            item =>
                item.id === dog
        );


    if (!product)
        return;


    setTimeout(
        () => {

            openProduct(
                product.id
            );

        },
        300
    );

}


/* =================================================
   SCROLL
================================================= */

function scrollToTop() {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
