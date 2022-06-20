// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftCircleTwoToneSvg from 'icon-base/es/asn/LeftCircleTwoTone';

export interface LeftCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLeftCircleTwoTone: LeftCircleTwoToneIconType = (props, context) => (
    <Icon name='LeftCircleTwoTone' {...{ ...props, ...context.attrs }} icon={LeftCircleTwoToneSvg} />
);

IconLeftCircleTwoTone.displayName = 'IconLeftCircleTwoTone';

export default IconLeftCircleTwoTone;
