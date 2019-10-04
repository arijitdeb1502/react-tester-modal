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
        <Footer />
      </div>
    )
  }
}

