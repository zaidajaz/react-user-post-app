import './search.scss';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    search(e) {
        const newValue = e.target.value
        this.setState({ value: newValue });
        this.props.onSearch(newValue);
    }

    render() {
        if (this.props.pageName === "Posts")
            return (<div></div>);

        return (
            <div className="cmp-search">
                <input type="text" placeholder="Search..." value={this.state.value} onChange={e => this.search(e)}></input>
                <IconContext.Provider value={{ className: 'cmp-search__icon' }}>
                    <FaSearch size={30} />
                </IconContext.Provider>
            </div>
        );
    }
}

export default Search;