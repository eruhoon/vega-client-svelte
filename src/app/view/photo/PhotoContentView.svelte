<script lang="ts">
  import type { Photo } from '../../model/photo/Photo';
  import { PhotoContentService } from '../../model/photo/PhotoContentService';

  import PhotoDetailView from './PhotoDetailView.svelte';
  import PhotoMainView from './PhotoMainView.svelte';

  let currentPhoto: Photo | null = null;
  PhotoContentService.currentPhoto.subscribe((it) => (currentPhoto = it));
</script>

{#if currentPhoto}
  <PhotoDetailView photo={currentPhoto} />
{:else}
  <PhotoMainView />
{/if}
