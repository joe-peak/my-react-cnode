import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from 'utils/format-date';

class TopicItem extends React.Component {
    render() {
       return (
           <Link to={`/topic/${this.props.id}`}  className='topicItem'>
                <img className='user-avatar' src={this.props.author.avatar_url} alt={this.props.loginname}/>
                <div className='topic-info'>
                    <div className="topic-title"> 
                        {
                            this.props.top && <span className='topic-top'>顶</span>
                        }

                        {
                            this.props.good && <span className='topic-good'>精</span> 
                        }
                        {this.props.title} 
                    </div>
                    <div className='topic-tips'>
                        <div className='share-count'>{this.props.reply_count}/{this.props.visit_count}分享</div>
                        <div className='create-time'>{formatDate(this.props.create_at)}</div>
                    </div>
                </div>
            </Link>
       );
    }

    componenrWillMounted() {

    }
}

export default TopicItem;