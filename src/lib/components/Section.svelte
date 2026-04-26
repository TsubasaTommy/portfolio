<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    id?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    align?: 'start' | 'center';
    surface?: boolean;
    children: Snippet;
  };

  let {
    id,
    eyebrow,
    title,
    description,
    align = 'start',
    surface = false,
    children
  }: Props = $props();
</script>

<section {id} class="relative py-24 md:py-32" class:bg-surface={surface}>
  <div class="mx-auto w-full max-w-5xl px-6">
    {#if eyebrow || title || description}
      <header class="mb-12 md:mb-16" class:text-center={align === 'center'}>
        {#if eyebrow}
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        {/if}
        {#if title}
          <h2 class="text-3xl font-semibold leading-tight tracking-tightish text-ink md:text-5xl">
            {title}
          </h2>
        {/if}
        {#if description}
          <p
            class="mt-4 max-w-2xl text-base leading-7 text-ink-soft md:text-lg"
            class:mx-auto={align === 'center'}
          >
            {description}
          </p>
        {/if}
      </header>
    {/if}
    {@render children()}
  </div>
</section>
