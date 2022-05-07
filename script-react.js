
  
  class Converter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            to_degree: 'to_c',
            current_temperature: 0,
            converted_temperature: 0
        }
        this.toggleUnit = this.toggleUnit.bind(this);
        this.toggleUnitClass = this.toggleUnitClass.bind(this);
        this.calculateTemperature = this.calculateTemperature.bind(this);
        this.getUnitText = this.getUnitText.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.decrementTemperature = this.decrementTemperature.bind(this);
        this.incrementTemperature = this.incrementTemperature.bind(this);
    }

    toggleUnit(type){
        this.setState({
            to_degree: type
        });
        console.log(this.state.to_degree)
    }

    toggleUnitClass(e,pos,ele){
        //console.log(ele)
        let className = 'border rounded-'+pos+'-full px-3 py-1 transition duration-500 ease-in-out';
        if(this.state.to_degree == ele){
            className += ' bg-blue-100 border-blue-400 shadow shadow-blue-700 font-bold'
        }
        return className;
    }

    calculateTemperature(e){
        let converted_temperature;
        if(this.state.to_degree == "to_c"){
            converted_temperature = Math.round((e.target.value * 9/5) + 32, 2);
        }else{
            converted_temperature = Math.round((e.target.value - 32) * 5/9, 2);
        }
        this.setState({
            current_temperature: e.target.value,
            converted_temperature: converted_temperature
        });
    }

    getUnitText(){
        return (this.state.to_degree == 'to_c')?'&#8451;':'&#8457;';
    }

    handleForm(e){
        e.preventDefault();
    }

    decrementTemperature(e){
        e.preventDefault();
        this.setState((state) => ({
            current_temperature: state.current_temperature-1
        }))
    }

    incrementTemperature(e){
        e.preventDefault();
        this.setState((state) => ({
            current_temperature: state.current_temperature+1
        }))
    }

    render() {
      return (
        <div>
            <div className="bg-indigo-700 rounded-t p-3">
                <h1 className="uppercase font-bold text-gray-200">Temperature Converter</h1>
            </div>
            <div className="">
                <form action="#" onSubmit={this.handleForm}>
                    <div className="flex justify-center items-center mt-6">
                        <button id="to_c" onClick={ this.toggleUnit.bind(this, 'to_c') } className={this.toggleUnitClass(this, 'l', 'to_c')}>To &#8451;</button>
                        <button id="to_f" onClick={ this.toggleUnit.bind(this, 'to_f') } className={this.toggleUnitClass(this, 'r', 'to_f')}>To &#8457;</button>
                        <input type="hidden" name="type" id="conv_type" value="to_c" />
                    </div>
                    <div className="flex justify-center my-3 h-32 p-5 items-center">
                        <button onClick={this.decrementTemperature} className="text-center text-red-500 h-16" id="minus_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  className="fill-current" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </button>
                        <input onChange={this.calculateTemperature} className="text-center w-1/3 border shadow mx-2 h-16 rounded p-2 outline-none hover:bg-gray-100 focus:bg-gray-100 focus:border-blue-200" type="text" name="temp_data" id="temp_data" value={this.state.current_temperature} />
                        <button onClick={this.incrementTemperature} className="text-center text-green-500 h-16" id="plus_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-current" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="text-8xl text-center my-5 text-indigo-600">
                        <h1><span id="result">{this.state.converted_temperature}</span> <span id="unit_display" dangerouslySetInnerHTML={{__html: this.getUnitText()}}></span></h1>
                    </div>
                    
                </form>
            </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<Converter />);
  