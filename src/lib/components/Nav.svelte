<script lang="ts">
  import { base } from '$app/paths';

  const items = [
    { href: `${base}/#about`, label: 'About' },
    { href: `${base}/#work`, label: 'Work' },
    { href: `${base}/tech-selection/`, label: 'Tech' },
    { href: `${base}/#story`, label: 'Story' },
    { href: `${base}/#contact`, label: 'Contact' }
  ];
</script>

<header class="sticky top-0 z-40 border-b border-line/60 bg-white/75 backdrop-blur-md">
  <div class="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
    <a href="{base}/" class="font-semibold tracking-tight text-ink hover:text-accent">
      Tsubasa Yamamoto
    </a>
    <nav class="hidden gap-8 md:flex">
      {#each items as item (item.href)}
        <a
          href={item.href}
          class="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          {item.label}
        </a>
      {/each}
    </nav>
    <a
      href="{base}/#contact"
      class="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent"
    >
      Contact →
    </a>
  </div>
</header>
