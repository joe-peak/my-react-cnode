import React from 'react';
import { Link } from 'react-router-dom';

class TopicItem extends React.Component {
    render() {
       return (
            <div className="topicItem">
                <Link to="/test">
                    <img className='user-avatar' src={this.props.avatar_url} alt={this.props.loginname}/>
                    <div className='topic-info'>hshdsjdsjdsjkjksd</div>
                </Link>
            </div>
       );
    }

    componenrWillMounted() {

    }
}

export default TopicItem;