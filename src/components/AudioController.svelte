<script lang="ts">
  import { onMount } from 'svelte'
  import shuffle from 'lodash/shuffle'

  import { submissions } from '../../data/submissions'
  import { playingAudio } from '../context/nowPlaying'

  import type { Submission } from '../../@types/Submission'
  import { mediaController } from '../context/mediaController'

  let audioElement: HTMLAudioElement = null
  let paused = true

  let cursor = 0
  let audioPlaylists: Submission[] = []

  let reset = () => {
    audioPlaylists = shuffle(submissions.filter(o => o.type === 'audio'))
    go(0)
  }

  onMount(() => {
    reset()
    mediaController.nextAudio = next
    mediaController.playAudioFile = (fileName: string) => {
      const index = audioPlaylists.findIndex(o => o.fileName === fileName)
      if (index !== -1) go(index)
    }
  })

  $: {
    if (audioPlaylists.length !== 0) {
      console.log('current audio playlist')
      console.table(
        audioPlaylists.map(({ name, author }) => ({ name, author }))
      )
    }
  }

  const next = () => {
    go((cursor + 1) % audioPlaylists.length)
  }

  const go = (index: number) => {
    cursor = index
    const targetSubmission = audioPlaylists[index]
    audioElement.src = `/submissions/${targetSubmission.fileName}`
    audioElement.load()
    audioElement.play()
  }

  $: {
    if (paused) {
      playingAudio.set(null)
    } else {
      playingAudio.set(audioPlaylists[cursor] || null)
    }
  }

  const onEnded = () => {
    next()
  }
</script>

<audio class="hidden" bind:this={audioElement} on:ended={onEnded} bind:paused />
