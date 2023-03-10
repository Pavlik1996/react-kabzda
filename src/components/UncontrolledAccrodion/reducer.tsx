type ActionType = {
    type: string,
}
export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    // изменяет стэйт и возвращает его

    switch (action.type) {
        case  TOGGLE_COLLAPSED :
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
    return state

}