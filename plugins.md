# Charte Simulation Charting
[Back to README](README.md)

## Plugins

You can extend Charte via the use of plugins.
Plugins are nothing more than script and resource files contained in folders that you interface with the existing system.
Plugins can be found in the `plugins/` directory, where you can add plugins.

### Creating a Plugin

To create a plugin, navigate to the source code's `plugins/` directory and add a subfolder.
You can name the subfolder whatever you like, though it is good practice to have your organization name included in the plugin name to avoid conflicts: the orgianization "Charte" would make a "card" plugin under the `plugins/` folder `charte-card/`.
In the fresh new subfolder, create a javascript file named `plugin.js`. This will be the main script loaded by Charte.
From there, you can build up your plugin.

Due to the nature of Charte's design, you need to update some code to let Charte know to load your plugin.
In the `plugins.js` file, add a string to the `pluginScripts` array that contains the name of your plugin folder.
The final thing is to check your `config.js` file and ensure that `plugins.enabled` is set to `true`.
As long as you have your plugin in the correct folder, with the name in the array and the plugin.js `file`, you should have no problem and can refresh the page to see your plugin in effect.

---
[Back to Top](#)
