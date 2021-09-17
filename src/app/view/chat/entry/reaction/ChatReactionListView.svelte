<script lang="ts">
  import type { ChatReaction } from '../../../../model/chat/ChatReaction';
  import type { ChatReactionItemParam as Param } from './ChatReactionItemParam';
  import Item from './ChatReactionItemView.svelte';

  export let reactions: ChatReaction[];
  $: params = mergeReaction(reactions);

  function mergeReaction(reactions: ChatReaction[]): Param[] {
    const merged: Param[] = [];
    for (const entry of reactions) {
      const found = merged.find((r) => r.value === entry.value);
      if (!found) {
        merged.push({
          users: [entry.user],
          value: entry.value,
        });
      } else {
        found.users.push(entry.user);
      }
    }
    return merged;
  }
</script>

<div class="reaction">
  {#each params as param}
    <Item {param} />
  {/each}
</div>
