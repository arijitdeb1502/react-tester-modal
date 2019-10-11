import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import ResultModal from './ResultModal';

export default class FileValidatorApp extends React.Component {

  constructor(props){
    super(props);
    this.handleCalculateFd=this.handleCalculateFd.bind(this);  
    
    this.state = {
      result: 0,
      visibility: false 
    }
  }

  handleCalculateFd(finalFdAmt){

      
      this.setState(()=>{
          return {
             result : finalFdAmt,
             visibility: true
          }
       })
    
  }

  render(){
    return(
      <div>
        <Header title="File Validator App" 
                subTitle="An app to validate file layout"
        />
        <Body handleCalculateFd={this.handleCalculateFd}
              visibility={this.state.visibility}
              result={this.state.result}
        />
        <ResultModal
        />
        <Footer subTitle="+6598582504"
                subTitleEmail="arijitdeb.work@gmail.com"
                twitterProfile="https://twitter.com/ArijitD03566685"
                faceBookProfile="https://www.facebook.com/arijitdebd"
                linkedinProfile="https://www.linkedin.com/in/arijit-deb-test-engineer/"
                twitterText="Twitter"
                faceBookText="Facebook"
                linkedInText="LinkedIn"
        />
      </div>
    )
  }
}

