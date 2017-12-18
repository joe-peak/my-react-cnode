import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class Header extends React.Component {
    render () {
        const { location } = this.props;
        const tab = location.search ? queryString.parse(location.search).tab : 'all';
        console.log(tab);
        return (
            <nav>
                <ul className='header-nav'>
                    <li className={ tab ==='all' ? 'on' : ''}>
                        <Link to='/'>全部</Link>
                    </li>
                    <li  className={ tab ==='good' ? 'on' : ''}>
                        <Link to='/?tab=good'>精华</Link>
                    </li>
                    <li className={ tab ==='share' ? 'on' : ''}>
                        <Link to='/?tab=share'>分享</Link>
                    </li>
                    <li className={ tab ==='ask' ? 'on' : ''}>
                        <Link  to='/?tab=ask'>问答</Link>
                    </li>
                    <li className={ tab ==='job' ? 'on' : ''}>
                        <Link  to='/?tab=job'>招聘</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    componentWillMount() {

    }

    componentWillReceiveProps() {
        
    }
}

export default Header;