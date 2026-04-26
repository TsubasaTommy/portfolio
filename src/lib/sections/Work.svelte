<script lang="ts">
  import { base } from '$app/paths';
  import Section from '$lib/components/Section.svelte';
  import FadeIn from '$lib/components/FadeIn.svelte';
  import TechBadge from '$lib/components/TechBadge.svelte';
  import { asgard } from '$lib/data/asgard';

  const stackGroups = [
    { label: 'Infra', items: asgard.stack.infra },
    { label: 'Backend', items: asgard.stack.backend },
    { label: 'Frontend', items: asgard.stack.frontend },
    { label: 'Type Sharing', items: asgard.stack.sharing },
    { label: 'Workflow', items: asgard.stack.workflow }
  ];
</script>

<Section
  id="work"
  surface
  eyebrow="02 · Work"
  title="実績"
  description="技術選定からバックエンド・フロントエンドまで主導した、利用者ポータル「Asgard」。"
>
  <FadeIn>
    <article class="rounded-2xl border border-line bg-white p-8 md:p-12">
      <header>
        <h3 class="text-2xl font-semibold tracking-tightish text-ink md:text-3xl">
          {asgard.name}
        </h3>
        <p class="mt-2 text-sm text-ink-muted">{asgard.role}</p>
      </header>

      <p class="mt-6 max-w-3xl text-base leading-7 text-ink-soft md:text-lg">
        {asgard.summary}
      </p>

      <dl class="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
        {#each asgard.scale as item (item.label)}
          <div class="bg-white p-5">
            <dt class="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              {item.label}
            </dt>
            <dd class="mt-2 text-sm font-semibold text-ink md:text-base">{item.value}</dd>
          </div>
        {/each}
      </dl>

      <div class="mt-10">
        <div class="mb-4 flex flex-wrap items-baseline justify-between gap-3">
          <p class="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Tech Stack
          </p>
          <a
            href="{base}/tech-selection/"
            class="inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-ink"
          >
            各技術の選定理由を読む <span aria-hidden="true">→</span>
          </a>
        </div>
        <div class="space-y-4">
          {#each stackGroups as group (group.label)}
            <div class="flex flex-wrap items-center gap-2">
              <span class="w-24 shrink-0 font-mono text-xs text-ink-muted">{group.label}</span>
              <div class="flex flex-wrap gap-2">
                {#each group.items as item (item)}
                  <TechBadge label={item} />
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <aside
        class="mt-12 rounded-xl border-l-4 border-accent bg-accent/5 p-6 md:p-8"
      >
        <p class="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
          Key Outcome
        </p>
        <h4 class="text-lg font-semibold tracking-tightish text-ink md:text-xl">
          {asgard.aip.title}
        </h4>
        <p class="mt-3 text-sm leading-7 text-ink-soft md:text-base">{asgard.aip.body}</p>
      </aside>
    </article>
  </FadeIn>
</Section>
