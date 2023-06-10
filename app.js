
// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children


    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: "MENS <p>Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.</p>",
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=",
            optionTags: ["Heels", "Skirts", "Tops", "Jeans"],
            productImages: [
                {
                    name: 'Heels',
                    pic: "https://cdn.shopify.com/s/files/1/0070/8853/7651/products/07401-1128_4_633x715_crop_center.jpg?v=1669743529"
                },
                {
                    name: 'Skirts',
                    pic: "https://www.bodenimages.com/productimages/r1aproductlarge/22waut_r0158_blk_m01.jpg"
                },
                {
                    name: 'Tops',
                    pic: "https://mauricesprodatg.scene7.com/is/image/mauricesProdATG/209569_C1524?$large$"
                },
                {
                    name: 'Jeans',
                    pic: "https://pyxis.nymag.com/v1/imgs/fac/416/15cff983709af0f8876b3d4382ccaedccd-framelehighskinnyjeans2.png"
                },
                {
                    name: 'Hoodies',
                    pic: "https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dwd1e36c47/tillys/images/catalog/1000x1000/458363415.jpg"
                },
                {
                    name: 'Dress',
                    pic: "https://media.kohlsimg.com/is/image/kohls/2023-120396-dress-02"
                },
            ],
            textDescription: "WOMENS <p>Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.</p>",
            lowImage: 'https://t4.ftcdn.net/jpg/01/34/06/21/360_F_134062135_SdxKV0haFKE9KQNQpR4srbXkmYN0yi1G.jpg'
        
        },
        kids: {
            headImage: "https://media.timeout.com/images/105945067/image.jpg",
            optionTags: ["Shoes", "Pants", "Shirts", "Coats"],
            productImages: [
                {
                    name: 'Shoes',
                    pic: "https://cdn.shopify.com/s/files/1/0180/5543/0208/files/blks-boys_c8129304-4c52-474a-adc0-65086b5ff982_1920x.png?v=1676601770"
                },
                {
                    name: 'Pants',
                    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-4fJaruyBBkug7ypn3da8d579udKa39I5Q&usqp=CAU"
                },
                {
                    name: 'Shirts',
                    pic: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b6aa9a76-340a-4426-8f3c-719941cf92ef/little-kids-t-shirt-fsZG7l.png"
                },
                {
                    name: 'Coats',
                    pic: "https://www.longislandpress.com/wp-content/uploads/2020/11/Coat1.jpeg"
                },
                {
                    name: 'Scarves',
                    pic: "https://www.katia.com/files/mod/5942/pattern-knit-crochet-kids-scarf-autumn-winter-katia-5942-4-g.jpg"
                },
                {
                    name: 'Gloves',
                    pic: "https://m.media-amazon.com/images/I/71TttLhEMdL._AC_UF1000,1000_QL80_.jpg"
                },
            ],
            textDescription: "KIDS <p>Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.</p>",
            lowImage: 'https://image.cnbcfm.com/api/v1/image/107183226-1674589478451-gettyimages-124956665-a757ad4b-e28b-4505-be07-0d4967563b60.jpeg?v=1676733109'
        
        }
    }
// -----------------------

let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')
let topPic= document.querySelector('.topPic')
let polaroid= document.querySelector('.polaroid')
let textContainer= document.querySelector('.textContainer')


const changeAllMens = () => {
    changeTopPicMens()
    changeOptionsMens()
    productMens()
    polaroidMens()
    textMens()
}
    const changeTopPicMens = () =>{

        topPic.removeAttribute('src', '')
        topPic.setAttribute('src', majorContainer.mens.headImage)

        // // createImage 
        // let newimage = document.createElement('img')
            // newimage.setAttribute('src', majorContainer.mens.headImage)
        //     newimage.setAttribute('class','topPic')
           
        // // replaceWith current
        //     mainImage.replaceWith(newimage)

        
   
    }

    const changeOptionsMens = () =>{

        option.replaceChildren();

        majorContainer.mens.optionTags.forEach((tagname)=>{

            // CREATE ELEMENT
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        })
    }

    const productMens = () => {

        productBox.replaceChildren();

        majorContainer.mens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })

    }

    const polaroidMens = () => {

        polaroid.removeAttribute('src', '')
        polaroid.setAttribute('src', majorContainer.mens.lowImage)
        
    }


    const textMens = () => {

        textContainer.innerHTML = majorContainer.mens.textDescription;

    }


    const changeAllWomens = () => {
        changeTopPicWomens()
        changeOptionsWomens()
        productWomens()
        polaroidWomens()
        textWomens()
    }

    const changeTopPicWomens = () =>{

        topPic.removeAttribute('src', '')
        topPic.setAttribute('src', majorContainer.womens.headImage)

        // // createImage 
        // let newimage = document.createElement('img')
        //     newimage.setAttribute('src', majorContainer.womens.headImage)
        //     newimage.setAttribute('class','topPic')
        // // replaceWith current
        // mainImage.replaceWith(newimage)
        

    }

    const changeOptionsWomens = () =>{

        option.replaceChildren();

        majorContainer.womens.optionTags.forEach((tagname)=>{

            // CREATE ELEMENT
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        })
    }

    const productWomens = () => {

        productBox.replaceChildren();

        majorContainer.womens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })

    }

    const polaroidWomens = () => {

        polaroid.removeAttribute('src', '')
        polaroid.setAttribute('src', majorContainer.womens.lowImage)
        
    }


    const textWomens = () => {

        textContainer.innerHTML = majorContainer.womens.textDescription;

    }

    const changeAllKids = () => {
        changeTopPicKids()
        changeOptionsKids()
        productKids()
        polaroidKids()
        textKids()
    }

    const changeTopPicKids = () =>{

        topPic.removeAttribute('src', '')
        topPic.setAttribute('src', majorContainer.kids.headImage)

        // // createImage 
        // let newimage = document.createElement('img')
        //     newimage.setAttribute('src', majorContainer.womens.headImage)
        //     newimage.setAttribute('class','topPic')
        // // replaceWith current
        // mainImage.replaceWith(newimage)
        

    }

    const changeOptionsKids = () =>{

        option.replaceChildren();

        majorContainer.kids.optionTags.forEach((tagname)=>{

            // CREATE ELEMENT
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        })
    }

    const productKids = () => {

        productBox.replaceChildren();

        majorContainer.kids.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })

    }

    const polaroidKids = () => {

        polaroid.removeAttribute('src', '')
        polaroid.setAttribute('src', majorContainer.kids.lowImage)
        
    }


    const textKids = () => {

        textContainer.innerHTML = majorContainer.kids.textDescription;

    }