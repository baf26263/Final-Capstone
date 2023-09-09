import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        team_name: "Team Name",
        character_1: "Character 1",
        character_2: "Character 2",
        character_3: "Character 3"
    },
    reducers: {
        chooseTeamName: (state, action) => { state.team_name = action.payload},
        chooseCharacter1: (state, action) => { state.character_1 = action.payload},
        chooseCharacter2: (state, action) => { state.character_2 = action.payload},
        chooseCharacter3: (state, action) => { state.character_3 = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTeamName, chooseCharacter1, chooseCharacter2, chooseCharacter3} = rootSlice.actions