export const getAccountId = (state) => {
    return state.account.id;
};

export const isAccountRequestLoading = (state) => {
    return state.account.loading;
};

export const getAccountUser = (state) => {
    return state.account.user;
};
