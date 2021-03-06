const user = (state = 
    {
        user: {
            username: null,
            currency: "USD"
        },
        error: false,
        errorMsg: '',
        loggedIn: false,
        loading: true,
        loaded: false,
        addPoolForm: false
    },
     action) => {
    switch(action.type) {
        case 'FETCH_USER_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_USER_DONE':
        let user = action.user || {}
            return {
                user: user,
                loggedIn: action.loggedIn,
                loading: false,
                loaded: true
            }
        case 'LOGIN_USER_START':
            return {
                ...state,
                loading: true
            }
        case 'REGISTER_USER_START':
            return {
                ...state,
                loading: true
            }
        case 'POOL_FORM_OPEN':
            return {
                ...state,
                addPoolForm: true,
            }
        case 'POOL_FORM_CLOSE':
            return {
                ...state,
                addPoolForm: false,
            }
        case 'LOGIN_USER_ERROR':
            return {
                ...state,
                loading: false,
                loaded: true,
                loggedIn: false,
                error: true,
                errorMsg: action.error
            }
        case 'UPDATE_POOL':
            const pools = state.user.pools.map(p => {
                console.log(action.pool)
                if((p.pool !== action.pool.pool) || (p.address !== action.pool.address)){
                    return p
                }
                return {...action.pool, name: p.name, _id: p._id }
            })
            return {
                ...state,
                user: {
                    ...state.user,
                    pools
                }
            }
        case 'LOGOUT_USER':
            return {
                user: {},
                loggedIn: false,
                loading: false,
                loaded: true
            }
        default:
            return state
    }
}

export default user
 