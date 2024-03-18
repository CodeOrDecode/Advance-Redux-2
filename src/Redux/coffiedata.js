import { ERROR, LOADING, SUCCESS } from "./action"
import axios from "axios"

export const coffiedata = async(dispatch)=>{
dispatch({type:LOADING})
    try {

        let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`);
        dispatch({type:SUCCESS,payload:res.data.data})
        
    } catch (error) {
        dispatch({type:ERROR})
    }

}

export const coffiedataasc = async(dispatch)=>{
    dispatch({type:LOADING})
        try {
    
            let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=asc`);
            dispatch({type:SUCCESS,payload:res.data.data})
            
        } catch (error) {
            dispatch({type:ERROR})
        }
    
    }

    export const coffiedatadesc = async(dispatch)=>{
        dispatch({type:LOADING})
            try {
        
                let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=desc`);
                dispatch({type:SUCCESS,payload:res.data.data})
                
            } catch (error) {
                dispatch({type:ERROR})
            }
        
        }