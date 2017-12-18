import React from 'react';
export class Footer extends React.Component {
    render () {
        return (
            <div style={{'border': '1px solid red', 'minHeight': '50px'}}>经济开始就开始看见</div>
        );
    }
}

export class Loading extends React.Component {
    render () {
        return (
            <div className='loading-mask'>
                <div  className='loading-box'>
                    加载中...
                </div>
            </div>
        );
    }
}