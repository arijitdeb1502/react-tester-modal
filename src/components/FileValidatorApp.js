import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class FileValidatorApp extends React.Component {

  render(){
    return(
      <div>
        <Header title="File Validator App" 
                subTitle="An app to validate file layout"
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

