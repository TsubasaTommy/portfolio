<script lang="ts">
  type Props = {
    label: string;
  };
  let { label }: Props = $props();
</script>

<span
  class="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 font-mono text-[0.72rem] font-medium tracking-tight text-ink-soft transition-colors hover:border-accent hover:text-accent"
>
  {label}
</span>
