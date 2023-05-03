<script lang="ts">
  import { onMount } from 'svelte'
  import shuffle from 'lodash/shuffle'

  import { submissions } from '../../data/submissions'
  import { playingVideo } from '../context/nowPlaying'

  import type { Submission } from '../../@types/Submission'
  import { mediaController } from '../context/mediaController'
  import { fade } from 'svelte/transition'

  let cursor = 0
  let videoPlaylists: Submission[] = []
  let active: Submission[] = []

  let reset = () => {
    videoPlaylists = shuffle(submissions.filter(o => o.type === 'video'))
    go(0)
  }

  onMount(() => {
    reset()
    mediaController.nextVideo = next
    mediaController.playVideoFile = (fileName: string) => {
      const index = videoPlaylists.findIndex(o => o.fileName === fileName)
      if (index !== -1) go(index)
    }
  })

  $: {
    if (videoPlaylists.length !== 0) {
      console.log('current audio playlist')
      console.table(
        videoPlaylists.map(({ name, author }) => ({ name, author }))
      )
    }
  }

  const go = (index: number) => {
    cursor = index
    active = [videoPlaylists[index]]
  }

  const next = () => {
    go((cursor + 1) % videoPlaylists.length)
  }

  $: {
    playingVideo.set(videoPlaylists[cursor] || null)
  }
</script>

{#each active as submission (submission.fileName)}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    muted
    class="fixed inset-0 h-screen w-screen object-cover"
    src={`/submissions/${submission.fileName}`}
    autoplay
    on:ended={() => next()}
    transition:fade
  />
{/each}
