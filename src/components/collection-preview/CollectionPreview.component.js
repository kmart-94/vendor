import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component.js';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items }) => {
    console.log(items)
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, index) => index<4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps} />
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;