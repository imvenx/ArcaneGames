# Basic UI project GDD:

This is meant to be the starter template to many of the games we will make in the future. The big rectangle represents the PC/TV screen viewer, and the small rectangles are the gamepads/smartphones 

IMPORTANT: This is a guideline, but I will appreciate criticism/proactivity, if you think something should or could be done diferently or if you don't understand something please Let me know.

## Requirements

1. Support for animation transition on UI change for the button and panel component if applicable, implement a simple fade-in fade out, but has to be possible to add new animation without having to update each button one by one but as a prefar or some sort system.

2. Authoritative Viewer State: The gamepad sends inputs like "Player 1 pressed start button", the viewer listens to this event and decides to emit to al gamepads if necesary the "start" event for example which would change the UI of gamepads and viewer. The gamepads can have also they're own state like when they go to menu or settings for example so they don't need to tell anyone about this.

3. Button press sound: The button component must support a sound on press, and we can change this sound only once to affect all buttons, or disable sound aswell.

4. Panel and Button Component/Prefab/Scene: We can modify all instances of panels and buttons, they have they're own class to do things like check if animate on appear/disappear, if play sound on press in case of button, and we can change the texture to all instances too with this prefab/scene

5. Load different scenes/levels seamlessly while bringing the whole ui big singleton game object which contains all the things that we shouldn't destroy on load other scene, also on navigate to main scene back we should prevent creating again anything that is already created.

6. (?)(OPTIONAL) Be able to load game scenes without having to go to main, for example I want to play level 4 without having to navigate to main scene, press play, and select level 4. This has to be evaluated as if it is too complex or too game dependent maybe we don't want to do it.

7. Separate view manager in more classes: The ViewManager.cs script has already too many responsibilities, so we may need to rethink how we structure our UI to work and scale better in the future with a game.

8. Check if we should make use of observer pattern, or any other patterns, right now almost all is global so we make calls to static functions from anywhere.. this approach is easy at first but maybe we want to change it, or maybe is ok, we need to think about it and all the other possible software design desicions.

9. On Gamead gets connected it should load the right pad according to the view, so it gets the current ui state, and it loads the corresponding ui panels/scenes.

10. We may want to add a settings pad, accessible from the level select pad and on the menu pad in game, which is independent from the ui state, and is on top of the other pads, since is a local state not a global one like the other gamepads. This pad will be used for things like lower the volume of the game etc..

11. We want a loading panel or smt for when we load a scene with a lot of meshes on a low end device, so it signals the scene is loading, just a text saying "loading..." is enough for the time being

12. Gamepad and GameView should be responsive, keep in mind this could be played on a TV, a PC, or even a phone, yes the view can be on a phone or tablet, altho not very widespread use yet, we support android devices, so we need to make and test all is responsive. 

13. Project is open source so we need to make sure all the assets we use are compatible with open source project, or we own them, and we need to take care of attributing credit to any resource that requires it.

## Unity Example: https://github.com/imvenx/mini-golf

This unity example has implemented already the ui system, altho is all working, I rushed it and I don't like how is done since is all put together on a big singleton "ViewManager" without any design pattern, also the scene changes destroyed some necesary objects so I had to put all inside the ViewManager gameobject and make don't destroy on load, while this approach works, is not very nice I think, and could be improved to scale better in the future and be more readable, efficient, and clean.

## GDD: 

<img src="./basic-ui.svg" />