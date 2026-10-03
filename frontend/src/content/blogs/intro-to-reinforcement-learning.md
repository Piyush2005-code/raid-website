---
title: "Getting Started with Reinforcement Learning"
date: "2025-01-10"
author: "RAID Team"
excerpt: "From Markov Decision Processes to Deep Q-Networks — a practical introduction to RL for absolute beginners."
tags: ["Reinforcement Learning", "Q-Learning", "DQN", "Tutorial"]
---

# Getting Started with Reinforcement Learning

Reinforcement Learning (RL) is the branch of machine learning where an **agent** learns to make decisions by interacting with an **environment** to maximize a cumulative **reward**. It's the technology behind AlphaGo, robotics control, and recommendation engines.

## The RL Framework

Every RL problem is defined by:

| Component | Description |
|-----------|-------------|
| **State (s)** | A representation of the current situation |
| **Action (a)** | What the agent can do |
| **Reward (r)** | Feedback signal from the environment |
| **Policy (π)** | The agent's strategy: s → a |
| **Value function** | Expected cumulative reward from a state |

## Markov Decision Processes

The mathematical foundation of RL is the **Markov Decision Process (MDP)**:

- The next state depends only on the current state + action (Markov property)
- Goal: find policy π that maximizes expected discounted return:

$$G_t = r_{t+1} + \gamma r_{t+2} + \gamma^2 r_{t+3} + \cdots = \sum_{k=0}^{\infty} \gamma^k r_{t+k+1}$$

## Q-Learning

Q-learning is a model-free RL algorithm that learns the **Q-function** — the expected return from taking action *a* in state *s*:

```python
def q_learning(env, episodes=1000, alpha=0.1, gamma=0.99, epsilon=0.1):
    Q = defaultdict(lambda: np.zeros(env.action_space.n))
    
    for _ in range(episodes):
        state = env.reset()
        done = False
        
        while not done:
            # Epsilon-greedy action selection
            if np.random.random() < epsilon:
                action = env.action_space.sample()
            else:
                action = np.argmax(Q[state])
            
            next_state, reward, done, _ = env.step(action)
            
            # Bellman update
            target = reward + gamma * np.max(Q[next_state])
            Q[state][action] += alpha * (target - Q[state][action])
            
            state = next_state
    return Q
```

## Deep Q-Networks (DQN)

When states are too many to enumerate (like pixels in Atari games), we approximate Q with a neural network:

```python
import torch.nn as nn

class DQN(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, 128),
            nn.ReLU(),
            nn.Linear(128, 128),
            nn.ReLU(),
            nn.Linear(128, action_dim)
        )
    
    def forward(self, x):
        return self.net(x)
```

Key DQN innovations:
- **Experience Replay** — break correlations by sampling random past transitions
- **Target Network** — use a separate, less-frequently-updated network for stable targets

## Start Experimenting

The best way to learn RL is to code it yourself. We recommend:

- [OpenAI Gymnasium](https://gymnasium.farama.org/) for environments
- [Stable Baselines3](https://stable-baselines3.readthedocs.io/) for production-ready RL algorithms
- [Spinning Up in Deep RL](https://spinningup.openai.com/) by OpenAI

---

*Written by RAID — Realm of Artificial Intelligence and Data, IIT Jodhpur.*
