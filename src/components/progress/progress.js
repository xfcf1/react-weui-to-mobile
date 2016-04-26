/**
 * Created by alex on 15/10/27.
 */



import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';

class Progress extends React.Component {
    static propTypes = {
        progress: React.PropTypes.number
    };

    static defaultProps = {
        value: 0
    };

    _renderOpr() {
        if (this.props.onClick) {
            return (
                <a href="javascript:;" className="weui_progress_opr" onClick={this.props.onClick}>
                    <Icon value="cancel"/>
                </a>
            );
        }
    }

    render() {

        let {value, type, className, ...others} = this.props;
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }
        const cls = classNames({
            success: type === 'success',
            warn:  type === 'warn',
            danger:  type === 'danger',
            [className]: className
        });

        return (
            <div className="weui_progress">
                <div className="weui_progress_bar">
                    <div className={"weui_progress_inner_bar " + cls} style={{width: `${value}%`}}></div>
                </div>
                {
                    this._renderOpr()
                }
            </div>
        );
    }
}

export default Progress;
