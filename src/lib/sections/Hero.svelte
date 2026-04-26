<script lang="ts">
  import Holographic from '$lib/components/Holographic.svelte';
  import { profile } from '$lib/data/profile';
</script>

<section class="relative overflow-hidden">
  <Holographic />
  <div class="mx-auto w-full max-w-5xl px-6 pb-24 pt-24 md:pb-40 md:pt-32">
    <p class="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {profile.role} · {profile.company}
    </p>
    <h1
      class="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tightish text-ink md:text-7xl"
    >
      {profile.tagline}
    </h1>
    <p class="mt-8 max-w-2xl text-lg leading-8 text-ink-soft md:text-xl">
      {profile.heroSubtitle}
    </p>
    <div class="mt-10 flex flex-wrap items-center gap-3">
      <a
        href="#work"
        class="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent"
      >
        実績を見る
        <span aria-hidden="true">→</span>
      </a>
      <a
        href="#contact"
        class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:text-accent"
      >
        連絡する
      </a>
    </div>
  </div>
</section>
