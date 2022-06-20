// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DislikeTwoToneSvg from 'icon-base/es/asn/DislikeTwoTone';

export interface DislikeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDislikeTwoTone: DislikeTwoToneIconType = (props, context) => (
    <Icon name='DislikeTwoTone' {...{ ...props, ...context.attrs }} icon={DislikeTwoToneSvg} />
);

IconDislikeTwoTone.displayName = 'IconDislikeTwoTone';

export default IconDislikeTwoTone;
