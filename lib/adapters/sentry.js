module.exports = (options) => {
  const enabled = (typeof options.enabled === 'boolean') ? options.enabled: false

  return {
    test: () => window.Raven,
    identify: (userId, userProperties) => {
      if (!userProperties) userProperties = {}
      if (userId) userProperties.userId = userId

      if (window.Raven)
        Raven.setUserContext(userProperties)
    },

    isEnabled: () => enabled,
  }
}