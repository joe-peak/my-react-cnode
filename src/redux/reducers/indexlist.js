import { 
    SELECT_TAB, 
    RECEIVE_TOPICS, 
    REQUEST_TOPICS ,
    SCROLL_TOPICS
} from '@redux/constants';

const InitialData = {
    selectedTab: 'all',
    page: 1,
    limit: 10,
    isFetching: false,
    topics: []
};

export const IndexList = (state = InitialData, actions) => {
    switch(actions.type) {
        case SELECT_TAB: 
            return {...state, selectedTab: actions.tab};
        case REQUEST_TOPICS:
            return {...state, selectedTab: actions.tab, isFetching: true};
        case SCROLL_TOPICS: 
            return {...state, selectedTab: actions.tab, limit: actions.limit};
        case RECEIVE_TOPICS: 
            return {
                ...state,
                page: actions.page,
                limit: actions.limit,
                selectedTab: actions.tab,
                topics: actions.topics,
                isFetching: false
            };
        default:
            return state
    }
};
