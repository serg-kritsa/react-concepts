import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
)(CollectionsOverview);

export default CollectionsOverviewContainer;
