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
        <Footer subTitle="This app is developed by Arijit Deb"
                twitterProfile="https://twitter.com/ArijitD03566685"
                faceBookProfile="https://www.facebook.com/arijitdebd"
                linkedinProfile="https://www.linkedin.com/in/arijit-deb-test-engineer/"
        />
      </div>
    )
  }
}

