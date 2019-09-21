import React, { Component, Fragment } from 'react';

import {hi3data} from '../../resources/data/hi3data';

import ReactPaginate from 'react-paginate';
import $ from 'jquery';

window.React = React;

export class Deemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          offset: 0,
        };
    }
    loadDataItem(){
        $.ajax({
          url: '',
          data: JSON.stringify({limit: 10, offset: this.state.offset}),
          dataType: 'json',
          type: 'POST',

          success: data => {
              console.log("hehe");
            //   this.setState({
            //       data: data.title,
            //       pageCount: Math.ceil(data.meta.total_count / data.meta.limit),
            //   });
          },

          error: (xhr, status, err) => {
              console.error("cuk");
          },
        });
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 10);
    
        this.setState({ offset: offset }, () => {
          this.loadDataItem();
        });
    };    

    componentDidMount() {
        this.loadDataItem();
    }

    render(){
        
        let itemSet = this.state.data.map(function(item, index){
            return <li key={index}>{item.title}</li>;
        });

        return(
            <Fragment>
                <div className="tutorial">
                    {itemSet}
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.itemHandler}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </Fragment>
        );
    }
}
export default Deemo;