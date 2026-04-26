<script lang="ts">
  import Hero from '$lib/sections/Hero.svelte';
  import About from '$lib/sections/About.svelte';
  import Work from '$lib/sections/Work.svelte';
  import Story from '$lib/sections/Story.svelte';
  import Contact from '$lib/sections/Contact.svelte';
  import { profile } from '$lib/data/profile';
</script>

<svelte:head>
  <title>{profile.nameRoman} — {profile.role}, {profile.company}</title>
  <meta
    name="description"
    content="{profile.nameRoman}（{profile.name}）のポートフォリオ。{profile.company} で TechLead として、Go を中心にバックエンド設計と技術選定を担当している。"
  />
  <meta property="og:title" content="{profile.nameRoman} — {profile.role}" />
  <meta
    property="og:description"
    content="{profile.company} で TechLead を務める {profile.nameRoman} のポートフォリオ。"
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<Hero />
<About />
<Work />
<Story />
<Contact />
