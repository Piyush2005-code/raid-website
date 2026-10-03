---
title: "Diffusion Models Explained: How DALL-E and Stable Diffusion Work"
date: "2025-02-20"
author: "RAID Team"
excerpt: "Demystifying the probabilistic framework behind generative image models — from noising schedules to classifier-free guidance."
tags: ["Generative AI", "Diffusion Models", "Computer Vision", "Research"]
---

# Diffusion Models Explained

Diffusion models have taken the generative AI world by storm. Stable Diffusion, DALL-E 2, and Midjourney all build on the same core idea — learn to reverse a gradual noising process.

## The Intuition

Imagine taking a beautiful photograph and adding Gaussian noise to it, step by step, until it becomes pure noise. A diffusion model learns to **reverse** this process — given noisy data, predict and remove the noise.

## Forward Process (Adding Noise)

The forward process gradually corrupts data over T steps:

$$q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t \mathbf{I})$$

Using the reparameterization trick, we can sample any noisy step directly:

```python
def forward_diffusion(x_0, t, noise_schedule):
    """Sample x_t from x_0 in one step."""
    alpha_bar_t = noise_schedule.alpha_bar[t]
    noise = torch.randn_like(x_0)
    x_t = torch.sqrt(alpha_bar_t) * x_0 + torch.sqrt(1 - alpha_bar_t) * noise
    return x_t, noise
```

## Reverse Process (Denoising)

A neural network (usually a U-Net) learns to predict the noise at each step:

```python
class DiffusionTrainer:
    def training_step(self, x_0):
        # Sample random timestep
        t = torch.randint(0, self.T, (batch_size,))
        
        # Add noise
        x_t, noise = forward_diffusion(x_0, t, self.schedule)
        
        # Predict noise with neural network
        noise_pred = self.unet(x_t, t)
        
        # Simple MSE loss
        loss = F.mse_loss(noise_pred, noise)
        return loss
```

## Classifier-Free Guidance

To steer generation with text prompts, modern models use **classifier-free guidance** — training the model both with and without the condition:

$$\tilde{\epsilon}_\theta(x_t, c) = \epsilon_\theta(x_t, \emptyset) + w \cdot (\epsilon_\theta(x_t, c) - \epsilon_\theta(x_t, \emptyset))$$

The guidance scale `w` controls how strongly the output adheres to the text prompt.

## Key Papers

- [DDPM (Ho et al., 2020)](https://arxiv.org/abs/2006.11239) — the foundational paper
- [Stable Diffusion (Rombach et al., 2022)](https://arxiv.org/abs/2112.10752) — latent diffusion
- [DALL-E 2 (Ramesh et al., 2022)](https://arxiv.org/abs/2204.06125) — CLIP-guided diffusion

---

*This post is part of RAID's ongoing series on understanding modern AI architectures.*
