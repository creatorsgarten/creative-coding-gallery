<script lang="ts">
  import Audio from './nowPlaying/Audio.svelte'
  import Video from './nowPlaying/Video.svelte'
</script>

<div
  class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 flex h-full flex-col items-start justify-between"
>
  <div class="ml-auto flex flex-col items-end space-y-8">
    <div class="flex">
      <div
        class="h-0 w-0 border-[40px] border-black/80 border-b-transparent border-l-transparent"
      />
      <div class="flex items-center space-x-8 bg-black/80 py-4 pl-2 pr-8">
        <img
          src="/organizers/creatorsgarten.png"
          class="h-12 w-auto shrink-0 pl-2"
          alt="creatorsgarten"
        />
        <img
          src="/organizers/cleverse.png"
          class="h-10 w-auto shrink-0"
          alt="cleverse"
        />
      </div>
    </div>
    <div class="text-shadow pr-8 text-right font-mono text-7xl text-white">
      <p>Creative</p>
      <p>coding</p>
      <p>meetup</p>
    </div>
  </div>
  <div
    class="text-shadow pointer-events-auto mb-16 min-w-[33%] space-y-8 bg-black/50 px-16 py-8 text-3xl text-white"
  >
    <div>
      <Video />
    </div>
    <div>
      <Audio />
    </div>
  </div>
</div>

<style>
  .text-shadow {
    text-shadow: 0px 4px 12px #000000;
  }
</style>
