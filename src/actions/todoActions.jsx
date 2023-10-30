import todoApi from '../apis/todoApi'
import {CREATE_NOTE, RETRIEVE_NOTES} from '../actions/types'
export const addNew = data => async (dispatch) =>{
    try {
        const res = await todoApi.add(data);
    dispatch({
        type: CREATE_NOTE,
        payload: res.data
    })
    } catch (error) {
        console.log("Error", error)
    }
}
export const todoList = () => async (dispatch) =>{
    try {
        const res = await todoApi.getAll();
    dispatch({
        type: RETRIEVE_NOTES,
        payload: res.data
    })
    } catch (error) {
        console.log("Error", error)
    }
}