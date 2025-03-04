
const product = [
    {
        id: 0,
        title: "OLEVES",
        price: "$106",
        img:"img/olevs/olevs_white.png",
        colors: [
            {
                code: "black",
                img: "img/olevs/olevsblack.png"
            },
            {
                code: "gold",
                img: "img/olevs/olevsgold.png"
            }
        ]
    },
    {
        id: 1,
        title: "FORNSHINING",
        price: "$98",
        img:"img/fornshin/forsinning_preview_rev_1.png",
        colors: [
            {
                code: "black",
                img: "img/fornshin/forsinng_black_preview_rev_1.png"
            },
            {
                code: "silver",
                img: "img/fornshin/fornshinngwhite.png"
            }
        ]
    },
    {
        id: 2,
        title: "LONGB0",
        price: "$110",
        img: "img/longgbo/longbowhite.png",
        colors: [
            {
                code: "gold",
                img: "img/longgbo/longbo_silver_gold_preview_rev_1.png"
            },
            {
                code: "white",
                img: "img/longgbo/longbo_silver_preview_rev_1.png"
            }
        ]
    },
    {
        id: 3,
        title: "SWISSTYLE",
        price: "$50",
        img: "img/swisstyle/swisstyle_white.png",
        colors: [
            {
                code: "silver",
                img: "img/swisstyle/swistylegold.png"
            },
            {
                code: "black",
                img: "img/swisstyle/swisstyleblack.png"
            }
        ]
    }
]
const producttitle = document.querySelector(".producttitle")
const productprice = document.querySelector(".productprice")
const productimg = document.querySelector(".productimg");
const productcolors = document.querySelectorAll(".colors")
let choose = product[0];
const wrapper = document.querySelector('.rolexwrapper');
const menuitems = document.querySelectorAll(".menuitems");
menuitems.forEach((items, index) =>
     {
    items.addEventListener("click", () =>
         {
        wrapper.style.transform = `translateX(-${100 * index}vw)`;
        choose = product[index];
        producttitle.textContent = choose.title;
        productprice.textContent = choose.price;
        productimg.src = choose.img;
        productcolors.forEach((colors, index) => {
            colors.style.backgroundColor=choose.colors[index].code;
        });
    })
})
productcolors.forEach((colors, index) => {
    colors.addEventListener("click", ()=>{productimg.src = choose.colors[index].img})
})
const open=document.querySelector(".productbuy");
const payment=document.querySelector(".payment");
const close =document.querySelector(".close");
const submit=document.querySelector(".submit");
open.addEventListener("click",()=>{
    payment.style.display="flex";
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})
submit.addEventListener("click",()=>{
    payment.style.display="none"
})

