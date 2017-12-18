import xhr from 'utils/xhr';
import { 
    SELECT_TAB, 
    REQUEST_TOPICS, 
    RECEIVE_TOPICS, 
    SCROLL_TOPICS 
} from '@redux/constants';

export const selectTab = tab => ({
        type: SELECT_TAB,
        tab
    });

export const requestTopics = tab => ({
        type: REQUEST_TOPICS,
        tab
    });

export const receiveTopics =  (tab, topics, page, limit) => ({
        type: RECEIVE_TOPICS,
        tab,
        topics,
        page,
        limit
    });

export const scrollTopics = (tab, page, limit) => ({
    type: SCROLL_TOPICS,
    tab,
    page,
    limit
});

export const getTopicList = (tab, page, limit) =>  async (dispacth, getState) => {
        dispacth(requestTopics(tab));
        try {
            const result = await xhr.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`);
            if (result.data.success) {
                const { data } = result.data;
                dispacth(receiveTopics(tab, data, page, limit));
            } else {
                console.warn('获取列表数据失败');
            }
        } catch(e) {
            throw new Error(e);
        }
    }

