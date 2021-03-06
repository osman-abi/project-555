import ProductsList from '../api/product.json';

const PRODUCT_GET_URL = 'https://1klikle.az/api/products/'
const PRODUCT_POST_URL = 'https://1klikle.az/api/products/'


const PARENT_CATEGORY_GET_URL = 'https://1klikle.az/api/category/parent/'
const PARENT_CATEGORY_POST_URL = 'https://1klikle.az/api/category/parent/'

const CHILD_CATEGORY_GET_URL = 'https://1klikle.az/api/category/child/'
const CHILD_CATEGORY_POST_URL = 'https://1klikle.az/api/category/child/'


const GET_ABOUT_URL = 'https://1klikle.az/api/about/abouts/'
const POST_ABOUT_URL = 'https://1klikle.az/api/about/abouts/'

const POST_MISSION_URL = 'https://1klikle.az/api/about/missions/'
const GET_MISSION_URL = 'https://1klikle.az/api/about/missions/'

const GET_FACEBOOK_URL = "https://1klikle.az/api/social/facebook/link/"
const GET_INSTAGRAM_URL = "https://1klikle.az/api/social/instagram/link/"
const GET_WHATSAPP_URL = "https://1klikle.az/api/social/whatsapp/link/"

const GET_MY_ORDERS_URL = 'https://1klikle.az/api/invoices/orders/'
const POST_MY_ORDERS_URL = 'https://1klikle.az/api/invoices/orders/'

const POST_OURSHOP_URL = 'https://1klikle.az/api/about/shops/'
const GET_OURSHOP_URL = 'https://1klikle.az/api/about/shops/'

const POST_SHOP_ADDRESS_URL = 'https://1klikle.az/api/shop/shop_address/'
const GET_SHOP_ADDRESS_URL = 'https://1klikle.az/api/shop/shop_address/'

const POST_WORK_DURATION_URL = 'https://1klikle.az/api/shop/work_duration/'
const GET_WORK_DURATION_URL = 'https://1klikle.az/api/shop/work_duration/'

const POST_SUPPORT_URL = 'https://1klikle.az/api/shop/tech_support/'
const GET_SUPPORT_URL = 'https://1klikle.az/api/shop/tech_support/'

const POST_COPYRIGHT_URL = 'https://1klikle.az/api/shop/copy_right/'
const GET_COPYRIGHT_URL = 'https://1klikle.az/api/shop/copy_right/'

const GET_PRODUCT_IMAGE_URL = 'https://1klikle.az/api/images/product_image/'

const GET_SLIDE_IMAGE_URL = 'https://1klikle.az/api/images/cover_image/'

const GET_SLIDE_PHOTO_URL = 'https://1klikle.az/api/images/cover_photo/'
const POST_SLIDE_PHOTO_URL = 'https://1klikle.az/api/images/cover_photo/'

const POST_INVOICE_URL = 'https://1klikle.az/api/invoices/'
const GET_INVOICE_URL = 'https://1klikle.az/api/invoices/'

const GET_LOGO_URL = 'https://1klikle.az/api/images/logo/'
const ADD_LOGO_URL = 'https://1klikle.az/api/images/logo/'

// const REGISTRATION_URL = 'https://1klikle.az/api/registration/register/'
// const LOGIN_URL = 'https://1klikle.az/api/registration/login/'
// const LOGOUT_URL = 'https://1klikle.az/api/registration/logout/'

const ACCESS_TOKEN = localStorage.getItem('access_token')

export const getMyOrders = () => dispatch=>{
    fetch(GET_MY_ORDERS_URL).then(res => res.json()).then(data => {
        dispatch({
            type: "GET_MY_ORDERS",
            payload:data
        })
    })
}

export const postMyOrders = (myOrders) => dispatch => {
    fetch(POST_MY_ORDERS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(myOrders)
    }).then(res => res.json()).then(data => {
        dispatch({
            type:"POST_MY_ORDERS",
            payload:data
        })
    })
}

// =================================================== Product API =============================================

export const getProducts = () => dispatch => {
    fetch(PRODUCT_GET_URL, {
            method: 'GET',
            
        }).then(response => response.json()).then(data => {
            dispatch({
                type: "GET_PRODUCTS",
                payload: data
            })
        })
}


export const addProduct = (products) => dispatch => {
    fetch(PRODUCT_POST_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(products)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "ADD_PRODUCT",
            payload:data
        })
    })
}

export const deleteProduct = id => dispatch => {
    fetch(`https://1klikle.az/api/products/${id}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload:id
        })
    })
}

// ================================================ logo API ========================
export const getLogo = () => dispatch => {
    fetch(GET_LOGO_URL, {
            method: 'GET',
           
        }).then(response => response.json()).then(data => {
            dispatch({
                type: "GET_LOGO",
                payload: data
            })
        })
}

export const addLogo = (logo) => dispatch => {
    fetch(ADD_LOGO_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:logo
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "ADD_PRODUCT",
            payload:data
        })
    })
}

// =============================================== Category API ===============================================

export const deleteCategory = id => dispatch => {
    fetch(`https://1klikle.az/api/category/categories/${id}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        dispatch({
            type: "DELETE_CATEGORY",
            payload:id
        })
    })
}


export const getParentCategory = () => dispatch => {
    fetch(PARENT_CATEGORY_GET_URL, {
        method: "GET",
        
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_PARENT_CATEGORY",
            payload: data
        })
    })
}


export const addParentCategory = (category) => dispatch => {
    fetch(PARENT_CATEGORY_POST_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(category)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "ADD_PARENT_CATEGORY",
            payload:data
        })
    })
}




