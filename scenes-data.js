// Generated from Scenes/*.md. Do not hand-edit scene content here; edit Markdown and regenerate.
window.UNREAD_SCENES = {
  "Ending-Cold-Case": {
    "id": "Ending-Cold-Case",
    "title": "Ending: Cold Case",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "The accusation collapses."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Neuro's lawyers bury everything under motive, misconduct, and reasonable doubt."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "J.R. resigns. Blackwell sells the wreckage. Sam cooperates. Dmitri disappears into another contract."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex stays quiet."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey's last message remains in your inbox."
      },
      {
        "speaker": "system",
        "label": "System",
        "text": "Cold Case Ending unlocked."
      },
      {
        "speaker": "system",
        "label": "System",
        "text": "The truth was there, but the case did not hold."
      }
    ],
    "choices": []
  },
  "Ending-Full-Solve": {
    "id": "Ending-Full-Solve",
    "title": "Ending: Full Solve",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "They arrested Alex."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Not because one clue was perfect. Because the chain held."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "PROJECT_BLACKBOX tied Alex to the stolen data adapter. The emergency override placed them in the server room. `sec-mirror-02` staged the messages. The medical report gave them the insulin routine."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey was murdered because they read the system too carefully."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "You did too."
      },
      {
        "speaker": "system",
        "label": "System",
        "text": "Full Solve Ending unlocked."
      },
      {
        "speaker": "system",
        "label": "System",
        "text": "You identified the killer, the staging method, and the motive behind Casey Morgan's murder."
      }
    ],
    "choices": []
  },
  "Ending-Lucky-Guess": {
    "id": "Ending-Lucky-Guess",
    "title": "Ending: Lucky Guess",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex is in custody."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Your accusation pointed police in the right direction, but the first version had gaps."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "They had to recover the security mirror and rebuild Casey's local clone before the case held."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "You were right about the person."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "You almost missed why."
      },
      {
        "speaker": "system",
        "label": "System",
        "text": "Lucky Guess Ending unlocked."
      },
      {
        "speaker": "system",
        "label": "System",
        "text": "You named the killer, but your evidence chain was incomplete."
      }
    ],
    "choices": []
  },
  "A": {
    "id": "A",
    "title": "Scene A – Opening Chat",
    "contact": "casey",
    "messages": [
      {
        "speaker": "player",
        "label": "Player",
        "text": "hi, i’m the one on Stack Overflow who asked about the neural net question last week…\njust wanted some elaboration if you have time"
      },
      {
        "speaker": "casey",
        "label": "Casey",
        "text": "…did you read the documentation?\nit’s literally explained there.\nbottomline: you normalize the inputs before the activation function. don’t overcomplicate."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "ah okay thanks, really appreciate it"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I Got Into Neuro!"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Congrats! That’s Awesome."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Thanks! I heard our lead architect went to MIT, name's Casey. That sound familiar?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Morgan?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Yep Casey Morgan. Have you guys worked together at MIT?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Oh yeah, seen him around campus. He was in the same department. We exchanged a few messages once about some code."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Coool. He's my mentor, man's a genius."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Glad you got to work with him, congrats once again!"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Thanks {player_name}, wish you were here. We should hang soon!"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Bet! Lets catch up soonn"
      },
      {
        "speaker": "casey",
        "label": "Casey",
        "text": "If you’re reading this…\nI’m gone.\nDon’t try to fix anything yourself. Just trust no one, and check the legacy branch if you can."
      },
      {
        "speaker": "player",
        "label": "Player Response Options",
        "text": "“Casey? What happened?”\n_[Screenshot the message and check the timestamp]_\n_(Productive - player notices the message was sent at 11:52 PM, feels... scheduled? The tone doesn't match Casey's usual bluntness. 🔍 CLUE UNLOCKED: \"Scheduled farewell message\")_"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "{Name}, Casey is gone."
      },
      {
        "speaker": "player",
        "label": "Player Response Options",
        "text": "[“What? What do you mean gone?”](Scene-B1)\n[“I just got a message from Casey. What is happening?”](Scene-B2)"
      }
    ],
    "choices": [
      {
        "text": "“Casey? What happened?”",
        "next": null,
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Screenshot the message and check the timestamp]",
        "next": null,
        "type": "productive",
        "clue": true
      },
      {
        "text": "“What? What do you mean gone?”",
        "next": "B1",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "“I just got a message from Casey. What is happening?”",
        "next": "B2",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "B1": {
    "id": "B1",
    "title": "B1",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River: (shocked)",
        "text": "They found Casey in the server room tonight.\nDead at 11:47 PM. Slumped over the keyboard.\nPolice are calling it suicide. Said there was a typed note, scheduled messages, empty insulin vial...\nBut {player_name}, Casey wouldn't do this. I know they wouldn't."
      }
    ],
    "choices": [
      {
        "text": "“Casey said in the message to check the legacy branch. Can you get me access to the repo?”",
        "next": "C1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "“Who else was at the office tonight? This doesn't feel like suicide.”",
        "next": "C2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "B2": {
    "id": "B2",
    "title": "B2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River: (mentions message)",
        "text": "Wait, you got one too?\nThat's weird... I thought those messages only went to close contacts. Family, the core team...\nWhy would Casey send you a farewell message? You guys barely talked, right?\nThey found him in the server room tonight. 11:47 PM.\nPolice are saying suicide, but something about this feels wrong."
      }
    ],
    "choices": [
      {
        "text": "“Casey said in the message to check the legacy branch. Can you get me access to the repo?”",
        "next": "C1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "“Who else was at the office tonight? And why would I get that message?”",
        "next": "C3",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "C1": {
    "id": "C1",
    "title": "Scene C1",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Legacy branch... yeah, that's in our Git repository. Casey used it for experimental code, stuff that wasn't ready for main.\nI can get you read access. Give me a sec."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay, sent you a temp login. But {player_name}, be careful.\nIf Casey left something there, someone at Neuro might not want it found."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The whole team was here tonight. J.R., Alex, Blackwell, Dmitri, Sam... everyone."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "They're all saying Casey seemed stressed lately. But I saw Casey yesterday and he seemed... focused. Not suicidal. Paranoid, maybe."
      }
    ],
    "choices": [
      {
        "text": "I'm checking the legacy branch now. What was Casey working on recently?",
        "next": "D1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Tell me about everyone who was there. Who had server room access?",
        "next": "D2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "C2": {
    "id": "C2",
    "title": "Scene C2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Everyone was here tonight. The whole core team.\nJ.R. (our CEO), Alex Chen (head of security), Morgan Blackwell (the VC who funded us), Dmitri Volkov (security consultant), and Sam Pierce (ops manager).\nWe were supposed to celebrate. Neurosift launches in 3 days."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I was in the main office when it happened. Casey was in the server room alone - door was locked from inside.\nBy the time we broke in... Casey was already gone."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But here's the thing - Casey sent me an encrypted message two days ago. Just said \"insurance policy in place.\"\nThat doesn't sound like someone planning to end it."
      }
    ],
    "choices": [
      {
        "text": "Casey's message mentioned a legacy branch. Can you get me access to the repo?",
        "next": "D3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who would want Casey dead? Any tension with the team?",
        "next": "D4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "C3": {
    "id": "C3",
    "title": "Scene C3",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Honestly? I don't know why you got that message.\nCasey's system sent it to family, close friends, the core team... and apparently you.\nUnless... did you two talk more than just that one Stack Overflow thing?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The whole team was at the office tonight. J.R., Alex, Blackwell, Dmitri, Sam... everyone.\nWe were supposed to be celebrating. Neurosift launches in 3 days."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey was in the server room alone. Door locked from inside. By the time we got in... it was too late.\nBut the Casey I knew wouldn't do this. And that message you got? That feels like a mistake. Or a clue."
      }
    ],
    "choices": [
      {
        "text": "The message said to check the legacy branch. Can you get me access?",
        "next": "D3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who would want Casey dead? Was there conflict with anyone?",
        "next": "D4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "D1": {
    "id": "D1",
    "title": "Scene D1",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey was obsessed with Neurosift's training data lately. Like, _obsessed_.\n\nKept running queries, checking logs, muttering about \"anomalies\" and \"patterns that shouldn't be there.\"\n\nWhen I asked what was wrong, Casey just said \"you'll see soon enough.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Last week Casey encrypted everything. Personal files, work notes, even our Slack DMs.\n\nThen three days ago, that Git commit: \"Insurance policy. If anything happens to me, check the legacy branch.\"\n\nNext day? Commit's gone. Deleted from main branch."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I tried asking Casey what was going on. They said: \"Someone's hiding something in the data. And when I prove it, everything burns.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "You're in. Legacy branch should be visible now.\n\nBut {player_name}... if Casey was killed for what they found, whoever did it might be watching the repo."
      }
    ],
    "choices": [
      {
        "text": "I'm looking at the legacy branch now.",
        "next": "E1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who else has access to delete commits and monitor the repository?",
        "next": "E2",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "D2": {
    "id": "D2",
    "title": "Scene D2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Server room access? That's restricted.\n\nOnly Casey, Alex (security head), and J.R. (CEO) have keycard access.\n\nPlus Dmitri, the security consultant - Casey gave him temporary access for penetration testing.\n\nSam has the master override key for emergencies, but it logs every use."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Here's what's weird though - the door was locked _from the inside_ when we found Casey.\n\nPolice said that proves it was suicide. No one could've gotten in or out."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But Alex is head of cybersecurity. If anyone could fake digital locks and access logs... it's Alex.\n\nAnd Dmitri literally specializes in bypassing security systems."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey didn't trust either of them. Called Dmitri a \"corporate spy\" and said Alex \"sold out our research.\""
      }
    ],
    "choices": [
      {
        "text": "Could someone have tampered with the access logs or the lock system?",
        "next": "E3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Tell me more about Alex and Dmitri. Why didn't Casey trust them?",
        "next": "E4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "D3": {
    "id": "D3",
    "title": "Scene D3",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Yeah, I can get you in. Give me a second."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay, sent you temp credentials. Legacy branch should be visible.\n\nBut {player_name}, be careful. If Casey hid something there, someone already tried to delete it once."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey's last commit message was \"Insurance policy. If anything happens to me, check the legacy branch.\"\n\nThat commit got force-deleted from main three days ago. Right after Casey started acting paranoid."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Whatever Casey found in Neurosift's code... it was bad enough to kill for."
      }
    ],
    "choices": [
      {
        "text": "I'm checking the legacy branch now.",
        "next": "E1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who has the access rights to force-delete commits from the repository?",
        "next": "E2",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "D4": {
    "id": "D4",
    "title": "Scene D4",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Where do I even start?\n\nJ.R. (our CEO) has been trying to sell the company behind Casey's back. Casey found out last month and threatened to quit and take Neurosift with them.\n\nAlex Chen and Casey used to be research partners at MIT. Co-authored papers together. Then they had this massive falling out over who owned the IP for some algorithm. Haven't been the same since."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Morgan Blackwell - the VC who invested $15 million - has been pushing to launch Neurosift early despite Casey's objections.\n\nCasey kept saying the training data had \"ethical issues\" and \"unresolved anomalies.\" Blackwell didn't care. Just wanted the product shipped."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Dmitri Volkov, the security consultant? Casey was convinced Dmitri was a corporate spy. Said Dmitri was feeding intel to competitors.\n\nAnd Sam Pierce... Sam handles all the finances. Casey asked Sam to pull \"unusual transaction records\" two weeks ago. Sam's been deleting files ever since."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Any one of them had a reason to want Casey gone."
      }
    ],
    "choices": [
      {
        "text": "What happens to Neurosift now that Casey's dead? Who controls it?",
        "next": "E5",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Casey mentioned finding something in the training data. What was it?",
        "next": "E6",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "E1": {
    "id": "E1",
    "title": "Scene E1",
    "contact": "river",
    "messages": [
      {
        "speaker": "system",
        "text": "neuro/neurosift/legacy/\n├── training_data/\n│   ├── dataset_v1.json\n│   ├── dataset_v2.json\n│   ├── dataset_v3_REDACTED.json [DELETED]\n│   └── audit_log.txt\n├── models/\n│   └── experimental_build_032.py\n└── notes/\n    ├── casey_personal_notes.md [ENCRYPTED]\n    └── PROJECT_BLACKBOX.txt [LAST MODIFIED: 3 days ago]",
        "code": true
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "You seeing this?\n\nThere's a file called PROJECT_BLACKBOX. That wasn't there last time I checked the repo."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "And look - dataset_v3 is marked as REDACTED and deleted. But the audit log is still there.\n\nCasey must've kept a backup before someone scrubbed it."
      },
      {
        "speaker": "system",
        "text": "PROJECT_BLACKBOX - CONFIDENTIAL\nTraining data audit reveals:\n- 847 data points sourced from UNAUTHORIZED origin\n- Metadata traces to: [ENCRYPTED HASH]\n- Financial transactions linked to external account\n- Data acquisition = ILLEGAL\nSomeone paid for stolen data.\nSomeone knew.\nSomeone is covering it up.\nIf you're reading this, I'm probably dead.\nCheck audit_log.txt for the proof.\n- Casey Morgan",
        "code": true
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Oh my god.\n\nCasey found out Neurosift was trained on _stolen data_?"
      }
    ],
    "choices": [
      {
        "text": "I'm opening the audit log. We need to see who's responsible.",
        "next": "F1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Did you know about this? Does anyone else on the team know?",
        "next": "F2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "E2": {
    "id": "E2",
    "title": "Scene E2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Force-deleting commits from the main branch? You need admin-level Git access.\n\nThat's Casey, Alex (head of security), J.R. (CEO), and... technically me. Casey gave me elevated permissions last month when I got promoted."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But here's the thing - force-deletes leave traces in the reflog. You can't completely erase them unless you really know what you're doing.\n\nAlex would know how. Dmitri probably would too."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Wait, let me check something..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I just pulled the reflog. The deletion happened at 11:52 PM.\n\nFive minutes _after_ Casey was found dead."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Someone logged in with Casey's credentials and deleted that commit while Casey's body was still in the server room."
      }
    ],
    "choices": [
      {
        "text": "Who was in the building at 11:52 PM? Can you check the access logs?",
        "next": "F3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Can you recover the deleted commit? What was Casey trying to preserve?",
        "next": "F4",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "E3": {
    "id": "E3",
    "title": "Scene E3",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Could someone tamper with the logs? Absolutely.\n\nOur access system runs on a local server. If you have admin credentials, you can backdate entries, delete records, whatever you want."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex has root access to that server. So does Dmitri - Casey gave it to him for the security audit.\n\nAnd honestly? Sam probably has access too. Operations manager sees everything."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The electronic lock on the server room door? It's connected to the same system.\n\nIf someone altered the logs to make it _look_ like the door was locked from inside... we'd never know."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey knew this. That's why they started keeping physical notes, encrypted backups, offline copies of everything.\n\nThey didn't trust the digital trail anymore."
      }
    ],
    "choices": [
      {
        "text": "Did Casey leave any physical notes or backups? USB drives, anything?",
        "next": "F5",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Even if they're tampered with, let's look at the access logs. Maybe the killer made a mistake.",
        "next": "F6",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "E4": {
    "id": "E4",
    "title": "Scene E4",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex Chen. Brilliant, paranoid, and bitter.\n\nAlex and Casey were partners at MIT - co-authored groundbreaking papers on neural networks. Then they had this massive fight over intellectual property.\n\nCasey claimed Alex stole their research and published it first. Alex said Casey was trying to take sole credit. It got ugly."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "When J.R. was building Neuro, Casey insisted on being lead architect. Alex got hired as head of cybersecurity instead.\n\nAlex never forgave that. I've seen the way Alex looks at Casey during meetings. Pure resentment."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "And Dmitri Volkov? That's where it gets weird.\n\nDmitri was hired six months ago as a \"security consultant\" to stress-test our systems. But Casey was convinced Dmitri was a corporate spy."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey found evidence that Dmitri had connections to our competitors. Encrypted communications, suspicious file transfers.\n\nCasey confronted J.R. about it. J.R. said Casey was being paranoid and kept Dmitri on anyway."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Two weeks later, Casey started encrypting everything and talking about \"insurance policies.\""
      }
    ],
    "choices": [
      {
        "text": "If Alex resented Casey that much, would Alex kill over it?",
        "next": "F7",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "What if Dmitri was sent here to steal Neurosift? Can we trace those communications?",
        "next": "F8",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "E5": {
    "id": "E5",
    "title": "Scene E5",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "That's the million-dollar question. Literally.\n\nCasey owned the core IP for Neurosift. The original algorithm, the architecture, everything.\n\nBut J.R. structured the company so that if Casey left or... died... the IP transfers to Neuro as a corporate asset."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey found out about that clause three weeks ago. Lost it. Said J.R. was \"setting up a hostile takeover.\"\n\nCasey threatened to quit and take the algorithm with them. Claimed they could prove the IP was theirs, not the company's."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Now Casey's dead, and J.R. controls everything.\n\nNeurosift launches in three days. J.R. has been in talks with buyers - rumor is a $200 million acquisition offer."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "And here's the thing: Casey's death makes the sale _easier_. No messy IP disputes. No ethical objections. No loose ends."
      }
    ],
    "choices": [
      {
        "text": "Who's trying to buy Neuro? And did they know about Casey's objections?",
        "next": "F9",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Casey said they could prove the IP was theirs. Did they have documentation?",
        "next": "F10",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "E6": {
    "id": "E6",
    "title": "Scene E6",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey never told me directly. But about two weeks ago, they were running weird queries on the training dataset."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Then one night I heard Casey on a call, voice shaking: \"This data didn't come from public sources. Someone _bought_ this.\""
      }
    ],
    "choices": [
      {
        "text": "Bought it? From who?",
        "next": "F11",
        "type": "productive",
        "clue": true
      },
      {
        "text": "What happened after that call?",
        "next": "F12",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F1": {
    "id": "F1",
    "title": "Scene F1",
    "contact": "river",
    "messages": [
      {
        "speaker": "system",
        "text": "NEUROSIFT TRAINING DATA AUDIT LOG\nDataset_v3 acquisition:\n- Source: DataVault Inc. (shell company)\n- Payment: $2.3M via external account\n- Authorization: [REDACTED]\nWarning: Data provenance untraceable\nWarning: No user consent documentation\nWarning: Potential legal liability\nTransaction approved by: S. PIERCE\nFinal authorization: J. REEVES",
        "code": true
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Sam Pierce authorized it. J.R. signed off."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "They knew. They both knew the data was illegal."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "And now Casey's dead."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "We need to talk to Sam. They handle all the contracts and payments."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Want me to reach out? Or do you want to message them yourself?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Sam directly.",
        "next": "G1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You talk to Sam. See what they say.",
        "next": "G2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F2": {
    "id": "F2",
    "title": "Scene F2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "What? No! I had no idea."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I just write code. I don't deal with data acquisition or contracts."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But {player_name}, if Casey found this... other people knew too."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The audit log says Sam Pierce authorized the payment. J.R. gave final approval."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "They knew the data was stolen and used it anyway."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Should I ask Sam about this? Or do you want to confront them yourself?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Sam. I want to see how they react.",
        "next": "G1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You ask them. You work together - might be less suspicious.",
        "next": "G2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F3": {
    "id": "F3",
    "title": "Scene F3",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Let me pull the access logs..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay, at 11:52 PM, these people were still in the building:"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "J.R. Reeves (CEO office) Alex Chen (security office) Morgan Blackwell (conference room) Dmitri Volkov (testing lab) Sam Pierce (operations floor)"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Any one of them could've accessed Casey's laptop remotely."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex has the technical skills. So does Dmitri."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Want me to ask Alex about it? Or would you rather reach out yourself?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Alex directly.",
        "next": "G3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You talk to Alex. See if they get defensive.",
        "next": "G4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F4": {
    "id": "F4",
    "title": "Scene F4",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Yeah, I can try to recover it from the reflog."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Give me a minute..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Got it. The deleted commit contained a file called \"INSURANCE_POLICY.md\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "It's a list. Names, dates, transactions."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Everyone who knew about the stolen data: J.R., Sam, Blackwell... and Alex."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex Chen is on this list. \"Head of Security - aware of data source irregularities since May 2025.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "If Alex knew and said nothing... they're complicit."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Should I confront Alex? Or do you want to?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Alex myself.",
        "next": "G3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You ask them. See what they say.",
        "next": "G4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F5": {
    "id": "F5",
    "title": "Scene F5",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey kept a USB drive on their keychain. Always."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But when the police cleared Casey's body... the keychain was missing."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Someone took it."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Sam was the one who \"secured\" Casey's personal effects. Handed everything to the police except..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Except that USB drive is nowhere in the evidence log."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Want me to ask Sam about it? Or do you want to?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Sam directly.",
        "next": "G1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You ask Sam. Don't mention the USB drive specifically - just see if they slip up.",
        "next": "G2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F6": {
    "id": "F6",
    "title": "Scene F6",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Alright, let me pull the server room access logs for that night..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay this is weird."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The logs show Casey entered the server room at 10:15 PM. Door locked behind them."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "No other entries until 11:50 PM when we broke in."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But there's a gap. A 3-minute window at 11:32 PM where the logging system went offline."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Someone with admin access could've disabled it, entered the room, and re-enabled it."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex controls that system. So does Dmitri."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Should I ask Alex about the gap? Or do you want to?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Alex about this.",
        "next": "G3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You bring it up with Alex. Act casual, like you're just curious.",
        "next": "G4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F7": {
    "id": "F7",
    "title": "Scene F7",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Honestly? I don't know."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex is bitter, yeah. But murder?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Then again... Alex had motive, means, and opportunity."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Motive: years of resentment over the IP dispute and Casey getting lead architect."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Means: Alex has admin access to everything - logs, locks, Casey's credentials."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Opportunity: Alex was in the building that night. Has the technical skills to stage it perfectly."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Maybe I should talk to Alex? Feel them out?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Or do you want to confront them directly?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Alex. I want to see how they react.",
        "next": "G3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You talk to Alex first. Don't let on that we suspect them.",
        "next": "G4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F8": {
    "id": "F8",
    "title": "Scene F8",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey kept logs of Dmitri's suspicious activity. Encrypted file transfers, late-night code access, meetings with competitors."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey was building a case to get Dmitri fired."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Then Casey died and all that evidence got wiped from the servers."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Want me to ask Dmitri about it? Or would you rather confront them yourself?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Dmitri directly.",
        "next": "G5",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You talk to Dmitri. See if they get nervous.",
        "next": "G6",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F9": {
    "id": "F9",
    "title": "Scene F9",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "TechCorp Industries. They're a massive AI conglomerate."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Blackwell's been negotiating the deal. $200 million acquisition."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey was the only one blocking it. Threatened to expose \"ethical violations\" if the sale went through."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Now Casey's dead and the deal's back on track."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I could ask Blackwell about it? Or you could message them directly."
      }
    ],
    "choices": [
      {
        "text": "I'll message Blackwell myself.",
        "next": "G7",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You reach out to Blackwell. Act like you're just curious about the acquisition.",
        "next": "G8",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F10": {
    "id": "F10",
    "title": "Scene F10",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey said they had proof. Original research notes, timestamped commits, email chains."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "All stored on an encrypted drive."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But after Casey died, J.R. had Sam clear out Casey's desk. Everything got \"secured.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "That encrypted drive? Never made it to the evidence log."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Want me to ask Sam what happened to Casey's belongings? Or do you want to?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Sam about it.",
        "next": "G1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You ask Sam. Don't mention the encrypted drive specifically.",
        "next": "G2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F11": {
    "id": "F11",
    "title": "Scene F11",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey never said who sold it."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "But the payment records would be in the company financials. Sam handles all vendor contracts."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "If there's a paper trail, Sam would know."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Should I ask Sam about data acquisition vendors? Or do you want to reach out yourself?"
      }
    ],
    "choices": [
      {
        "text": "I'll message Sam directly.",
        "next": "G1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You talk to Sam. See what they say.",
        "next": "G2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "F12": {
    "id": "F12",
    "title": "Scene F12",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey confronted J.R. the next morning. I heard them shouting."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "J.R. told Casey it was \"proprietary partnerships\" and to drop it."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey didn't. Started encrypting files, building audit trails."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Three days later, Casey pushed that \"insurance policy\" commit. Then it got deleted."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Someone didn't want that information getting out."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Should I ask J.R. about the argument? Or would you rather message them yourself?"
      }
    ],
    "choices": [
      {
        "text": "I'll message J.R. directly.",
        "next": "G9",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You talk to J.R. See how they react.",
        "next": "G10",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "Final-Accusation": {
    "id": "Final-Accusation",
    "title": "Final Accusation Phase",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Police are reopening the case."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "They will ask for one clear theory."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Not \"Neuro was corrupt.\" Not \"everyone lied.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Who killed Casey?"
      }
    ],
    "choices": [
      {
        "text": "J.R. Reeves killed Casey to save the acquisition.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      },
      {
        "text": "Alex Chen killed Casey to hide PROJECTBLACKBOX and the adapter.",
        "next": "Final-Method",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Sam Pierce killed Casey to hide the transactions.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      },
      {
        "text": "Dmitri Volkov killed Casey as corporate espionage.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      },
      {
        "text": "Morgan Blackwell killed Casey to protect the $15M investment.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      },
      {
        "text": "River Santos killed Casey after discovering the legacy branch.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      }
    ]
  },
  "Final-Method": {
    "id": "Final-Method",
    "title": "Final Accusation: Method",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "How?"
      }
    ],
    "choices": [
      {
        "text": "Alex used emergency access, poisoned Casey's insulin vial, then staged scheduled farewell messages and deleted the insurance commit from the security mirror.",
        "next": "Final-Motive",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Alex hacked Casey's laptop remotely and made the death look like suicide, but I cannot prove the insulin path.",
        "next": "Ending-Lucky-Guess",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Alex only deleted the commit after Casey's suicide to protect Neuro.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      }
    ]
  },
  "Final-Motive": {
    "id": "Final-Motive",
    "title": "Final Accusation: Motive",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "And why?"
      }
    ],
    "choices": [
      {
        "text": "Casey found PROJECTBLACKBOX: stolen training data laundered through DataVault, made usable by Alex's old adapter. Exposing it would destroy Alex's career and tie them to the illegal launch.",
        "next": "Ending-Full-Solve",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Alex hated Casey from MIT and wanted credit for Neurosift.",
        "next": "Ending-Lucky-Guess",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Alex was paid by Blackwell to make the acquisition easier.",
        "next": "Ending-Cold-Case",
        "type": "misdirection",
        "clue": false
      }
    ]
  },
  "G1": {
    "id": "G1",
    "title": "Scene G1",
    "contact": "sam",
    "messages": [
      {
        "speaker": "player",
        "label": "Player",
        "text": "Hey Sam, I need to ask you about some data acquisition records for Neurosift."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Who is this?"
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "How did you get my contact?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "I'm a friend of River's. I'm looking into what happened to Casey."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey's death was ruled a suicide. There's nothing to \"look into.\""
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "And company financial records are confidential. I can't discuss them with outsiders."
      }
    ],
    "choices": [
      {
        "text": "Casey's audit log says you authorized a $2.3M payment for illegal data.",
        "next": "H1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey's USB drive is missing from the evidence. You secured their belongings. Where is it?",
        "next": "H2",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey was investigating financial irregularities before they died. You were deleting files. Why?",
        "next": "H3",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "G2": {
    "id": "G2",
    "title": "Scene G2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Alright, I'll talk to Sam. Give me a few minutes."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Sam's acting really defensive. Asked why I was \"digging into company finances.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "I didn't even mention anything specific yet."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "River said you've been asking questions about Casey."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Look, I don't know what you think you're investigating, but Casey was unstable. Paranoid. Seeing conspiracies everywhere."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "The company is moving forward. Neurosift launches in two days. Let Casey rest in peace."
      }
    ],
    "choices": [
      {
        "text": "You authorized $2.3M for stolen data. Casey found proof.",
        "next": "H1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You cleared Casey's desk. Where's the USB drive that was on their keychain?",
        "next": "H2",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Why are you so defensive? What are you hiding?",
        "next": "H3",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "G3": {
    "id": "G3",
    "title": "Scene G3",
    "contact": "alex",
    "messages": [
      {
        "speaker": "player",
        "label": "Player",
        "text": "Hey Alex, I need to talk to you about Casey."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Who are you?"
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "And how did you get my contact information?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "I'm looking into Casey's death. I found some things that don't add up."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey's death was a suicide. Police confirmed it."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "I don't know what River told you, but you need to stop digging into company matters."
      }
    ],
    "choices": [
      {
        "text": "Someone deleted Casey's commit at 11:52 PM. Five minutes after they died.",
        "next": "H4",
        "type": "productive",
        "clue": true
      },
      {
        "text": "The access logs show a 3-minute gap. You control that system.",
        "next": "H5",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey's insurance file lists you as 'aware of data source irregularities.' You knew the data was stolen.",
        "next": "H6",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "G4": {
    "id": "G4",
    "title": "Scene G4",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay, I'll talk to Alex. Be right back."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "That was weird. Alex got really tense when I mentioned Casey's final commit."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Asked if anyone else had been \"poking around the repository.\""
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "River said you're investigating Casey's death."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "You need to be very careful. Casey went down a paranoid rabbit hole and it destroyed them."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Don't make the same mistake."
      }
    ],
    "choices": [
      {
        "text": "You have admin access. You could've deleted Casey's commit after they died.",
        "next": "H4",
        "type": "productive",
        "clue": true
      },
      {
        "text": "The access logs were disabled for 3 minutes. You control that system.",
        "next": "H5",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey documented that you knew about the stolen training data. You're complicit.",
        "next": "H6",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "G5": {
    "id": "G5",
    "title": "Scene G5",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "player",
        "label": "Player",
        "text": "Dmitri, I need to ask you about your work at Neuro."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I don't know you."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "How did you obtain my private contact?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "I'm investigating Casey Morgan's death. Casey believed you were a corporate spy."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey was paranoid and unstable. Made baseless accusations."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I was hired to improve Neuro's security. Nothing more."
      }
    ],
    "choices": [
      {
        "text": "Casey documented your encrypted communications with competing firms. File transfers. Suspicious meetings.",
        "next": "H7",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey was building a case against you. Then they died and all that evidence got wiped from the servers.",
        "next": "H8",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You had access to the server room. The access logs. Casey's credentials. You could've staged everything.",
        "next": "H9",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "G6": {
    "id": "G6",
    "title": "Scene G6",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "I'll feel Dmitri out. Hold on."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Dmitri just asked me if \"anyone from outside the company\" had been asking about Casey."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "That's... specific."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Your friend River is asking dangerous questions."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey made the same mistake. Saw threats that weren't there."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I suggest you stop before you meet the same fate."
      }
    ],
    "choices": [
      {
        "text": "Casey had evidence you were stealing code and selling it to competitors.",
        "next": "H7",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Funny how all of Casey's evidence against you disappeared after they died.",
        "next": "H8",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Did you just threaten me? Is that what you did to Casey?",
        "next": "H9",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "G7": {
    "id": "G7",
    "title": "Scene G7",
    "contact": "blackwell",
    "messages": [
      {
        "speaker": "player",
        "label": "Player",
        "text": "Ms. Blackwell, I need to talk to you about the TechCorp acquisition."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Who is this? How did you get my private number?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "I'm investigating Casey Morgan's death. Casey was blocking the acquisition."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey's death was a tragedy. But business continues."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "The acquisition benefits everyone. Shareholders, employees, the technology sector."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I don't appreciate outsiders meddling in private business matters."
      }
    ],
    "choices": [
      {
        "text": "Casey threatened to expose ethical violations. Now they're dead and the deal's back on.",
        "next": "H10",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You invested $15 million. Casey's death protects that investment.",
        "next": "H11",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "G8": {
    "id": "G8",
    "title": "Scene G8",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "I'll reach out to Blackwell. Give me a sec."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Blackwell just asked if I'd been \"discussing confidential company matters with unauthorized individuals.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "How would they even know we've been talking?"
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I understand you've been asking questions about Casey Morgan and company business."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey was brilliant but troubled. Their paranoia became destructive."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I suggest you let the authorities handle this matter and stop interfering."
      }
    ],
    "choices": [
      {
        "text": "Casey was about to expose something. That's why they're dead.",
        "next": "H10",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You had $15 million reasons to want Casey gone.",
        "next": "H11",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "G9": {
    "id": "G9",
    "title": "Scene G9",
    "contact": "jordan",
    "messages": [
      {
        "speaker": "player",
        "label": "Player",
        "text": "J.R., I need to talk to you about Casey."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I'm sorry, who is this?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "I'm investigating Casey's death. I know about your argument the day before they died."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey and I had a professional disagreement. That's all."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey was under immense stress. The launch pressure, the paranoia... it was tragic but not unexpected."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I'm not sure what you're implying, but I loved Casey like family."
      }
    ],
    "choices": [
      {
        "text": "You approved the purchase of stolen data. Casey found out and confronted you.",
        "next": "H12",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey's death gave you full control of Neurosift and cleared the way for the sale.",
        "next": "H13",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "G10": {
    "id": "G10",
    "title": "Scene G10",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Okay, I'll talk to J.R. Be careful though - they're sharp."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "..."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "J.R. just asked if I'd been \"sharing sensitive information with people outside the company.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "{player_name}, I think someone's been watching our conversations."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "River mentioned you're looking into Casey's death."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I appreciate your concern, but the police have closed the case. Casey took their own life."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Continuing to investigate will only cause pain for Casey's family and disrupt the company during a critical time."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I hope you'll respect that."
      }
    ],
    "choices": [
      {
        "text": "The audit log shows you approved illegal data purchases. Casey knew.",
        "next": "H12",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You benefit most from Casey's death. The IP, the sale - it's all yours now.",
        "next": "H13",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "H1": {
    "id": "H1",
    "title": "Scene H1",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Where did you get that information?"
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "That audit log is confidential company property. Accessing it without authorization is illegal."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "You're in over your head."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey found it. And now Casey's dead."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey was paranoid. Saw problems where there were none."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "DataVault Inc. was a legitimate vendor. The data acquisition was approved through proper channels."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "J.R. signed off on it. I just processed the payment."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "If you're looking for someone to blame, talk to J.R."
      }
    ],
    "choices": [
      {
        "text": "DataVault is a shell company. The data was stolen. You knew that.",
        "next": "I1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You're deflecting to J.R. But you authorized it. Your name is on the log.",
        "next": "I2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H2": {
    "id": "H2",
    "title": "Scene H2",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I secured Casey's belongings according to protocol."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Everything was logged and handed to the authorities."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Except the USB drive on Casey's keychain. It's not in the evidence log."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "..."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I don't know what you're talking about."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey didn't have a USB drive when I cleared the desk."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "River says Casey always had it. Never took it off."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Then maybe someone else took it before I got there."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "The server room wasn't exactly secure after we broke the door down."
      }
    ],
    "choices": [
      {
        "text": "You took it. What was on that drive that you didn't want found?",
        "next": "I1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who else had access to the server room before you secured it?",
        "next": "I3",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H3": {
    "id": "H3",
    "title": "Scene H3",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I delete files all the time. It's part of my job."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Old contracts, outdated records, duplicate documents."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey asked you to pull \"unusual transaction records\" two weeks ago. Then you started deleting files."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey asked me to pull a lot of things. They were obsessed with finding problems."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I gave Casey what they asked for. What they did with it isn't my responsibility."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "And yes, I cleaned up some files. Because Casey's \"investigation\" was creating chaos."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "We have a product launching in two days. I don't have time for conspiracy theories."
      }
    ],
    "choices": [
      {
        "text": "What did those transaction records show? What were you trying to hide?",
        "next": "I1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Casey found something in those records. That's why you deleted them.",
        "next": "I2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H4": {
    "id": "H4",
    "title": "Scene H4",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "I didn't delete anything."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "I have admin access, yes. But so do J.R., River, and Casey."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "The deletion happened at 11:52 PM. Five minutes after Casey was found dead."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Then someone used Casey's credentials. Not mine."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "If you're accusing me of murder, you're way out of line."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You have the technical skills to fake credentials. To stage everything."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "So does Dmitri. So does River, for that matter."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "You're grasping at straws."
      }
    ],
    "choices": [
      {
        "text": "You resented Casey for years. This was your chance to get rid of them.",
        "next": "I4",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Casey's insurance file lists you as complicit. You had motive to delete it.",
        "next": "I5",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "H5": {
    "id": "H5",
    "title": "Scene H5",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "A 3-minute gap? That's a system glitch."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "The logging server is old. It crashes sometimes."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Convenient timing. Right when someone could've entered the server room undetected."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Or it's just a coincidence."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "You're seeing patterns that aren't there. Just like Casey did."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You control that logging system. You could've disabled it manually."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "I could have. But I didn't."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Look, Casey and I had our differences. But I didn't kill them."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "If you want to find the real killer, look at who benefited most from Casey's death."
      }
    ],
    "choices": [
      {
        "text": "You benefited. Casey blocked your career for years.",
        "next": "I4",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Who are you suggesting? J.R.? Blackwell?",
        "next": "I6",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "H6": {
    "id": "H6",
    "title": "Scene H6",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "I knew there were irregularities. Yes."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "But I reported them to J.R. It wasn't my decision to move forward."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You knew and said nothing publicly. That makes you complicit."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "I'm head of cybersecurity, not ethics compliance."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "J.R. said the data acquisition was legal. I had no reason to doubt that."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Except Casey found proof it wasn't legal. And you're on the list of people who knew."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey's \"proof\" was circumstantial at best."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "And now Casey's dead, so we'll never know if they were right."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Convenient for you, isn't it?"
      }
    ],
    "choices": [
      {
        "text": "You're deflecting. You had motive, means, and opportunity.",
        "next": "I4",
        "type": "productive",
        "clue": true
      },
      {
        "text": "If J.R. knew, why didn't Casey confront them publicly?",
        "next": "I6",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H7": {
    "id": "H7",
    "title": "Scene H7",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey's \"evidence\" was fabricated paranoia."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I communicate with many people in the industry. That is normal."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Encrypted file transfers to competitor IPs. That's not normal."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I am security consultant. I test systems. Sometimes that requires external collaboration."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey did not understand my work. Made accusations without proof."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey was building a case against you. Then they died."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Perhaps Casey made enemies. Perhaps someone more dangerous than me."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "You should be careful who you accuse."
      }
    ],
    "choices": [
      {
        "text": "Are you threatening me? Like you threatened Casey?",
        "next": "I7",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Who else would want Casey dead?",
        "next": "I8",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "H8": {
    "id": "H8",
    "title": "Scene H8",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I did not wipe anything."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "If evidence disappeared, perhaps it was not real evidence."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey documented everything. Logs, communications, file transfers."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Then where is this documentation now?"
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Gone. Because it never existed."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Or because you deleted it after Casey died."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Many people have admin access to servers. Alex Chen, for example."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Alex had more reason to hate Casey than I did."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Perhaps you are investigating wrong person."
      }
    ],
    "choices": [
      {
        "text": "You're deflecting to Alex. But you had access to everything Casey documented.",
        "next": "I7",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "What was your real reason for being at Neuro? Who sent you?",
        "next": "I8",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "H9": {
    "id": "H9",
    "title": "Scene H9",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Yes, I had access. As did many others."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "J.R. gave me credentials for security testing. This is normal."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You could've accessed the server room. Tampered with logs. Used Casey's credentials."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I could have. But so could Alex. So could J.R. So could Sam with master override key."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "You accuse me because I am outsider. Easier target."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey didn't trust you. Called you a corporate spy."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey did not trust anyone."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "That paranoia killed them. Not me."
      }
    ],
    "choices": [
      {
        "text": "If you didn't kill Casey, who did?",
        "next": "I8",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Your threat earlier says otherwise. You're dangerous.",
        "next": "I7",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H10": {
    "id": "H10",
    "title": "Scene H10",
    "contact": "blackwell",
    "messages": [
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey made a lot of threats. Most of them baseless."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "\"Ethical violations\" is a vague accusation with no substance."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey found proof the training data was stolen. That would kill the acquisition."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "If such proof existed, where is it now?"
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey's dead. The evidence is gone. The deal proceeds."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Exactly. You had everything to gain from Casey's death."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I had everything to gain from Casey being _quiet_."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Murder draws attention. Investigations. Scrutiny."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "If I wanted Casey silenced, there are far more subtle ways."
      }
    ],
    "choices": [
      {
        "text": "Like staging a suicide? That's pretty subtle.",
        "next": "I9",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who else wanted Casey silenced?",
        "next": "I10",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H11": {
    "id": "H11",
    "title": "Scene H11",
    "contact": "blackwell",
    "messages": [
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I invested $15 million because Neurosift has potential."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey's death doesn't change the technology's value."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "But it removes the obstacle to selling. Casey was blocking the acquisition."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey was one voice. The board would have overruled them eventually."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I didn't need Casey dead. I needed Casey to be reasonable."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "But Casey wasn't being reasonable. So you made them disappear."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "You're speculating wildly."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I suggest you focus on facts, not conspiracy theories."
      }
    ],
    "choices": [
      {
        "text": "The facts are: Casey dies, you profit. That's motive.",
        "next": "I9",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "Who else on the board wanted Casey gone?",
        "next": "I10",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "H12": {
    "id": "H12",
    "title": "Scene H12",
    "contact": "jordan",
    "messages": [
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "The audit log is taken out of context."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "DataVault Inc. assured us the data was legally obtained."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey proved it wasn't. That's why you argued the day before they died."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey and I disagreed on many things. That doesn't make me a murderer."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I built this company. I gave Casey the resources to create Neurosift."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Why would I kill the person who made all of this possible?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Because Casey was about to destroy it all by exposing the illegal data."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey was going to _delay_ the launch. Not destroy anything."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "We could have handled it quietly. Fixed the data sources. Moved forward."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey's death made everything more complicated, not easier."
      }
    ],
    "choices": [
      {
        "text": "Unless you staged it to look like suicide. Then it's just tragic, not suspicious.",
        "next": "I11",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Who else knew about the illegal data?",
        "next": "I12",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "H13": {
    "id": "H13",
    "title": "Scene H13",
    "contact": "jordan",
    "messages": [
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I didn't \"benefit\" from Casey's death. I lost my lead architect."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Do you know how hard it is to replace someone like Casey?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "But now you control the IP. And the $200 million sale goes through."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "The IP clause was standard corporate structure. Casey knew about it when they signed."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "And yes, the sale is proceeding. Because the company must move forward."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey was the only thing blocking that sale. Now they're gone."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey was blocking a lot of things. Progress. Growth. Profitability."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "But I didn't kill them. I needed Casey alive and cooperative, not dead and martyred."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "A suicide investigation is bad for business. You think I wanted this?"
      }
    ],
    "choices": [
      {
        "text": "A suicide is better than a whistleblower. You chose the lesser evil.",
        "next": "I11",
        "type": "neutral",
        "clue": false
      },
      {
        "text": "If not you, then who? Who else had this much to gain?",
        "next": "I12",
        "type": "productive",
        "clue": true
      }
    ]
  },
  "I1": {
    "id": "I1",
    "title": "Scene I1",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "DataVault was not a normal vendor."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "It was a mailbox, a Delaware filing, and a bank account that changed names twice in six months."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Who controlled it?"
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I never got a person. Only invoices routed through \"Aster Compliance.\""
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey noticed the same phrase embedded in the training data manifests. PROJECT_BLACKBOX."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "They asked me to compare payment timestamps against repository access."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "The weird part? The first BLACKBOX payment cleared four minutes after Alex generated a new emergency admin key."
      }
    ],
    "choices": [
      {
        "text": "Send me the payment timestamps and the admin-key event.",
        "next": "J1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "So J.R. and Blackwell bought stolen data. That is enough motive.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I2": {
    "id": "I2",
    "title": "Scene I2",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "My name is on hundreds of logs because I process the paperwork."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "That does not mean I knew every clause, every dataset, every side agreement."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You deleted files."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I deleted drafts. Old invoices. Things legal told me to clean up before diligence."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "If Casey found something criminal, they did not show me the whole thing."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Ask someone technical. Ask Alex. Ask Dmitri. I cannot explain a dead commit."
      }
    ],
    "choices": [
      {
        "text": "Then tell me who had server-room access the night Casey died.",
        "next": "I3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You are still hiding behind paperwork.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I3": {
    "id": "I3",
    "title": "Scene I3",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Official access stops at 10:41 PM."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey badges in. River leaves. Dimitri signs out with security."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "\"Official\" access?"
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "There is an emergency override that does not appear on the visitor sheet."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "It was used at 10:58 PM. Not by Casey."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "The override was issued to Alex Chen's security admin account."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Alex said they were rotating keys after a phishing alert. I believed them."
      }
    ],
    "choices": [
      {
        "text": "Alex had an unlogged way into the server room before Casey dosed insulin.",
        "next": "J3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Dmitri signing out looks too convenient.",
        "next": "J5",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I4": {
    "id": "I4",
    "title": "Scene I4",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "You think resentment is the same thing as murder."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey and I fought because Casey treated collaboration like theft unless they were the one taking."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You had motive. You had access."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "So did half the company."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "J.R. had the sale. Blackwell had fifteen million on fire. Sam had the transactions. Dmitri had foreign-client stink all over him."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "If you want a confession, keep looking. I am not going to invent one for you."
      }
    ],
    "choices": [
      {
        "text": "Then explain why the emergency override points to you.",
        "next": "J3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Fine. I will ask someone less rehearsed.",
        "next": "J4",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I5": {
    "id": "I5",
    "title": "Scene I5",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey put half the company in that insurance file."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "That was the point. Noise. Fear. A dead man's switch with everyone named so no one could separate signal from paranoia."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "The deleted commit was signed."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey's key signed it."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey's key, or Casey?"
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "..."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Where did you get that distinction?"
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "From Casey. They never left signing keys unlocked overnight."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "The only other machine with a trusted signing token was the security mirror."
      }
    ],
    "choices": [
      {
        "text": "And you controlled the security mirror.",
        "next": "J3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "So Dmitri could have stolen it during the stress test.",
        "next": "J5",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I6": {
    "id": "I6",
    "title": "Scene I6",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey did not go public because they did not have clean proof yet."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "PROJECT_BLACKBOX was mixed into legitimate training data. It was not one stolen database sitting in a folder labeled crime."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "What was it?"
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Medical intake transcripts. Legal discovery dumps. Private customer-support archives. Scraped, laundered, relabeled."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey found the fingerprints in token-frequency drift."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "They asked River to check the legacy branch because River still had an old local clone."
      }
    ],
    "choices": [
      {
        "text": "River has Casey's old clone. I need that now.",
        "next": "J4",
        "type": "productive",
        "clue": true
      },
      {
        "text": "That sounds like J.R. and Blackwell, not you.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I7": {
    "id": "I7",
    "title": "Scene I7",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "If I wanted to threaten you, you would not need to ask."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey thought you were a spy."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey thought many true things and some convenient false ones."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I was hired to break Neuro's perimeter. I broke it. That embarrassed Alex."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "It did not make me interested in killing an engineer with a medical condition in a room full of cameras."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Cameras were tampered with."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Yes. By someone who knew which cameras were real and which were theater."
      }
    ],
    "choices": [
      {
        "text": "Who knew the difference?",
        "next": "I8",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You still had the skill to do it.",
        "next": "J5",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I8": {
    "id": "I8",
    "title": "Scene I8",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "My contract was ugly, not murderous."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Blackwell wanted leverage before acquisition. J.R. wanted proof their system could survive an audit. I wanted my invoice paid."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "And Casey?"
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey found PROJECT_BLACKBOX before my final report."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I kept a packet capture from the night they died because someone tried to make my tool look responsible."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "The log-tamper script called home to an internal host. `sec-mirror-02`."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Alex's box."
      }
    ],
    "choices": [
      {
        "text": "Send the capture. I can compare it to Casey's terminal history.",
        "next": "J6",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Blackwell hired you. That still makes them the source.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I9": {
    "id": "I9",
    "title": "Scene I9",
    "contact": "blackwell",
    "messages": [
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "You are confusing incentive with execution."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "I pressure founders. I do not poison them."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey dies. The launch continues. The acquisition closes."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey's death put police, press, and regulators within reach of my investment."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "A living Casey was a problem. A murdered Casey is a subpoena with a pulse."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Find the person who thought they could make everyone believe it was suicide."
      }
    ],
    "choices": [
      {
        "text": "Who had the confidence to stage Casey's systems?",
        "next": "I10",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You had enough money to hire someone.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I10": {
    "id": "I10",
    "title": "Scene I10",
    "contact": "blackwell",
    "messages": [
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "The board wanted the problem contained."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "J.R. wanted the sale. Sam wanted the books clean. Dmitri wanted out before blame attached to him."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "And Alex?"
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Alex wanted Casey's proof gone."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Not delayed. Gone."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "They argued during diligence because Casey found old MIT-era work inside BLACKBOX. Alex's work. Improperly commercialized, then buried."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "If Casey exposed it, Alex lost their career twice. Once for theft. Once for murder? That part I cannot prove."
      }
    ],
    "choices": [
      {
        "text": "Casey found Alex's old research inside the stolen data chain.",
        "next": "J7",
        "type": "productive",
        "clue": true
      },
      {
        "text": "This still sounds like board-level conspiracy.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I11": {
    "id": "I11",
    "title": "Scene I11",
    "contact": "jordan",
    "messages": [
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "You are assuming murder solved my problem."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "It did not. It created a bigger one."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "But the suicide staging bought you time."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "It bought someone time."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I approved a vendor I should have questioned. I let Blackwell push too hard. I wanted the sale."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "That is enough to ruin me. It is not the same as walking into Casey's server room and poisoning insulin."
      }
    ],
    "choices": [
      {
        "text": "Who knew Casey kept insulin in the server room fridge?",
        "next": "I12",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You are confessing to everything except the part that matters.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "I12": {
    "id": "I12",
    "title": "Scene I12",
    "contact": "jordan",
    "messages": [
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Casey kept insulin in the server-room mini-fridge because they lived in that room."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Lots of people knew the fridge existed."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Not everyone knew which vial was Casey's."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Alex did."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Security ran a \"medical emergency inventory\" after Casey had a low-blood-sugar incident two months ago."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "Alex wrote the incident report. Location, brand, backup vial, all of it."
      },
      {
        "speaker": "jordan",
        "label": "J.R.",
        "text": "I signed it because HR needed documentation."
      }
    ],
    "choices": [
      {
        "text": "Alex knew the insulin routine and had emergency access.",
        "next": "J3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "So everyone in leadership failed Casey.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J1": {
    "id": "J1",
    "title": "Scene J1",
    "contact": "sam",
    "messages": [
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "I sent it."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Payment to DataVault clears at 9:14 PM. Emergency admin key issued at 9:18 PM. Security mirror resync at 9:22 PM."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Casey runs `grep -r \"PROJECT_BLACKBOX\"` at 9:31 PM."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Then Alex messages me at 9:34 asking whether old compliance drafts can be \"legally purged before diligence.\""
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Alex knew Casey had found the data theft before Casey died."
      },
      {
        "speaker": "sam",
        "label": "Sam",
        "text": "Yes."
      }
    ],
    "choices": [
      {
        "text": "I need River's clone and Dmitri's packet capture.",
        "next": "K1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "This still implicates everyone who touched BLACKBOX.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J2": {
    "id": "J2",
    "title": "Scene J2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "You're not wrong that Neuro is rotten."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "J.R. approved the vendor. Blackwell forced the timeline. Sam cleaned paperwork. Dmitri played spy games. Alex owned security."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "That is the problem. Everyone had a reason to want Casey quiet."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "But only one person killed them."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Then we need execution proof. Not just motive."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey used to say motive is noise until the logs agree with it."
      }
    ],
    "choices": [
      {
        "text": "Let's rebuild the night from technical traces.",
        "next": "K1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "I think I have enough to accuse someone.",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J3": {
    "id": "J3",
    "title": "Scene J3",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "I pulled the old facilities export."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The emergency override did not just open the server-room door."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "It disabled camera retention for seven minutes under \"privacy maintenance.\""
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Alex's account?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex's account. Alex's key rotation ticket. Alex's incident report about Casey's insulin."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "That is means and opportunity."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "We still need the staging."
      }
    ],
    "choices": [
      {
        "text": "Use Casey's local clone. The deleted commit may still be there.",
        "next": "J4",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Dmitri could have spoofed Alex. Ask him again.",
        "next": "J5",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J4": {
    "id": "J4",
    "title": "Scene J4",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "I found the clone."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey kept it on an old dev laptop under a folder called `prometheus_legacy_do_not_sync`."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Is the insurance commit there?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Part of it."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The commit message says: \"BLACKBOX is not just stolen data. A.C. built the laundering adapter.\""
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "There is also a diff that maps DataVault manifests to Alex's MIT-era parser."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Casey was about to prove Alex made the stolen data usable for Neurosift."
      }
    ],
    "choices": [
      {
        "text": "That gives Alex motive. Now prove the staged messages.",
        "next": "K1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "A.C. could be Aster Compliance.",
        "next": "J2",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J5": {
    "id": "J5",
    "title": "Scene J5",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Spoofing Alex would be easy in a movie."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "In Neuro's real system, emergency admin requires a hardware challenge."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You could steal hardware."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "I could. I did not."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "The challenge response came from inside Alex's office subnet while Alex was checked into the building."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "You do not need me to be guilty for this to be ugly."
      }
    ],
    "choices": [
      {
        "text": "Send the challenge-response log.",
        "next": "J6",
        "type": "productive",
        "clue": true
      },
      {
        "text": "You are very good at sounding innocent.",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J6": {
    "id": "J6",
    "title": "Scene J6",
    "contact": "dmitri",
    "messages": [
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Packet capture attached."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "The script that altered Casey's messages did not originate from Casey's laptop."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey's machine received the scheduled-send payload at 11:02 PM."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "From `sec-mirror-02`."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Yes."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "The payload used Casey's old chat style, but the suicide note metadata says it was drafted in Neuro's compliance editor."
      },
      {
        "speaker": "dmitri",
        "label": "Dmitri",
        "text": "Casey wrote in Vim. Alex's team used the compliance editor for incident reports."
      }
    ],
    "choices": [
      {
        "text": "Alex staged the farewell messages before Casey died.",
        "next": "K2",
        "type": "productive",
        "clue": true
      },
      {
        "text": "That proves staging, but not poison.",
        "next": "K3",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "J7": {
    "id": "J7",
    "title": "Scene J7",
    "contact": "blackwell",
    "messages": [
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Casey and Alex had a private arbitration after MIT."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Alex accused Casey of burying shared research. Casey accused Alex of trying to commercialize it without consent."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "And PROJECT_BLACKBOX used Alex's adapter."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "If regulators traced BLACKBOX, Alex could not pretend to be a bystander."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "J.R. loses a sale. I lose money. Sam loses a job. Dmitri loses a contract."
      },
      {
        "speaker": "blackwell",
        "label": "Blackwell",
        "text": "Alex loses the story they built their life on."
      }
    ],
    "choices": [
      {
        "text": "Motive is personal and technical. Now lock down the method.",
        "next": "K1",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Blackwell, you still sound like you are steering me.",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "K1": {
    "id": "K1",
    "title": "Scene K1",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "Timeline board is up."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "9:31 PM: Casey searches PROJECT_BLACKBOX."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "10:58 PM: Alex's emergency override opens the server room and suppresses camera retention."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "11:02 PM: staged farewell payload hits Casey's laptop."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "11:20-ish: Casey takes insulin from the mini-fridge."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "11:47 PM: Casey dies."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "What are we missing?"
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The poison. How it got into the vial."
      }
    ],
    "choices": [
      {
        "text": "Check the medical incident report Alex wrote. It listed Casey's insulin.",
        "next": "K3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Check the staged-message payload against Alex's machine.",
        "next": "K2",
        "type": "productive",
        "clue": true
      },
      {
        "text": "We have enough. Accuse Alex now.",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "K2": {
    "id": "K2",
    "title": "Scene K2",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "I diffed the farewell message against Casey's old chats."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Some phrases are Casey. The structure is not."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The note has smart punctuation and revision markers from Neuro's compliance editor."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Alex's team used that editor."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "More than that."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The hidden document author is `achen_sec`."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "The staged suicide was drafted under Alex's security profile."
      }
    ],
    "choices": [
      {
        "text": "Now prove the poisoned insulin.",
        "next": "K3",
        "type": "productive",
        "clue": true
      },
      {
        "text": "That is enough for the final accusation.",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "K3": {
    "id": "K3",
    "title": "Scene K3",
    "contact": "river",
    "messages": [
      {
        "speaker": "river",
        "label": "River",
        "text": "The medical incident report lists Casey's insulin brand, backup vial location, and replacement schedule."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex filed it after Casey's low-blood-sugar incident."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "That tells Alex which vial to replace."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "There is more."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Sam found a facilities request from Alex for \"thermal-safe biohazard disposal\" the morning after Casey died."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "No disposal pickup was logged."
      },
      {
        "speaker": "river",
        "label": "River",
        "text": "Alex had a reason to remove a contaminated vial, but the staged scene needed one empty vial left behind."
      }
    ],
    "choices": [
      {
        "text": "Confront Alex with the full chain.",
        "next": "K4",
        "type": "productive",
        "clue": true
      },
      {
        "text": "Skip the confrontation. Make the accusation.",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  },
  "K4": {
    "id": "K4",
    "title": "Scene K4",
    "contact": "alex",
    "messages": [
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "You have been busy."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Casey found PROJECT_BLACKBOX. Casey found your adapter. Casey was about to expose you."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey was about to expose all of Neuro."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "You used the emergency override, staged the messages from `sec-mirror-02`, and knew exactly which insulin vial to poison."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "You are building a story out of logs you barely understand."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Then answer one question."
      },
      {
        "speaker": "player",
        "label": "Player",
        "text": "Why did the farewell note come from `achen_sec`?"
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "..."
      },
      {
        "speaker": "alex",
        "label": "Alex",
        "text": "Casey was going to destroy work that belonged to both of us."
      }
    ],
    "choices": [
      {
        "text": "That is not ownership. That is motive.",
        "next": "Final-Accusation",
        "type": "productive",
        "clue": true
      },
      {
        "text": "So J.R. ordered it and you cleaned up?",
        "next": "Final-Accusation",
        "type": "neutral",
        "clue": false
      }
    ]
  }
};
