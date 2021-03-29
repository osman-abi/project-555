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
    category: [],
    user: [{
        email: "",
        username: "",
        password: "",
        phone_number: "",
        lastname: "",
        address: ""
    },
    {
        access_token: "",
        refresh_token: ""

    }
        
    ],
    filter_category: [],
    about_context: [],
    mission_context: [],
    ourshop: [],
    shop_address: [],
    work_duration: [],
    technique_support: [],
    copyright:[],
    images: [],
    contact: [],
    social: []
}
    

export default function (state = initialState, action) {
    switch (action.type) {
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
        case "GET_CATEGORY":
            return {
                ...state,
                category:action.payload
            };
        case "ADD_CATEGORY":
            return {
                ...state,
                category: [...state.category, action.payload]
            };
        case "GET_FILTER_CATEGORY":
            return {
                ...state,
                filter_category:action.payload
            };
        case "ADD_FILTER_CATEGORY":
            return {
                ...state,
                filter_category: [...state.filter_category, action.payload]
            }
        case "GET_ABOUT_CONTEXT":
            return {
                ...state,
                about:action.payload
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
        case "POST_OURSHOP_CONTEXT":
            return {
                ...state,
                ourshop: [...state.ourshop, action.payload]
            }
        case "POST_SHOP_ADDRESS":
            return {
                ...state,
                shop_address: [...state.shop_address, action.payload]
            }
        
        case "POST_WORK_DURATION":
            return {
                ...state,
                work_duration: [...state.work_duration, action.payload]
            }
        
        case "POST_TECHNIQUE_SUPPORT":
            return {
                ...state,
                technique_support: [...state.technique_support, action.payload]
            }
        
        case "POST_COPYRIGHT":
            return {
                ...state,
                copyright: [...state.copyright, action.payload]
            }
        
        case "GET_PRODUCT_IMAGE":
            return {
                ...state,
                images:action.payload
            }
        case "GET_CONTACT_INFO":
            return {
                ...state,
                contact:action.payload
            }
        case "GET_SOCIAL_INFO":
            return {
                ...state,
                social:action.payload
            }
            
        default:
            return state;
    }
}