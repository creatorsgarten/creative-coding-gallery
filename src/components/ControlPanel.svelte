<script lang="ts">
  import { submissions } from '../../data/submissions'
  import { mediaController } from '../context/mediaController'

  let visible = true
  const formatFile = (path: string) =>
    path
      .split('/')
      .pop()
      .replace(/\.\w+$/g, '')
  const sections = [
    {
      name: 'Audio',
      play: () =>
        document.querySelectorAll('audio').forEach((e: any) => e.play()),
      pause: () =>
        document.querySelectorAll('audio').forEach((e: any) => e.pause()),
      next: () => mediaController.nextAudio(),
      items: submissions
        .filter(s => s.type === 'audio')
        .map(s => ({
          fileName: s.fileName,
          go: () => mediaController.playAudioFile(s.fileName),
        })),
    },
    {
      name: 'Video',
      play: () =>
        document.querySelectorAll('video').forEach((e: any) => e.play()),
      pause: () =>
        document.querySelectorAll('video').forEach((e: any) => e.pause()),
      next: () => mediaController.nextVideo(),
      items: submissions
        .filter(s => s.type === 'video')
        .map(s => ({
          fileName: s.fileName,
          go: () => mediaController.playVideoFile(s.fileName),
        })),
    },
  ]
</script>

{#if visible}
  <div
    class="fixed left-0 top-0 flex flex-col gap-3 bg-black/80 px-4 pb-4 pt-16 text-white"
  >
    <h1 class="font-bold opacity-50">Control panel</h1>
    <div class="flex gap-3">
      {#each sections as section}
        <div class="flex min-w-[16em] flex-col gap-1">
          <h2 class="text-sm font-medium uppercase">{section.name}</h2>
          <div class="flex gap-1">
            <button
              class="border border-white/20 bg-black/80 px-2 py-1 hover:bg-white hover:text-black"
              on:click={section.play}
            >
              Play
            </button>
            <button
              class="border border-white/20 bg-black/80 px-2 py-1 hover:bg-white hover:text-black"
              on:click={section.pause}
            >
              Pause
            </button>
            <button
              class="border border-white/20 bg-black/80 px-2 py-1 hover:bg-white hover:text-black"
              on:click={section.next}
            >
              Next
            </button>
          </div>
          <div class="flex w-[20em] flex-col">
            {#each section.items as item}
              <button
                class="nowrap overflow-hidden truncate px-2 py-0.5 text-left hover:bg-white hover:text-black"
                on:click={item.go}
              >
                {formatFile(item.fileName)}
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<button
  class="fixed left-0 top-0 p-4 text-4xl {visible
    ? 'opacity-50'
    : 'opacity-0'} hover:opacity-100"
  on:click={() => (visible = !visible)}
>
  🛠️
</button>
