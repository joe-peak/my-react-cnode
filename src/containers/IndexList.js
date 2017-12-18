import React from 'react';
import TopicItem from 'components/Indexlist/TopicItem';
import Header from 'components/Indexlist/Header';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
    selectTab,
    scrollTopics,
    getTopicList
} from '@redux/actions/indexlist';

class IndexList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        const { dispatch, selectedTab, limit, page } = this.props;
        dispatch(getTopicList(selectedTab, page, limit ));
    }

    componentWillReceiveProps(newProps) {
        const { dispatch, limit, page } = this.props;
        if (this.props.location.search !== newProps.location.search) {
            const tab = newProps.location.search ? queryString.parse(newProps.location.search).tab : 'all';
            selectTab(tab);
            dispatch(getTopicList(tab, page, limit ));
        }
    }
    
    scrollLoading = () => {
        const { dispatch, limit, page, selectedTab, isFetching } = this.props;
        const pageSize = 10;
        if (!isFetching && (this.listBox.offsetHeight + this.listBox.scrollTop >= this.listDiv.offsetHeight))  {
            dispatch(scrollTopics(selectedTab, page, limit+pageSize));
            this.loadMore(page, limit+pageSize, selectedTab);
        }
    }

    loadMore = (page, limit, tab) => {
        const { dispatch } = this.props;
        dispatch(getTopicList(tab, page, limit ));
    }
    
    render () {
        // console.log(this.props);
        const { topics, isFetching } = this.props;
        return (
            <div  className='list-wrapper'>
                <Header location={this.props.location}/>
                <div className='list-box' ref={ node => { this.listBox = node;}} onScroll= {this.scrollLoading}>
                    <div className='list-div' ref={ node => { this.listDiv = node;}}>
                        {
                            topics.map((item, i) => {
                                return <TopicItem key={i} {...item}></TopicItem>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state.IndexList;

export default connect(mapStateToProps)(IndexList);