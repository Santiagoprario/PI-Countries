import { GET_DETAIL , GET_COUNTRIES, POST_ACTIVITY , GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES} from '../Actions/actions';

const initialState = {
    countries: [],
    countriesDetail: [],
    allcountries:[],
    activities:[],
    
};

const Reducer = (state=initialState, action) => {
    switch (action.type) {
     case GET_COUNTRIES :
         return { 
             ...state,
             countries: action.payload,
          };
     case GET_ALL_COUNTRIES :
            return { 
                ...state,
                allcountries: action.payload,
             };
     case GET_ALL_ACTIVITIES :
         return {
             ...state,
             activities: action.payload
         }
     case GET_DETAIL:
         return {
             ...state,
             countriesDetail: action.payload,
         };
     case POST_ACTIVITY:
         return {
             ...state,
             activities: action.payload,
         }
    
    default :
    return state;
    }
}



export default Reducer;