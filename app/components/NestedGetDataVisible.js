
import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import {
    getNested
} from '../reducers';

import NestedGetData from './NestedGetData';

class NestedGetDataVisible extends Component {

    static fetchData = (store, routerParams) => {

        log(`this fetchData should't be loaded - because it's not component that represent url`);

        return store.dispatch(actions.nestedLoad(`shouldn't be loaded`));
    }
    render() {

        const {
            nestedLoad,
            nested
        } = this.props;

        return (
            <NestedGetData nested={nested} load={nestedLoad}  />
        );
    }
}

const mapStateToProps = state => ({
    nested: getNested(state)
});

export default connect(
    mapStateToProps,
    actions
)(NestedGetDataVisible);

