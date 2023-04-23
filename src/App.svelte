<script lang="ts">
  import AudioController from "./components/AudioController.svelte"
  import Overlay from "./components/Overlay.svelte"
  import VideoController from "./components/VideoController.svelte"
</script>

<Overlay />

<VideoController />
<AudioController />

<div class="content bg-green-400 w-full h-full"></div>
