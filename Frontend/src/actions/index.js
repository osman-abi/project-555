import ProductsList from '../api/product.json';

const PRODUCT_GET_URL = 'https://167.172.107.236/products/'
const PRODUCT_POST_URL = 'https://167.172.107.236/products/'


const CATEGORY_GET_URL = 'https://167.172.107.236/category/categories/'
const CATEGORY_POST_URL = 'https://167.172.107.236/category/categories/'

const FILTER_CATEGORY_GET_URL = 'https://167.172.107.236/category/filter/'
const FILTER_CATEGORY_POST_URL = 'https://167.172.107.236/category/filter/'

const GET_ABOUT_URL = 'https://167.172.107.236/about/abouts/'
const POST_ABOUT_URL = 'https://167.172.107.236/about/abouts/'

const POST_MISSION_URL = 'https://167.172.107.236/about/missions/'
const GET_MISSION_URL = 'https://167.172.107.236/about/missions/'

const GET_FACEBOOK_URL = "https://167.172.107.236/social/facebook/link/"
const GET_INSTAGRAM_URL = "https://167.172.107.236/social/instagram/link/"
const GET_WHATSAPP_URL = "https://167.172.107.236/social/whatsapp/link/"



const POST_OURSHOP_URL = 'https://167.172.107.236/about/shops/'
const GET_OURSHOP_URL = 'https://167.172.107.236/about/shops/'

const POST_SHOP_ADDRESS_URL = 'https://167.172.107.236/shop/shop_address/'
const GET_SHOP_ADDRESS_URL = 'https://167.172.107.236/shop/shop_address/'

const POST_WORK_DURATION_URL = 'https://167.172.107.236/shop/work_duration/'
const GET_WORK_DURATION_URL = 'https://167.172.107.236/shop/work_duration/'

const POST_SUPPORT_URL = 'https://167.172.107.236/shop/tech_support/'
const GET_SUPPORT_URL = 'https://167.172.107.236/shop/tech_support/'

const POST_COPYRIGHT_URL = 'https://167.172.107.236/shop/copy_right/'
const GET_COPYRIGHT_URL = 'https://167.172.107.236/shop/copy_right/'

const GET_PRODUCT_IMAGE_URL = 'https://167.172.107.236/images/product_image/'

const GET_SLIDE_IMAGE_URL = 'https://167.172.107.236/images/cover_image/'

const GET_SLIDE_PHOTO_URL = 'https://167.172.107.236/images/cover_photo/'
const POST_SLIDE_PHOTO_URL = 'https://167.172.107.236/images/cover_photo/'

const POST_INVOICE_URL = 'https://167.172.107.236/invoices/'
const GET_INVOICE_URL = 'https://167.172.107.236/invoices/'

const GET_LOGO_URL = 'https://167.172.107.236/images/logo/'
const ADD_LOGO_URL = 'https://167.172.107.236/images/logo/'

// const REGISTRATION_URL = 'https://167.172.107.236/registration/register/'
// const LOGIN_URL = 'https://167.172.107.236/registration/login/'
// const LOGOUT_URL = 'https://167.172.107.236/registration/logout/'

const ACCESS_TOKEN = localStorage.getItem('access_token')

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
    fetch(`https://167.172.107.236/products/${id}/`, {
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
    fetch(`https://167.172.107.236/category/categories/${id}/`, {
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


export const getCategory = () => dispatch => {
    fetch(CATEGORY_GET_URL, {
        method: "GET",
        
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_CATEGORY",
            payload: data
        })
    })
}


export const addCategory = (category) => dispatch => {
    fetch(CATEGORY_POST_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(category)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "ADD_CATEGORY",
            payload:data
        })
    })
}




// ================================================== FIlter Category API ===================================================
export const deleteFilterCategory = id => dispatch => {
    fetch(`https://167.172.107.236/category/filter/${id}/`, {
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



export const getFilterCategory = () => dispatch => {
    fetch(FILTER_CATEGORY_GET_URL, {
        method: "GET",
        
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_FILTER_CATEGORY",
            payload: data
        })
    })
}


export const addFilterCategory = (category) => dispatch => {
    fetch(FILTER_CATEGORY_POST_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(category)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "ADD_FILTER_CATEGORY",
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
            type: "GET_TECHNIQUE_SUPPPORT",
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
    fetch(`https://167.172.107.236/invoices/${id}/`, {
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
                type: "GET_WHATSAPP",
                payload: data
            })
        })
}