import React from 'react';

const ErrorModal = React.createClass({
  componentDidMount () {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Oh no!</h4>
        <p>{this.props.message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

export default ErrorModal;
