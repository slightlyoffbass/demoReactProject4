import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from '../src/api/youtube';

class App extends React.Component{

onTermSubmit = term =>{
    youtube.get('/search',{
        params:{
            q: term
        }
    })
};

render(){
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
        </div>
    )
}
};

export default App;