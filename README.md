# <img src="public/favicon/favicon-32x32.png" width="32" alt="🌌" style="vertical-align:middle;"> Galaxy Portfolio

**A cosmic, interactive 3D portfolio by Pitter Smith - [top.dev](https://top.dev)**

[![License: Custom](https://img.shields.io/badge/license-personal--use--only-red)](https://github.com/top-dev0810/super-portfolio/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-top.dev-purple?style=flat-square)](https://top.dev)
[![Hours Spent](https://img.shields.io/badge/Hours%20Spent-250%2B-blue?style=flat-square)](https://github.com/top-dev0810/super-portfolio)

## 📑 Table of Contents
- [Overview](#-overview)
- [Demonstration](#-demonstration)
- [The Experience](#-the-experience)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Additional Features](#-additional-features)
- [Used Sources & Attribution](#-used-sources--attribution)
- [Developer Notes](#-developer-notes)
- [Contact](#-contact)
- [Work With Me](#-work-with-me)

## 🚀 Overview

Welcome to **Galaxy Portfolio** – an interactive 3D portfolio that lets you zoom from the Milky Way galaxy all the way down to my workspace.

**Live Demo:** [top.dev](https://top.dev)

## 📸 Demonstration

<div align="center">
  <h3>Desktop Experience</h3>
  
  https://github.com/user-attachments/assets/d192ba9d-00c7-41fd-82a2-80704debbe65

  <h3>Mobile Experience</h3>
  
  https://github.com/user-attachments/assets/ffb6b011-116c-4390-834c-477ada2167ea

</div>

## 🌌 The Experience

Imagine zooming through space like a cosmic traveler: Start at our Milky Way galaxy, fly between the stars to reach our solar system, approach Earth, and eventually arrive at my workspace where you can explore my actual portfolio.

This interactive journey works like Google Earth but goes much further - from space to my desk. Move with simple scrolling or swiping gestures.

Why build it this way? Because portfolios should be memorable experiences, not just static pages. Enjoy the journey! 🚀

## ✨ Features

- **Immersive 3D Navigation:**  
  Zoom from the galaxy → solar system → earth → continent → city → district → my studio, all in real-time 3D.

- **Custom GLSL Shaders:**  
  Realistic sun, planets, nebula, and atmospheric effects.

- **Responsive & Mobile-Ready:**  
  Works on desktop and mobile, with different journey endpoints and helpful navigation hints. **Note for iOS users:** Due to WebKit restrictions, interactive HTML elements may work differently on iOS devices.

- **Platform-Specific Experience:**  
  The system detects your device and adapts accordingly. On iOS, the portfolio automatically enters fullscreen mode for better interaction, while on other platforms this remains optional.

- **Performance Optimized:**  
  Asset preloading, scene (shader) precompilation, and post-processing for smooth visuals.

- **Real HTML Portfolio Integration:**  
  My actual portfolio is rendered inside a 3D monitor and phone (depending on what device you're on), fully scrollable and interactive (except IOS).

- **Open Source:**  
  Fork, learn, and contribute! See [ATTRIBUTION.md](./ATTRIBUTION.md) for all credits.

## 🛠️ Tech Stack

- **Frontend:**  
  [React](https://react.dev), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)

- **3D Engine:**  
  [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), [@react-three/drei](https://github.com/pmndrs/drei)

- **Postprocessing:**  
  [three/examples/jsm/postprocessing](https://threejs.org/docs/#examples/en/postprocessing/EffectComposer)

- **Styling:**  
  Custom CSS, [Font Awesome](https://fontawesome.com/), [Google Fonts](https://fonts.google.com/)

## 🧑‍💻 Project Structure

    src/
      core/         # Scene management, asset preloading, scene precompiling
      scenes/       # 3D scenes (Galaxy, SolarSystem, Earth, Room, etc.)
      shaders/      # Custom GLSL shaders for sun, planets, glow, etc.
      hooks/        # React hooks
      ui/           # UI overlays (navigation hints, loading, text, etc.)
      assets/       # 3D models, textures, icons
      config/       # Scene and animation configuration
      utils/        # Helper utilities (gesture/scroll navigation, etc.)
      types/        # TypeScript type declarations
        css.d.ts    # CSS modules declaration (fixes CSS import errors)
    public/
      assets/       # Static assets (CSS, images, fonts)
      templates/    # HTML portfolio rendered in 3D monitor/phone
      favicon/      # Favicon and manifest
    docs/
      assets/       # Readme assets
        images/     # Images for README
    assets-source/
      blender/      # Original Blender source files for 3D models
## 🌠 How It Works

- **Scene Transitions:**  
  Scroll (desktop) or swipe (mobile) to zoom in and out between scenes. Transitions are animated and scenes are precompiled for a smooth experience.

- **3D Models & Textures:**  
  Models are optimized, compressed and converted with [gltfjsx](https://github.com/pmndrs/gltfjsx). Textures are compressed for faster loading.

- **Shaders:**  
  The sun and planets use custom GLSL shaders for a more realistic look.

- **Portfolio in 3D:**  
  My real HTML portfolio is rendered inside a 3D monitor and phone, and you can scroll and interact with it. Depending on which device you are using, you will be shown the corresponding one.

## 🏁 Getting Started

1. **Clone the repo:**
    ```bash
    git clone https://github.com/top-dev0810/super-portfolio.git
    cd galaxy-portfolio
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run locally:**
    ```bash
    npm run dev
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

## 🧩 Customization

- **Add your own scenes:**  
  Duplicate a scene in `src/scenes/`, update `SCENE_MANAGER` in `src/config/config.tsx`, and wire up transitions.

- **Swap portfolio content:**  
  Edit `public/templates/Portfolio.html` and its CSS.

- **Change models/textures:**  
  Replace files in `src/assets/models/` and `src/assets/img/`. Use [gltfjsx](https://github.com/pmndrs/gltfjsx) to convert `.glb` models to React components (for phone and monitor models).

## 🏆 Additional features
- **Performance first:**  
  Asset preloading, scene precompilation, and postprocessing are all tuned for smoothness.

- **Open and extensible:**  
  Fork, learn, and adapt any part of this project for your own needs.

## 📚 Used Sources & Attribution

For a complete list of all third-party models, textures, icons, and references used in this project, please see [ATTRIBUTION.md](./ATTRIBUTION.md).

## 📝 Developer Notes

- **Room model optimization:**  
  After every change to the room in Blender, export it with compression and additionally compress the model using gltfjsx before moving it to the project.
  Run this command in your terminal:
  ```bash
  npx gltfjsx room_from_blender.glb --keepnames --transform --resolution=512 --format=png --simplify --instanceall
  ```
  This will optimize and compress your GLB model for best performance.

- **Lightmap baking for optimal performance:**  
  To achieve realistic lighting without the runtime cost of real-time lighting calculations, I used my custom [Blender Batch Lightmap Baker](https://github.com/top/blender-batch-lightmap-baker) script. This tool automates the tedious process of creating and applying lightmaps to 3D models, which significantly reduces render times while maintaining visual quality. For the room scene specifically, baked lighting cut GPU usage by ~40% compared to real-time lighting, giving that smooth 60+ FPS experience even on mid-range devices. The script handles UV unwrapping, material setup, and texture output in one go - saving hours of manual work per model.

- **After changing phone or monitor 3D model:**  
  Re-run `npx gltfjsx <model.glb>` and update the corresponding React component.

- **Modifying the room:**
  The original Blender source files are available in the `/assets-source/blender/` directory. After making changes:
  1. Export as GLB with compression enabled
  2. Run the gltfjsx optimization command

- **Cross-platform HTML integration:**  
  The portfolio includes a special fullscreen mode implementation to handle browser-specific behaviors. Safari on iOS (and by extension all iOS browsers which use WebKit) restricts interaction with embedded HTML content that uses 3D transforms. To maintain consistent functionality across all devices, the system automatically enables fullscreen mode on iOS devices while making it optional on other platforms. This approach ensures visitors can interact with the portfolio content regardless of their device, while maintaining the immersive 3D experience where supported.

- **WebGL2 detection:**  
  The project includes a WebGL2 detection process to ensure compatibility across browsers. This prevents resource-intensive 3D scenes from loading on incompatible devices.

- **Scene precompilation:**  
  The portfolio uses a scene (shader) precompilation system to eliminate frame drops during scene transitions. Instead of the typical approach of preloading assets, this system actually renders all scenes to a 1×1 pixel offscreen buffer during loading. This triggers WebGL to compile all shader&material programs before they're needed in the actual scene.

  When you first transition to a new scene in most WebGL applications, there's often a momentary freeze as shaders compile. This is especially noticeable on mobile devices. My precompiler eliminates this by ensuring all GPU programs are ready before you ever see the scene.

  The implementation leverages React portals to temporarily mount components in a virtual scene, forcing the GPU to generate all required shader&materials variants. Once compilation is complete, the scenes remount in the visible scene graph with zero compilation overhead.

  This creates that buttery-smooth navigation experience as you zoom from galaxy to the studio without a single dropped frame.

  <details>
      <summary>👁️ <b>See visual comparison</b></summary>
      <div align="center">
        <h4>Without Precompilation (notice the jank almost 0.6 seconds + following junks)</h4>
        <img src="docs/assets/images/precompilation/before.webp" width="600" alt="Without scene precompilation">
        <h4>With Precompilation (notice the only jank is just 78ms - unnoticeable)</h4>
        <img src="docs/assets/images/precompilation/after.webp" width="600" alt="With scene precompilation">
      </div>
    </details>  

- **Performance tips:**  
  - Use compressed models (gltfjsx).
  - Keep models low-poly where possible.
  - Test on both desktop and mobile.

## 💬 Contact

- **Email:** [victory0810.k@gmail.com](mailto:victory0810.k@gmail.com)
- **LinkedIn:** [Pitter Smith](https://www.linkedin.com/in/vladyslav-shtatskyi-8752092a7/)
- **Telegram:** [@playweb3](https://t.me/playweb3)

## 🤝 Work With Me

I'm available for freelance projects and full-time positions. If you liked this portfolio and need a Software Engineer -
**[Email me directly](mailto:victory0810.k@gmail.com) to discuss how I can help you.**

---

## ⭐️ If you like this project...

- Star it on [GitHub](https://github.com/top-dev0810/super-portfolio)
- Share your feedback or fork for your own cosmic journey!
