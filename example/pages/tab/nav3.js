/**
 * Created by alex.
 */

"use strict";

import React from 'react';
import Page from '../../component/page';

import {
    Nav,
    Icon
} from '../../../src/index';

export default class Nav2Demo extends React.Component {
    state={
        tab:0
    };

    render() {
        return (
            <Nav>
                <a className="left" href="#tab"><Icon type="icon" value="left"/>返回</a>
                <a className="right" href="#tab">刷新<Icon type="icon" value="refresh"/></a>
                <h1 className="title">标题</h1>
            </Nav>
        );
    }
};
