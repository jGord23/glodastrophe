define(function (require) {

var React = require('react');

var IntlMixin = require('react-intl').IntlMixin;
var FormattedMessage = require('react-intl').FormattedMessage;

var navigate = require('react-mini-router').navigate;

var AutoconfigSetup = React.createClass({
  mixins: [IntlMixin],
  getInitialState: function() {
    return {
      // future work: show a spinner overlay and disable the inputs while pending
      autoconfigInProgress: false,
      errorCode: null,
      errorDetails: null,
      displayName: '',
      emailAddress: '',
      password: '',
    };
  },

  render: function() {
    var errorNodes = [];
    if (this.state.errorCode) {
      errorNodes.push(
        <div>
          {this.state.errorCode}: {JSON.stringify(this.state.errorDetails)}
        </div>
      );
    }
    return (
      <div>
        <div>{ errorNodes }</div>
        <h1>
          <FormattedMessage
            message={ this.getIntlMessage('setupAutoconfigHeaderTitle') }
            />
        </h1>
        <div>
          <input type="text"
            value={this.state.displayName}
            onChange={this.handleNameChange}
            placeholder={this.getIntlMessage('setupAutoconfigDisplayNamePlaceholder')}
            />
        </div>
        <div>
          <input type="email"
            value={this.state.emailAddress}
            onChange={this.handleEmailChange}
            placeholder={this.getIntlMessage('setupAutoconfigEmailAddressPlaceholder')}
            />
        </div>
        <div>
          <input type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder={this.getIntlMessage('setupAutoconfigPasswordPlaceholder')}
            />
        </div>
        <div>
          <button onClick={ this.startAutoconfig }>
            <FormattedMessage
              message={this.getIntlMessage('setupAutoconfigTriggerAutoconfigButtonLabel')}
            />
          </button>
        </div>
      </div>
    );
  },

  // These seem inefficient, but perhaps the clarity is worth the boilerplate?
  handleNameChange: function(evt) {
    this.setState({ displayName: evt.target.value });
  },

  handleEmailChange: function(evt) {
    this.setState({ emailAddress: evt.target.value });
  },

  handlePasswordChange: function(evt) {
    this.setState({ password: evt.target.value });
  },

  startAutoconfig: function() {
    var mailApi = this.props.mailApi;

    // don't have multiple autoconfigs in flight at the same time
    if (this.state.autoconfigInProgress) {
      return;
    }

    // Indicate an autoconfig is in progress and clear existing error state.
    this.setState({
      autoconfigInProgress: true,
      errorCode: null,
      errorDetails: null
    });
    mailApi.tryToCreateAccount(
      {
        displayName: this.state.displayName,
        emailAddress: this.state.emailAddress,
        password: this.state.password,
      },
      null,
      function(err, errDetails, account) {
        // If there's an error, update state
        if (err) {
          this.setState({
            autoconfigInProgress: false,
            errorCode: err,
            errorDetails: errDetails
          });
          return;
        }

        // Once we know about the inbox for the account, bring it up.  (This
        // should be nearly immediate since we speculatively create the inbox
        // prior to even running syncFolderList.)
        account.latestOnce('inbox', function(inboxFolder) {
          navigate('/view/folder/' + inboxFolder.id);
        }.bind(this))
      }.bind(this)
    )
  }
});

return AutoconfigSetup;
});
