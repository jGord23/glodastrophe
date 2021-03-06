define(function (require) {
'use strict';

const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');

// We're fine pulling in all of Vega in the front-end.
const vega = require('vega');

/**
 *
 */
const VegaVis = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    item: React.PropTypes.object.isRequired,
    serial: React.PropTypes.number.isRequired,
    viewDef: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      vis: null
    };
  },

  componentDidMount: function() {
    const { viewDef, item } = this.props;
    vega.parse.spec(viewDef.frontend.spec, (chart) => {
      const vis = chart({
        el: this.refs.visContainer,
        // This call primarily being made on the basis of it being able to debug
        // things using the DOM insepctor tool if things are living in SVG.
        // Arguably canvas might actually be the way to go in many scenarios.
        renderer: 'svg'
      });

      const useData = item.data[viewDef.frontend.dataFrom];
      vis.data(viewDef.frontend.injectDataInto).insert(useData);

      this.setState({ vis });

      vis.update();
    });
  },

  componentDidUpdate: function() {
    const { vis } = this.state;
    const { viewDef, item } = this.props;

    // The data is currently super-duper opaque to us so remove it all and
    // add our current data.  If the back-end generating the data is being smart
    // about only generating updates when things have changed, this should
    // actually be fairly efficient.  Especially if most of the expensive
    // computation is happening on the back-end.
    const useData = item.data[viewDef.frontend.dataFrom];
    vis.data(viewDef.frontend.injectDataInto)
      .remove(() => true)
      .insert(useData);
    vis.update();
  },

  componentWillUnmount: function() {
    if (this.state.vis) {
      this.state.vis.destroy();
    }
  },

  render: function() {
    return (
      <div ref='visContainer' />
    );
  }
});

return VegaVis;
});
