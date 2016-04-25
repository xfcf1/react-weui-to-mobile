/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Icon} from '../../../src/index';
import Page from '../../component/page';
import './icons.less';

export default class IconDemo extends React.Component {

    render() {
        return (
            <Page className="icons" title="Icons" spacing>

                <Icon size="large" value="success" />
                <Icon size="large" value="info" />
                <Icon size="large" value="warn" />
                <Icon size="large" value="waiting" />
                <Icon size="large" value="safe_success" />
                <Icon size="large" value="safe_warn" />

                <div className="icon_sp_area">
                    <Icon value="success" />
                    <Icon value="success_circle" />
                    <Icon value="success_no_circle" />
                    <Icon value="info" />
                    <Icon value="waiting" />
                    <Icon value="waiting_circle" />
                    <Icon value="circle" />
                    <Icon value="warn" />
                    <Icon value="download" />
                    <Icon value="info_circle" />
                    <Icon value="cancel" />
                    <Icon value="clear" />
                </div>
                <div>
                    <Icon size="large" type="icon" value="app" />
                    <Icon size="large" type="icon" value="browser" />
                    <Icon size="large" type="icon" value="card" />
                    <Icon size="large" type="icon" value="cart" />
                    <Icon size="large" type="icon" value="code" />
                    <Icon size="large" type="icon" value="computer" />
                    <Icon size="large" type="icon" value="remove" />
                    <Icon size="large" type="icon" value="download" />
                    <Icon size="large" type="icon" value="edit" />
                    <Icon size="large" type="icon" value="emoji" />
                    <Icon size="large" type="icon" value="star" />
                    <Icon size="large" type="icon" value="friends" />
                    <Icon size="large" type="icon" value="gift" />
                    <Icon size="large" type="icon" value="phone" />
                    <Icon size="large" type="icon" value="clock" />
                    <Icon size="large" type="icon" value="home" />
                    <Icon size="large" type="icon" value="menu" />
                    <Icon size="large" type="icon" value="message" />
                    <Icon size="large" type="icon" value="me" />
                    <Icon size="large" type="icon" value="picture" />
                    <Icon size="large" type="icon" value="share" />
                    <Icon size="large" type="icon" value="settings" />
                    <Icon size="large" type="icon" value="refresh" />
                    <Icon size="large" type="icon" value="caret" />
                    <Icon size="large" type="icon" value="down" />
                    <Icon size="large" type="icon" value="up" />
                    <Icon size="large" type="icon" value="right" />
                    <Icon size="large" type="icon" value="left" />
                    <Icon size="large" type="icon" value="check" />
                    <Icon size="large" type="icon" value="search" />
                </div>
            </Page>
        );
    }
};
