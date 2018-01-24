import React from 'react';


class SearchBar extends Component {
    constructor(props) { //initial state,etc.
        super(props);
        //state record user events
        this.state = {term: ''}; //so whenevr we use state
        // we initialize it by creating a new obj and assigning it
        //to this.state, the object we pass will also,
        // contain properties that we want to record on the state(search term)
    }
    render() {
     return 
     (
         <div className="search-bar">
         <input 
         value = {this.state.term}
         onChange={event => this.onInputChange(event.target.value)}/>
       </div>
    );
//controlled field is a form element like an input whose value is set by the state rather than the other way around

 } // user can put input
 onInputChange(term) {
   this.setState({term});// sets the state and it fires off the callback fucntion on search term change
     this.props.onSearchTermChange(term);
 
 }

}
export default SearchBar;
    
    //declare the event handler
    //pass the event to the element we want to watch for