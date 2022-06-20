// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlaySquareTwoToneSvg from 'icon-base/es/asn/PlaySquareTwoTone';

export interface PlaySquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlaySquareTwoTone: PlaySquareTwoToneIconType = (props, context) => (
    <Icon name='PlaySquareTwoTone' {...{ ...props, ...context.attrs }} icon={PlaySquareTwoToneSvg} />
);

IconPlaySquareTwoTone.displayName = 'IconPlaySquareTwoTone';

export default IconPlaySquareTwoTone;
