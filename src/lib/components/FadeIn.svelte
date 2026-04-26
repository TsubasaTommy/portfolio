<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    delay?: number;
    children: Snippet;
  };

  let { delay = 0, children }: Props = $props();
  let el: HTMLDivElement | undefined = $state();
  let visible = $state(false);

  onMount(() => {
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      visible = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class="fade"
  class:in={visible}
  style="transition-delay: {delay}ms"
>
  {@render children()}
</div>

<style>
  .fade {
    opacity: 0;
    transform: translateY(16px);
    transition:
      opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }
  .fade.in {
    opacity: 1;
    transform: translateY(0);
  }
</style>
