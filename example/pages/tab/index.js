/**
 * Created by alex.
 */

"use strict";

import React from 'react';
import Page from '../../component/page';

import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from '../../../src/index';

export default class TabDemo extends React.Component {

    render() {
        return (
            <Page className="tab" title="Tab">
                <Cells access>
                    <Cell href="#navbar">
                        <CellBody>
                            navbar
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="#navbar2">
                        <CellBody>
                            navbar tab自动生成
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="#tabbar">
                         <CellBody>
                            tabbar
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="#tabbar2">
                         <CellBody>
                            tabbar tab自动生成
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="#nav1">
                        <CellBody>
                            普通标题
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="#nav2">
                        <CellBody>
                            带button的标题
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="#nav3">
                        <CellBody>
                            带链接的标题
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                </Cells>
            </Page>
        );
    }
};
