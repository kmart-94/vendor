import React from 'react';
import './directory.styles.scss';
import data from "./directory.data.js"
import MenuItem from '../menu-item/menu-item.component.js';

class DirectoryMenu extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: data
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...sectionProps}) => 
                    <MenuItem 
                        key={id}
                        subtitle="SHOP NOW"
                        {...sectionProps}
                    />)
                }
            </div>
        );
    }
}

export default DirectoryMenu;