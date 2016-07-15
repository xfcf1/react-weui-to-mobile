/**
 * Created by alex
 */



import React from 'react';
import classNames from 'classnames';


export default class Tab extends React.Component {
    static propTypes = {
      type: React.PropTypes.string,
      defaultIndex: React.PropTypes.number,
      onChange: React.PropTypes.func
    };

    static defaultProps = {
      type: 'normal',
      defaultIndex: 0
    };

    state={
        index: this.props.defaultIndex
    };

    render() {
        const {children, className, type, defaultIndex} = this.props;
        const cls = classNames({
            bar: true,
            bar_nav: true
        }, className);

        switch(type){
            case 'button':
                return (
                    <header className={cls} data-index={defaultIndex}>
                        {children}
                    </header>
                );
                break;
            case 'navbar':
                const {navHeaders, navContents} = this.parseNavBar(children);
                return this.renderNavBar(navHeaders, navContents, cls);
                break;
            default:
                return (
                    <header className={cls} data-index={defaultIndex}}>
                        {children}
                    </header>
                );
                break;
        }
    }
}
