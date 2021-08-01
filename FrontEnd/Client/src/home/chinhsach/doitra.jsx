import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PolicyService from '../../services/PolicyService';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
class doitra extends Component {
  constructor(props) {
    super(props)

    this.state = {
        policy: [],
    } 
  }
  componentDidMount(){
    PolicyService.getPolicyDoitra().then((res) => {
      this.setState({ policy: res.data});
  });
  
  }
    render() {
        return (
            <div>
                <div className="container-1">
                    <Header/>
                    <div>
 
  {this.state.policy.map((listpro) => (
    <div className="container-12">
    <div className="card card-product-grid mr-7">
      <figcaption className="info-wrap" style={{marginLeft:"35px"}}>
        
        <div>
        
          <div className="cofihaha">{ReactHtmlParser(listpro.content)}</div>
       
      
        </div>
       
 

      </figcaption>
    </div>
  </div>
  ))}
 
</div>


                </div>
                <Footer/>
            </div>
        );
    }
}

export default doitra;