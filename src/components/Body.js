import React from 'react';
import '../styles/Body.css';


class Body extends React.Component{
    
    constructor(props){
    
        super(props);
        this.handleCalCulateFd=this.handleCalCulateFd.bind(this)

    }

    handleCalCulateFd(e){
        e.preventDefault();
        const initialAmt=parseInt(e.target.elements.amount.value,10);
        const numberOfYears=parseInt(e.target.elements.years.value,10);
        const percentValue=parseInt(e.target.elements.percent.value,10);
        const total=initialAmt+initialAmt*numberOfYears*(percentValue/100);

        if(total>0){
            
            this.props.handleCalculateFd(total);
            
        }
        
    }

    render() {
        return (
            <div>
                {   
                    !this.props.visibility && 
                    <form onSubmit={this.handleCalCulateFd} >
                        <input type="text" name="amount">
                        </input>
                        <input type="text" name="years">
                        </input>
                        <input type="text" name="percent">
                        </input>
                        <button >
                            Calculate
                        </button>
                    </form>

                }
                
            </div>
        )
    }
}

export default Body;