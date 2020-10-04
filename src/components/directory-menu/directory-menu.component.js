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
                {this.state.sections.map(({id, title, imageUrl, size}) => 
                    <MenuItem 
                        key={id}
                        title={title.toUpperCase()} 
                        imageUrl={imageUrl}
                        subtitle="SHOP NOW" 
                        size={size}
                    />)
                }
            </div>
        );
    }
}

export default DirectoryMenu;