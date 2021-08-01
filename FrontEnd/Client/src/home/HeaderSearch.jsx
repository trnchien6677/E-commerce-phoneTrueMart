import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import { Redirect } from 'react-router-dom';
class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          searchTitle: "",
          redirect: false
        };
      }
      onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle,
          
        });
      }
      handleSubmit(e) {
        e.preventDefault();
       this.setState({redirect: true});
     }
    render() {
      const { redirect, searchTitle } = this.state;
      if (redirect) { 
        return <Redirect to={`/search/${searchTitle}`} />;
        
      }
        return (
          <div >

          {/* <div className="header_search">
            <div className="header_search_content">
              <div className="header_search_form_container">
                <form
                  action="#"
                  className="header_search_form clearfix"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    type="search"
                    required="required"
                    className="header_search_input"
                     
                    placeholder="Search for products..."
                  />
                  <a
                    href={`/search/${searchTitle}`}
                    type="submit "
                    className="header_search_button trans_300"
                    value="Submit"
                  >
                  <p style={{marginTop:"10px",marginLeft:"16px"}}><i class="fas fa-search"></i></p>
                  </a>
                </form>
  
              </div>
             
            </div>
          </div> */}


  <form action="#" className="search-header" onSubmit={this.handleSubmit}>
    <div className="input-group w-100">
      <input type="search" className="form-control" onChange={this.onChangeSearchTitle} placeholder="Bạn đang tìm gì vậy ?" />
      <div className="input-group-append">

      <a
                    href={`/search/${searchTitle}`}
                    type="button"
                    className="btn btn-danger"
                    value="Submit"
                  
                  >
   
   Search
      </a>

      </div>
    </div>
  </form> {/* search-wrap .end// */}

        </div>
        );
    }
}

export default HeaderSearch;


