export default function addValue(state = [], action) {
    switch (action.type) {
        case 'ADD-VALUE':
            console.log(state);
            state.push('-TEST-');
            return state;
        case 'REMOVE-ALL-VALUES':
            state = [];
            return state;
        default:
            return state;
    }
}