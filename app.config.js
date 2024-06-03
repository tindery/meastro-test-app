module.exports = ({ config }) => ({
  "expo": {
    "name": "maestro-eas-example",
    "slug": "maestro-eas-example",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      bundleIdentifier: "cz.tindery.meastrotestapp",
      "supportsTablet": true
    },
    "android": {
      package: "cz.tindery.meastrotestapp",
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "b7bf063b-e400-4f3e-86e2-ad83b155c282"
      }
    }
  }
})
