// const initialState = {
//     viewCheckbox: false
// }

export const checkUser = (selectedUser = {}, action) => {
    switch(action.type){
        case 'SELECTED_USER':
            return action.payload;
        default:
            return selectedUser;
    }
};

// export const checkbox =  (state = initialState, action) => {
//       switch (action.type){
//           case 'VIEW_CHECKBOX':
//               return {
//                   ...state,
//                   viewCheckbox: !viewCheckbox
//               }
//           default:
//               return state
//       }
// }