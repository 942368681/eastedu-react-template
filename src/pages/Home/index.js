import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import oStyle from './index.css';

@connect(
    state => ({
        title: state.HomeReducer.title,
        num: state.HomeReducer.num
    }),
    {
        addAsync: actions.addAsync,
        add: actions.add
    }
)
class Home extends React.PureComponent {
    changeNum = type => {
        const { addAsync, add } = this.props;
        if (type === 'async') {
            addAsync();
        } else {
            add();
        }
    };
    toList = () => {
        const { history } = this.props;
        history.push('/list');
    };
    render () {
        const { title, num } = this.props;
        return (
            <div>
                <h2 className={oStyle.title}>{title}</h2>
                <div>{num}</div>
                <button type="button" onClick={() => this.changeNum()}>add</button>
                <button type="button" onClick={() => this.changeNum('async')}>addAsync</button>
                <button type="button" onClick={this.toList}>toList</button>
            </div>
        );
    };
}

export default Home;
