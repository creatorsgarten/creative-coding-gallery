<script lang="ts">
  import { onMount } from "svelte"
  import { playingAudio } from '../context/nowPlaying'

  let count = 0

  onMount(() => {
    const intervals = setInterval(() => {
      playingAudio.set({
        name: 'audio' + count,
        author: 'riffy',
        type: 'audio',
        fileName: 'demo.mp3',
      })
      count++
    }, 2000)
    return () => {
      clearInterval(intervals)
    }
  })
</script>