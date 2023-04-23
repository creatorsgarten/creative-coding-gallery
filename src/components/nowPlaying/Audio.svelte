<script lang="ts">
  import { fly } from 'svelte/transition'

  import { playingAudio } from '../../context/nowPlaying'
</script>

<div>
{#if $playingAudio === null}
  <p class="inline-block" in:fly={{ y: 20 }}>♫ Not Playing</p>
{:else}
  {#key `${$playingAudio.name}-${$playingAudio.author}`}
    <p class="inline-block" in:fly={{ y: 20 }}>♫ <b>Now Playing</b>: <b>"{$playingAudio.name}"</b> by <b>{$playingAudio.author}</b></p>
  {/key}
{/if}
</div>