import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: {
        isLogged: false,
        userLogged: null,
        list: [],
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
            state.isLogged = true;
        },
        setUserLogOut: (state) => {
            state.isLogged = false;
            state.userLogged = null;
        },
        registerUser: (state, action) => {
            state.list = [...state.list, action.payload];
        },
        setNewPassword: (state, action) => {
            let interim = [];
            (state.list).forEach(e => {
                if (e.id === action.payload.id) {
                    const x = action.payload;
                    interim.push(x)
                } else { interim.push(e) }
            });
            state.list = interim;
        },
        setUserLikedTrack: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'liked_tracks': [...state.userLogged.liked_tracks, action.payload]
            }
        },
        setUserUnlikedTrack: (state, action) => {
            state.userLogged = action.payload            
        },
        setUserLikedAlbum: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'liked_album': [...state.userLogged.liked_album, action.payload]
            }
        },
        setUserUnlikedAlbum: (state, action) => {
            state.userLogged = action.payload       
        },
        setUserLikedArtist: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'liked_album': [...state.userLogged.liked_artist, action.payload]
            }
        },
        setUserUnlikedArtist: (state, action) => {
            state.userLogged = action.payload       
        },
        setUserLikedArtist: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'liked_album': [...state.userLogged.liked_artist, action.payload]
            }
        },
        setUserUnlikedArtist: (state, action) => {
            state.userLogged = action.payload       
        },
        setUserEdit: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'userData': action.payload.userData
            }
        },
        setUserLikedPlaylist: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'myplaylists': [...state.userLogged.myplaylists, action.payload]
            }
        },
        setUserUnlikedPlaylist: (state, action) => {
            state.userLogged = action.payload       
        },

    }
});

export const { setUserList, setUserLogged, setIsLogged, setUserLogOut, setUserRegister, setUserLikedTrack, setUserUnlikedTrack, 
    setNewPassword, registerUser, setUserLikedAlbum, setUserUnlikedAlbum, setUserEdit, setUserLikedPlaylist, setUserUnlikedPlaylist, setUserLikedArtist, setUserUnlikedArtist } = userSlice.actions;

export default userSlice.reducer;
