
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'employee_update':
            // esto [action.payload.prop] INTERPOLATION en ES6 .. buscar !
            return { ...state, [action.payload.prop]: action.payload.value }
        case 'employee_create':
            return INITIAL_STATE;
        case 'employee_save_success':
            return INITIAL_STATE;
        default:
            return state;
    }
}