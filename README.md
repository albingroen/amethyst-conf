# amethyst-conf
A Node.js package and CLI for programmatically updating your Amethyst configuration

## Introduction

### Requirements

- Configuration file is in the default location
- Restart Amethyst manually after execution
- Module runs in Node and not browser
- CLI and module runs on MacOS

## Installation

### CLI

    npm install -g amethyst-conf

### Module

    npm install amethyst-conf

## Usage

### CLI

    amethyst-conf --screen-padding-left=700 --screen-padding-right=700

### Module

    import { updateConfig: updateAmethystConfig } from 'amethyst-conf'

    updateAmethystConfig({
      screen-padding-left: 700,
      screen-padding-right: 700
    })
