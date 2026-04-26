<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import FadeIn from '$lib/components/FadeIn.svelte';
  import { profile } from '$lib/data/profile';
</script>

<Section
  id="contact"
  surface
  align="center"
  eyebrow="04 · Contact"
  title="お問い合わせ"
  description="採用相談、技術相談、設計レビューなど。気軽にご連絡ください。"
>
  <FadeIn>
    <div class="mx-auto flex max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row">
      <a
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:text-accent"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            d="M12 .5C5.73.5.7 5.54.7 11.82c0 5.02 3.24 9.27 7.74 10.78.57.1.78-.25.78-.55v-1.94c-3.15.69-3.81-1.52-3.81-1.52-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.39-1.24.71-1.53-2.51-.29-5.16-1.27-5.16-5.65 0-1.25.44-2.27 1.16-3.07-.12-.29-.5-1.45.11-3.02 0 0 .96-.31 3.13 1.17.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.17-1.48 3.13-1.17 3.13-1.17.61 1.57.23 2.73.11 3.02.72.8 1.16 1.82 1.16 3.07 0 4.4-2.66 5.36-5.18 5.64.4.35.76 1.03.76 2.09v3.1c0 .3.21.66.79.55 4.49-1.51 7.73-5.76 7.73-10.78C23.3 5.54 18.27.5 12 .5Z"
          />
        </svg>
        GitHub
      </a>
      <a
        href="mailto:{profile.links.email}"
        class="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        Email
      </a>
    </div>
    <p class="mt-10 text-center font-mono text-[0.7rem] uppercase tracking-[0.3em] text-ink-muted">
      {profile.nameRoman} · {profile.role} @ {profile.company}
    </p>
  </FadeIn>
</Section>
