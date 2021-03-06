# Treinamento-React-Native

Autores: Henrique e Constanza

## Detalhes sobre o projeto:

- [Link do Figma](https://www.figma.com/file/bjJ5eXFW8OqacPFAeOvIMz/PiuPiuwer-RN?node-id=0%3A1)
- [Link do curso](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)
- [Link de react-navigation](https://reactnavigation.org/docs/hello-react-navigation)
- [Link de SplashScreen e Logo](https://www.youtube.com/watch?v=3Gf9yb53bJM)
- [Link do react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/)

## Como adicionar uma nova tela:

1. Adicionar **[Nova tela].js** em **src/screens**
2. Inserir o seguinte código em **[Nova tela].js**:

    ```
    import React from "react";
    import { SafeAreaView, StyleSheet } from "react-native";

    function [Nova tela]() {
        return (
            <SafeAreaView style={styles.background}></SafeAreaView>
        );
    };

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
    });

    export default [Nova tela];
    ```
3. Adicionar `import [Nova tela] from "./src/screens/[Nova tela]";` em **ScreensNavigation.js**
4. Ainda em **ScreensNavigation.js**, adicionar, dentro de **Stack.Navigator**:

    ```
    <Stack.Screen name="[Nova tela]" component={[Nova tela]} />
    ```

## Erro de Android:

Ao realizar o comando `react-native run-android`, o seguinte erro pode ocorrer: 

```
error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
```

É possível resolvê-lo com o seguinte comando, realizado no próprio diretório de React Native:

```
cd android && ./gradlew clean && cd .. && react-native run-android
```