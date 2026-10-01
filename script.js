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
                    onerror="this.style.opacity='0.2'">

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

    const product = products.find(
        item => item.id === id
    );

    if (!product) return;


    selectedProduct = product;

    quantity = 1;


    document.getElementById("quantity").innerText =
        quantity;


    document.getElementById("detail-number").innerText =
        `DOG No.${String(product.id).padStart(3, "0")}`;


    document.getElementById("detail-name").innerText =
        product.breed;


    document.getElementById("detail-happiness").innerText =
        product.happiness;


    document.getElementById("detail-anger").innerText =
        product.anger;


    document.getElementById("detail-description").innerText =
        product.description;


    document.getElementById("detail-price").innerText =
        `₩${product.price.toLocaleString()}`;


    const img =
        document.getElementById("detail-image");


    img.src = product.image;

    img.alt = product.breed;


    const extraImg =
        document.getElementById("detail-extra-image");


    if (extraImg) {

        extraImg.src = "";

        extraImg.alt =
            `${product.breed} 추가 이미지`;

        extraImg.dataset.fallbackApplied =
            "false";

        extraImg.style.opacity = "1";

    }


    const extraModal =
        document.getElementById("detail-extra-image-modal");


    if (extraModal) {

        extraModal.style.display = "none";

        extraModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    document.getElementById("product-modal").style.display =
        "block";


    document.body.classList.add(
        "no-scroll"
    );

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


    image.src =
        selectedProduct.detailImage ||
        selectedProduct.image;


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


/* =================================================
   CLOSE EXTRA IMAGE
================================================= */

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
   CLOSE PRODUCT
================================================= */

function closeProduct() {

    const productModal =
        document.getElementById(
            "product-modal"
        );


    if (productModal)
        productModal.style.display =
            "none";


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   QUANTITY (PRODUCT DETAIL)
================================================= */

function changeQuantity(amount) {

    quantity += amount;


    if (quantity < 1)
        quantity = 1;


    document.getElementById(
        "quantity"
    ).innerText =
        quantity;

}


/* =================================================
   QUANTITY (BAG / CART)
================================================= */

function changeBagQuantity(id, amount) {

    const item =
        bag.find(i => i.id === id);


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromBag(id);

    } else {

        updateBag();

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
                        alt="${item.breed}">


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
                            ">


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
                                ">

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
                                ">

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
                        aria-label="삭제">

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


    if (bagCount)
        bagCount.innerText =
            count;


    const totalPrice =
        document.getElementById(
            "bag-total-price"
        );


    if (totalPrice)
        totalPrice.innerText =
            `₩${total.toLocaleString()}`;


    const actionButton =
        document.querySelector(
            ".checkout-button"
        );


    if (actionButton) {

        if (bag.length === 0) {

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
   BAG OPEN / CLOSE
================================================= */

function openBag() {

    updateBag();


    document.getElementById(
        "bag-modal"
    ).style.display =
        "block";


    document.body.classList.add(
        "no-scroll"
    );

}


function closeBag() {

    const bagModal =
        document.getElementById(
            "bag-modal"
        );


    if (bagModal)
        bagModal.style.display =
            "none";


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   PURCHASE BLOCK & EXPLANATION MODALS
================================================= */

function cannotPurchase() {

    closeProduct();

    closeBag();


    const purchaseModal =
        document.getElementById(
            "purchase-modal"
        );


    if (purchaseModal)
        purchaseModal.style.display =
            "flex";


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   CLOSE PURCHASE MESSAGE
================================================= */

function closePurchase() {

    const purchaseModal =
        document.getElementById(
            "purchase-modal"
        );


    if (purchaseModal)
        purchaseModal.style.display =
            "none";


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   NEXT → WORK EXPLANATION
================================================= */

function openPurchaseExplanation() {

    const purchaseModal =
        document.getElementById(
            "purchase-modal"
        );


    if (purchaseModal)
        purchaseModal.style.display =
            "none";


    const explanationModal =
        document.getElementById(
            "purchase-explanation-modal"
        );


    if (explanationModal) {

        explanationModal.style.display =
            "block";


        explanationModal.scrollTop =
            0;

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   BACK → PURCHASE MESSAGE
================================================= */

function backToPurchaseMessage() {

    const explanationModal =
        document.getElementById(
            "purchase-explanation-modal"
        );


    if (explanationModal)
        explanationModal.style.display =
            "none";


    const purchaseModal =
        document.getElementById(
            "purchase-modal"
        );


    if (purchaseModal)
        purchaseModal.style.display =
            "flex";


    document.body.classList.add(
        "no-scroll"
    );

}


/* =================================================
   CLOSE WORK EXPLANATION
================================================= */

function closePurchaseExplanation() {

    const explanationModal =
        document.getElementById(
            "purchase-explanation-modal"
        );


    if (explanationModal)
        explanationModal.style.display =
            "none";


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =================================================
   QR PARAMETER
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


    setTimeout(() => {

        openProduct(
            product.id
        );

    }, 300);

}


/* =================================================
   MODAL CLICK OUTSIDE
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


        /*
            상품 / 장바구니 모달만
            바깥 클릭 시 닫힘
        */

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


        /*
            넥스트 창과 작품설명 창은
            바깥 클릭으로 닫히지 않음.

            작품설명 팝업의 별도 이미지 창은
            HTML의 backdrop 클릭으로 닫힘.
        */

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
        )
            return;


        closeDetailExtraImage();

        closeProduct();

        closeBag();

        closePurchase();

        closePurchaseExplanation();

    }
);


/* =================================================
   INIT & EVENT BINDING
================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        renderProducts();

        updateBag();

        openProductFromQR();


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
   SCROLL TO TOP
================================================= */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

}
