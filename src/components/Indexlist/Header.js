import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <Nav>
                <ul>
                    <li>
                        <Link to='/'>全部</Link>
                    </li>
                    <li>
                        <Link to='/?tab=good'>精华</Link>
                    </li>
                    <li>
                        <Link to='/?tab=share'>分享</Link>
                    </li>
                    <li>
                        <Link  to='/?tab=ask'>问答</Link>
                    </li>
                    <li>
                        <Link  to='/?tab=job'>招聘</Link>
                    </li>
                </ul>
            </Nav>
        );
    }

    componentWillMount() {

    }

    componentWillReceiveProps() {
        
    }
}

export default Header;