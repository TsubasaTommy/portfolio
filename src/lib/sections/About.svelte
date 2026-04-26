<script lang="ts">
  import { base } from '$app/paths';
  import Section from '$lib/components/Section.svelte';
  import FadeIn from '$lib/components/FadeIn.svelte';
  import { profile } from '$lib/data/profile';

  const meta = [
    { label: 'Age', value: `${profile.age}` },
    { label: 'Born', value: `${profile.birthYear}` },
    { label: 'Role', value: profile.role },
    { label: 'Company', value: profile.company, href: profile.companyUrl }
  ];
</script>

<Section
  id="about"
  eyebrow="01 · About"
  title="自己紹介"
  description="バックエンド設計と技術選定を主領域とするエンジニア。"
>
  <div class="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
    <FadeIn>
      <div
        class="mx-auto h-44 w-44 overflow-hidden rounded-full border border-line bg-surface md:mx-0 md:h-56 md:w-56"
      >
        <img
          src="{base}/img.png"
          alt={profile.nameRoman}
          width="224"
          height="224"
          class="h-full w-full object-cover"
        />
      </div>
    </FadeIn>

    <FadeIn delay={80}>
      <div class="space-y-8">
        <p class="text-base leading-8 text-ink-soft md:text-lg">{profile.about}</p>

        <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {#each meta as item (item.label)}
            <div class="bg-white p-5">
              <dt
                class="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ink-muted"
              >
                {item.label}
              </dt>
              <dd class="mt-2 text-base font-semibold text-ink">
                {#if item.href}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    class="hover:text-accent"
                  >
                    {item.value} ↗
                  </a>
                {:else}
                  {item.value}
                {/if}
              </dd>
            </div>
          {/each}
        </dl>
      </div>
    </FadeIn>
  </div>
</Section>
