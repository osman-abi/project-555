/***
 *  Products Reducers
 ***/
// export default (state = { products: [] }, action) => {
//     // if(action.type === "ACTUAL_PRODUCTS")
//     // {
//     //     return { ...state,
//     //         products: action.products };
//     // }
//     // else
//     // {
//     //     return state;
//     // }
//     switch (action.type) {
//         case "ACTUAL_PRODUCTS":
//             return {
//                 ...state,
//                 products: action.payload
//             };
//         // case "GET_PRODUCTS":
//         //     return {
//         //         ...state,
//         //         products: action.payload
//         //     };
//         default:
//             return state
//     }
// };

////////////////////////////////////////////////////////////////////////////


const initialState = {
    products: [],
    parent_category: [],
    child_category: [],
    about_context: [],
    mission_context: [],
    ourshop: [],
    shop_address: [],
    work_duration: [],
    technique_support: [],
    invoice:[],
    copyright: [],
    slider: [],
    slide_photos:[],
    images: [],
    contact: [],
    facebook: [],
    instagram: [],
    whatsapp:[],
    logo: [],
    myOrders:[]
}
    

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_MY_ORDERS":
            return {
                ...state,
                myOrders: action.payload
            }
        case "POST_MY_ORDERS":
            return {
                ...state,
                myOrders:[...state.myOrders,action.payload]
            }
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products:state.products.filter(product=>product.id!==action.payload)
            }
        case "GET_LOGO":
            return {
                ...state,
                logo:action.payload
            }
        case "ADD_LOGO":
            return {
                ...state,
                logo:[...state.logo, action.payloaf]
            }
        
        case "GET_PARENT_CATEGORY":
            return {
                ...state,
                parent_category:action.payload
            };
        case "ADD_PARENT_CATEGORY":
            return {
                ...state,
                parent_category: [...state.parent_category, action.payload]
            };
        case "DELETE_PARENT_CATEGORY":
            return {
                ...state,
                parent_category: state.parent_category.filter(cat=>cat.id!==action.payload)
            }
        case "GET_CHILD_CATEGORY":
            return {
                ...state,
                child_category:action.payload
            };
        case "ADD_CHILD_CATEGORY":
            return {
                ...state,
                child_category: [...state.child_category, action.payload]
            };
        case "DELETE_CHILD_CATEGORY":
            return {
                ...state,
                child_category:state.child_category.filter(fil=>fil.id !== action.payload)
            }
        case "DELETE_INVOICE":
            return {
                ...state,
                invoice: state.invoice.filter(inv=>inv.id!==action.payload)
            }
        case "GET_ABOUT_CONTEXT":
            return {
                ...state,
                about_context:action.payload
            };
        case "POST_ABOUT_CONTEXT":
            return {
                ...state,
                about_context: [...state.about_context, action.payload]
            }
        case "POST_MISSION_CONTEXT":
            return {
                ...state,
                mission_context: [...state.mission_context, action.payload]
            }
        case "GET_MISSION_CONTEXT":
            return {
                ...state,
                mission_context:action.payload
            }
        
        case "POST_OURSHOP_CONTEXT":
            return {
                ...state,
                ourshop: [...state.ourshop, action.payload]
            }
        case "GET_OURSHOP_CONTEXT":
            return {
                ...state,
                ourshop:action.payload
            }
        case "POST_SHOP_ADDRESS":
            return {
                ...state,
                shop_address: [...state.shop_address, action.payload]
            }
        case "GET_SHOP_ADDRESS":
            return {
                ...state,
                shop_address:action.payload
            }
        
        case "POST_WORK_DURATION":
            return {
                ...state,
                work_duration: [...state.work_duration, action.payload]
            }
        case "GET_WORK_DURATION":
            return {
                ...state,
                work_duration:action.payload
            }
        case "POST_TECHNIQUE_SUPPORT":
            return {
                ...state,
                technique_support: [...state.technique_support, action.payload]
            }
        case "GET_TECHNIQUE_SUPPORT":
            return {
                ...state,
                technique_support:action.payload
            }
        
        case "POST_COPYRIGHT":
            return {
                ...state,
                copyright: [...state.copyright, action.payload]
            }
        case "GET_COPYRIGHT":
            return {
                ...state,
                copyright:action.payload
            }
        
        case "GET_PRODUCT_IMAGE":
            return {
                ...state,
                images:action.payload
            }
        case "GET_SLIDER_IMAGE":
            return {
                ...state,
                slider:action.payload
            }
        case "POST_SLIDER_PHOTO":
            return {
                ...state,
                slide_photos:[...state.slide_photos, action.payload]
            }
        case "GET_SLIDER_PHOTO":
            return {
                ...state,
                slide_photos:action.payload
            }
        case "GET_CONTACT_INFO":
            return {
                ...state,
                contact:action.payload
            }
        case "POST_INVOICE":
            return {
                ...state,
                invoice : [...state.copyright, action.payload]
            }
        case "GET_INVOICE":
            return {
                ...state,
                invoice:action.payload
            }
        case "GET_FACEBOOK_INFO":
            return {
                ...state,
                facebook:action.payload
            }
        case "GET_INSTAGRAM_INFO":
            return {
                ...state,
                instagram:action.payload
            }
        case "GET_WHATSAPP_INFO":
            return {
                ...state,
                whatsapp:action.payload
            }
        default:
            return state;
    }
}