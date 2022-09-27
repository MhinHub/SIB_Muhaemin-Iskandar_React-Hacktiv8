import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    errorMessage: '',
    user: {}
};

export const callLoginApi = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'admin@login.com' && password === 'admin') {
                resolve( {email} )
            }
            reject('Invalid email or password')
        }, 1000)
    })
}

export const authLoginAPI = createAsyncThunk('auth/login', async ({email, password}) => {
    try {
        const response = await callLoginApi(email, password);
        return response.email;
    } catch (error) {
        throw (error);
    }
})

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(authLoginAPI.pending, (state) => {
                state.isLoginPending = true;
                state.isLoginSuccess = false;
                state.errorMessage = '';
            })
            .addCase(authLoginAPI.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                
                const { email } = action.payload;
                state.isLoginPending = false;
                state.isLoginSuccess = true;
                state.user = { email };
            })
            .addCase(authLoginAPI.rejected, (state, action) => {
                console.log('rejected', action);

                state.isLoginPending = false;
                state.isLoginSuccess = false;
                state.errorMessage = action.error.message;
            })
    }
})

export default userSlice.reducer;
