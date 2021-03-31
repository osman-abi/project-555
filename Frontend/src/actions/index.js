import ProductsList from '../api/product.json';

const PRODUCT_GET_URL = 'http://127.0.0.1:8000/products/'
const PRODUCT_POST_URL = 'http://127.0.0.1:8000/products/'

const CATEGORY_GET_URL = 'http://127.0.0.1:8000/category/categories/'
const CATEGORY_POST_URL = 'http://127.0.0.1:8000/category/categories/'

const FILTER_CATEGORY_GET_URL = 'http://127.0.0.1:8000/category/filter/'
const FILTER_CATEGORY_POST_URL = 'http://127.0.0.1:8000/category/filter/'

const GET_ABOUT_URL = 'http://127.0.0.1:8000/about/abouts/'
const POST_ABOUT_URL = 'http://127.0.0.1:8000/about/abouts/'

const POST_MISSION_URL = 'http://127.0.0.1:8000/about/missions/'
const GET_MISSION_URL = 'http://127.0.0.1:8000/about/missions/'

const POST_OURSHOP_URL = 'http://127.0.0.1:8000/about/shops/'
const GET_OURSHOP_URL = 'http://127.0.0.1:8000/about/shops/'

const POST_SHOP_ADDRESS_URL = 'http://127.0.0.1:8000/shop/shop_address/'
const GET_SHOP_ADDRESS_URL = 'http://127.0.0.1:8000/shop/shop_address/'

const POST_WORK_DURATION_URL = 'http://127.0.0.1:8000/shop/work_duration/'
const GET_WORK_DURATION_URL = 'http://127.0.0.1:8000/shop/work_duration/'

const POST_SUPPORT_URL = 'http://127.0.0.1:8000/shop/tech_support/'
const GET_SUPPORT_URL = 'http://127.0.0.1:8000/shop/tech_support/'

const POST_COPYRIGHT_URL = 'http://127.0.0.1:8000/shop/copy_right/'
const GET_COPYRIGHT_URL = 'http://127.0.0.1:8000/shop/copy_right/'

const GET_PRODUCT_IMAGE_URL = 'http://127.0.0.1:8000/images/product_image/'

const POST_INVOICE_URL = 'http://127.0.0.1:8000/invoices/'
const GET_INVOICE_URL = ''



// const REGISTRATION_URL = 'http://127.0.0.1:8000/registration/register/'
// const LOGIN_URL = 'http://127.0.0.1:8000/registration/login/'
// const LOGOUT_URL = 'http://127.0.0.1:8000/registration/logout/'

const ACCESS_TOKEN = localStorage.getItem('access_token')

// =================================================== Product API =============================================

export const getProducts = () => dispatch => {
    fetch(PRODUCT_GET_URL, {
            method: 'GET',
            headers: {
                'Authorization':'Bearer ' + ACCESS_TOKEN
            }
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
    fetch(`http://127.0.0.1:8000/products/${id}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
        },
    }).then(res => res.json()).then(data => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload:id
        })
    })
}

// =============================================== Category API ===============================================

export const getCategory = () => dispatch => {
    fetch(CATEGORY_GET_URL, {
        method: "GET",
        headers: {
                'Authorization':'Bearer ' + ACCESS_TOKEN
        }
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
export const getFilterCategory = () => dispatch => {
    fetch(FILTER_CATEGORY_GET_URL, {
        method: "GET",
        headers: {
                'Authorization':'Bearer ' + ACCESS_TOKEN
        }
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + ACCESS_TOKEN
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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN
        },
        body: JSON.stringify(invoice)
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "POST_INVOICE",
            payload: data
        })
    })
};


// ========================================== PRODUCT IMAGES ===============================


export const getProductImages = () => dispatch => {
    fetch(GET_PRODUCT_IMAGE_URL, {
            method: 'GET',
            headers: {
                'Authorization':'Bearer ' + ACCESS_TOKEN
            },
    }).then(response => response.json()).then(data => {
        dispatch({
            type: "GET_PRODUCT_IMAGE",
            payload: data
        })
    })
}
// =============================================== REGISTRATION API ==============================================

