import React from 'react';

export default class TextInput extends React.Component {
    
    render() {
        var wrapperClass = 'form-group';
        const hasError = ' has-error';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += hasError;
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name} className="col-sm-2 control-label">{this.props.label}</label>
                <div className="col-sm-10">
                    <input type={this.props.type}
                        className="form-control"
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        ref={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}/>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        )
    }
}

TextInput.propTypes = {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
}

TextInput.defaultProps = {
  
}