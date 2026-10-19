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
        description: "마이클 잭슨의 월드투어에서 함께 춤을 추었던 개의 3대 자손이다. 선조의 예술적 감각과 리듬을 이어받은 특별한 혈통이다."
    },
    {
        id: 2,
        breed: "치와와",
        happiness: "78%",
        anger: "22%",
        price: 8500000,
        image: "images/dog02.png",
        detailImage: "images/dog02-detail.png",
        description: "유럽 왕실의 비밀 회의에 참석했던 왕족 전용 반려견의 후손이다. 왕실의 중요한 비밀을 지켜낸 신뢰의 혈통이다."
    },
    {
        id: 3,
        breed: "푸들",
        happiness: "94%",
        anger: "6%",
        price: 5900000,
        image: "images/dog03.png",
        detailImage: "images/dog03-detail.png",
        description: "파블로 피카소가 작품을 그릴 때 모델로 삼았던 개의 후손이다. 현대미술의 새로운 시각을 탄생시킨 예술적 혈통이다."
    },
    {
        id: 4,
        breed: "말티즈",
        happiness: "89%",
        anger: "11%",
        price: 7200000,
        image: "images/dog04.png",
        detailImage: "images/dog04-detail.png",
        description: "루브르 박물관의 귀족 후원자가 아꼈던 반려견의 후손이다. 선조는 모나리자 앞에서 오랜 시간 작품을 감상한 것으로 유명하다."
    },
    {
        id: 5,
        breed: "오스트레일리안 셰퍼드",
        happiness: "90%",
        anger: "10%",
        price: 7600000,
        image: "images/dog05.png",
        detailImage: "images/dog05-detail.png",
        description: "세계 체스 챔피언과의 대국에서 승리한 천재견의 후손이다. 패배한 챔피언은 이후 재대결에 응하지 않았다."
    },
    {
        id: 6,
        breed: "믹스견",
        happiness: "92%",
        anger: "8%",
        price: 8900000,
        image: "images/dog06.png",
        detailImage: "images/dog06-detail.png",
        description: "마릴린 먼로가 생전에 가장 아꼈던 반려견의 후손이다. 선조는 먼로의 곁에서 특별한 사랑을 받았으며, 할리우드 황금기의 아름다운 순간을 함께한 귀한 혈통이다."
    },
    {
        id: 7,
        breed: "셰틀랜드 쉽독",
        happiness: "91%",
        anger: "9%",
        price: 6400000,
        image: "images/dog07.png",
        detailImage: "images/dog07-detail.png",
        description: "영국 왕실에서 국왕의 친서를 전달했던 명견의 4대 자손이다. 중요한 임무를 완수한 충성의 혈통을 이어받았다."
    },
    {
        id: 8,
        breed: "재패니즈 스피츠",
        happiness: "87%",
        anger: "13%",
        price: 5100000,
        image: "images/dog08.png",
        detailImage: "images/dog08-detail.png",
        description: "세계적인 보석 감정사들에게 영감을 준 개의 혈통이다. 빛에 따라 달라지는 털의 광택은 다이아몬드의 브릴리언스에 비견된다."
    },
    {
        id: 9,
        breed: "보더 콜리",
        happiness: "85%",
        anger: "15%",
        price: 6300000,
        image: "images/dog09.png",
        detailImage: "images/dog09-detail.png",
        description: "세계 최초의 견공 주식 분석가로 활동한 천재견의 후손이다. 선조가 분석에 참여한 투자팀은 1년 만에 수익률 800%를 기록했다."
    },
    {
        id: 10,
        breed: "웰시 코기",
        happiness: "88%",
        anger: "12%",
        price: 7700000,
        image: "images/dog10.png",
        detailImage: "images/dog10-detail.png",
        description: "영국 왕실에서 국왕이 가장 아끼던 반려견의 직계 후손이다. 선조는 왕궁의 모든 복도를 자유롭게 이용할 수 있는 특권을 누렸다."
    },
    {
        id: 11,
        breed: "프렌치 불독",
        happiness: "89%",
        anger: "11%",
        price: 6600000,
        image: "images/dog11.png",
        detailImage: "images/dog11-detail.png",
        description: "파리의 명품 패션 하우스에 영감을 준 개의 후손이다. 선조의 무표정은 인간 모델도 구현하기 어려운 고급스러움으로 평가받았다."
    },
    {
        id: 12,
        breed: "진돗개",
        happiness: "82%",
        anger: "18%",
        price: 5400000,
        image: "images/dog12.png",
        detailImage: "images/dog12-detail.png",
        description: "극지 탐험대의 귀환 경로를 찾아낸 명견의 후손이다. 선조는 탐험대보다 먼저 기지에 도착했다."
    },
    {
        id: 13,
        breed: "잭 러셀 테리어 믹스",
        happiness: "80%",
        anger: "20%",
        price: 7200000,
        image: "images/dog13.png",
        detailImage: "images/dog13-detail.png",
        description: "세계적인 액션 영화에서 주연 배우의 위험한 장면을 대신 연기한 스턴트견의 3대 자손이다. 선조는 엔딩 크레딧에서 주연 배우와 같은 크기로 이름을 올렸다."
    },
    {
        id: 14,
        breed: "요크셔 테리어",
        happiness: "87%",
        anger: "13%",
        price: 8000000,
        image: "images/dog14.png",
        detailImage: "images/dog14-detail.png",
        description: "세계 최고의 패션쇼에 공식 모델로 등장한 최초의 강아지 혈통이다. 선조의 짧은 보폭은 런웨이의 새로운 워킹 기준이 되었다."
    },
    {
        id: 15,
        breed: "골든 리트리버",
        happiness: "97%",
        anger: "3%",
        price: 8500000,
        image: "images/dog15.png",
        detailImage: "images/dog15-detail.png",
        description: "세계적인 광고에서 제품보다 높은 관심을 받은 개의 후손이다. 선조가 출연한 광고는 모델의 이름이 제품보다 많이 검색되는 기록을 세웠다."
    },
    {
        id: 16,
        breed: "장모 치와와",
        happiness: "81%",
        anger: "19%",
        price: 7300000,
        image: "images/dog16.png",
        detailImage: "images/dog16-detail.png",
        description: "세계적인 수집가 세 명이 동시에 소유권을 원했던 희귀 혈통의 후손이다. 최종 소유자는 구매 대금 외에 별도의 관리 계약까지 제시했다."
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
   EXTRA PRODUCT IMAGE + ZOOM
   돋보기 이미지 클릭 → 확대
   확대창 X 또는 바깥 배경 클릭 → 확대만 닫기
================================================= */

function openDetailImageZoom(src, altText) {
    if (!src) return;

    let zoomModal = document.getElementById("detail-image-zoom-modal");

    // 확대창이 없으면 새로 생성
    if (!zoomModal) {
        zoomModal = document.createElement("div");
        zoomModal.id = "detail-image-zoom-modal";

        zoomModal.setAttribute("role", "dialog");
        zoomModal.setAttribute("aria-modal", "true");
        zoomModal.setAttribute("aria-label", "이미지 확대 보기");

        zoomModal.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 20000;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: 24px;
            background: rgba(0, 0, 0, 0.94);
            cursor: zoom-out;
        `;

        // 확대된 이미지
        const zoomImage = document.createElement("img");
        zoomImage.id = "detail-image-zoomed";

        zoomImage.style.cssText = `
            display: block;
            max-width: 96vw;
            max-height: 94vh;
            width: auto;
            height: auto;
            object-fit: contain;
            cursor: default;
            user-select: none;
            -webkit-user-drag: none;
        `;

        // 사진을 눌러도 확대창이 닫히지 않게 함
        zoomImage.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        // 닫기 버튼
        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "확대 이미지 닫기");
        closeButton.innerHTML = "&times;";

        closeButton.style.cssText = `
            position: fixed;
            top: 12px;
            right: 18px;
            z-index: 1;
            width: 48px;
            height: 48px;
            padding: 0;
            border: 1px solid rgba(255,255,255,0.65);
            border-radius: 50%;
            background: rgba(0,0,0,0.35);
            color: #fff;
            font-size: 34px;
            font-weight: 300;
            line-height: 1;
            cursor: pointer;
        `;

        closeButton.addEventListener("click", function (event) {
            event.stopPropagation();
            closeDetailImageZoom();
        });

        // 확대된 사진 바깥의 어두운 배경을 누르면 확대만 닫기
        zoomModal.addEventListener("click", function (event) {
            if (event.target === zoomModal) {
                closeDetailImageZoom();
            }
        });

        zoomModal.appendChild(zoomImage);
        zoomModal.appendChild(closeButton);
        document.body.appendChild(zoomModal);
    }

    // 선택한 상품의 이미지 표시
    const zoomImage = document.getElementById("detail-image-zoomed");

    if (zoomImage) {
        zoomImage.src = src;
        zoomImage.alt = altText || "확대 이미지";
    }

    zoomModal.style.display = "flex";
    document.body.classList.add("no-scroll");
}


// 확대창만 닫기
function closeDetailImageZoom() {
    const zoomModal = document.getElementById("detail-image-zoom-modal");

    if (zoomModal) {
        zoomModal.remove();
    }

    // 원래 돋보기 창이 열려 있으면 스크롤 잠금 유지
    const detailModal = document.getElementById("detail-extra-image-modal");

    const detailIsOpen = detailModal &&
        getComputedStyle(detailModal).display !== "none";

    const productModal = document.getElementById("product-modal");

    const productIsOpen = productModal &&
        getComputedStyle(productModal).display !== "none";

    if (detailIsOpen || productIsOpen) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
}


// 돋보기 이미지 창 열기
function openDetailExtraImage() {
    if (!selectedProduct) return;

    const modal = document.getElementById("detail-extra-image-modal");
    const image = document.getElementById("detail-extra-image");

    if (!modal || !image) return;

    image.dataset.fallbackApplied = "false";
    image.style.opacity = "1";
    image.alt = `${selectedProduct.breed} 추가 이미지`;

    // 사진 클릭 시 확대 기능 추가
    image.style.cursor = "zoom-in";

    image.onclick = function (event) {
        event.stopPropagation();

        openDetailImageZoom(
            this.currentSrc || this.src,
            this.alt
        );
    };

    // 상세 이미지가 없으면 기본 상품 이미지 사용
    image.onerror = function () {
        if (this.dataset.fallbackApplied !== "true") {
            this.dataset.fallbackApplied = "true";
            this.src = selectedProduct.image;
        } else {
            this.style.opacity = "0.35";
        }
    };

    // 설정된 확대용 이미지 경로 사용
    image.src =
        selectedProduct.detailImage ||
        selectedProduct.image;

    modal.style.display = "flex";

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("no-scroll");
}


// 돋보기 이미지 창 닫기
function closeDetailExtraImage() {
    // 돋보기 창을 닫을 때 확대창도 남지 않게 정리
    const zoomModal = document.getElementById("detail-image-zoom-modal");

    if (zoomModal) {
        zoomModal.remove();
    }

    const modal = document.getElementById("detail-extra-image-modal");

    if (modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }

    const productModal = document.getElementById("product-modal");

    const productIsOpen = productModal &&
        getComputedStyle(productModal).display !== "none";

    if (productIsOpen) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
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
