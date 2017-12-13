import React from 'react';
import TopicItem from 'components/Indexlist/TopicItem';

const list = [
    {
        avatar_url: 'https://avatars1.githubusercontent.com/u/227713?v=3&s=120',
        loginname: "atian25"
    },
    {
        avatar_url: 'https://avatars0.githubusercontent.com/u/841625?v=4&s=120',
        loginname: "leizongmin"
    },
    {
        avatar_url: 'https://avatars2.githubusercontent.com/u/11405052?v=4&s=120',
        loginname: "yvanwangl"
    },
    {
        avatar_url: 'https://avatars1.githubusercontent.com/u/15044564?v=4&s=120',
        loginname: "xulayen"
    }
];

class IndexList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMounted() {

    }

    render () {
        return (
            <div>
                {
                  list.map((item, i) => {
                      return <TopicItem key={i} {...item}></TopicItem>
                  })
                }
            </div>
        );
    }
}

export default IndexList;