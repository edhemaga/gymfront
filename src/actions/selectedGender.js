export const switchGender = (gender) => async(dispatch)=>{
  try{
      dispatch({type: 'SWITCH_GENDER', payload: gender});
  }catch(error){
      console.log(error);
  }
}