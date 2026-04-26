<script lang="ts">
  import { profile } from '$lib/data/profile';
  const year = new Date().getFullYear();
</script>

<footer class="border-t border-line bg-white">
  <div
    class="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-3 px-6 py-10 text-sm text-ink-soft md:flex-row md:items-center"
  >
    <p>© {year} {profile.nameRoman}</p>
    <p class="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
      {profile.role} · {profile.company}
    </p>
  </div>
</footer>
