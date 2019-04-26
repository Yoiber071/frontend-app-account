export const storeName = 'account-settings';

export const getUsername = state => state.authentication.username;

export const pageSelector = state => ({ ...state[storeName] });

export const formSelector = (state, props) => {
  const value = state[storeName].drafts[props.name] !== undefined ?
    state[storeName].drafts[props.name] :
    state[storeName].values[props.name];

  return {
    value,
    saveState: state[storeName].saveState,
    error: state[storeName].errors[props.name],
    confirmationValue: state[storeName].confirmationValues[props.name],
    isEditing: state[storeName].openFormId === props.name,
  };
};

export const resetPasswordSelector = state => ({
  resetPasswordState: state[storeName].resetPasswordState,
  email: state[storeName].values.email,
});