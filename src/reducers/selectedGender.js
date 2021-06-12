export default (selectedGender="All", action) =>{
  switch(action.type){
      case 'SWITCH_GENDER':
          return action.payload;
      default:
          return selectedGender;
  }
}