import React from 'react';

export default class RadioButton extends React.Component {
    
    render() {
        var wrapperClass = 'form-group';
        const hasError = ' has-error';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += hasError;
        }

        return (
            <div className={wrapperClass}>
                <div className="col-sm-10">
                    <div className="radio">
                        <label>
                             <input type="radio" 
                                name={this.props.name} 
                                id={this.props.id} 
                                value={this.props.value}
                                onChange={this.props.onChange}
                              />
                             {this.props.displayText}
                        </label>
                    </div>
                   
                </div>
            </div>
        )
    }
}

RadioButton.propTypes = {
        name: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        displayText: React.PropTypes.string.isRequired
}

RadioButton.defaultProps = {
  
}