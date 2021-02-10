import { Card, Layout, Col, Row, Input, Typography } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { connect } from 'react-redux';
import { closeErrorPopup } from '../redux/action/ErrorAction'
import { setQuestion, setParagraph, getAnswer } from '../redux/action/ModelAction'
const { TextArea } = Input;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
class Home extends React.Component {

  fetchAnswer = (val, isQuestion) => {
    var question, paragraph
    if (isQuestion) {
      question = val
      paragraph = this.props.paragraph
      this.props.setQuestion(val)
    } else {
      paragraph = val
      question = this.props.question
      this.props.setParagraph(val)
    }
    if (question && paragraph) {
      this.props.getAnswer(question, paragraph)
    }
  }
  render() {
    return (<Layout style={{height:'100%'}}>
      <Header className="header">Question - Answering Using Different Deep Learning Models</Header>
      <Content>

        <Card loading={false}>

          <Row>
            <Col span={24}><TextArea onPressEnter={(e) => { this.fetchAnswer(e.target.value, false) }} onBlur={(e) => { this.fetchAnswer(e.target.value, false) }} placeholder="Paragraph" rows={4} /></Col>
          </Row>
          <Row>
            <Col span={12}><Card><Input placeholder="Question" onPressEnter={(e) => this.fetchAnswer(e.target.value, true)}
              onBlur={(e) => this.fetchAnswer(e.target.value, true)} /></Card></Col>
            <Col span={12}><Card>{this.props.loading ? <div className="loader" ><img alt="Loading. Please wait..." className="loading-gif" src={require("../images/loading.gif")} /></div> :
              <Title level={5}>{this.props.answer ? this.props.answer : 'Please enter paragraph and question to get an answer'}</Title>}</Card>
            </Col>
          </Row>
        </Card>
      </Content>
      <Footer>{this.props.loading ? 'Please Wait! Fetching the answer' : 'Above predictions are served by a pre trained BERT model fine tuned on SQUaD developed using PyTorch.'}</Footer>
      <Modal
        title={this.props.errorTitle}
        visible={this.props.message}
        onOk={() => { this.props.closeErrorPopup() }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>{this.props.message}</p>
      </Modal>
    </Layout>
    );
  }
}


const mapDispatchToProps = {
  closeErrorPopup,
  setParagraph,
  setQuestion,
  getAnswer
};

const mapStateToProps = state => {
  return {
    loading: state.errorReducer.loading,
    message: state.errorReducer.message,
    errorTitle: state.errorReducer.errorTitle,
    paragraph: state.modelReducer.paragraph,
    question: state.modelReducer.question,
    answer: state.modelReducer.answer,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);