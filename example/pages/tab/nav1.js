/**
 * Created by alex.
 */

"use strict";

import React from 'react';
import Page from '../../component/page';

import {
    Nav
} from '../../../src/index';

export default class Nav1Demo extends React.Component {
    state={
        tab:0
    };

    render() {
        return (
            <Nav><h1 className="title">标题</h1></Nav>
        );
    }
};
