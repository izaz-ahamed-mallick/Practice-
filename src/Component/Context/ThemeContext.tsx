import React, { createContext, useReducer } from "react";

const initalState = {
    theme: "light",
    fontSize: 20,
};

type stateType = {
    theme: string;
    fontSize: number;
};

type ActionType =
    | { type: "CHANGE-THEME" }
    | { type: "CHANGE-SIZE"; payload: number | null };

const reducer = (state: stateType, action: ActionType) => {
    switch (action.type) {
        case "CHANGE-THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            };
        case "CHANGE-SIZE":
            return {
                ...state,
                fontSize: action.payload ?? state.fontSize,
            };
        default:
            return state;
    }
};

export const ThemeContext = createContext<{
    state: stateType;
    dispatch: React.Dispatch<ActionType>;
}>({ state: initalState, dispatch: () => {} });

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer<React.Reducer<stateType, ActionType>>(
        reducer,
        initalState
    );

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
