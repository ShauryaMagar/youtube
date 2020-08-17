import React from 'react';

class SearchBar extends React.Component{
    state= { term:'' };
    onInputChange = (event) =>{
        this.setState({ term: event.target.value });
    }


    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }


    render(){
        return(
            <div className="ui segment search-bar">
               <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className='field'>
                      <label>Video Search</label>
                      <input type='text' onChange={this.onInputChange} value={this.state.term}  />
                  </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;

//AIzaSyC3Lqw5sUJy32pGO8wEPuRfo2OiNDIE5No API KEY