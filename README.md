# UNREAD

**Read carefully.**

UNREAD is a browser-based detective game told through a chat interface. The player receives a strange scheduled message from Dr. Casey Morgan, a lead AI engineer at Neuro, and gets pulled into a murder investigation hidden under corporate pressure, deleted commits, poisoned insulin, and staged digital evidence.

<img width="1919" height="1029" alt="Screenshot 2026-05-23 134952" src="https://github.com/user-attachments/assets/2cfa957b-ed20-4f23-a6b9-a8ba47cd8677" />
<img width="1919" height="1033" alt="Screenshot 2026-05-23 135014" src="https://github.com/user-attachments/assets/8ac02c96-cac3-4947-be34-7adac5cb382a" />

The game is built as a static web app, so it can run directly in the browser without a build step.

## What Kind Of Game Is This?

UNREAD is a narrative investigation game where the player:

- reads chat messages
- chooses how to respond
- finds or misses clues
- tracks evidence in Case Notes
- makes a final accusation
- gets one of multiple endings

<img width="1920" height="1030" alt="image" src="https://github.com/user-attachments/assets/a2475e50-2e8b-4310-9a83-286740fc6695" />
<img width="1920" height="1026" alt="image" src="https://github.com/user-attachments/assets/27eb6995-3614-4f18-9b78-453cd6aa65dc" />
<img width="1920" height="1029" alt="image" src="https://github.com/user-attachments/assets/dc6a9210-ec02-49b6-b96e-f7c0c08bdfef" />
<img width="1920" height="1030" alt="image" src="https://github.com/user-attachments/assets/82dc4593-af86-435a-9686-ba20caa72d1e" />
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/9ed62762-438c-45f7-b104-04646655d98f" />
<img width="1920" height="1029" alt="image" src="https://github.com/user-attachments/assets/983aadb4-feee-4455-9e51-408ad0c1b735" />
<img width="1920" height="1030" alt="image" src="https://github.com/user-attachments/assets/4f2397b7-d429-427d-b473-8c16f3c18546" />

It is not about picking the obvious “correct” answer every time. The player is meant to pay attention, ask better questions, and piece the truth together from fragments.

## How To Run

Open this file in your browser:

```text
unread_game.html
```

No install step is required.

The game uses local JavaScript files, so keep these files together in the same folder:

```text
unread_game.html
game-engine.js
scenes-data.js
Scenes/
```

## Main Files

### `unread_game.html`

The main game shell.

It contains the layout and UI structure:

- splash screen
- name entry screen
- chat interface
- Case Notes panel
- character/profile panels
- final accusation screens
- ending overlay

### `game-engine.js`

The gameplay engine.

It handles:

- chat histories
- scene playback
- typing indicators
- choice routing
- clue tracking
- hidden investigation flags
- final accusation flow
- ending evaluation
- restart behavior

### `scenes-data.js`

The structured scene data used by the engine.

This is what the game actually plays from.

### `Scenes/`

The story/design source files.

These Markdown files contain the written scenes and branching structure. They are useful for reviewing or editing the story, but the playable game runs through `scenes-data.js`.

## Gameplay Systems

### Chat Mode

Most of the game happens inside the chat interface.

### Case Notes

When the player finds a useful clue, it gets added to Case Notes.

A centered clue notification appears briefly to make the discovery feel important without explaining too much.

### Final Deduction

The final accusation does not happen inside chat.

The game switches into structured deduction screens:

1. choose the killer
2. choose the method
3. choose the motive
4. receive the ending

### Endings

There are three ending types:

- **Full Solve**: correct killer, method, motive, and enough evidence
- **Lucky Guess**: correct killer, but the evidence chain is incomplete
- **Cold Case**: wrong suspect or weak theory

The ending appears in a cinematic overlay with a restart button.

## Testing

For quick JavaScript checks, run:

```bash
node --check game-engine.js
node --check scenes-data.js
```
