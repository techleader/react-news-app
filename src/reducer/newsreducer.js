
const initialState = {
    generalVal : "false",
    businessVal: "false"
}

const newsreducer = (state = initialState, action) => {
state = {...state};
switch(action.type) {
    
    case "general":
        if(state.generalVal == 'true') {
            state = {...state, generalVal:"false"};
        } else {
            state = {...state, generalVal:"true"};
        }            
        break;
    case "business":
        if(state.businessVal == 'true') {
            state = {...state, businessVal:"false"};
        } else {
            state = {...state, businessVal:"true"};
        }            
    break;
    break;

}
return state;
};
 export default newsreducer;