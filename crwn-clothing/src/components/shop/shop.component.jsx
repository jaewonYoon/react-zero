import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import SHOP_DATA from './shop.data';

import CollectonOverview from '../collections-overview/colections-overview.component';
const Shop =({match}) => {
    console.log(match);
    return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectonOverview} />
    </div>
)}

export default Shop;