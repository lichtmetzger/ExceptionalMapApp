# Karte der Einzigartigkeiten - App

The dev environment used here (at least for preview+Android) was Windows 11 + Debian 11 (on WSL).

## Live Preview (without building and signing the app for stores)

To get a live preview in the Expo app, you need these dependencies:

```
npm install -g expo-cli
```

Make sure you've created an account on https://expo.dev - this service is used to sign the final builds for use in the PlayStore / App store.
You can login into Expo with `expo login` and then start building!

### To preview the app, simply run:
```
npm run preview
```
and then scan the QRCode with the Expo App (or the camera on iOS, because it always has to be different).

## Building the app locally

### To build for Android, you need these dependencies:

```
npm install -g eas-cli sharp-cli
apt install openjdk-11-jdk -y
```

You'll also need to download the Android commandline tools and SDK. You can use Android Studio for that, but it's a piece of garbage, so I did that manually:

```
mkdir ~/android-sdk
cd ~/android-sdk
wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip
unzip commandlinetools-linux-9477386_latest.zip
rm commandlinetools-linux-9477386_latest.zip
```

These tools expect themselves to be in a "latest" directory and error out if they're not, so we'll do that:
```
mkdir ~/android-sdk/cmdline-tools/latest
cd ~/android-sdk/cmdline-tools/
ls | grep -v latest | xargs mv -t latest
```

Now use the sdkmanager to download the SDK tools for API 29 (Android 10+):

```
~/android-sdk/cmdline-tools/latest/bin/sdkmanager --update
~/android-sdk/cmdline-tools/latest/bin/sdkmanager "platforms;android-29" "build-tools;29.0.3" "extras;google;m2repository" "extras;android;m2repository"
~/android-sdk/cmdline-tools/latest/bin/sdkmanager --licenses
```

Then make sure the environment variable ANDROID_HOME points to the directory the SDK lives in. I put these lines into my .bashrc:

```
export ANDROID_HOME=$HOME/android-sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Relaunch the shell or run `source ~/.bashrc` to load the changes.

Then run
`npm run build:android` to build an APK you can install on your device.

### To build for iOS, you need these dependencies:

Don't know yet. Pretty sure we need a real Apple device, though:

```
Error: Unsupported platform, macOS is required to build apps for iOS
```

## Building the app for stores

We're not at this point yet.