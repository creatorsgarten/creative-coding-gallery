<script lang="ts">
  import { fly } from 'svelte/transition'

  import { playingVideo } from '../../context/nowPlaying'
</script>

{#if $playingVideo === null}
  <p class="inline-block" in:fly={{ y: 20 }}>Not Playing</p>
{:else}
  {#key `video-${$playingVideo.name}-${$playingVideo.author}`}
    <p class="inline-block font-light" in:fly={{ y: 20 }}>
      <b class="font-bold">{$playingVideo.name}</b><br />by
      <b class="font-medium">{$playingVideo.author}</b>
    </p>
  {/key}
{/if}
