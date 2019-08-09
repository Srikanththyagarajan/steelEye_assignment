# steelEye_assignment

1: List down all the problems in the component below

Issue with the code is the event link handleClck and renderElement will not work as they are not binded to the SomeListComponent scope.
	
	a : We can use arrow function which will bind the event to SomeListComponent scope.
			eg :  handleClick = (index)=>{
   				 this.props.onClick(index)
 				 }

  				renderElement = (item, index)=> {
  					  return <li key={index} onClick={()=>this.handleClick(index)}>{item.text}</li>
  				}
	
	b : We can use bind to make the event handlers work.
	
			eg 	this.handleClick  = this.handleClick .bind(this);
				this.renderElement   = this.renderElement 	 .bind(this);
			
				 handleClick (index) {
    					this.props.onClick(index)
				  }

				  renderElement (item, index) {
				    return <li onClick={() => this.handleClick(index)}>{item.text}</li>
				  }


We are calling props to add item data to the SomeListComponent state so we need to pass props while calling the component.
© 2019 GitHub, Inc.
