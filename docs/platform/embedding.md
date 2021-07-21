---
title: Embedding Your Project
---


On StackBlitz.com, you can create new projects and get the embed code from the 'Share' dropdown link in the top navigation like so:

<img src="https://i.imgur.com/a0pJ3nj.png" />

Then just paste the embed code in an iframe and you're good to go!

```html
<iframe src="https://stackblitz.com/edit/angular?embed=1"></iframe>
```

Alternatively, you can also use our [Javascript SDK methods](#open-and-embed-stackblitz-projects) for easily embedding StackBlitz projects on the page & avoid all the hassles of creating/configuring iframes.

## Embed Options

<table>
  <tr>
    <td><code>file</code></td>
    <td>File path</td>
    <td>The default file to have open in the editor</td>
  </tr>
  <tr>
    <td><code>embed</code></td>
    <td><code>0</code> / <code>1</code></td>
    <td>Force embed view regardless of screen size</td>
  </tr>
  <tr>
    <td><code>hideExplorer</code></td>
    <td><code>0</code> / <code>1</code></td>
    <td>Hide file explorer pane in embed view</td>
  </tr>
  <tr>
    <td><code>hideNavigation</code></td>
    <td><code>0</code> / <code>1</code></td>
    <td>Hide the browser navigation UI</td>
  </tr>
  <tr>
    <td><code>ctl</code></td>
    <td><code>0</code> / <code>1</code></td>
    <td>Require user to 'click to load' the embed</td>
  </tr>
  <tr>
    <td><code>view</code></td>
    <td><code>editor</code> / <code>preview</code></td>
    <td>Which view to open by default</td>
  </tr>
  <tr>
    <td><code>hidedevtools</code></td>
    <td><code>0</code> / <code>1</code></td>
    <td>Hide the debugging console in the editor preview</td>
  </tr>
  <tr>
    <td><code>devtoolsheight</code></td>
    <td><code>0</code> &lt; <code>height</code> &lt; <code>1000</code></td>
    <td>Set the height of the debugging console in the editor preview</td>
  </tr>
</table>

## Embed on Medium

In your Medium article, simply take your project URL (i.e. https://stackblitz.com/edit/angular) and paste it. After you hit enter, it should automatically become an embed.
