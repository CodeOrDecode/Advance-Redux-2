import { produce } from "immer";
import { ERROR, LOADING, SUCCESS } from "./action";

const initialSta = {
    loading:false,
    data:[],
    error:false
}

export const coffiereducer = (state = initialSta, { type, payload }) => {
    switch (type) {

        case LOADING: {
            return produce(state,(original)=>{
                original.loading = true;
                original.error = false;
            })
        }

        case SUCCESS: {

            return produce(state,(original)=>{
                original.loading = false;
                original.error = false;
                original.data = payload;
            })
        }

        case ERROR:{
            return produce(state,(original)=>{
                original.loading = false;
                original.error = true;
            })
        }
        
        default: {
            return state;
        }
    }

}