/**
 * Created by alex.
 */

"use strict";

import React from 'react';
import Page from '../../component/page';

import {
    Nav,
    Button
} from '../../../src/index';

export default class Nav2Demo extends React.Component {
    state={
        tab:0
    };

    render() {
        return (
            <Nav type="button">
                <Button className="left" type="primary" plain size="small">按钮</Button>
                <Button className="right" type="primary" plain size="small">按钮</Button>
                <h1 className="title">标题</h1>
            </Nav>
        );
    }
};
