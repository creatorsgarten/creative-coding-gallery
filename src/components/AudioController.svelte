<script lang="ts">
  import { onMount } from 'svelte'
  import { shuffle } from 'lodash'

  import { submissions } from '../../data/submissions'
  import { playingAudio } from '../context/nowPlaying'

  import type { Submission } from '../../@types/Submission'

  let audioElement: HTMLAudioElement = null
  let playing = false

  let cursor = 0
  let audioPlaylists: Submission[] = []

  let reset = () => {
    audioPlaylists = shuffle(submissions.filter(o => o.type === 'audio'))
    cursor = 0
  }

  onMount(() => {
    reset()
  })

  $: {
    if (audioPlaylists.length !== 0) {
      console.log('current audio playlist')
      console.table(
        audioPlaylists.map(({ name, author }) => ({ name, author }))
      )
    }
  }

  $: {
    // if not playing, then pick new audio
    if (!playing && audioElement && audioPlaylists.length > 0) {
      try {
        // randomly pick for now
        const targetSubmission = audioPlaylists[cursor]

        // put new audio into audio component
        audioElement.src = `/submissions/${targetSubmission.fileName}`

        playingAudio.set(targetSubmission)
        audioElement.play()

        playing = true

        console.log(
          `now playing video: ${targetSubmission.name} by ${targetSubmission.author}`
        )
      } catch (e) {
        console.log(e)
        // when cursor out of index, means that it ran out of playlists
        reset()
      }
    }
  }
</script>

<audio
  class="hidden"
  bind:this={audioElement}
  on:ended={() => {
    cursor++
    playing = false
  }}
/>
