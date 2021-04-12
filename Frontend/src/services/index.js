// Get Category Unique Data
export const uniqueCategory = (products) => {
    var uniqueCategorys = [];
    products.map((product) => {
        // console.log( Object.keys(product.filter_category))
        if (Object.keys(product.filter_category).length > 0 && product.filter_category) {
            for (const key in product.filter_category) {
                if (Object.hasOwnProperty.call(product.filter_category, key)) {
                    const element = product.filter_category[key];
                    if (uniqueCategorys.indexOf(element) === -1) {
                        uniqueCategorys.push(element);
                    }
                    
                }
            }
            
            // product.filter_category.map((categorys) => {
            //     if(categorys && categorys.length > 0)
            //     {
            //         if (uniqueCategorys.indexOf(categorys) === -1) {
            //             uniqueCategorys.push(categorys);
            //         }
            //     }
            // })
        }
    })
    return uniqueCategorys;
}

// Get Size Unique Data
export const uniqueSizes = (products) => {
    var uniqueSizes = [];
    products.map((product) => {
        if (product.size.length > 0 && product.size) {
            product.size.map((sizes) => {
                if(sizes && sizes.length > 0)
                {
                    if (uniqueSizes.indexOf(sizes) === -1) {
                        uniqueSizes.push(sizes);
                    }
                }
            })
        }
    })
    return uniqueSizes;
}


// // All Filter Used And Get Final Response
export const getFilterProductsdata = (user, filters) => {
    
    

    return user.products.filter(product => {
        
        let categoryMatchValue;
        if (Object.keys( product.filter_category).length > 0) {
            for (const key in product.filter_category) {
                if (Object.hasOwnProperty.call(product.filter_category, key)) {
                    const element = product.filter_category[key];
                    filters.category.map((cat) => {
                        if (element == cat) {
                            categoryMatchValue=true
                        } else {
                            categoryMatchValue = false
                        }
                    })
                    // for (const cat of filters.category) {
                    //     if (element == cat) {
                    //         categoryMatchValue = true
                    //     } else {
                    //         categoryMatchValue = false;
                    //     }
                    // }
                    
                }
            }
            // categoryMatchValue = product.filter_category.some(tag => filters.category.includes(tag))
        } 

        // let sizeMatchValue;
        // if(product.size)
        //      sizeMatchValue = product.size.some(size => sizes.includes(size))
        // else
        //      sizeMatchValue = true;

        // let colorMatchValue;
        // if(color && product.colors) {
        //     colorMatchValue = product.colors.some(colors => color.includes(colors))
        // }else{
        //     colorMatchValue = false;
        // }

        let searchMatchValue;
        if(product.name) {
            if (filters.search == filters.search.toLowerCase()) {
                searchMatchValue = product.name.toLowerCase().indexOf(filters.search.toLowerCase()) > -1
            }
            else {
                searchMatchValue = product.name.toUpperCase().indexOf(filters.search.toUpperCase()) > -1
            }
        }
        else {
            searchMatchValue = false;
        }
       
        // let ratingMatchValue;
        // if(product.rating == ratings) {
        //     ratingMatchValue = true;
        // }
        // else if(ratings == "")
        // {
        //     ratingMatchValue = true;
        // }
        // else{
        //     ratingMatchValue = false;
        // } 
        
        // const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
        // const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;

        // let filtercheck=JSON.parse(localStorage.state).filters;
        
        if (filters.category.length > 0) {
            return categoryMatchValue
        }
        if (filters.search !== "") {
            return searchMatchValue
        }
        // if(category.length > 0 && color.length > 0 && size.length > 0   )
        // {
        //     return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(category.length > 0 && size.length > 0 && ratings.length > 0  )
        // {
        //     return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        // }
        // if(category.length > 0 && color.length > 0 && ratings.length > 0 )
        // {
        //     return  categoryMatchValue && colorMatchValue  &&  ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        // }
        // if(color.length > 0 && size.length > 0 && ratings.length > 0 )
        // {
        //     return  colorMatchValue  && sizeMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(category.length > 0 && color.length > 0 )
        // {
        //     return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        // }
        // if(category.length > 0 && size.length > 0)
        // {
        //     return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(category.length > 0 && ratings.length > 0)
        // {
        //     return  categoryMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(color.length > 0 && size.length > 0)
        // {
        //     return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(color.length > 0 && ratings.length > 0)
        // {
        //     return  colorMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(size.length > 0 && ratings.length > 0)
        // {
        //     return  sizeMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(color.length > 0)
        // {
        //     return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(category.length > 0)
        // {
        //     return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(size.length > 0)
        // {
        //     return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        // if(ratings.length > 0)
        // {
        //     return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        // }
        else {
            return product;
        }
    // })
    }).sort((sortpro1, sortpro2) => {
        if (filters.sortOrder === 'Pricehigh') {
            return sortpro2.price < sortpro1.price ? -1 : 1;
        } else if (filters.sortOrder === 'Pricelow') {
            return sortpro2.price > sortpro1.price ? -1 : 1;
        } else if (filters.sortOrder === 'NewProduct') {
            return sortpro2.id < sortpro1.id ? -1 : 1;
        } else{
            return sortpro2.price > sortpro1.price ? -1 : 1;
        }
    });
}


// Get Color Unique Data
export const uniqueColors = (products) => {
    var uniqueColors = [];
    products.map((product) => {

        if(product.colors.length > 0 && product.colors) {
            product.colors.map((color) => {
                if(color && color.length > 0)
                {
                    if (uniqueColors.indexOf(color) === -1) {
                        uniqueColors.push(color);
                    }
                }

            })
        }
    })
    return uniqueColors;
}

// Get Min & Max Data in Json
export const uniqueMinMaxPrice = (products) => {
    // console.log('products=>',products)
    let prices = []
    let minimum , maximum;
    products.map((product, index) => {
        prices.push(product.price)
        minimum = Math.min.apply(Math, prices)
        maximum = Math.max.apply(Math, prices)
        // console.log('minimum=>',minimum, 'maximum=>',maximum)
    })
    // console.log('minimum after loop =>',minimum,'maximum after loop =>', maximum)
    return {'min':minimum, 'max':maximum};
    // console.log('min value => ',minimum,'max value =>',maximum)
}