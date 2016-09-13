import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import RadioButton from '../common/radioButton'

class PollView extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {
                labels: [
                    "Red",
                    "Blue",
                    "Yellow"
                ],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FFCE22"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FFCE22"
                        ]
                    }]

            },
        }
    }

    getStateFromStores(props) {
        let options = props.poll.options;
        let voteData = [];
        let voteLabel = [];
        options.map(option =>  {
             voteLabel.push(option.option);
             voteData.push(option.votes);
        });
        let  data = {
                labels: voteLabel,
                datasets: [
                    {
                        data: voteData,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#4fea44",
                            "#4dddbc",
                            "#ff5000"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#4fea44",
                            "#4dddbc",
                            "#ff5000"
                        ]
                    }]
            }
 
        return { data };

    }

    componentDidMount(){
       this.setState(this.getStateFromStores(this.props));
    }   

    componentWillReceiveProps(nextProps) {
        this.setState(this.getStateFromStores(nextProps));
    }

    render() {
        var options = this.props.poll.options;
        let radioList = options.map((option) => {
            return  <RadioButton key={option.option} name="pollOptions"
                            id={option.option}
                            value={option.option}
                            onChange={this.props.onChange}
                            displayText={option.option}/> 
        });
        
        return (
            <div>
                <div className="col-xs-6">
                    <form className="form-horizontal">
                        <h2>{this.props.poll.name}</h2>
                        { radioList } 
                        <input type="submit" value="Submit" className="btn btn-primary"
                            onClick={this.props.onVote} />
                    </form>
                </div>
                <div className="col-xs-6">
                    <Doughnut data={this.state.data} width={200} height={200}/>
                </div>
            </div>
        )
    }
}

export default PollView;