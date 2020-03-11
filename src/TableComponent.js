import React, { Component } from 'react'
import {Table } from 'react-bootstrap'
import './TableComponent.css';
class TableComponent extends Component {
    
   
    
    render() {
        return (
            <div>
                <Table  striped bordered hover variant="dark" className="paddingBetweenCols">

  {this.props.table.map((v,i)=> {
      return <div>
          <tbody>
          <dl>
      <dt>{v.name}</dt>
      <dd>{v.time}</dd>
    </dl>
    </tbody>
      </div>
  })}
  
</Table>




            </div>
        )
        
    }
    
}
export default TableComponent;