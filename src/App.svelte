<script lang="ts">
  import AudioController from './components/AudioController.svelte'
  import Overlay from './components/Overlay.svelte'
  import VideoController from './components/VideoController.svelte'

  function tryToPlay() {
    // Attempt to play all video and audio elements on the page
    document.querySelectorAll('video,audio').forEach(el => {
      try {
        ;(el as any).play()
      } catch (e) {
        // Do nothing
      }
    })
  }
</script>

<div on:dblclick={tryToPlay}>
  <Overlay />
  <VideoController />
  <AudioController />
</div>
