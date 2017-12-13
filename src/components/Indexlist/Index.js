import React from 'react';
import { Link } from 'react-router-dom';
import TopicItem from '@/components/Indexlist/TopicItem';


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMounted() {
        
    }
    
    render () {
        return (
            <div>
                {
                  this.props.list.map(item => {
                      return <TopicItem {...item}/>
                  })
                }
            </div>
        );
    }
}

export default List ;