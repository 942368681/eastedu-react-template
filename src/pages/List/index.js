import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import api from '@api';
import oStyle from './index.css';

@connect(
    state => ({
        title: state.ListReducer.title,
        list: state.ListReducer.list
    }),
    {
        setListData: actions.setListData,
    }
)
class List extends React.PureComponent {
    componentDidMount() {
        this.getData();
    };
    async getData () {
        const { setListData } = this.props;
        const [info, list] = await Promise.all([
            api.getUserInfo(),
            api.getList()
        ]);
        console.log(info, list);
        setListData(list);
    }
    render () {
        const { title, list } = this.props;
        return (
            <div>
                <h2 className={oStyle.title}>{title}</h2>
                {list.map(v => (<div key={v.id}>{v.username}</div>))}
            </div>
        );
    };
}

export default List;
