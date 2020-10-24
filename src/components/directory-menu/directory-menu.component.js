import React from 'react';
import './directory.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component.js';

const DirectoryMenu = ({sections}) => {
        return (
            <div className="directory-menu">
                {sections.map(({id, ...sectionProps}) => 
                    <MenuItem 
                        key={id}
                        subtitle="SHOP NOW"
                        {...sectionProps}
                    />)
                }
            </div>
        );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);