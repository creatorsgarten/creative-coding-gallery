<script lang="ts">
  import { onMount } from 'svelte'
  import shuffle from 'lodash/shuffle'

  import { submissions } from '../../data/submissions'
  import { playingVideo } from '../context/nowPlaying'

  import type { Submission } from '../../@types/Submission'

  let videoElement: HTMLVideoElement = null
  let playing = false

  let cursor = 0
  let videoPlaylists: Submission[] = []

  let reset = () => {
    videoPlaylists = shuffle(submissions.filter(o => o.type === 'video'))
    cursor = 0
  }

  onMount(() => {
    reset()
  })

  $: {
    if (videoPlaylists.length !== 0) {
      console.log('current audio playlist')
      console.table(
        videoPlaylists.map(({ name, author }) => ({ name, author }))
      )
    }
  }

  $: {
    // if not playing, then pick new audio
    if (!playing && videoElement && videoPlaylists.length > 0) {
      try {
        // randomly pick for now
        const targetSubmission = videoPlaylists[cursor]

        // put new audio into audio component
        videoElement.src = `/submissions/${targetSubmission.fileName}`

        playingVideo.set(targetSubmission)
        videoElement.play()

        playing = true

        console.log(
          `now playing video: ${targetSubmission.name} by ${targetSubmission.author}`
        )
      } catch (e) {
        // when cursor out of index, means that it ran out of playlists
        reset()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  class="h-screen w-screen object-cover"
  bind:this={videoElement}
  on:ended={() => {
    cursor++
    playing = false
  }}
/>
