import React /*, { value, handleChange }*/ from 'react'
import { connect } from 'react-redux'

import { addQuiz } from '../../../store/actions/quizActions'
import { compose } from 'redux';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


class GAD7Questions extends React.Component {
    
    state = {
        quizName: 'GAD-7',
        question1: 'none',
        question2: 'none',
        question3: 'none',
        question4: 'none',
        question5: 'none',
        question6: 'none',
        question7: 'none',
        date: new Date()
    };

   handleChange = key => (event, value) => {
        event.preventDefault()

        this.setState({
          [key]: value
        });
        this.setState({ date: new Date()});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addQuiz(this.state);
    }

    render() {

        const { question1, question2, question3, question4, question5, question6, question7, question8, question9 } = this.state;

        const isEnabled = question1 !=='none'  && question2 !== 'none' && question3 !== 'none' && question4 !== 'none' && question5 !== 'none'
            && question6 !== 'none' && question7 !== 'none' && question8 !== 'none' && question9 !== 'none';

        return (
            <div className="dashboard container">
                <div className="article-list section"> 
                    <div className="container section article-details">
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <span className="card-title">Generalized Anxiety Disorder Questionnaire</span>
                                <h6 className="grey-text">Over the last 2 weeks, how often have you been bothered by any of the following problems? </h6>
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>1. Feeling nervous, anxious or on edge</FormLabel>
                                    <RadioGroup row aria-label="question1" name="question1" value={question1} onChange={this.handleChange('question1')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl> 
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>2. Not being able to stop or control worrying</FormLabel>
                                    <RadioGroup row aria-label="question2" name="question2" value={question2} onChange={this.handleChange('question2')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>3. Worrying too much about different things</FormLabel>
                                    <RadioGroup row aria-label="question3" name="question3" value={question3} onChange={this.handleChange('question3')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>4. Trouble relaxing</FormLabel>
                                    <RadioGroup row aria-label="question4" name="question4" value={question4} onChange={this.handleChange('question4')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>5. Being so restless that it is hard to sit still</FormLabel>
                                    <RadioGroup row aria-label="question5" name="question5" value={question5} onChange={this.handleChange('question5')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>6. Becoming easily annoyred or irritable</FormLabel>
                                    <RadioGroup row aria-label="question6" name="question6" value={question6} onChange={this.handleChange('question6')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="card z-depth-1 article-summary">
                            <div className="card-content blue-text text-darken-3">
                                <FormControl component="fieldset">
                                    <FormLabel style={{paddingBottom:'10px'}}>7. Feeling afraid as if something awful might happen</FormLabel>
                                    <RadioGroup row aria-label="question7" name="question7" value={question7} onChange={this.handleChange('question7')}>
                                        <FormControlLabel value="0" control={<Radio />} label="Not at all" labelPlacement="top"/>
                                        <FormControlLabel value="1" control={<Radio />} label="Several days" labelPlacement="top"/>
                                        <FormControlLabel value="2" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                                        <FormControlLabel value="3" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        
                        <Popup trigger={                        
                        <Button variant="contained" color="primary" disabled={!isEnabled}>Submit</Button>} position="right center" modal>
                            <div>Are you sure you want to submit your questionnaire? You cannot change your answers once submitted!</div>
                            <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>
                            <Button variant="contained" color="secondary">Cancel</Button>
                        </Popup>
                    </div>
                </div>
            </div>
        ) 
        
    }
} 

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuiz: (quiz) => dispatch(addQuiz(quiz))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(GAD7Questions)