import React from 'react';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  return (
    <div className='collection-page'>
      <h2 className='title'>{match.params.collectionId}</h2>
      <div className='items'>
      </div>
    </div>
  );
};

export default CollectionPage;
