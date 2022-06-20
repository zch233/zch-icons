// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import Html5TwoToneSvg from 'icon-base/es/asn/Html5TwoTone';

export interface Html5TwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHtml5TwoTone: Html5TwoToneIconType = (props, context) => <Icon name='Html5TwoTone' {...{ ...props, ...context.attrs }} icon={Html5TwoToneSvg} />;

IconHtml5TwoTone.displayName = 'IconHtml5TwoTone';

export default IconHtml5TwoTone;
