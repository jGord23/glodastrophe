define(function(require) {

var React = require('react');

var IntlMixin = require('react-intl').IntlMixin;
var FormattedMessage = require('react-intl').FormattedMessage;
var FormattedRelative = require('react-intl').FormattedRelative;

var navigate = require('react-mini-router').navigate;

var embodyPlain = require('gelam/clientapi/bodies/embody_plain');
var embodyHTML = require('gelam/clientapi/bodies/embody_html');

/**
 * Renders the body parts for a message.  If the body parts are not yet
 * downloaded, a spinner will be displayed (XXX someday! :) and part downloading
 * will be triggered.  If the account were offline, a "we are offline, no bodies
 * for you" message could also be displayed.
 *
 * The GELAM embody* methods are currently used to populate the body parts.
 * These are non-react DOM generators.  For current implementation simplicity,
 * we take a "we will embody the body exactly once, which is the first instant"
 * we have all of the body parts.
 * XXX move these out of gelam and into glodastrophe per discussion
 *
 * This is a single-use binding and parents should key us appropriately!
 */
var MessageBody = React.createClass({
  mixins: [IntlMixin],

  defaultProps: {
  },

  getInitialState: function() {
    return {
      embodied: false
    };
  },

  /**
   * Function to create the body parts, if possible.  Bails early if the body
   * parts aren't retrieved yet.  This allows the method to directly be invoked
   * every time a "change" event is received for the message.
   */
  _embody: function() {
    if (this.state.embodied) {
      return;
    }
    var message = this.props.message;
    if (!message.bodyRepsDownloaded) {
      return;
    }

    var contentNode = React.findDOMNode(this.refs.placeholder);

    message.bodyReps.forEach(function(rep) {
      var node = document.createElement('div');
      contentNode.appendChild(node);

      if (rep.type === 'plain') {
        node.setAttribute('class', 'message-text-part-container');
        embodyPlain(rep.contentBlob, node);
      } else if (rep.type === 'html') {
        node.setAttribute('class', 'message-text-html-container');
        embodyHTML(rep.contentBlob, node);
      }
    });

    message.removeListener('change', this._boundEmbody);
    this.setState({
      embodied: true
    });
  },

  componentWillMount: function() {
    this._boundEmbody = this._embody;

    // Trigger body part download if they aren't already downloaded.
    var message = this.props.message;
    if (!message.bodyRepsDownloaded) {
      message.downloadBodyReps();
      // every time we hear a change, maybe try and embody ourselves
      message.on('change', this._boundEmbody);
    }
  },

  componentDidMount: function() {
    // Try and embody if we have the parts.  componentWillMount took care of
    // making the requests already, if needed.
    this._embody();
  },

  componentWillUnmount: function() {
    this.props.message.removeListener('change', this._boundEmbody);
  },

  componentWillReceiveProps: function(nextProps) {
    // Assert that our message never changes.
    if (nextProps.message !== this.props.message) {
      throw new Error('Our message must never change!');
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    // We handle everything internally for a single message.  We will never
    // receive new state because we require that our owner/parent be keyed so
    // that neither it nor its child bindings will be reused.
    //
    // (We will be listening for "change" events and directly manipulating the
    // DOM when the body parts show up.)
    return false;
  },

  render: function() {
    var msg = this.props.item;
    return (
      <div
        ref="placeholder"
        className="message-body-container"></div>
    );
  },

  clickMessage: function() {
    if (this.props.pick) {
      this.props.pick(this.props.item);
    }
  }
});

return MessageBody;
});
