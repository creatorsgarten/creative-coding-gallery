<script lang="ts">
  import { fly } from 'svelte/transition'
  import { playingAudio, playingVideo } from '../context/nowPlaying'
  import Audio from './nowPlaying/Audio.svelte'
</script>

<div class="z-50 h-full absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between items-start">
  <div class="ml-auto flex flex-col items-end space-y-8">
    <div class="flex">
      <div class="w-0 h-0 border-[40px] border-black/80 border-l-transparent border-b-transparent"></div>
      <div class="bg-black/80 flex space-x-8 py-4 pr-8 pl-2 items-center">
        <img src="/organizers/creatorsgarten.png" class="pl-2 h-12 w-auto shrink-0" alt="creatorsgarten" />
        <img src="/organizers/cleverse.png" class="h-10 w-auto shrink-0" alt="cleverse" />
      </div>
    </div>
    <div class="text-shadow text-7xl text-right text-white font-mono pr-8">
      <p>Creative</p>
      <p>coding</p>
      <p>meetup</p>
    </div>
  </div>
  <div class="bg-black/50 min-w-[33%] text-white px-16 py-8 mb-16 text-shadow text-3xl space-y-4">
    <p>
      {#if $playingVideo === null}
        Not Playing
      {:else}
        <b>{$playingVideo.name}</b> by <b>{$playingVideo.author}</b>
      {/if}
    </p>
    <Audio />
  </div>
</div>

<style>
  .text-shadow {
    text-shadow: 0px 4px 12px #000000;
  }
</style>
