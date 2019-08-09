import React from 'react'

class SomeListComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: props.items }
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.items !== this.state.items;
  }

  handleClick = (index)=>{
    this.props.onClick(index)
  }

  renderElement = (item, index)=> {
    return <li key={index} onClick={()=>this.handleClick(index)}>{item.text}</li>
  }

  render () {
    console.log(this.state);
    return (
      <ul style={{ backgroundColor: 'red', height: 100 }}>
        {this.state.items.map((item, i) => this.renderElement(item, i))}
      </ul>
    )
  }
}

export default SomeListComponent