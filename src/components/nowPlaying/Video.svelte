<script lang="ts">
  import { fly } from 'svelte/transition'

  import { playingVideo } from '../../context/nowPlaying'
</script>

{#if $playingVideo === null}
  <p class="inline-block" in:fly={{ y: 20 }}>Not Playing</p>
{:else}
  {#key `video-${$playingVideo.name}-${$playingVideo.author}`}
    <p class="inline-block" in:fly={{ y: 20 }}>
      <b>{$playingVideo.name}</b> by <b>{$playingVideo.author}</b>
    </p>
  {/key}
{/if}
