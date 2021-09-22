# landing project

## table of contents

- [Tools Required](#tools-required)
- [Installation](#installation)
- [Development](#development)
- [Features](#features)

#### Tools Required

No additional tools are required . only a text-editor of your own .

#### installation

No additional installation is required for this project.

#### development

- First part was building dynamically sections in the navbar of the page.
  This was accomplished by using these methods :
  </br> `forEach loop` </br> `document.querySelector` </br> `insertAdjacentHTML` </br>

* Next part is to add the functionality to scroll to sections. This got accomplished by using `scrollIntoView()` method .

- Last part is adding functionality to distinguish the section in view. This got accomplished by using the `.getBoundingClientRect()` method . Active states have to be added to the sections as well as the corresponding nav-links.

#### Features

- Active State change for sections and nav links as user scrolls the viewport.
- Scrolling with smooth behvior using `scrollIntoView` when a nav section is getting clicked .
