<script lang="ts">
  import { base } from '$app/paths';
  import FadeIn from '$lib/components/FadeIn.svelte';
  import Aurora from '$lib/components/Aurora.svelte';
  import { profile } from '$lib/data/profile';
  import { techRationale, type TechGroup } from '$lib/data/techRationale';

  const accentClasses: Record<TechGroup['accent'], { dot: string; text: string; ring: string }> = {
    purple: {
      dot: 'bg-accent',
      text: 'text-accent',
      ring: 'ring-accent/20'
    },
    cyan: {
      dot: 'bg-accent-cyan',
      text: 'text-accent-cyan',
      ring: 'ring-accent-cyan/30'
    },
    pink: {
      dot: 'bg-accent-pink',
      text: 'text-accent-pink',
      ring: 'ring-accent-pink/30'
    },
    ink: {
      dot: 'bg-ink',
      text: 'text-ink',
      ring: 'ring-ink/20'
    }
  };

  const totalCount = techRationale.groups.reduce((acc, g) => acc + g.items.length, 0);
</script>

<svelte:head>
  <title>技術選定の理由 — {profile.nameRoman}</title>
  <meta
    name="description"
    content="{profile.nameRoman} が利用者ポータル「Asgard」で採用した技術スタックの選定理由。インフラ・バックエンド・フロントエンド・ワークフローの各レイヤごとに、対抗候補と選定の決め手を解説する。"
  />
  <meta property="og:title" content="技術選定の理由 — {profile.nameRoman}" />
  <meta
    property="og:description"
    content="Asgard で採用した技術スタックの選定理由を、対抗候補と決め手とともに解説する。"
  />
</svelte:head>

<section
  class="relative isolate flex min-h-[94vh] flex-col justify-end overflow-hidden bg-[#05030f] text-white"
>
  <Aurora />

  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(5,3,15,0)_0%,rgba(5,3,15,0.5)_60%,rgba(5,3,15,0.95)_100%)]"
  ></div>

  <div class="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
    <a
      href="{base}/#work"
      class="mb-16 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white"
    >
      <span aria-hidden="true">←</span> Back
    </a>

    <p
      class="mb-6 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-white/65"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_18px_2px_rgba(0,212,255,0.6)]"></span>
      Tech Selection — Why
    </p>

    <h1
      class="max-w-[18ch] text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-white md:text-[6.5rem]"
    >
      技術選定は、<br />
      <span
        class="bg-gradient-to-r from-[#a78bff] via-[#ff8cd0] to-[#5ee5ff] bg-clip-text text-transparent"
        >理由</span
      >がすべて。
    </h1>

    <p class="mt-10 max-w-xl text-base leading-8 text-white/75 md:text-lg md:leading-9">
      利用者ポータル「Asgard」で採用した {totalCount} の技術について、対抗候補と決め手を Layer ごとにまとめる。
    </p>

    <div class="mt-20 flex flex-wrap items-end gap-x-12 gap-y-8 md:gap-x-20">
      <div>
        <div class="text-5xl font-semibold tracking-tight text-white md:text-6xl">
          {totalCount}
        </div>
        <div class="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/55">
          Technologies
        </div>
      </div>
      <div>
        <div class="text-5xl font-semibold tracking-tight text-white md:text-6xl">
          {techRationale.groups.length}
        </div>
        <div class="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/55">
          Layers
        </div>
      </div>
      <div>
        <div class="text-3xl font-semibold tracking-tight text-white md:text-4xl">Asgard</div>
        <div class="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/55">
          Project
        </div>
      </div>
    </div>
  </div>
</section>

{#each techRationale.groups as group, gIndex (group.label)}
  {@const accent = accentClasses[group.accent]}
  <section
    class="relative py-20 md:py-28"
    class:bg-surface={gIndex % 2 === 1}
  >
    <div class="mx-auto w-full max-w-5xl px-6">
      <FadeIn>
        <header class="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div class="flex items-center gap-4">
            <span
              class="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-muted"
            >
              Layer {String(gIndex + 1).padStart(2, '0')}
            </span>
            <span class="h-px w-10 bg-line"></span>
            <span class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full {accent.dot}"></span>
              <span class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] {accent.text}">
                {group.label}
              </span>
            </span>
          </div>
          <p class="max-w-md text-sm text-ink-soft md:text-right md:text-base">{group.caption}</p>
        </header>
      </FadeIn>

      <div class="space-y-6">
        {#each group.items as item, iIndex (item.name)}
          <FadeIn delay={iIndex * 80}>
            <article
              class="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5 md:p-10"
            >
              <span
                class="pointer-events-none absolute -right-12 -top-12 font-mono text-[10rem] font-bold leading-none {accent.text} opacity-[0.06] transition-opacity group-hover:opacity-[0.1]"
                aria-hidden="true"
              >
                {String(iIndex + 1).padStart(2, '0')}
              </span>

              <div class="relative">
                <div class="flex flex-wrap items-baseline justify-between gap-3">
                  <h2
                    class="text-2xl font-semibold tracking-tightish text-ink md:text-3xl"
                  >
                    {item.name}
                  </h2>
                  {#if item.alternative}
                    <span
                      class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 font-mono text-[0.68rem] tracking-tight text-ink-muted"
                    >
                      <span class="text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted/80">
                        対抗
                      </span>
                      <span class="font-medium text-ink-soft">{item.alternative}</span>
                    </span>
                  {/if}
                </div>

                <p class="mt-5 max-w-3xl text-sm leading-7 text-ink-soft md:text-base md:leading-8">
                  {item.summary}
                </p>

                <ul class="mt-6 grid gap-3 md:grid-cols-3">
                  {#each item.highlights as h (h)}
                    <li
                      class="flex items-start gap-2 rounded-lg bg-surface px-4 py-3 text-xs leading-5 text-ink md:text-sm"
                    >
                      <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full {accent.dot}"></span>
                      <span>{h}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </article>
          </FadeIn>
        {/each}
      </div>
    </div>
  </section>
{/each}

<section class="border-t border-line py-20 md:py-28">
  <div class="mx-auto w-full max-w-5xl px-6 text-center">
    <p class="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      Next
    </p>
    <h2 class="text-3xl font-semibold tracking-tightish text-ink md:text-4xl">
      実績の全体像も合わせて見る
    </h2>
    <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-ink-soft">
      技術選定がプロジェクトの成果にどう接続したかは、Work セクションにまとめている。
    </p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a
        href="{base}/#work"
        class="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent"
      >
        実績を見る
        <span aria-hidden="true">→</span>
      </a>
      <a
        href="{base}/#contact"
        class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:text-accent"
      >
        連絡する
      </a>
    </div>
  </div>
</section>
