# Gamertec - FrontEnd APP

Aplicación Móvil de tienda online, Gamertec

## Previsualización

previsualización de `despliegue utilizando Expo y Emulador de Android Studio`

- Pantalla Principal

![Imagen despliegue Principal](./assets/imagenes/readme/Login.png)

## Generar carpeta android

para poder generar la carpeta android:

```bash
  npx expo prebuild
```
## Generar APK o AAB 

generar Nuevo Project Id:
```bash
  eas int
```
generar apk con el perfil de preview:
```bash
  eas build -p android --profile preview
```