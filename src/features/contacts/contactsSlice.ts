import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IContact {
    id: string;
    name: string;
    email: string;
    phone: string;
    notes: string;
}

interface ContactsState {
    contacts: IContact[];
    favorites: IContact[];
    searchQuery: string;
}

const initialState: ContactsState = {
    contacts: [
        { id: '1', name: 'Vinicius Jr', email: 'vini@brazil.br', phone: '123-456-7890', notes: 'Winger at Real Madrid' },
        { id: '2', name: 'Mbappe', email: 'kylian@france.fr', phone: '987-654-3210', notes: 'Debil gyada at Real Madrid' },
        { id: '3', name: 'Varazdat Haroyan', email: 'vro@cadiz.es', phone: '555-123-4567', notes: 'Best player' }
    ],
    favorites: [],
    searchQuery: '',
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action: PayloadAction<IContact>) {
            state.contacts.push(action.payload);
        },
        updateContact(state, action: PayloadAction<IContact>) {
            const contactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id);
            const favoriteIndex = state.favorites.findIndex(contact => contact.id === action.payload.id)
            if (contactIndex !== -1) {
                state.contacts[contactIndex] = action.payload;
            }
            if (favoriteIndex!== -1) {
                state.favorites[favoriteIndex] = action.payload;
            }
        },
        removeContact(state, action: PayloadAction<string>) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            state.favorites = state.favorites.filter(contact => contact.id !== action.payload);
        },
        addToFavorites(state, action: PayloadAction<IContact>) {
            if (!state.favorites.some(contact => contact.id === action.payload.id)) {
                state.favorites.push(action.payload);
                console.log(state.favorites)
            }
        },
        removeFromFavorites(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(contact => contact.id !== action.payload);
            console.log(state.favorites)
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        }
    }
});

export const { addContact, updateContact, removeContact, addToFavorites, removeFromFavorites, setSearchQuery } = contactsSlice.actions;
export default contactsSlice.reducer;