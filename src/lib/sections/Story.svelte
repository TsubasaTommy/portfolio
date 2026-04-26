<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import FadeIn from '$lib/components/FadeIn.svelte';

  const paragraphs = [
    {
      heading: '中学で C 言語に出会った',
      body: 'プログラミングとの最初の接点は、中学生の頃に触れた C 言語だった。低レイヤの世界の手触りに惹かれ、そこから個人開発を続けるようになった。'
    },
    {
      heading: '10年以上のコーディング歴',
      body: '学生時代から趣味として書き続け、コーディング歴自体は10年を超える。フレームワークや言語が移り変わるなかで、「何を選ぶか」を自分で考え続けた時間でもあった。'
    },
    {
      heading: 'プロエンジニアとして実績を積む',
      body: 'プロエンジニアとしては約2年。最初は一般エンジニアとして実装を担当していたが、技術提案が継続的に採用されるなかで、徐々に技術選定の主導権を任されるようになった。'
    },
    {
      heading: 'TechLead としての現在',
      body: 'いまは EustyleLaboratory の Aegis / Asgard チームで TechLead を務めている。最も得意なフレームワークは Laravel。直近では Go に最も力を入れており、軽量で読みやすく、チーム開発に効くスタックを社内に広げている。'
    }
  ];
</script>

<Section
  id="story"
  eyebrow="03 · Story"
  title="私のストーリー"
  description="エンジニアとしての歩みを、いまへ繋がる4つの段階で。"
>
  <div class="space-y-12 md:space-y-16">
    {#each paragraphs as p, i (p.heading)}
      <FadeIn delay={i * 60}>
        <div class="grid items-start gap-6 md:grid-cols-[160px_1fr]">
          <p
            class="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted md:text-sm"
          >
            0{i + 1}
          </p>
          <div>
            <h3 class="text-xl font-semibold tracking-tightish text-ink md:text-2xl">
              {p.heading}
            </h3>
            <p class="mt-3 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">{p.body}</p>
          </div>
        </div>
      </FadeIn>
    {/each}
  </div>
</Section>
