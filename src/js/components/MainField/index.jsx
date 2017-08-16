import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import uuid from 'uuid';
import * as actions from 'actions';
import ListField from 'components/ListField';
import {MainContainer} from './style';

class MainField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange = text => {
    this.setState({input: text})
  }

  submitText(text) {
    if(text !== '') {
      this.props.addTodo({text})
      this.setState({input: ''})
    }
  }

  render() {
    const {addTodo, todo} = this.props;
    return (
      <MainContainer>
        <input
          type="text"
          value={this.state.input}
          onChange={e => this.handleChange(e.target.value)}
          onKeyDown={data => data.keyCode === 13 ? this.submitText(this.state.input) : false}/>
      <ListField data={todo.data} />
      </MainContainer>
    )
  }
}

const mapStateToProps = state => ({todo: state.todo});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainField);
