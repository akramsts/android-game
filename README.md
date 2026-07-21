# Gree Runner (Android)

The native Android version of **Gree Runner** — an endless 2D runner game. Jump over obstacles, chain "perfect" jumps for bonus points, and chase your high score. Built as a real Android app (APK).

## About

This is the native Android build of Gree Runner, sharing the same gameplay, scoring, themes, and sound design as the original release — rebuilt from the ground up as a standalone Android app for smoother performance, offline play out of the box, and no browser required.

## How to Play

Your score climbs automatically the longer you survive. Jump cleanly over an obstacle at height to build a **perfect streak** for multiplying bonus points — misjudge it and it's game over.

| Action | Control |
|---|---|
| Jump | Tap anywhere on screen |
| Start / Restart | Tap the on-screen button |
| Pause / Resume | On-screen pause control |
| Mute / Unmute Sound | On-screen sound toggle |

## Features

- **Endless procedural gameplay** — obstacles spawn continuously, with speed ramping up the longer you survive
- **Perfect jump streaks** — chain well-timed jumps for multiplying bonus points
- **Milestone callouts** — pop-up messages at score milestones (100, 200, 500, 800, 1200+)
- **Persistent high score** — saved locally on your device, no account needed
- **3 built-in themes** — Obsidian, Amber, and Platinum
- **Sound effects** — retro-style effects, fully mutable
- **Touch-first controls** — built for one-thumb play
- **Fully offline** — no internet connection required after install

## Installation

### Option 1: Install the APK
1. Download the latest `.apk` from the [Releases](https://github.com/akramsts/android-game/releases) section.
2. On your Android device, enable **Install from unknown sources** if prompted.
3. Open the downloaded APK and tap **Install**.
4. Launch Gree Runner from your app drawer.

### Option 2: Build from source
1. Clone this repository.
2. Open the project in **Android Studio**.
3. Let Gradle sync and download dependencies.
4. Connect a device (or start an emulator) and hit **Run**.

## Requirements

- Android 5.0 (API 21) or higher
- ~20 MB free storage

## Tech Stack

- **Kotlin** — app logic and game loop
- **Android SDK / Jetpack** — UI, lifecycle, and rendering
- **SharedPreferences** — persists high score, theme, and sound settings
- **Gradle** — build system

## Customization

- **Themes**: edit the theme color sets in `res/values` to add or tweak palettes.
- **Difficulty**: tune gravity, base speed, and obstacle spawn logic in the game loop class.
- **Icons / branding**: swap the launcher icons in `res/mipmap-*` and update the app name in `AndroidManifest.xml`.

## License

MIT — feel free to fork, modify, and use this project however you'd like.

---

Can you beat the high score?
