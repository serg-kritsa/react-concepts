import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
)(CollectionPage);

export default CollectionPageContainer;
