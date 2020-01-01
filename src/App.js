import React,{Component} from 'react';
import './App.css';
import Answer from './Answer';
import Clear from './Clear';
import Buttons from './Buttons';
// import KeyboardEventHandler from 'react-keyboard-event-handler';

class App extends Component{

  constructor(){
    super();
    this.state = {
      value:''
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", this.checkKeyPress, false);
  }
  
  
  checkKeyPress = (key) => {

    let keyvalue = String.fromCharCode(key.keyCode);

    if(keyvalue >= parseInt('0') && keyvalue <= parseInt('9')){
      this.setState({
        value: this.state.value + String.fromCharCode(key.keyCode)
      })
    }
    if(key.keyCode === 111){
      this.setState({
        value: this.state.value + '/'
      })
    }
    if(key.keyCode === 109){
      this.setState({
        value: this.state.value + '-'
      })
    }
    if(key.keyCode === 106){
      this.setState({
        value: this.state.value + '*'
      })
    }
    if(key.keyCode === 107){
      this.setState({
        value: this.state.value + '+'
      })
    }
    if(key.keyCode === 187){
        this.setState({
          value:eval(this.state.value).toString()
        })
    }
    if( key.keyCode === 13){
        this.setState({
          value:eval(this.state.value).toString()
        })
    }
    if(key.keyCode === 8){
        let aswer = this.state.value;
        let newStr = '';
        newStr = aswer.substring(0, aswer.length-1);
        this.setState({
          value: newStr
        })
    }

  }

  getKeyValue = (getvalue) => {
    if(getvalue === "="){
      this.setState({
        value:eval(this.state.value).toString()
      })
    }
    else if(getvalue === 'Clear'){
    
      this.setState({
        value:''
      })
    }
    else{
      this.setState({
        value: this.state.value + getvalue
      })
    }

  } 

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  
  render(){ 
       
    const buttonarray = [
      { value:1 },
      { value:2 },
      { value:3 },
      { value:'+' },
      { value:4 },
      { value:5 },
      { value:6 },
      { value:'-' },
      { value:7 },
      { value:8 },
      { value:9 },
      { value:'*' },
      { value:'0' },
      { value:'.' },
      { value:'=' },
      { value:'/' }
    ]

    const arrayofbuttons = buttonarray.map((bu, i) => {
      return <Buttons key={i} value={buttonarray[i].value} getKeyValue={this.getKeyValue} />
    })
  
    return(
      <div className="formstyle">
              <form name="forms">
                  <Answer value={this.state.value} handleChange={this.handleChange}/><br/><br/>
                  {arrayofbuttons}
                  <br/><br/><Clear  getKeyValue={this.getKeyValue}/>
              </form>
      </div>
    )
  }
}

export default App;









