<script>
  import { MobileUtils } from '../../../../util/mobile/MobileUtils';

  import { PopupContentService } from '../../../popup/PopupContentService';
  import GeneralPurposeCard from './GeneralPurposeCard.svelte';

  export let body;
  $: json = JSON.parse(body);

  $: icon = json.icon;
  $: title = json.title;
  $: link = json.link;
  $: subtitle = json.subtitle;
  $: orientation = json.orientation;
  $: showType = json.showType;

  function onClick() {
    switch (showType) {
      case 'in-app-browser':
        if (MobileUtils.isMobile()) {
          window.open(link);
        } else {
          PopupContentService.addContent({
            src: {
              link,
              title,
            },
            type: 'iframe',
          });
        }
        break;
      case 'new-window':
        window.open(link);
        break;
    }
  }
</script>

<GeneralPurposeCard
  {icon}
  {title}
  {link}
  {subtitle}
  {orientation}
  on:click={onClick}
/>
