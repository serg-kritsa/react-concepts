import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadShopData } from '../../firebase/firebase.utils.js';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {
  componentDidMount = async () => {
    const collections = await loadShopData();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(null, mapDispatchToProps)(ShopPage);
