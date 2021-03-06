module.exports = (options) => {
  const enabled = (typeof options.enabled === 'boolean') ? options.enabled: false

  return {
    test: () => !!(window._kiq && window._kiq.push !== Array.prototype.push),
    track: function (eventName, eventProperties, options) {
      var traits = {}
      traits['Triggered: ' + eventName] = true
      // this.identify(new Identify({ traits: traits })); // Identify = require('segmentio-facade').Identify;
    },
    identify: (userId, userProperties) => {
      if (!window._kiq) return

      if (userProperties && userProperties.email) userId = userProperties.email
      if (userProperties) _kiq.push('set', userProperties)
      if (userId) _kiq.push('identify', userId)
    },
    isEnabled: () => enabled,
  }
}