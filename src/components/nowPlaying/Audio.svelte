<script lang="ts">
  import { fly } from 'svelte/transition'

  import { playingAudio } from '../../context/nowPlaying'
</script>

{#if $playingAudio === null}
  <p class="inline-block" in:fly={{ y: 20 }}>♫ Not Playing</p>
{:else}
  {#key `audio-${$playingAudio.name}-${$playingAudio.author}`}
    <p class="inline-block font-light" in:fly={{ y: 20 }}>
      ♫ <b class="font-bold">“{$playingAudio.name}”</b> by
      <b class="font-medium">{$playingAudio.author}</b>
    </p>
  {/key}
{/if}