// ================================================== FIlter Category API ===================================================
export const deleteFilterCategory = id => dispatch => {
    fetch(`https://1klikle.az/api/category/filter/${id}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        dispatch({
            type: "DELETE_FILTER_CATEGORY",
            payload:id
        })
    })
}



export const getChildCategory = () => dispatch => {
    fetch(CHILD_CATEGORY_GET_URL, {
        method: "GET",
        
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_CHILD_CATEGORY",
            payload: data
        })
    })
}


export const addChildCategory = (category) => dispatch => {
    fetch(CHILD_CATEGORY_POST_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(category)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "ADD_CHILD_CATEGORY",
            payload:data
        })
    })
}


// ============================================== About API =====================================================
export const getAboutContext = () => dispatch => {
    fetch(GET_ABOUT_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_ABOUT_CONTEXT",
            payload:data
        })
    })
}

export const postAboutContext = (about) => dispatch => {
    fetch(POST_ABOUT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(about)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_ABOUT_CONTEXT",
            payload: data
        })
    })
};

/////////////////////////////////////////////////////////
export const postMissionContext = (mission) => dispatch => {
    fetch(POST_MISSION_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mission)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_MISSION_CONTEXT",
            payload: data
        })
    })
};


export const getMissionContext = () => dispatch => {
    fetch(GET_MISSION_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_MISSION_CONTEXT",
            payload:data
        })
    })
}
////////////////////////////////////////////////////////////////////


export const postOurShopContext = (ourshop) => dispatch => {
    fetch(POST_OURSHOP_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ourshop)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_OURSHOP_CONTEXT",
            payload: data
        })
    })
};

export const getOurShopContext = () => dispatch => {
    fetch(GET_OURSHOP_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_OURSHOP_CONTEXT",
            payload:data
        })
    })
}

/////////////////////////////////////////////////////////////////

export const postShopAddress = (shop_address) => dispatch => {
    fetch(POST_SHOP_ADDRESS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shop_address)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_SHOP_ADDRESS",
            payload: data
        })
    })
};

export const getShopAddress = () => dispatch => {
    fetch(GET_SHOP_ADDRESS_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_SHOP_ADDRESS",
            payload:data
        })
    })
}
//////////////////////////////////////////////////////////////

export const postWorkDuration = (work) => dispatch => {
    fetch(POST_WORK_DURATION_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(work)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_WORK_DURATION",
            payload: data
        })
    })
};


export const getWorkDuration = () => dispatch => {
    fetch(GET_WORK_DURATION_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_WORK_DURATION",
            payload:data
        })
    })
}
/////////////////////////////////////////////////////////////////


export const postTechniqueSupport = (support) => dispatch => {
    fetch(POST_SUPPORT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(support)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_TECHNIQUE_SUPPPORT",
            payload: data
        })
    })
};


export const getTechniqueSupport = () => dispatch => {
    fetch(GET_SUPPORT_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_TECHNIQUE_SUPPORT",
            payload:data
        })
    })
}
////////////////////////////////////////////////////////////////////////////

export const postCopyRight = (copyright) => dispatch => {
    fetch(POST_COPYRIGHT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(copyright)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_COPYRIGHT",
            payload: data
        })
    })
};

export const getCopyRight = () => dispatch => {
    fetch(GET_COPYRIGHT_URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_COPYRIGHT",
            payload: data
        })
    })
};
//////////////////////////////////////////////////////////////////////

export const getInvoice = () => dispatch => {
    fetch(GET_INVOICE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_INVOICE",
            payload:data
        })
    })
}


export const postInvoice = (invoice) => dispatch => {
    fetch(POST_INVOICE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_INVOICE",
            payload: data
        })
    })
};

export const deleteInvoice = id => dispatch => {
    fetch(`https://1klikle.az/api/invoices/${id}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        dispatch({
            type: "DELETE_INVOICE",
            payload:id
        })
    })
}


// ========================================== PRODUCT IMAGES ===============================


export const getProductImages = () => dispatch => {
    fetch(GET_PRODUCT_IMAGE_URL, {
            method: 'GET',
            
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_PRODUCT_IMAGE",
            payload: data
        })
    })
}


export const getSlideImage = () => dispatch => {
    fetch(GET_SLIDE_IMAGE_URL, {
        method: "GET",
       
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_SLIDER_IMAGE",
            payload: data
        })
    })
}

export const postSlidePhoto = (image) => dispatch => {
    fetch(POST_SLIDE_PHOTO_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(image)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_SLIDER_PHOTO",
            payload: data
        })
    })
};

export const getSlidePhoto = () => dispatch => {
    fetch(GET_SLIDE_PHOTO_URL, {
        method: "GET",
        
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_SLIDER_PHOTO",
            payload: data
        })
    })
}


// =============================================== Social API ==============================================

export const getFacebook = () => dispatch => {
    fetch(GET_FACEBOOK_URL, {
            method: 'GET',
            
        }).then(response => response.json()).then(data => {
            dispatch({
                type: "GET_FACEBOOK_INFO",
                payload: data
            })
        })
}

export const getInstagram = () => dispatch => {
    fetch(GET_INSTAGRAM_URL, {
            method: 'GET',
            
        }).then(response => response.json()).then(data => {
            dispatch({
                type: "GET_INSTAGRAM_INFO",
                payload: data
            })
        })
}

export const getWhatsapp = () => dispatch => {
    fetch(GET_WHATSAPP_URL, {
            method: 'GET',
            
        }).then(response => response.json()).then(data => {
            dispatch({
                type: "GET_WHATSAPP_INFO",
                payload: data
            })
        })
}