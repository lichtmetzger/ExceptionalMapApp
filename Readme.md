# Karte der Einzigartigkeiten - App

The dev environment used here (at least for preview+Android) was Windows 11 + Debian 11 (on WSL).

## Live Preview (without building and signing the app for stores)

To get a live preview in the Expo app, you need these dependencies:

```
npm install -g expo-cli
```

Make sure you've created an account on https://expo.dev - this service is used to sign the final builds for use in the PlayStore / App store.
You can login into Expo with `expo login` and then start building!

### To start the preview mode, run:
```
npm run preview
```

### To see your preview:

*Note: The preview mode only works when your phone and the dev machine are on the same network.*

First, install the "Expo Go" app from the App Store or PlayStore.

If you're using WSL you cannot scan the QRCode with the Expo App because the code will generate a URL with the wrong IP adress (=the virtualized WSL IP address).

Also, WSL does not forward any ports to your host by default so the preview mode is completely inaccessible. But there is a tool to do that for you, called __WSLHostPatcher__. Install it like this:

```
cd ~
mkdir .wsl; cd .wsl
wget https://github.com/CzBiX/WSLHostPatcher/releases/download/v0.1.1/WSLHostPatcher.zip
unzip WSLHostPatcher.zip
chmod +x ~/.wsl/WSLHostPatcher.exe
echo "~/.wsl/WSLHostPatcher.exe" >> ~/.bashrc
```

Now when you run the Expo app, __don't scan the QR Code__. Instead, enter the project URL like this:
```exp://YOUR_IP_ADDRESS:PORT```

You can find out your ip address by running ipconfig in Windows Terminal.

Example:
```
exp://192.168.1.168:19000
```

__Attention:__ WSLHostPatcher opens ALL ports on your Linux system to the outside world. If you don't want to do this, you can do a more secure and fine-grained firewall tweaking:
https://blog.expo.dev/running-expo-in-windows-subsystem-for-linux-wsl2-425f6fd7838e

### Debugging

The remote debugger is usually available at:
http://localhost:19000/debugger-ui/

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

Now use the sdkmanager to download the SDK tools for API 31 (Android 12+).
Lower APIs are not accepted into the PlayStore anymore so it doesn't make sense to target those.

```
~/android-sdk/cmdline-tools/latest/bin/sdkmanager --update
~/android-sdk/cmdline-tools/latest/bin/sdkmanager "platforms;android-31" "extras;google;m2repository" "extras;android;m2repository"
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