import React from 'react';

class SearchBar extends React.Component{
state = { term: ''}


    render(){
        
        onInputChange = event => {
            this.setState({ term: event.target.value });
        };

        onFormSubmit = event => {
            event.prevent.default();
            
        };

        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                </form>
            </div>
        )
    };
}

export default SearchBar;