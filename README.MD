# Teste de Desenvolvimento React Native Android
https://facebook.github.io/react-native/docs/getting-started.html

# Android Oreo

# Servidor


npm start

# Emulador


react-native run-android command

# React Native Images syntax


./running.png
./images/running.png

# React Native Icons
https://github.com/oblador/react-native-vector-icons#android

npm install react-native-vector-icons --save

editei android/app/build.gradle ( NOT android/build.gradle )

project.ext.vectoricons = [
        iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf','MontSerrat' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

# Cannot find module 'asap/raw'

npm install

