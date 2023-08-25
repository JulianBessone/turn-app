

const initialState = {
    login : '',
    loginError: '',
    token: '',
    name: '',
    lastName: '',
    mail: '',
    roles: '',
    config: {},
    products: [],
    productsFilter: [],
    editProductRes : '',
    postProductRes : '',
    providers: [],
    createProviderRes: '',
    mesas: [],
    mesasFilter: [],
    mesa: {},
    actualMesaProducts: [],
    openMesaInfoModal: false,
    openCkeckOutModal: false,
    postOrderStatus: '',
    orders: [],
    actualOrder: {},
    ordersKanban: [],
    checkoutInfo: {},
    sales: [],
    salesAll: [],
    cajas: [],
    cajasAll: [],
    cajaAbierta: {},
    users: [],
    roles: [],
    bills: [],
    editBillRes: '',
}

function rootReducer (state = initialState,action){
    switch(action.type){
        case "ENTER_APP":
            return{
                ...state,
                login: action.payload
            }
        case 'LOGIN_USER':
            return{
                ...state,
                login: action.payload.message,
                token: action.payload.message,
                name: action.payload.name,
                lastName: action.payload.lastName,
                mail: action.payload.email,
                roles: action.payload.roles,
                config: action.payload.config
            }
        case 'LOGIN_ERROR':
            return{
                ...state,
                loginError: action.payload
            }
        case 'PUT_CONFIG':
            return{
                ...state,
                config: action.payload
            }
        case 'GET_PRODUCTS':
            return{
                ...state,
                products: action.payload,
                productsFilter: action.payload,
            }
        case 'SHOW_ALL_PRODUCTS':
            return{
                ...state,
                productsFilter:action.payload,
            }
        case 'SEARCH_PRODUCT_BY_NAME':
            return{
                ...state,
                productsFilter: action.payload,
            }
        case 'PRODUCTS_FILTER_BY_CATEGORY':
            return{
                ...state,
                productsFilter: action.payload
            }
        case 'PUT_PRODUCT':
            return{
                ...state,
                editProductRes: action.payload
            }
        case 'POST_PRODUCT':
            return{
                ...state,
                postProductRes: action.payload
            }
        case 'DELETE_PRODUCT':
            return{
                ...state,
                products: action.payload,
                productsFilter: action.payload
            }
        case 'GET_PROVIDERS':
            return{
                ...state,
                providers: action.payload
            }
        case 'GET_MESAS':
            return{
                ...state,
                mesas: action.payload,
                mesasFilter: action.payload
            }
        case 'POST_MESA':
            return{
                ...state,
                mesas: [...state.mesas, action.payload],
                mesasFilter: [...state.mesas, action.payload],
            }
        case 'PUT_MESA':
            return{
                ...state
            }
        case 'ONLY_FREE':
            return{
                ...state,
                mesasFilter: action.payload
            }
        case 'SHOW_ALL_TABLES':
            return{
                ...state,
                mesasFilter: action.payload
            }
        case 'SHOW_BUSY_TABLES':
            return{
                ...state,
                mesasFilter: action.payload
            }
        case 'SHOW_CLEAN_TABLES':
            return{
                ...state,
                mesasFilter: action.payload
            }
        case 'SEARCH_TABLE':
            return{
                ...state,
                mesasFilter: action.payload
            }
        case 'PUT_MESA_IN_MESAS':
            return{
                ...state,
                mesas: action.payload,
                mesasFilter: action.payload
            }
        case 'OPEN_MESA_INFO':
            return{
                ...state,
                mesa: action.payload,
                openMesaInfoModal: true
            }
            case 'CLOSE_MESA_INFO':
                return{
                    ...state,
                    openMesaInfoModal: false,
                    //actualMesaProducts: [],
                    postOrderStatus: ''

                }
            case 'UPDATE_MESA':
                return{
                    ...state,
                    actualMesaProducts: [action.payload,...state.mesa.ordenes[0].products]
                }
            case 'POST_ORDER_FOR_TABLE':
                return{
                    ...state,
                    mesa: {...state.mesa, ordenes:[action.payload]},
                    postOrderStatus: action.payload
                }
            case 'POST_ORDER_FOR_COUNTER':
                return{
                    ...state,
                    orders: [...state.orders, action.payload],
                    actualOrder: {...action.payload},
                    postOrderStatus: action.payload
                }
            case 'PUT_ORDER_FOR_TABLE':
                return{
                    ...state,
                    mesa: {...state.mesa, ordenes:[action.payload]},
                }
            case 'ACTUAL_ORDER':
                return{
                    ...state,
                    actualOrder: action.payload
                }
            case 'CHANGE_ORDER_TOTAL_AMOUNT':
                return{
                    ...state,
                    mesa: {
                        ...state.mesa,
                        ordenes: [
                            {
                                ...state.mesa.ordenes[0],
                                total: action.payload
                            },
                            ...state.mesa.ordenes.slice(1) // Mantener el resto de órdenes
                        ]
                    }
                }
            case 'GET_ORDERS':
                return{
                    ...state,
                    orders: action.payload
                }
            case 'GET_ORDERS_FOR_KANBAN':
                return{
                    ...state,
                    ordersKanban: action.payload
                }
            case 'DELETE_ORDER':
                return{
                    ...state,
                    mesa: {
                        ...state.mesa,
                        ordenes:[]
                    }
                }
            case 'SUBTRACT_STOCK_QUANTITY':
                return{
                    ...state,
                }
            case 'PLUS_STOCK_QUANTITY':
                return{
                    ...state
                }
            case 'OPEN_CHECKOUT_MESA_MODAL':
                return{
                    ...state,
                    openCkeckOutModal: action.payload
                }
            case 'CLOSE_CHECKOUT_MESA_MODAL':
                return{
                    ...state,
                    openCkeckOutModal: false
                }
            case 'UPDATE_CHECKOUT_INFO':
                return{
                    ...state,
                    checkoutInfo: action.payload
                }
            case 'GET_SALES':
                return{
                    ...state,
                    sales: action.payload,
                    salesAll: action.payload
                }
            case 'GET_ALL_DCF':
                return{
                    ...state,
                    cajas: action.payload,
                    cajasAll: action.payload
                }
            case 'CREATE_DCF':
                return{
                    ...state,
                    cajas: [...state.cajas, action.payload],
                    cajaAbierta: action.payload
                }
            case 'PUT_DCF':
                return{
                    ...state,
                    cajas: [...state.cajas],
                }
            case 'GET_USERS':
                return{
                    ...state,
                    users: action.payload
                }
            case 'GET_ROLES':
                return{
                    ...state,
                    roles: action.payload
                }
            case 'GET_BILLS':
                return{
                    ...state,
                    bills: action.payload
                }
            case 'POST_BILL':
                return{
                    ...state,
                    bills: [...state.bills, action.payload]
                }
            case 'DELETE_BILL':
                return{
                    ...state,
                    bills: action.payload
                }
            case 'PUT_BILL':
                return{
                    ...state,
                    editBillRes: 'Ok'
                }
            case 'UPDATE_BILL':
                return{
                    ...state,
                    bills: action.payload
                }
        default:
            return state
    }
   
}

export default rootReducer