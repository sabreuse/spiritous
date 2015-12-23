#To Do

## Requests
  * Information that only GM can see, with progressive/roll based reveal (some info/more info/lots of info)
  * AN ASPECT IS A FUNCTIONAL HOOK (an API??) NOT A DATA OBJECT
  * a vehicle is a (companion-like) character (has aspects, stress, consequences, backstory)
  * need 3 tracks for consequences (physical, mental, social stresses)

## User Actions
  * a player can log in to the app
  * a player can create or edit their multiple characters, which may be used as either playable or NPCs. at creation, characters can only be viewed by their creators
  * a player can determine if/when a character they created becomes public
  * a player can view other players' public characters
  * a player cannot view other players' non-public characters
  * a player can create scenes
  * a player can add characters they control to an existing session
  * a player can roll the dice
  * a player can use any of a character's skill modifiers to affect the total value of a roll
  * a player can create a new session; they become the GM for that session
  * a player can spend a fate point
  * a GM can attach scenes to a session
  * a GM can attach new aspects to any character; they may be specific to the session or permanent
  * a GM can compel an aspect
  * a GM can grant fate points to characters, either at the beginning of a session or at any time in the course of play
  * a player can accept or refuse a new aspect (and fate point) from the GM
  * points, consequences etc can be reset at the end of a scene

## Data
  * Player
    * Name
    * Email
    * Password/some kind of auth token
    * (a Player has many Characters)

  * Character
    * (a Character belongs to a player)
    * Name
    * Nickname
    * Aspects
    * Skills
    * Stunts
    * Gadgets
    * Is Public?

  * Group // char + several minions. used for group strength calculations in combat
    * (has many characters)
    * Aspects??

  * Scene
    * Location
    * Creator (belongs to a player)
    * Is Public?
    * Aspects

  * Session
    * Date
    * GM Notes (private to GM, session setup/background)
    * Belongs to a player (the Creator/GM)
    * Has many characters
    * Has many scenes
    * Knowledge (plot/discovery passed to players in the course of the game)

  * Aspect
    * Description
    * polymorphic

## UI
  * Login screen
  * Player list
  * Character lists
    * My characters
    * Other characters viewable by me
  * Individual character sheet
    * Dice rolls (with modifiers)
    * Health, Composure stress counters
    * Consequences (may persist between sessions)
  * Session list
    * Join session button
    * Create new session form

## Project
  * [x] set up a repo
  * invite others
  * set up hosting