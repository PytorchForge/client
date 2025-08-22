# ML Pipelines Client

This is the main public client for ML Pipelines, accessible globally. It leverages Tauri for building cross-platform desktop applications, ensuring compatibility across various operating systems and hardware.

## Project Overview

The ML Pipelines client serves as a comprehensive frontend for managing machine learning workflows. It provides a user-friendly interface that seamlessly integrates with a powerful Python-based backend service (built with FastAPI). This integration allows users to:

- **Configure ML Tasks:** Define and configure various machine learning tasks, including:
  - **Image Processing:** Classification, Object Detection, Image Segmentation, Image Generation.
  - **Text Processing:** Text Classification, Sentiment Analysis, Named Entity Recognition, Text Generation, Machine Translation, Text Summarization.
  - **Audio Processing:** Speech Recognition, Audio Classification, Audio Generation, Voice Conversion.
  - Each Processing pipeline, includes its own set of transformers with the capability to add pretrained models over even custom layers with desired configuration.
  - Configuration can also be managed for losses, optimizer, schedulars and early stopping.
- **Generate Code:** Automatically generate necessary Python code for data processing, model definition, training configuration, and more, based on user inputs and selected ML tasks. This is achieved through a templating system (Jinja2) managed by the backend parser.
- **Backend Communication:** Efficiently communicate with the backend via FastAPI to send configurations, receive generated code, and manage the execution of training or inference scripts. The backend handles the heavy lifting of code generation and execution.
- **Visualize Results:** Display training progress, inference results, and other relevant outputs from the backend.

The client supports a wide range of ML tasks and offers flexibility through various pre-trained model architectures and preprocessing options, making it a versatile tool for ML practitioners.

## Supported Platforms

We provide pre-built binaries for:

- **macOS**
  - Apple Silicon (aarch64): `.dmg`, `.tar.gz`
  - Intel (x64): `.dmg`, `.tar.gz`
- **Linux** (currently only working version)
  - `.AppImage`, `.rpm`, `.deb` for amd64/x86_64
- **Windows**
  - `.exe`, `.msi` installers for x64

You can find them in [releases section](https://github.com/PytorchForge/client/releases)

## Supported CPU Architectures

The client is built to support the following CPU architectures, ensuring broad compatibility:

- **x86_64**: Standard for most desktop and server CPUs (e.g., Intel, AMD).
- **aarch64**: Common for ARM-based processors, including many mobile devices and Apple Silicon Macs.
- **amd64**: (Synonym for x86_64, often used in Linux contexts).

## Prerequisites

To develop or run this project, ensure you have the following prerequisites:

- **Node.js and npm** (or yarn/pnpm) installed.
- **Tauri prerequisites**: Make sure you adhere to the [prerequisites](https://v2.tauri.app/start/prerequisites/) for Tauri development.

## Development

If you are interested in contributing to the development of this client, or if you wish to run the project locally, follow these steps:

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run Locally:**
    ```bash
    npx tauri dev
    ```
    OR
    ```bash
    npm run tauri-dev
    ```

## Use Client

For users who want to utilize the client without developing it, pre-built binaries are available in the [releases section](https://github.com/PytorchForge/client/releases) of the GitHub repository. (0.1.0-3 latest known working)

currently only linux version is tested to be working.
to run, download latest appImage or deb or rpm, along with pyproject.toml.
make sure you have python and for simplicity install uv via pip.

uv sync to create venv and install libs, 
activate the venv and run the appimage in it.


*you can skip the venv and directly run if you install the libs as system packages in your distro, and then you can directly run the appimage*


# Releases

You can find the latest release binaries at: https://github.com/PytorchForge/client/releases

# Contribution Guidelines

We welcome contributions to the ML Pipelines client! To contribute effectively, please follow these guidelines:

- **Code Contributions:** We encourage contributions of new features, bug fixes, and improvements. When submitting your changes, please highlight your contributions by mentioning the lines of code you've added or modified. This helps in reviewing and integrating your work smoothly.
- **Reporting Issues:** If you encounter any bugs, have feature requests, or wish to provide suggestions, please report them in the [issues section](https://github.com/PytorchForge/client/issues) of the GitHub repository. Clear and detailed issue reports are highly appreciated.
