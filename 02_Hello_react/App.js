import React,{Component} from "react";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome"
//用分别暴露引入{Component}
class App extends Component{
    render(){
        return(
            <div><Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}

export default App