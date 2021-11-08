export const SET_SELECTED_TAB = 'SET_SELECTED_TAB'


export const selectedTabTabSuccess = (selectedTab) =>({
    type:SET_SELECTED_TAB,
    payload:{selectedTab}
})

export function setSelectedTab(selectedTab){
    return dispatch => {
        dispatch(selectedTabTabSuccess(selectedTab))
    }
}